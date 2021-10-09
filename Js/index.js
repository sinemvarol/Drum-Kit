//detecting button press

var numberOfDrumButtons = document.querySelectorAll(".drum").length; //length için

for (i = 0; i < numberOfDrumButtons; i++) { // for döngüsü her bir buttona bastığımızda alert çıkması için.

  document.querySelectorAll(".drum")[i].addEventListener("click", function() //bu da yapılacak fonksiyonumuzun başladığı yer.
    {

      var buttonInnerHtml = this.innerHTML; //eventi çağırmak için bu. this keyword'ü sayesinde aktif oluyor.

      makeSound(buttonInnerHtml);
      buttonAnimation(buttonInnerHtml);

    });


}
//detecting keyboard press
document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("Sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("Sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("Sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("Sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("Sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("Sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("Sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log(buttonInnerHtml);


  }
}

function buttonAnimation(currentKey){

var activeButton= document.querySelector("."+ currentKey)

activeButton.classList.add("pressed") // css tarafındaki pressed için yapılan efekt kısmını getiriyor.

setTimeout(function(){
  activeButton.classList.remove("pressed");
},100);  // burada da tıkladığımızda ya da klavyeden tuşladığımızda seçili tuşun efekt kısmının sabit kalmamasını sağlıyor. 100 milisecondu ifade ediyor.

}

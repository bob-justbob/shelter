const cardWrap = document.querySelector(".card-wrap");
const card = document.getElementsByClassName("card");

let counter = 0;

const leftArrow = document.querySelector("#prev-Btn");
const rightArrow = document.querySelector("#next-Btn");

const menuBtn =document.querySelector('.menu-btn')
const menuOpen = false;

menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open')
        menuOpen=  true;
    } else {
        menuBtn.classList.remove('open')
        menuOpen = false;
    }
});

leftArrow.addEventListener("click", ()=>{
    if(counter == 0) {
        counter=card.length-2
    }if(counter !== 0){
        counter--;
    }
    cardWrap.style.transform= 'translate('+(counter) *  -16.5 +'%)';
});

rightArrow.addEventListener('click',()=>{

    if(counter == card.length-3){
      counter=-1;
  }if(counter <= card.length-4){
      counter++
  }
  cardWrap.style.transform= 'translate('+(counter) *  -16.5 +'%)';
})

function btnOurFriends(e){
    window.location.hash="ourFriends";
    console.log("rame")
}


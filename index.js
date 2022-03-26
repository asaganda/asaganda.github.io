console.log('js works here');
const modals = document.querySelectorAll(".modal");
console.log(modals);
const triggers = document.querySelectorAll(".modal-trigger");
console.log(triggers);
const closeButtons = document.querySelectorAll(".close-button");
console.log(closeButtons);

// loops thru each item in triggers array and each index of modals array
triggers.forEach(function(trigger, index) {
  trigger.addEventListener("click", function(){
    modals[index].classList.toggle("show-modal");
  });
});

// loops thru each item in closeButtons array and each index of modals array
closeButtons.forEach((closeButton, index) => {
  closeButton.addEventListener("click", () => 
    (modals[index].classList.toggle("show-modal")));
});

// loops thru each item in modals array and if the event target matches
function windowOnClick(e){
  modals.forEach((modal) => {
    if (e.target === modal) {
      modal.classList.toggle("show-modal");
    }
  });
}

window.addEventListener("click", windowOnClick);

const seeMore = document.querySelectorAll(".show-info");
console.log(seeMore);

/*do same foreach loop function as above*/ 
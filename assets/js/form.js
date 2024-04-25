function toggleDarkLightMode() {
  let body = document.querySelector(`body`);
  body.classList.toggle("dark-mode");

  let top = document.querySelector(`.top`);
  top.classList.toggle("dark-mode");

  let modeBtn = document.querySelector(`#mode`);
  console.log(modeBtn);
  modeBtn.classList.toggle("dark-mode");

  let submitBtn = document.querySelector(`#submit`);
  console.log(modeBtn);
  submitBtn.classList.toggle("dark-mode");

  let left = document.querySelector(`.left`);
  left.classList.toggle("dark-mode");

  let right = document.querySelector(`.right`);
  right.classList.toggle("dark-mode");

  let userInputLabel = document.querySelector(`.user-input > label`);
  userInputLabel.classList.toggle("dark-mode");
  let userInputText = document.querySelector(`.user-input > input`);
  userInputText.classList.toggle("dark-mode");

  let titleInputLabel = document.querySelector(`.title-input > label`);
  titleInputLabel.classList.toggle("dark-mode");
  let titleInputText = document.querySelector(`.title-input > input`);
  titleInputText.classList.toggle("dark-mode");

  let contentInputLabel = document.querySelector(`.content-input > label`);
  contentInputLabel.classList.toggle("dark-mode");
  let contentInputArea = document.querySelector(`.content-input > textarea`);
  contentInputArea.classList.toggle("dark-mode");

  /*
  let mode = document.getElementById(`mode`);
  mode.classList.toggle("dark-mode");
  */

  /*
  let allInputGroup = document.querySelectorAll(`.input-group`);
  console.log(allInputGroup);
  console.log(allInputGroup[1]);

  let el = document.querySelector(`allInputGroup[1].label`);
  el.classList.toggle("dark-mode");
  */

  /*
  let allDivChildren = document.querySelector(`.input-group > *`);
  allDivChildren.classList.toggle("dark-mode");
*/
  /*
  let clearfix = document.querySelector(`.clearfix`);
  clearfix.classList.toggle("dark-mode");
  */

  /*
  let btnList = document.querySelectorAll(`div`);
  btnList.forEach(function(btn)) {
    
  }
  */
}

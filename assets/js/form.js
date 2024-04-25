function toggleDarkLightMode() {
  let body = document.querySelector(`body`);
  body.classList.toggle("dark-mode");

  let top = document.querySelector(`.top`);
  top.classList.toggle("dark-mode");

  let left = document.querySelector(`.left`);
  left.classList.toggle("dark-mode");

  let right = document.querySelector(`.right`);
  right.classList.toggle("dark-mode");

  let userLabel = document.querySelector(`#user-label`);
  userLabel.classList.toggle("dark-mode");
  let userName = document.querySelector(`#user-name`);
  userName.classList.toggle("dark-mode");

  let titleLabel = document.querySelector(`#title-label`);
  titleLabel.classList.toggle("dark-mode");
  let title = document.querySelector(`#title`);
  title.classList.toggle("dark-mode");

  let contentLabel = document.querySelector(`#content-label`);
  contentLabel.classList.toggle("dark-mode");
  let content = document.querySelector(`#content`);
  content.classList.toggle("dark-mode");

  let modeBtn = document.querySelector(`#mode`);
  modeBtn.classList.toggle("btn-dark-mode");

  let submitBtn = document.querySelector(`#submit`);
  submitBtn.classList.toggle("btn-dark-mode");

  /*
  var t = document.querySelector("textarea");
  var d = t.parentNode;
  t.addEventListener("mouseover", function () {
    d.className += " textarea_hover";
  });
  t.addEventListener("mouseout", function () {
    d.className = d.className.replace(/ textarea_hover/g, "");
  });
  */

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

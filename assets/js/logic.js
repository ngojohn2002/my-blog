const userName = document.getElementById(`user-name`);
const title = document.getElementById(`title`);
const content = document.getElementById(`content`);
const submitBtn = document.getElementById(`submit`);

function saveBlogger() {
  // Save related form data to a blog object
  const blogger = {
    userName: userName.value.trim(),
    title: title.value.trim(),
    content: content.value.trim(),
  };
  // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
  localStorage.setItem(`blogger`, JSON.stringify(blogger));
}

function renderBlogger() {
  // Use JSON.parse() to convert text to JavaScript object
  const blogger = JSON.parse(localStorage.getItem(`blogger`));
  // Check if data is returned, if not exit out of the function
  if (blogger !== null) {
    ///////
    //document.getElementById
  }
}

submitBtn.addEventListener(`click`, function(event){
    event.preventDefault;
    saveBlogger();
    renderBlogger();
});

// The init() function fires when the page is loaded
function init() {
  // When the init function is executed, the code inside renderBlogger function will also execute
  renderBlogger();
}

init();


/* 
let nameEl = document.querySelector(`#user-name`);
let nameBackgroundColor = nameEl.style.backgroundColor;
let titleEl = document.querySelector(`#title`);
let titleBackgroundColor = titleEl.style.backgroundColor;
let txtAreaEl = document.querySelector(`#content`);
let txtAreaBackgroundColor = txtAreaEl.style.backgroundColor;

nameEl.addEventListener("mouseover", function () {
  if (nameBackgroundColor == `black`) {
    nameEl.style.backgroundColor = `white`;
  } else {
    nameEl.style.backgroundColor = `black`;
  }
});

nameEl.addEventListener("mouseout", function () {
  if (nameBackgroundColor == `black`) {
    nameEl.style.backgroundColor = `white`;
  } else {
    nameEl.style.backgroundColor = `black`;
  }
}); 
*/

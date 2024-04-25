const userNameInput = document.getElementById(`user-name`);
const titleInput = document.getElementById(`title`);
const contentInput = document.getElementById(`content`);
const submitBtn = document.getElementById(`submit`);

const bloggers = [];

function saveBloggers() {
  // Validate inputs and prompt user to complete form
  if (userNameInput === "" || titleInput === "" || contentInput === "") {
    alert(`Please complete the form.`);
    return;
  }

  // Save related form data to a blog object
  const blogger = {
    userName: userNameInput.value.trim(),
    title: titleInput.value.trim(),
    content: contentInput.value.trim(),
  };

  // Add new blogger object to bloggers array
  bloggers.push(blogger);
  console.log(bloggers);
  // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
  localStorage.setItem(`bloggers`, JSON.stringify(bloggers));
}

function renderBlogger() {
  // Check if data is returned, if not exit out of the function
  if (bloggers !== null) {
    // Use JSON.parse() to convert text to JavaScript object
    //bloggers = JSON.parse(localStorage.getItem(`bloggers`));
    
    
  }
}

submitBtn.addEventListener(`click`, function (event) {
  event.preventDefault();

  saveBloggers();
  //renderBlogger();
});

// The init() function fires when the page is loaded
function init() {
  //saveBloggers();

  // When the init function is executed, the code inside renderBlogger function will also execute
  //renderBlogger();
}

init();
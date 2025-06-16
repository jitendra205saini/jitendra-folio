const modeImage = document.querySelector('.icon-mode');
const archiveImage = document.querySelector('.icon-archive');
const aboutImage = document.querySelector('.icon-about');
const thoughtsImage = document.querySelector('.icon-thoughts');
const emailImage = document.querySelector('.icon-email');
const workImage = document.querySelector('.icon-work');

const body = document.body;
let isDark = true;

modeImage.addEventListener('click', () => {
  if (isDark) {
    // Light mode ON
    modeImage.src = "image/lightmode.png";
    archiveImage.src = "image/lightarchive.png";
    aboutImage.src = "image/lightabout.png";
    thoughtsImage.src = "image/lightthoughts.png";   
    emailImage.src = "image/lightemail.png";
    workImage.src = "image/lightwork.png";
    body.classList.add("light-mode");
  } else {
    // Dark mode ON
    modeImage.src = "image/darkmode.png";
    archiveImage.src = "image/archive.png";
    aboutImage.src = "image/about.png";
    thoughtsImage.src = "image/thoughts.png";
    emailImage.src = "image/email.png";
    workImage.src = "image/work.png";
    body.classList.remove("light-mode");
  }

  isDark = !isDark;
});

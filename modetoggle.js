const modeImage = document.querySelector('.icon-mode');
const archiveImage = document.querySelector('.icon-archive');
const aboutImage = document.querySelector('.icon-about');
const thoughtsImage = document.querySelector('.icon-thoughts');
const emailImage = document.querySelector('.icon-email');
const workImage = document.querySelector('.icon-work');
const photoImage = document.querySelector('.profile-photo');
const githubImage = document.querySelector('.icon-github');

const body = document.body;

// isDark ko global bana rahe hain
window.isDark = true;

modeImage.addEventListener('click', () => {
  if (window.isDark) {
    // Light mode ON
    modeImage.src = "image/lightmode.png";
    archiveImage.src = "image/lightarchive.png";
    aboutImage.src = "image/lightabout.png";
    thoughtsImage.src = "image/lightthoughts.png";   
    workImage.src = "image/lightwork.png";
    photoImage.src = "image/lightjitendra.png";
    githubImage.src = "image/lightgithubsymbol.png";
    body.classList.add("light-mode");
  
  } else {
    // Dark mode ON
    modeImage.src = "image/darkmode.png";
    archiveImage.src = "image/archive.png";
    aboutImage.src = "image/about.png";
    thoughtsImage.src = "image/thoughts.png";
    workImage.src = "image/work.png";
    photoImage.src = "image/jitendra.png";
    githubImage.src = "image/githubsymbol.png";
    body.classList.remove("light-mode");
  }

  // Update the global variable
  window.isDark = !window.isDark;
});

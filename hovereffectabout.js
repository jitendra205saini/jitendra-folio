document.addEventListener("DOMContentLoaded", () => {

const modeImage = document.querySelector('.icon-mode');
const archiveImage = document.querySelector('.icon-archive');
const aboutImage = document.querySelector('.icon-about');
const thoughtsImage = document.querySelector('.icon-thoughts');
const workImage = document.querySelector('.icon-work');
const photoImage = document.querySelector('.profile-photo');
const githubImage = document.querySelector('.icon-github');

  modeImage.addEventListener('mouseover', () => {
    modeImage.src = "image/whitemode.png"; 
  });

  archiveImage.addEventListener('mouseover', () => {
    archiveImage.src = "image/whitearchive.png"; 
  });

  aboutImage.addEventListener('mouseover', () => {
    aboutImage.src = "image/whiteabout.png"; 
  });

  thoughtsImage.addEventListener('mouseover', () => {
    thoughtsImage.src = "image/whitethoughts.png"; 
  });

  workImage.addEventListener('mouseover', () => {
    workImage.src = "image/whitework.png"; 
  });

  aboutImage.addEventListener('mouseover', () => {
    aboutImage.src = "image/whiteabout.png";
  });

  photoImage.addEventListener('mouseover', () => {
    photoImage.src = "image/whitejitendra.png"; 
  });

  githubImage.addEventListener('mouseover', () => {     
    githubImage.src = "image/whitegithubsymbol.png"; 
  });


  modeImage.addEventListener('mouseout', () => {
    if (window.isDark) {
      modeImage.src = "image/darkmode.png";
    } else {
      modeImage.src = "image/lightmode.png";
    }
  });

  archiveImage.addEventListener('mouseout', () => {
    if (window.isDark) {
      archiveImage.src = "image/archive.png";
    } else {
      archiveImage.src = "image/lightarchive.png";
    }
  });

  aboutImage.addEventListener('mouseout', () => {
    if (window.isDark) {
      aboutImage.src = "image/about.png";
    } else {
      aboutImage.src = "image/lightabout.png";
    }
  });


  thoughtsImage.addEventListener('mouseout', () => {    
    if (window.isDark) {
      thoughtsImage.src = "image/thoughts.png";
    } else {
      thoughtsImage.src = "image/lightthoughts.png";
    }
  });


  workImage.addEventListener('mouseout', () => {
    if (window.isDark) {
      workImage.src = "image/work.png";
    } else {
      workImage.src = "image/lightwork.png";
    }
  });

  aboutImage.addEventListener('mouseout', () => {
    if (window.isDark) {
      aboutImage.src = "image/about.png";
    } else {
      aboutImage.src = "image/lightabout.png";
    }
  });

  photoImage.addEventListener('mouseout', () => {
    if (window.isDark) {
      photoImage.src = "image/jitendra.png";
    } else {
      photoImage.src = "image/lightjitendra.png";
    }
  });

    githubImage.addEventListener('mouseout', () => {
    if (window.isDark) {
      githubImage.src = "image/githubsymbol.png";
    } else {
      githubImage.src = "image/lightgithubsymbol.png";
    }
  });

});

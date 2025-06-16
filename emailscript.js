document.getElementById("sendBtn").addEventListener("click", function (e) {
  e.preventDefault(); // Multiple tab open hone se rokta hai

  const gmailUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=jitendra205saini@gmail.com";
  window.open(gmailUrl, "_blank");
});

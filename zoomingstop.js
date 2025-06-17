// Ctrl ke sath zoom keys ( +, -, =, 0 ) block
  window.addEventListener("keydown", function (e) {
    if ((e.ctrlKey || e.metaKey) && (e.key === '+' || e.key === '=' || e.key === '-' )) {
      e.preventDefault();
      console.log("🔒 Zoom keys blocked");
    }
  });




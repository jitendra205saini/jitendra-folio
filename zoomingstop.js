// Ctrl ke sath zoom keys ( +, -, =, 0 ) block
  window.addEventListener("keydown", function (e) {
    if ((e.ctrlKey || e.metaKey) && (e.key === '+' || e.key === '=' || e.key === '-' || e.key === '0')) {
      e.preventDefault();
      console.log("🔒 Zoom keys blocked");
    }
  });

  // Ctrl + mouse wheel zoom block
  window.addEventListener("wheel", function (e) {
    if (e.ctrlKey) {
      e.preventDefault();
      console.log("🔒 Ctrl+Scroll zoom blocked");
    }
  }, { passive: false });

  // Mobile pinch zoom block
  ['gesturestart', 'gesturechange', 'gestureend'].forEach(function(evt) {
    document.addEventListener(evt, function(e) {
      e.preventDefault();
    });
  });


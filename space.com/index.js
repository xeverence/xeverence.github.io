document.onload(
  document.getElementById("victim").addEventListener("click", () => {
    setTimeout(function () {
      document.getElementById("input-1").focus();
    }, 100);
  }),

  document.getElementById("victim2").addEventListener("click", () => {
    setTimeout(function () {
      document.getElementById("input-2").focus();
    }, 100);
  })
);

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
  }),
  
);

function changeTogglerIcon() {
  const toggler =  document.getElementById('resources-toggler');

  if ((toggler.src).includes('expand_less')) {
    toggler.src = "./icons/expand_more.svg";
  }

  else if ((toggler.src).includes('expand_more')) {
    toggler.src = "./icons/expand_less.svg";
  }
 
}

function changeTogglerIcon2() {
  const toggler2 =  document.getElementById('resources-toggler2');

  if ((toggler2.src).includes('expand_less')) {
    toggler2.src = "./icons/expand_more.svg";
  }

  else if ((toggler2.src).includes('expand_more')) {
    toggler2.src = "./icons/expand_less.svg";
  }
 
}
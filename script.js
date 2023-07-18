function openNav() {
    document.getElementById("navLinks").style.width = "450px";
    document.getElementById("main").style.marginLeft = "450px";
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("navLinks").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
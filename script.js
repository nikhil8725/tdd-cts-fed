var myIndex = 0;
carousel();


function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 8000); // Change image every 8 seconds
    isVisible();
}

function isVisible() {
    var orangeSlide = document.getElementById("oragneSlide");
    if ( window.getComputedStyle(orangeSlide).display != "none") {
        //document.getElementById("orangeImageBox").setAttribute("class", "zoom-in");
    }
  }
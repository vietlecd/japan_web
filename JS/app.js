var manuBtn = document.getElementById("manuBtn");
var nav_links = document.getElementsByClassName("nav_links");
var manu = document.getElementById("manu");

manuBtn.onclick = function() {
    if (nav_links.style.right == "-250") {
        nav_links.style.right == "0";
    }
    else {
        nav_links.style.right == "-250";
    }
}
myDetails = document.querySelectorAll("h3");
for (i=0;i<myDetails.length;i++) {
    myDetails[i].onclick = function(e) {
        e.preventDefault();
        this.classList.toggle("show");
    }
}
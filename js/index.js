function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

jQuery(document.links) .filter(function() { return this.hostname != window.location.hostname; }) .attr('target', '_blank');
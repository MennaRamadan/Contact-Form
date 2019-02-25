function toggleDropDown(){
    var navbarToggle = document.getElementById('topnav-toggle');
    if(navbarToggle.className === "topnav"){
        navbarToggle.className += ' responsive';
    }
    else{
        navbarToggle.className = 'topnav';
    }
}
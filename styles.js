function resmobile(x) {
    if (x.matches) { 
        link.setAttribute('href', 'files/SJeon_Resume.pdf');
    }
  }

  


var x = window.matchMedia("(max-width: 900px)")         //to change width
var link = document.getElementById('res');


resmobile(x)
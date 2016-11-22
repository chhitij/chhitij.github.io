(function(){
  
  var loadComponents = function() {
    
    var componentNodes = document.getElementById('components').children;
    var components = [];

    for (var i = 0; i < componentNodes.length; i++) {
      components[i] = componentNodes[i].nodeName.toLowerCase();
    }

    var loadComponent = function(component) {
      var xhttp;
      if (window.XMLHttpRequest) {
        // code for modern browsers
        xhttp = new XMLHttpRequest();
        } else {
        // code for IE6, IE5
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
      }
      xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
          var componentElements = document.querySelectorAll(component);
          for (var i = 0; i < componentElements.length; i++) {
            componentElements[i].innerHTML = xhttp.responseText;
          }
        }
      };
      xhttp.open("GET", "components/" + component + ".html", true);
      xhttp.send();
    };

    // load all the components
    components.forEach(function (component) {
      loadComponent(component);
    });

  };

  window.addEventListener('load', loadComponents);

})();

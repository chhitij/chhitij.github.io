(function () {

  var fillStarRating = function() {
    var starHtml = {
      'full': '<i class="glyphicon glyphicon-star"></i>',
      'empty': '<i class="glyphicon glyphicon-star-empty"></i>'
    };

    var rating, html;
    
    var starNodes = document.querySelectorAll('[star-rating]');
    
    for (var i = 0; i < starNodes.length; i++) {
      rating = Number(starNodes[i].attributes['star-rating'].value || 0);
      html = starNodes[i].innerHTML;
      for (var j = 0; j < rating; j++) {
        html += starHtml.full;
      }
      for (j; j < 5; j++) {
        html += starHtml.empty;
      }
      starNodes[i].innerHTML = html;
    }
  
  };

  // As Sidebar is loaded via ajax, star-rating will not be present initially
  // listen to top node attachment to sidebar and call fillStarRating.

  // select the target node
  var target = document.getElementsByTagName('sidebar')[0];
  
  // create an observer instance
  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      fillStarRating();
      observer.disconnect();
    });    
  });
  
  // configuration of the observer:
  var config = { childList: true };
  
  // pass in the target node, as well as the observer options
  observer.observe(target, config);

})();

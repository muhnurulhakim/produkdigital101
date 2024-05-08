document.addEventListener("DOMContentLoaded", function() {
  var lazyloadImages = document.querySelectorAll("img.lazyload");

  if ("IntersectionObserver" in window) {
    var lazyloadObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var lazyloadImage = entry.target;
          lazyloadImage.src = lazyloadImage.dataset.src;
          lazyloadImage.classList.remove("lazyload");
          lazyloadObserver.unobserve(lazyloadImage);
        }
      });
    });

    lazyloadImages.forEach(function(lazyloadImage) {
      lazyloadObserver.observe(lazyloadImage);
    });
  } else {
    // Fallback for browsers that don't support IntersectionObserver
    lazyloadImages.forEach(function(lazyloadImage) {
      lazyloadImage.src = lazyloadImage.dataset.src;
      lazyloadImage.classList.remove("lazyload");
    });
  }
});

function darkenHeaderOnScroll(){
  //Add scroll behaviour
let bannerContainer = document.querySelector('.banner-container')

let headerElement = document.querySelector('header')

// Get the offset position of the navbar
let bannerContainerOffset = bannerContainer.offsetTop;

// When the user scrolls the page, execute scrollHandler
window.onscroll = function() {scrollHandler()};

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function scrollHandler() {
  if (window.pageYOffset > bannerContainerOffset) {
    headerElement.classList.add("solid");
  } else {
    headerElement.classList.remove("solid");
  }
}

}
darkenHeaderOnScroll();
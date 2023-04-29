$(document).ready(function() {
  var $galleryItems = $('.js--gal_item');
  var $modal = $('.js--modal');
  var $modalContent = $('.js--modal__content img');
  var currentIndex = -1;

  function openModal(index) {
    currentIndex = index;
    $modal.addClass('active');
    $modalContent.attr('src', $galleryItems.eq(currentIndex).find('img').attr('src'));
  }

  function closeModal() {
    $modal.removeClass('active');
    currentIndex = -1;
  }

  function changeImage(delta) {
    currentIndex += delta;
    if (currentIndex < 0) {
      currentIndex = $galleryItems.length - 1;
    } else if (currentIndex >= $galleryItems.length) {
      currentIndex = 0;
    }
    $modalContent.attr('src', $galleryItems.eq(currentIndex).find('img').attr('src'));
  }

  $galleryItems.on('click', function() {
    var index = $galleryItems.index(this);
    openModal(index);
  });

  $('.js--modal__close').on('click', function() {
    closeModal();
  });

  $('.js--modal__prev').on('click', function() {
    changeImage(-1);
  });

  $('.js--modal__next').on('click', function() {
    changeImage(1);
  });

  $(document).keydown(function(event) {
    switch(event.which) {
      case 37: // left arrow key
        changeImage(-1);
        break;
      case 39: // right arrow key
        changeImage(1);
        break;
      case 27: // escape key
        closeModal();
        break;
      default:
        return; // exit this handler for other keys
    }
    event.preventDefault(); // prevent the default action (scroll / move caret)
  });
});

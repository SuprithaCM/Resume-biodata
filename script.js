$(document.body).ready(function () {
  
  // 1. Single Page Navigation Logic
  function navigateToPage(pageId) {
    // Hide all pages
    $('.page-section').removeClass('active');
    
    // Show target page
    $('#' + pageId).addClass('active');

    // Update Nav bar links
    $('.nav-link').removeClass('active');
    $('.nav-link[data-page="' + pageId + '"]').addClass('active');

    // Smooth scroll to top
    $('html, body').animate({ scrollTop: 0 }, 300);

    // Close mobile navigation drawer if open
    $('.nav-menu').removeClass('active');
  }

  // Handle nav clicks
  $(document).on('click', '.nav-link', function (e) {
    e.preventDefault();
    var targetPage = $(this).attr('data-page');
    if (targetPage) {
      navigateToPage(targetPage);
    }
  });

  // 2. Mobile Menu Toggle
  $('.mobile-toggle').on('click', function () {
    $('.nav-menu').toggleClass('active');
  });

  // 3. Profile Image Upload Handler
  $('#photo-upload').on('change', function (event) {
    var file = event.target.files[0];
    if (file) {
      var reader = new FileReader();
      reader.onload = function (e) {
        $('#profile-img').attr('src', e.target.result);
      };
      reader.readAsDataURL(file);
    }
  });

  // 4. Print / PDF Generation for Resume
  $('#print-resume').on('click', function () {
    window.print();
  });

  // Default initial load state
  navigateToPage('home');
});
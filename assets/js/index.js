
// hero slider

var HeroSlider = $('#owlHero');

HeroSlider.owlCarousel({
    items:1,
    autoplay:true,
    lazyLoad:true,
    loop:true,
    margin: 0,
    nav: true,
    dots: true,
    responsiveRefreshRate: 10
});


  // feature slider

  var featureSlider = $('#feature-slider');

  featureSlider.owlCarousel({
    items:4,
    autoplay:true,
    lazyLoad:true,
    loop:true,
    margin: 20,
    nav: true,
    dots: true,
    responsiveRefreshRate: 10,
    navText: ["<i class='fa-solid fa-angle-left'></i>","<i class='fa-solid fa-angle-right'></i>"],
    responsive : {
    
      0 : {
        items:2,
      },

      768 : {
        items:3,
      },

      991 : {
        items:4,
      }
  }
});

  // testimonial slider

  var testimonialSlider = $('#testimonial-slider');

  testimonialSlider.owlCarousel({
    items:1,
    autoplay:false,
    lazyLoad:true,
    loop:true,
    margin: 20,
    nav: true,
    dots: true,
    responsiveRefreshRate: 10,
   
});


//   navbar class adding 

$(document).ready(function(){
 
  $(window).scroll(function() {

    var scroll = $(window).scrollTop();


    if (scroll >= 80) {
      $(".header").addClass("headerBg");
    }
    
    else if (scroll < 80) {
      $(".header").removeClass("headerBg");
    }
  });
});


// active list class onClick for menu

if (window.innerWidth < 768) {
  const navItems = document.querySelectorAll('.nav-item.level1');

  function handleItemClick() {
    if (this.id === 'menu1') return;

    document.querySelectorAll('.nav-item.level1').forEach(item => {
      item.classList.remove('active-list');
    });

    this.classList.add('active-list');
  }

  navItems.forEach(item => {
    item.addEventListener('click', handleItemClick);
  });
}


// back btn menu for menu

$(document).ready(function() {
  $(document).on('click', '.back-menu-mobile', function() {
      $(this).closest('.nav-item').removeClass('active-list');
  });
});


// adding class on hover and mouse leave for menu

$(document).ready(function() {
  let submenuTimeout;

  $('.nav-link').mouseenter(function() {
      clearTimeout(submenuTimeout);
      $('.submenu').removeClass('show-submenu'); // Hide all submenus

      const submenu = $(this).next('.submenu-wrapper').find('.submenu');
      submenu.addClass('show-submenu');
  });

  $('.nav-item').mouseleave(function() {
      submenuTimeout = setTimeout(function() {
          $('.submenu').removeClass('show-submenu');
      }, 300);
  });

  $('.submenu').mouseenter(function() {
      clearTimeout(submenuTimeout);
  });

  $('.submenu').mouseleave(function() {
      submenuTimeout = setTimeout(function() {
          $('.submenu').removeClass('show-submenu');
      }, 300);
  });
});




// INITIALIZE AOS
AOS.init();
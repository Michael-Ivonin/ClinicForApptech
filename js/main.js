/**
 * Created by Mike on 29.05.2017.
 */

$(document).ready(function() {
  $('#benefits__owl-carousel').owlCarousel({
    nav: false,
    navText: ['', ''],
    dots: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 1
      },
      768: {
        items: 3,
        margin: 54
      },
      992: {
        items: 4,
        margin: 36
      },
      1200: {
        items: 5,
        margin: 92
      }
    }
  });

  $('#about-clinic__owl-carousel').owlCarousel({
    nav: true,
    navText: ['', ''],
    dots: false,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 1
      },
      768: {
        items: 1
      },
      992: {
        items: 1
      },
      1200: {
        items: 1
      }
    }
  });

  $('#experts__owl-carousel').owlCarousel({
    nav: true,
    navText: ['', ''],
    dots: false,
    loop: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 1
      },
      768: {
        items: 3,
        margin: 54
      },
      992: {
        items: 4,
        margin: 36
      },
      1200: {
        items: 5,
        margin: 28
      }
    }
  });

  $('#services-modal__owl-carousel').owlCarousel({
    nav: false,
    navText: ['', ''],
    dots: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 1
      },
      768: {
        items: 3,
        margin: 54
      },
      992: {
        items: 3,
        margin: 36

      },
      1200: {
        items: 3,
        margin: 13
      }
    }
  });


  var map = new GMaps({
   div: '#map',
   zoom: 16,
   //lat: 54.966481,
   //lng: 73.393569,
   lat: 54.966366,
   lng: 73.381755,
   scrollwheel: false
   });

  var marker = map.addMarker({
   lat: 54.966366,
   lng: 73.381755,
   title: 'проспект Карла Маркса, 18 кopпyc 28'
   });

  var contentString = '<p class="map__infoWindow-heading">Центральная Клиническая Больница</p>'+
      '<p class="map__infoWindow-address">проспект Карла Маркса, 18 кopпyc 28</p>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });


  $('.services-modal__table-checkbox').click(function() {
    var outputValue = +($('.services-modal__total-output').text());
    var checkboxValue = +($(this).closest('.services-modal__table-service-price').text());

    if (this.checked) {
      $(this).closest('.services-modal__table-main-row').find(
        '.services-modal__table-main-cell_1, .services-modal__table-main-cell_2'
      ).css(
        'background', 'rgb(232, 233, 233)'
      );
      $('.services-modal__total-output').text(outputValue + checkboxValue);
    } else {
      $(this).closest('.services-modal__table-main-row').find(
        '.services-modal__table-main-cell_1, .services-modal__table-main-cell_2'
      ).css(
        'background', 'inherit'
      );
      $('.services-modal__total-output').text(outputValue - checkboxValue);
    }
  });


  $('.contacts__callback-input-phone, .header-modal__callback-input-phone, .services-modal__callback-input-phone,' +
    '.feedback-modal-1__callback-input-phone, .feedback-modal-2__callback-input-phone').mask('+7 (999) 999-9999');


  $('.menu__list-item-link, .footer__up').click(function(e) {
    e.preventDefault();

    var target = $(this.hash);
    $('html, body').stop().animate({
      'scrollTop': target.offset().top
    }, 1000);
  });
  
  
  $('.navbar-toggle').click(function() {
    if ($('.header__presentation').is(':visible')) {
      $('.header__presentation').hide();
    } else {
      $('.header__presentation').show();
    }
  });


  $('._mobile-symbol').click(function() {
    $('._mobile-symbol').hide();
    $(this).next().show();
  });

  $('.services__group-close').click(function() {
    $('._mobile-group').hide();
    $('._mobile-symbol').show();
  });


  $('.blog__subscription').submit(function() {
    $('.blog__subscription-button').hide();
    $('.blog__subscription-text-done').show();
  });

  $('.services-modal__callback').submit(function() {
    $('.services-modal__text, .services-modal__callback-text, .services-modal__callback-input-name, ' +
      '.services-modal__callback-input-phone, .services-modal__callback-button').hide();
    $('.services-modal__text-done').show();
  });
});
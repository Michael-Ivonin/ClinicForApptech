/**
 * Created by Mike on 29.05.2017.
 */

$(document).ready(function() {
  $('#owl-carousel_1').owlCarousel({
    navText: ['', ''],
    dots: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      480: {
        items: 1,
        nav: false
      },
      768: {
        items: 3,
        margin: 54,
        nav: false
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

  $('#owl-carousel_2').owlCarousel({
    nav: true,
    navText: ['', ''],
    dots: false,
    loop: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      480: {
        items: 1,
        nav: false
      },
      768: {
        items: 1,
        nav: false
      },
      992: {
        items: 1
      },
      1200: {
        items: 1
      }
    }
  });

  $('#owl-carousel_modal').owlCarousel({
    navText: ['', ''],
    dots: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      480: {
        items: 1,
        nav: false
      },
      768: {
        items: 3,
        margin: 54,
        nav: false
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

  $('#owl-carousel_3').owlCarousel({
    nav: true,
    navText: ['', ''],
    dots: false,
    loop: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      480: {
        items: 1,
        nav: false
      },
      768: {
        items: 3,
        margin: 54,
        nav: false
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
});
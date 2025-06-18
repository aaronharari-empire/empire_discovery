// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require jquery3
//= require activestorage
//= require_tree .

$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000
  });
});

function initMap() {
  var newYork = { lat: 40.746677, lng: -73.984269 };
  var lexington = { lat: 34.006055, lng: -81.244580 };
  var austin = { lat: 30.316941, lng: -97.917859 };
  var philadelphia = { lat: 39.951020, lng: -75.145773 };
  var boston = { lat: 42.359566, lng: -71.056609 };
  var miami = { lat: 25.962590, lng: -80.127538 };
  var whiteplains = { lat: 41.050285, lng: -73.771214 };
  var greenwich = { lat: 41.018137, lng: -73.645219 };
  var meriland = { lat: 38.904406, lng: -76.849974 };

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: lexington
  });

  var marker = new google.maps.Marker({
    position: newYork,
    map: map,
    title: 'New York City',
    icon: {
      url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
    }
  });

  var marker = new google.maps.Marker({
    position: lexington,
    map: map,
    title: 'Lexington',
    icon: {
      url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
    }
  });

  var marker = new google.maps.Marker({
    position: austin,
    map: map,
    title: 'Austin',
    icon: {
      url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
    }
  });

  var marker = new google.maps.Marker({
    position: philadelphia,
    map: map,
    title: 'Philadelphia',
    icon: {
      url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
    }
  });

  var marker = new google.maps.Marker({
    position: boston,
    map: map,
    title: 'Boston',
    icon: {
      url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
    }
  });


  var marker = new google.maps.Marker({
    position: whiteplains,
    map: map,
    title: 'White Plains',
    icon: {
      url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
    }
  });

  var marker = new google.maps.Marker({
    position: miami,
    map: map,
    title: 'Miami',
    icon: {
      url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
    }
  });

  var marker = new google.maps.Marker({
    position: meriland,
    map: map,
    title: 'Washington D.C.',
    icon: {
      url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
    }
  });

  var marker = new google.maps.Marker({
    position: greenwich,
    map: map,
    title: 'Greenwich',
    icon: {
      url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
    }
  });
}

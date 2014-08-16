$(function() {
  var myLatlng = new google.maps.LatLng(52.371073,4.889383),
      centerLatlng = new google.maps.LatLng(52.3765,4.8893),
      mapOptions = {
        zoom: 15,
        center: centerLatlng,
        disableDefaultUI: true,
        // disableDoubleClickZoom: true,
        scrollwheel: false,
        // zoomControl: true,
        draggable: false,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'MAP']
        },
        mapTypeId: 'MAP',
      },
      featureOpts = [
        {
          stylers: [
            // { hue: '#f2f3f4' },
            { gamma: 0.65 },
            { saturation: -20 },
            { weight: 0.3 },
            { lightness: 0 }
          ]
        },
        {
          featureType: 'water',
          stylers: [
            { color: '#92a0a9' }
          ]
        },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [
            { lightness: 90 },
            { visibility: "on" }
          ]
        },
        {
          featureType: "transit",
          stylers: [
            { visibility: "off" }
          ]
        },
        {
          featureType: "poi",
          elementType: "labels",
          stylers: [
            { visibility: "on" }
          ]
        },
        {
          featureType: "road",
          elementType: "labels",
          stylers: [
            { visibility: "off" }
          ]
        }
      ],
      map = new google.maps.Map(document.getElementById('contact-map'), mapOptions);
      styledMapOptions = {
        name: 'Custom Style'
      },
      customMapStyle = new google.maps.StyledMapType( featureOpts, styledMapOptions),
      marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'Studytube HQ',
        animation: google.maps.Animation.DROP
      });

  map.mapTypes.set('MAP', customMapStyle );
});

/////////  work sample and mouseenter
$( document ).ready(function() {
  //console.log( works );
  for (var i = 0; i < works.length; ++i) {
    $("#work").append("\
      <ul class='cbp-rfgrid'>\
        <li><a data-toggle='modal' data-target='#"+ works[i].title +"'>\
          <img class='' src='"+ works[i].pic +"'>\
          <div class='figcaption'><div><h4>" + works[i].title +"</h4></div></div>\
        </a></li>\
      </ul>\
        ");
  }
});

/////////  work sample and mouseenter

//////////////  javascript map
var marker;

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: {lat: 43.5727068, lng: -79.6027248},
    // styling map
 /*
        styles: [
                    {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
                    {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
                    {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
                    {
                      featureType: 'administrative.locality',
                      elementType: 'labels.text.fill',
                      stylers: [{color: '#d59563'}]
                    },
                    {
                      featureType: 'poi',
                      elementType: 'labels.text.fill',
                      stylers: [{color: '#d59563'}]
                    },
                    {
                      featureType: 'poi.park',
                      elementType: 'geometry',
                      stylers: [{color: '#263c3f'}]
                    },
                    {
                      featureType: 'poi.park',
                      elementType: 'labels.text.fill',
                      stylers: [{color: '#6b9a76'}]
                    },
                    {
                      featureType: 'road',
                      elementType: 'geometry',
                      stylers: [{color: '#38414e'}]
                    },
                    {
                      featureType: 'road',
                      elementType: 'geometry.stroke',
                      stylers: [{color: '#212a37'}]
                    },
                    {
                      featureType: 'road',
                      elementType: 'labels.text.fill',
                      stylers: [{color: '#9ca5b3'}]
                    },
                    {
                      featureType: 'road.highway',
                      elementType: 'geometry',
                      stylers: [{color: '#746855'}]
                    },
                    {
                      featureType: 'road.highway',
                      elementType: 'geometry.stroke',
                      stylers: [{color: '#1f2835'}]
                    },
                    {
                      featureType: 'road.highway',
                      elementType: 'labels.text.fill',
                      stylers: [{color: '#f3d19c'}]
                    },
                    {
                      featureType: 'transit',
                      elementType: 'geometry',
                      stylers: [{color: '#2f3948'}]
                    },
                    {
                      featureType: 'transit.station',
                      elementType: 'labels.text.fill',
                      stylers: [{color: '#d59563'}]
                    },
                    {
                      featureType: 'water',
                      elementType: 'geometry',
                      stylers: [{color: '#17263c'}]
                    },
                    {
                      featureType: 'water',
                      elementType: 'labels.text.fill',
                      stylers: [{color: '#515c6d'}]
                    },
                    {
                      featureType: 'water',
                      elementType: 'labels.text.stroke',
                      stylers: [{color: '#17263c'}]
                  }] */
                    // styling map

});

marker = new google.maps.Marker({
  map: map,
  draggable: true,
  animation: google.maps.Animation.DROP,
  position: {lat: 43.5727068, lng: -79.6027248}
});
  marker.addListener('click', toggleBounce);
}

function toggleBounce() {
  if (marker.getAnimation() !== null) {
      marker.setAnimation(null);
  } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}

  //////////////  javascript map
 //////////////  formspree
$(document).ready(function() {

     $('#someForm').on('submit', function(e) {
         e.preventDefault();
         
         //get the name field value
         var name = $('#name').val();
         var last_name = $('#last_name').val();
         var telephone = $('#telephone').val();
         //get the name field value
         var email = $('#email').val();
         //get the comments
         var comments = $('#comments').val();
                     
         //pretend we don't need validation
         
         //send to formspree
         $.ajax({
             url:'https://formspree.io/ovi_tsb@yahoo.com',
             method:'POST',
             data:{
                 name:name,
                 last_name:last_name,
                 telephone:telephone,
                 _replyto:email,
                  email:email,
                 comments:comments,
                 _subject:'My Form Submission',
             },
             dataType:"json",
             success:function() {
                 console.log('success'); 
                 $('#formBlock').hide();
                 setTimeout(function() { 
                        $('#name, #email, #last_name, #telephone, #comments').val('')
                        $('#formBlock').fadeIn(); 
                    }, 5000);
                 $('#thankyouBlock').show();
                 setTimeout(function() { 
                        $('#thankyouBlock').fadeOut(); 
                    }, 4000);
             }   

         });     
         
     });

 }); 

 


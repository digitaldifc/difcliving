
var owl = $('.gallery-carousel').owlCarousel({
    loop: false,
    margin: 10,
    nav: true,
    responsive:{
        0:{
            items:1
        },
        320:{
            items:2
        },
        576:{
            items:2
        },
        1000:{
            items:4
        }
    }
})

// Owl carousel filter 
$( '.owl-filter-bar' ).on( 'click', '.item', function() {
    var $item = $(this);
    var filter = $item.data( 'owl-filter' )
    $item.addClass( 'current' ).siblings().removeClass( 'current' );
    owl.owlcarousel2_filter( filter );
} )

$('.popup-gallery').magnificPopup({
    delegate: '.owl-item:not(.cloned) a',
    type: 'image',
    removalDelay: 500, //delay removal by X to allow out-animation
    gallery:{
        enabled:true
    }
});


/// Dropdown

function manageDrop(){
    var btn = document.querySelector('#drop_btn'),
        view = document.querySelector('#drop_view'),
        body = document.body;
    
  
    btn.addEventListener('click', function(e){ 
        e.stopPropagation();
        view.classList.toggle('is_active');
    }); // open menu
      
      // close after click
     
        body.addEventListener('click', function(){
          if(view.classList.contains('is_active')){
            view.classList.remove('is_active');
            } 
    }); // close after click outside
}
  
manageDrop();
//if (window.location.protocol !== 'https:') {
      //window.location = 'https://' + window.location.hostname + window.location.pathname + window.location.hash;
    //}

    $(".pergunta").click(function () {

    $pergunta = $(this);
    //getting the next element
    $resposta = $pergunta.next();
    //open up the resposta needed - toggle the slide- if visible, slide up, if not slidedown.
    $resposta.slideToggle(500, function () {
        //execute this after slideToggle is done
        //change text of pergunta based on visibility of resposta div
        $pergunta.text(function () {
            //change text based on condition
         
        });
    });

});

$( ".pergunta" ).click(function() {
    //alert($( this ).css( "transform" ));
    if (  $( '.fa-angle-down' ).css( "transform" ) == 'none' ){
        $('.fa-angle-down').css("transform","rotate(180deg)");
    } else {
        $('.fa-angle-down').css("transform","" );
    }
});

function evitarSeleccion( target ) {
   if ( typeof target.onselectstart != "undefined" ) {
      target.onselectstart = function( ) { return false; }
   }
   else if ( typeof target.style.MozUserSelect != "undefined" ) {
      target.style.MozUserSelect = "none"
   }
   else {
      target.onmousedown = function( ) { return false; }
   }
   
   target.style.cursor = "default"
}
 
evitarSeleccion( document.body );

jQuery(document).ready(function($) { 
                $(".scroll").click(function(event){        
                    event.preventDefault();
                    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
               });
            });
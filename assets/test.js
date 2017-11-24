/* Valtech UI Test JS */

$(function () {

    $( "#toggle-nav" ).click(function() {

        $( "#sidebar" ).toggleClass( "closed" );
        $( "#content" ).toggleClass( "full" );

    })

});

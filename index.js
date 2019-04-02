/*

This is a little jquery script that animates the panels when clicked.
When the panel is small it animates the panel to be big and vice versa

*/

$(document).ready(function(){
	$(".closed").click(function(){
    $(".panel").animate({"height":'16vw'});
		$(".slide").toggleClass("active");
	});

  $(".opened").click(function(){
    $(".panel").animate({"height":'2vw'});
		$(".slide").toggleClass("active");
	});
});


$(".folder").draggable();
$(".popup").draggable({handle: "div.draghand"});

// activate the close button
$(".close-button").click(function(){
	// hide the popup
	//$('.popup').hide();
	$(this).parent().hide();
});


// activate the navigation links
$(".icon.folder").click(function(){
  // hide popup in case one is open
  //$('.popup').hide();
	// get the id of the clicked menu item
	var id = $(this).attr('id');
  var popup = $( "#popup-" + id );

  // use it to open the connected popup
  popup.appendTo( popup.parent( ) );
	popup.show(  );

	var slideshow = popup.find(".slideelist")

	if ( slideshow.length >0 ) {
		// load the first image on open
		var slidee    		= popup.find(".slideelist").children( ).first( );
		var image         = popup.find(".slidee img");
		var description   = popup.find(".description");

		if ( image.attr( "src" ) == "#" ) {
			image.attr("src",slidee.data("img"));
			description.html( slidee.data("desc" ) );

			popup.addClass( "slideshow" );
		}
	} else {
		$( "img[data-img]" ).each( function( ) {
			var image = $( this );

			image.attr( "src", image.data( "img" ) )
					 .removeAttr( "data-img" );
		} );
	}
} );


// activate the navigation links
$(".about-project").click(function(){
  // hide popup in case one is open
  //$('.popup').hide();
	// get the id of the clicked menu item
	var id = $(this).attr('id');
  // use it to open the connected popup
	$("#popup-project" + id).show();
});



  $(".popup").on("click",function(){
    // this is a small hack, removing it and adding it again moves it to the top
    $(this).parent().append(this);
  });

  $(".icon.folder").on("click",function(){
  // this is a small hack, removing it and adding it again moves it to the top
  $(this).parent().append(this);
  });





  // for every div that has a class of slideshow
$(".slideeshow").each( function(){

  // find the navigation arrows in this div
  var arrow_left = $(this).find(".arrow-left");
  var arrow_right = $(this).find(".arrow-right");

  // find the list with the slides
  var slideelist     = $(this).find(".slideelist").children();

  // find the image placeholder (to show the slide in)
  var image         = $(this).find(".slidee img");
  // and where to show the description
  var description   = $(this).find(".description");

  // start at the beginning
  var currentslidee  = 0;

  // function for displaying the current slide
  function showCurrentSlidee() {
    var slidee = $(slideelist[currentslidee]);

    image.attr("src",slidee.data("img"));
    description.html( slidee.data("desc" ) );
  }

  // show first image
  //showCurrentSlidee()

  // enable left arrow
  arrow_left.click(function(){

    // go one slide to the left
    currentslidee = currentslidee - 1;
    // when we are at the beginning of the list, go to the end
    if (currentslidee < 0) {
      currentslidee = slideelist.length-1;
    }
    showCurrentSlidee();

  });

  // enable right arrow
  arrow_right.click(function(){
    currentslidee = currentslidee + 1;
    if (currentslidee > slideelist.length -1) {
      currentslidee = 0;
    }
    showCurrentSlidee();
  });

});

// END MULTIPLE SLIDESHOW CODE


$(".about-project").click(function(){
	var button = $( this );
	var popup = button.parent( );

	var abouttext = popup.find( ".about-text" );
	var slideshow = popup.find( ".slideeshow" );

	abouttext.toggle( );
	slideshow.toggle( );

   if ( abouttext.is( ":visible" ) ) {
      button.text( "Images" );
			popup.removeClass( "slideshow" );
   } else {
      button.text( "About" );
 			popup.addClass( "slideshow" );
   }
});


$(".about-project-gif").click(function(){


   $(this).parent().find(".about-text").toggle();
   $(this).parent().find(".artwork").toggle();

   if ($(this).parent().find(".about-text").is(":visible")) {
      $(this).text("Images")

   }
   else {
       $(this).text("About")
   }


  //console.log($(this).parent().find(".about-text") )

});

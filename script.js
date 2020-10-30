/*API keys for future reference
let keyNYT = FDa4Sil51Sz6BlQAjD6vGlH9WypDRJug

let key bookPenguinPub = v2uy7a4bb8m4eazgwg9qm3np
//need to do more research on using penguin house api

bookCovers does not need personal API key
bookCoversURL = http://covers.openlibrary.org/b/$key/$value-$size.jpg
where key, value, and size must be specified
*/

function parallax_height() {
    var scroll_top = $(this).scrollTop();
    var sample_section_top = $(".sample-section").offset().top;
    var header_height = $(".sample-header-section").outerHeight();
    $(".sample-section").css({ "margin-top": header_height });
    $(".sample-header").css({ height: header_height - scroll_top });
  }
  parallax_height();
  $(window).scroll(function() {
    parallax_height();
  });
  $(window).resize(function() {
    parallax_height();
  });


//  Calendar code: https://bit.ly/2TBnpdj

function setDatepicker(_this) { 
  
    /* Get the parent class name so we  
        can show date picker */ 
    let className = $(_this).parent() 
        .parent().parent().attr('class'); 

    // Remove space and add '.' 
    let removeSpace = className.replace(' ', '.'); 

    // jQuery class selector 
    $("." + removeSpace).datepicker({ 
        format: "dd/mm/yyyy", 
        yearRange: [2000,2020],
        // Positioning where the calendar is placed 
        orientation: "bottom auto", 
        // Calendar closes when cursor is  
        // clicked outside the calendar 
        autoclose: true, 
        showOnFocus: "false" 
    }); 
} 
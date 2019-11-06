$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
      $('nav').addClass('shrink');
    }
    else {
      $('nav').removeClass('shrink');
    }
});

$(document).ready(function() {
    const scrollLink = $('.scroll');
    //-------Smooth Scrolling Animation-------
    scrollLink.click(function(event) {
      //remove default to animate
      event.preventDefault();
      
      //select html body animate css properties
      // css properties in {} followed by comma for duration
      //example .animate({width: 50}, 1000)
      $('body,html').animate({
        //bring scroll location to
        scrollTop: $(this.hash).offset().top -50
      }, 1000);
    })
    
    //---Switching Active Links On Scroll-----
    $(window).scroll(function(e) {
      
      //To keep track of scroll bar
      //scrollTop() method is used different
      //from ScrollTop in Smooth Scroll Animation
      const scrollBarLocation = $(this).scrollTop() + 130;
      // console.log(scrollBarLocation);

      // for each scrollLink to do function
      scrollLink.each(function() {

        //calculate the offset top for each section
        let sectionOffset = $(this.hash).offset().top;
 
        if (sectionOffset <= scrollBarLocation) {

          //adding class active from li item
          //by selecting from parent of this link
          $(this).parent().addClass('active');

          //selecting the links parent and siblings
          //any links with class active will be remove
          $(this).parent().siblings().removeClass('active');
        }
      })

    })
})


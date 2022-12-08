export default initColorHover = () => {

    var launchSite = false;
    var cmsItem = document.querySelectorAll('.cms');
    cmsItem.forEach( (e, i) => {
        e.addEventListener("mouseover", () => {
          $(e).addClass("cms-overlay");
          var item = $(e)
          //set the color from cms on inner content on hover
          var colorClass = $(e).find(".newColor").attr('class')
          if(colorClass){
                  var color = "#" + colorClass.split(" ")[1]
          }
          $('.launch-site-wrapper').mouseover(function(){
            
            launchSite = true;
            item.find(".underline").css("background-image", "linear-gradient(transparent calc(100% - 2px), red 2px)")
            item.find(".underline").css("background-size", "0 100%")
          })
          $('.launch-site-wrapper').mouseout(function(){
            launchSite = false;
          })
              if (!launchSite) {
            $(e).find(".top-bottom-margin").css("color", color)
            $(e).find(".text-size-large.full-white").css("color", color)
            $(e).find(".h3").css("color", color)
            $(e).find(".button-text").css("color", color)
            $(e).find(".h3.gets-underlined").css("background-image", "linear-gradient(transparent calc(100% - 2px)," +  color + " 2px)")
            $(e).find(".launch-site-icon").css("color", color)
          }
          });

        e.addEventListener("mouseout", () => {
          $(e).removeClass("cms-overlay");
          $(e).find(".text-size-large.full-white").css("color", "")
          $(e).find(".top-bottom-margin").css("color", "")
          $(e).find(".h3.gets-underlined").css("color", "")
          $(e).find(".button-text").css("color", "")
          $(e).find(".h3.gets-underlined").css("background-image", "linear-gradient(transparent calc(100% - 2px), #FFFFFF 2px)")
          $(e).find(".launch-site-icon").css("color", "")
      });
    })
}
export default initColorHover = () => {

    var launchSite = false;
    var cmsItem = document.querySelectorAll('.cms');
    cmsItem.forEach( (e, i) => {
        console.log(e)
        e.addEventListener("mouseover", el => {
            console.log('heyooo')
          $(el).addClass("cms-overlay");
          var item = $(el)
          //set the color from cms on inner content on hover
          var colorClass = $(el).find(".newColor").attr('class')
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
            $(el).find(".top-bottom-margin").css("color", color)
            $(el).find(".text-size-large.full-white").css("color", color)
            $(el).find(".h3").css("color", color)
            $(el).find(".button-text").css("color", color)
            $(el).find(".h3.gets-underlined").css("background-image", "linear-gradient(transparent calc(100% - 2px)," +  color + " 2px)")
            $(el).find(".launch-site-icon").css("color", color)
          }
          });

        e.addEventListener("mouseout", el => {
          $(el).removeClass("cms-overlay");
          $(el).find(".text-size-large.full-white").css("color", "")
          $(el).find(".top-bottom-margin").css("color", "")
          $(el).find(".h3.gets-underlined").css("color", "")
          $(el).find(".button-text").css("color", "")
          $(el).find(".h3.gets-underlined").css("background-image", "linear-gradient(transparent calc(100% - 2px), #FFFFFF 2px)")
          $(el).find(".launch-site-icon").css("color", "")
      });
    })
}
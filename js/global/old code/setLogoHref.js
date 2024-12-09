export default setLogoHref = () =>{
    console.log(`Checking out or code uh ? We'll write some for ya !`)
      // macth link from the rich text list to each logo image
      var linkArray = Array.from(document.querySelectorAll(".link-list ul li a"));
      var allResourcesLink = Array.from(document.querySelectorAll(".client-link"));
    
    
      linkArray.forEach((link, i) => {
        var href = link.getAttribute("href");
    
        // Set logo link
        allResourcesLink.forEach((resource, index) => {
          if(i === index){
            resource.setAttribute("href", href);
          }
        })
        
      })

    var all_links = document.querySelectorAll(".w-lightbox");
    
    all_links.forEach((e) => {
      e.removeAttribute('href')
    })
    
    //for(var i=0; i<all_links.length; i++){
    //    all_links[i].removeAttribute("href");
    //    console.log("remove");
    
    //}
    
}
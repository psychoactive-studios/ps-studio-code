 import { getGPUTier } from 'detect-gpu'; 
 
  export default function audioImplementation() {

    // console.log('live server is running');

    // FIND OUT IF USER'S DEVICE IS MOBILE
    // async function getGPU() {
    //    const gpuTier = await getGPUTier();
    //    const isMobile = gpuTier.isMobile;
    //    return isMobile
    // };
    // getGPU().then(isMobile => {
    //   if (isMobile) {
    //     isMobile = true;
    //   }
    // })
    // const isMobile = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    // console.log(isMobile)
    window.mobileCheck = function() {
      let check = false;
      (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
      return check;
    };

    // MUTE STATE
    let isMuted = false;
    let linkClicked = false;

    let muteState = sessionStorage.getItem('muteState');
    let musicState = sessionStorage.getItem('musicTime');

    if (muteState) {
      muteState = muteState == 'true' ? muteState = true : muteState = false;
      isMuted = muteState;
    }
    // MUSIC ONLOAD
    music = new Audio();
    music.loop = true;
    music.src = "https://psychoactive-website-media.sfo3.digitaloceanspaces.com/Audio/Music/ps-website-music-v2.mp3";
    
    const music_volume = 0.3;
    music.volume = music_volume;

    if (document.readyState !== 'loading') {
      if (musicState) {
        music.currentTime = (musicState + 10);
      }
      if (mobileCheck() == false) {        
        fadeInMusic();  
      }
    }

    // MUSIC FADE-OUT & STORE SESSION STATE
    window.onbeforeunload = function(){
      sessionStorage.setItem('musicTime', music.currentTime);
      sessionStorage.setItem('muteState', isMuted);
      if (mobileCheck() == false) {
        if ((!isMuted) && (!linkClicked)) fadeToggle(music, music_volume)
      }
    };

    // MUTE AUDIO IF USER NAVIGATES AWAY
    document.addEventListener("visibilitychange", function() {
      if(mute_lottie.loop) {
        if (document.hidden){
          // fadeToggle(music, music_volume);
          music.muted = true;
        } else {
          // fadeToggle(music, music_volume);
          music.muted = false;
        }  
      }
    });
    
    // UI AUDIO
    // open hamburger-menu sound
    frog_ui_open_menu = new Audio();
    frog_ui_open_menu.volume = 1;
    addSrc(frog_ui_open_menu, 'frog_ui_open_WET');

    // close hamburger-menu sound
    frog_ui_close_menu = new Audio();
    frog_ui_close_menu.volume = 1;
    addSrc(frog_ui_close_menu, 'frog_ui_close_WET');

    // menu click sounds
    frog_ui_single_click_1 = new Audio();
    frog_ui_single_click_1.volume = 1;
    addSrc(frog_ui_single_click_1, 'frog_ui_single_1_WET');

    frog_ui_single_click_2 = new Audio();
    frog_ui_single_click_2.volume = 1;
    addSrc(frog_ui_single_click_2, 'frog_ui_single_2_WET');

    // menu hover clack sound
    wood_clack_hover_menu = new Audio();
    wood_clack_hover_menu.volume = .9;
    addSrc(wood_clack_hover_menu, 'wood_clack');

    // project hover & click sounds
    project_hover = new Audio();
    project_hover.volume = 0.4;
    addSrc(project_hover, 'ui_hover_WET');

    project_click = new Audio();
    project_click.volume = 0.8;
    addSrc(project_click, 'ui_click_WET');

    // text hover sound
    text_hover = new Audio();
    text_hover.volume = 0.1;
    addSrc(text_hover, 'text_hover');

    // logo click sound
    home_ui = new Audio();
    home_ui.volume = 1;
    addSrc(home_ui, 'home_ui');
    
    // logo hover sound
    ps_logo_hover = new Audio();
    ps_logo_hover.loop = true;

    const logo_hover_volume = .1;
    ps_logo_hover.volume = logo_hover_volume;

    addSrc(ps_logo_hover, 'hover_sound_short');


    // UI SOUNDS ARRAY
    const uiSounds = [
      frog_ui_open_menu,
      frog_ui_close_menu,
      frog_ui_single_click_1,
      frog_ui_single_click_2,
      wood_clack_hover_menu,
      project_hover,
      project_click,
      text_hover,
      ps_logo_hover,
      home_ui
    ]


    // MUTE LOTTIE FUNCTIONALITY 
    const mute_btn = document.querySelector('#mute-btn-container');

    // need bodymovin cdn for this to work
    const mute_lottie = bodymovin.loadAnimation({
      container: mute_btn,
      path: 'https://uploads-ssl.webflow.com/5f287eb0037f68c8a08d3520/639bd27ee53aaa1429f32a14_audio_wave_shorter.json',
      renderer: 'svg',
      loop: true,
      autoplay: true 
    });

    // if ((music.volume == music_volume) || (music.volume == 0)) {
      mute_btn.addEventListener('click', function() {
        // if (music.volume !== 0) {
        //   if (!isMobile) fadeInMusic()
        // } else {
        //   if (!isMobile) fadeOutMusic()
        // }
        // if (!isMobile) fadeToggle(music, music_volume);
        muteToggle();
        if (!isMuted) {
          if (mobileCheck() == false) {
            music.volume = music_volume
          }
          mute_lottie.setSpeed(1)
          mute_lottie.loop = true;
          mute_lottie.play();
        } else {
          music.volume = 0
          mute_lottie.setSpeed(1.5)
          mute_lottie.loop = false;
        }
      })
    // }
    // catch to make sure music & mute-lottie is never out of sync
    mute_btn.addEventListener('click', function() {
      if (mobileCheck() == false) {
        if (!mute_lottie.loop) {
          fadeOutMusic();
        } else {
          fadeInMusic()
        }
      }
    })

    // MUTE ALL if user muted
    if ((muteState !== null) && (isMuted)) {
      muteAll(uiSounds);
      if (mobileCheck() == false) {
        fadeToggle(music, music_volume);
      }
      mute_lottie.autoplay = false;
    }  
    
    // PLAY MUSIC WHEN CLICKED ANYWHERE (IF NO PRELOADER)
    document.body.addEventListener('click', function() {
      if ((!isMuted) && (music.paused) && (mobileCheck() == false)) {
        music.play();
      }
    }); 

    // PRELOADER TRIGGER
    //const preloader_trigger = document.querySelectorAll('#trigger');
    //playSound(preloader_trigger, music);
    //playSound(preloader_trigger, home_ui);
    
    // MENU NAV-LINKS
    const menu_links = document.querySelectorAll('.menu-link-box');
    playSound(menu_links, frog_ui_single_click_1, wood_clack_hover_menu);   
    
    menu_links.forEach(link => {
      link.addEventListener('click', function() {
        wood_clack_hover_menu.muted = true;
        fadeOutMusic();
      })
    })
    
    // ABOUT DEFINITION CARD - AMPHIBIOUS LANGUAGE
    const amphibious_lang = document.querySelectorAll('.logo-sound');
    playSound(amphibious_lang, project_click, home_ui);

    // TEAM CARDS
    const team_links = document.querySelectorAll('.team-link-box');
    playSound(team_links, project_click, project_hover);

    // PROJECT LINKS & ALL ELEMENTS WITH CLASS NAME CARD SOUND
    const project_links = document.querySelectorAll('.project-link-wrapper, .project-link, .card-sound');
    playSound(project_links, project_click, project_hover);

    // UNDERLINED TEXT SOUND
    const underline_links = document.querySelectorAll('.gets-underlined, .underlined, .underline-sound');
    
    // FILTER OUT HOVER SOUND FOR 'OPEN POSITIONS' CAREERS CARDS and CONTENT HUB cards 
    const filter_Out = ['sml', 'content-hub-heading'];
    playSound(underline_links, project_click, project_hover, filter_Out);

    // ARTICLE LINKS 
    const article_links = document.querySelectorAll('.article-rich-text a');
    playSound(article_links, project_click, project_hover);
    
    // TAG-TEXT & ALL ELEMENTS WITH CLASS NAME TAG SOUND
    const tag_text = document.querySelectorAll('.tag-text, .button-text, .tag-sound');
    playSound(tag_text, frog_ui_single_click_2, text_hover);

     // FOOTER 
     const footer_sound = document.querySelectorAll('.footer-sound');
     playSound(footer_sound, frog_ui_single_click_2, text_hover);

    // MUTE BTN 
     const mute_btn_container = document.querySelectorAll('#mute-btn-container');
     playSound(mute_btn_container, frog_ui_single_click_2, text_hover);

    // CAREERS ACCORDION
    const careers_accordion = document.querySelectorAll('.career-subtitle-box');
    playSound(careers_accordion, frog_ui_single_click_1, text_hover);

    // CAREERS ARROW-BTNS
    const arrow_btns = document.querySelectorAll('.arrow');
    playSound(arrow_btns, frog_ui_single_click_2, text_hover);

    // HAMBURGER-MENU OPEN & CLOSE
    const hamburger_menu = document.querySelectorAll('.hamburger-box');

    // ABOUT DEFINITION CARD
    const about_definition = document.querySelectorAll('.see-more-button');
    playSound(about_definition, project_click, project_hover);

    // NAV MENU SOUNDS
    hamburger_menu.forEach(menu => {
      menu.addEventListener('click', function() {
        if ($(this).hasClass("close")) {
          frog_ui_close_menu.currentTime = 0;
          frog_ui_close_menu.play();
        } else {
          frog_ui_open_menu.currentTime = 0;
          frog_ui_open_menu.play();
        }
      });
      
      menu.addEventListener('mouseenter', function() {
        if (!$(this).hasClass("close")) {
          wood_clack_hover_menu.currentTime = 0;
          const closeAudio = wood_clack_hover_menu;
          closeAudio.volume = 0.9
          closeAudio.play();
        } 
      });    
    })
    
    // LOGO HOME CLICK & HOVER
    const home_link = document.querySelectorAll('#ps-logo-wrap, #ps-logo-wrap-black');
    
    home_link.forEach(link => {
      link.addEventListener('click', function() {
        project_hover.pause();
        home_ui.play();
        fadeOutMusic();
        ps_logo_hover.volume =  0;
      });
    
    // OPTIONAL PS-LOGO HOVER SOUNDS 
     link.addEventListener('mouseenter', function() {
        ps_logo_hover.currentTime = 0.1
        ps_logo_hover.loop = true;
        ps_logo_hover.volume = logo_hover_volume
        if (isMuted == false) ps_logo_hover.muted = false;
        ps_logo_hover.play();
      });

     link.addEventListener('mouseleave', function() {
        ps_logo_hover.loop = false;

      	// if (isMuted == false){
        //   ps_logo_hover.volume = 0
        // }
     });
    })

    // FUNCTIONS
    function addSrc(audio, file) {
      audio.src = `https://psychoactive-website-media.sfo3.digitaloceanspaces.com/Audio/UI/${file}.mp3`
    }

    function playSound(triggerLink, clickSound, hoverSound, filteredClass ) {
        triggerLink.forEach(trigger => {
          
        trigger.addEventListener('click', function() {
          if (trigger.nodeName == 'A') {
            fadeOutMusic(); 
          }
          clickSound.currentTime = 0;
          clickSound.play();
        });

        trigger.addEventListener('mouseenter', function() {
          // check if a filtered class exists
          if (filteredClass == undefined) {
            hoverSound.currentTime = 0;
            hoverSound.play();   
          } else {
            // if it exists, exit, if it doesn't play sound
            if (filterOut(trigger, filteredClass)) {
              return
            } else {
              hoverSound.currentTime = 0;
              hoverSound.play();
            }         
          }
        });
      })
    }

    const filterOut = (trigger, filteredClass) => {
      let isFiltered = false
      filteredClass.forEach(className => {
        if (trigger.classList.contains(className)){
          isFiltered = true
        }
      })
      return isFiltered
    }

    function fadeOutMusic() {
      if ((!isMuted) && (mobileCheck() == false))  {
        fadeToggle(music, music_volume);
      }
      linkClicked = true;
    }

    function fadeInMusic() {
      $(window).on('load', function () {
        music.play();
        if (!isMuted) {
          music.volume = 0;
          $(music).animate({volume: music_volume}, 1500, 'linear');	
        }
      });
    }
    
    function fadeToggle(audio, maxVolume) {
      let muted = audio.muted;
      if (muted) audio.muted = false;

      $(audio).animate({volume: muted ? maxVolume : 0}, 1000, function() {
        audio.muted = !muted;
      });	
    }

    function muteToggle() {
      if (isMuted) {
        unmuteAll(uiSounds);
        isMuted = false;   
      } else {
        muteAll(uiSounds);
        isMuted = true;
      }
    }
      
    function muteAll (audioArr) {
      audioArr.forEach(audio => {
        audio.muted = true;
      })
    }

    function unmuteAll (audioArr) {
      audioArr.forEach(audio => {
        audio.muted = false;
      })
    }
  }
 import { getGPUTier } from 'detect-gpu'; 
 
  export default function audioImplementation() {

    // FIND OUT IF USER'S DEVICE IS MOBILE
    async function getGPU() {
       const gpuTier = await getGPUTier();
       const isMobile = gpuTier.isMobile;
       return isMobile
    };
    getGPU().then(isMobile => {
      if (isMobile) {
        isMobile = true;
      }
    })

    // MUTE STATE
    let isMuted = false;
    let linkClicked = false;
    let isMobile = false;

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
      if (!isMobile) fadeInMusic();  
    }

    // MUSIC FADE-OUT & STORE SESSION STATE
    window.onbeforeunload = function(){
      sessionStorage.setItem('musicTime', music.currentTime);
      sessionStorage.setItem('muteState', isMuted);
      if ((!isMuted) && (!linkClicked) && (!isMobile)) fadeToggle(music, music_volume)
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
      autoplay: true,
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
          music.volume = music_volume
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
      if (!mute_lottie.loop) {
        fadeOutMusic();
      } else {
        fadeInMusic()
      }
    })

    // MUTE ALL if user muted
    if ((muteState !== null) && (isMuted)) {
      muteAll(uiSounds);
      fadeToggle(music, music_volume);
      mute_lottie.autoplay = false;
    }  
    
    // PLAY MUSIC WHEN CLICKED ANYWHERE (IF NO PRELOADER)
    document.body.addEventListener('click', function() {
      if ((!isMuted) && (music.paused) && (!isMobile)) {
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
    
    // TEAM CARDS
    const team_links = document.querySelectorAll('.team-link-box');
    playSound(team_links, project_click, project_hover);

    // PROJECT LINKS
    const project_links = document.querySelectorAll('.project-link-wrapper, .project-link');
    playSound(project_links, project_click, project_hover);
    
    // UNDERLINED TEXT 
    const underline_links = document.querySelectorAll('.gets-underlined, .underlined');
    playSound(underline_links, project_click, project_hover);
    
    // TAG-TEXT
    const tag_text = document.querySelectorAll('.tag-text, .button-text');
    playSound(tag_text, frog_ui_single_click_2, text_hover);

    // CAREERS ACCORDION
    const careers_accordion = document.querySelectorAll('.career-subtitle-box');
    playSound(careers_accordion, frog_ui_single_click_1);

    // CAREERS ARROW-BTNS
    const arrow_btns = document.querySelectorAll('.arrow');
    playSound(arrow_btns, frog_ui_single_click_2);

    // HAMBURGER-MENU OPEN & CLOSE
    const hamburger_menu = document.querySelectorAll('.hamburger-box');
    
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

    function playSound(triggerLink, clickSound, hoverSound ) {
        triggerLink.forEach(trigger => {
          
        trigger.addEventListener('click', function() {
          if (trigger.nodeName == 'A') {
            fadeOutMusic(); 
          }
          clickSound.currentTime = 0;
          clickSound.play();
        });

        trigger.addEventListener('mouseenter', function() {
          hoverSound.currentTime = 0;
          hoverSound.play();
        });
      })
    }

    function fadeOutMusic() {
      if ((!isMuted) && (!isMobile))  {
        fadeToggle(music, music_volume);
      }
      linkClicked = true;
    }

    function fadeInMusic() {
      $(window).on('load', function () {
        if (!isMobile) music.play();
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
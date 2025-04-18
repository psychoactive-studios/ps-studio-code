var $hDP3I$animejs = require("animejs");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $fa75cf8f5b7d35be$export$2e2bcd8739ae039 = copyEmail = ()=>{
    function copyToClipboard(copyText) {
        // copies text to keyboard by creating then deleting selectable text area
        const el = document.createElement("textarea");
        el.value = copyText;
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
        // change text of header
        $(".footer-title-roller-down").each(function() {
            $(this).html("E-mail copied to clipboard");
        });
        // reset text of header after 1000 ms
        setTimeout(function() {
            $(".footer-title-roller-down").each(function() {
                $(this).html("Copy email");
            });
        }, 1400);
    }
    var remoteHelloBlock = document.getElementById("email-block-hello");
    remoteHelloBlock.addEventListener("click", function() {
        copyToClipboard("hello@psychoactive.co.nz");
    });
    var careersBlock = document.getElementById("email-block-careers");
    careersBlock.addEventListener("click", function() {
        copyToClipboard("careers@psychoactive.co.nz");
    });
};


var $3173f2e19d0fd4ea$export$2e2bcd8739ae039 = initCms = ()=>{
    var launchSite = false;
    var cmsItem = document.querySelectorAll(".cms");
    cmsItem.forEach((e, i)=>{
        e.addEventListener("mouseover", ()=>{
            $(e).addClass("cms-overlay");
            var item = $(e);
            //set the color from cms on inner content on hover
            var colorClass = $(e).find(".newColor").attr("class");
            if (colorClass) var color = "#" + colorClass.split(" ")[1];
            $(".launch-site-wrapper").mouseover(function() {
                launchSite = true;
                item.find(".underline").css("background-image", "linear-gradient(transparent calc(100% - 2px), red 2px)");
                item.find(".underline").css("background-size", "0 100%");
            });
            $(".launch-site-wrapper").mouseout(function() {
                launchSite = false;
            });
            if (!launchSite) {
                $(e).find(".top-bottom-margin").css("color", color);
                $(e).find(".text-size-large.full-white").css("color", color);
                $(e).find(".h3").css("color", color);
                $(e).find(".button-text").css("color", color);
                $(e).find(".h3.gets-underlined").css("background-image", "linear-gradient(transparent calc(100% - 2px)," + color + " 2px)");
                $(e).find(".launch-site-icon").css("color", color);
            }
        });
        e.addEventListener("mouseout", ()=>{
            $(e).removeClass("cms-overlay");
            $(e).find(".text-size-large.full-white").css("color", "");
            $(e).find(".top-bottom-margin").css("color", "");
            $(e).find(".h3.gets-underlined").css("color", "");
            $(e).find(".button-text").css("color", "");
            $(e).find(".h3.gets-underlined").css("background-image", "linear-gradient(transparent calc(100% - 2px), #FFFFFF 2px)");
            $(e).find(".launch-site-icon").css("color", "");
        });
    });
    //get the length of all the cms items
    var total_items = cmsItem.length;
    //on one of the filter buttons clicked check the length of the cms
    //if its less than the total remove the active class from 'All' filter
    if (document.querySelector(".sort-button") && document.querySelector(".reset-filter")) $(".sort-button").click(function() {
        //adding a delay for finsweet to run its filter script
        setTimeout(function() {
            if ($(".cms").length < total_items) $(".reset-filter").removeClass("is-active");
            if ($(".cms").length == total_items) $(".reset-filter").addClass("is-active");
        }, 300);
    });
};


var $d38a99eedc423f53$var$anim;
var $d38a99eedc423f53$var$logoWrap;
var $d38a99eedc423f53$var$logoWrap_b;
var $d38a99eedc423f53$var$anim_b;
const $d38a99eedc423f53$export$2eeae37ba58f5688 = ()=>{
    $d38a99eedc423f53$var$stopLogoLoading();
    $d38a99eedc423f53$var$pageOutTransitionLinks();
    $d38a99eedc423f53$var$logoMouseEvents();
};
// This code delays the page going to the next URL for a moment so that we can fade the content out (page transition)
function $d38a99eedc423f53$var$pageOutTransitionLinks() {
    function linkIsExternal(link) {
        return link.host !== window.location.host;
    }
    function linkIsPagination(link) {
        return link.classList.contains("w-pagination-previous") || link.classList.contains("w-pagination-next");
    }
    const links = document.querySelectorAll("a");
    links.forEach((link)=>{
        if (!linkIsExternal(link)) {
            if (linkIsPagination(link)) return;
            link.addEventListener("click", pageTransition);
        // Only internal links trigger page out logo animation
        // with the exception of content-hub inner page internal links
        //     if (
        //       (!link.classList.contains("hamburger-box")) &&
        //       (!link.classList.contains("close-menu-box")) &&
        //       (!link.target == "_blank")
        //     ) {
        //       link.addEventListener("click", pageTransition);
        //     }
        }
    });
    function pageTransition(e) {
        e.preventDefault();
        // flip phrog once
        $d38a99eedc423f53$var$logoWrap.querySelector("svg").style.opacity = "1";
        $d38a99eedc423f53$var$logoWrap.querySelector("img").style.opacity = "0";
        $d38a99eedc423f53$var$logoWrap_b.querySelector("svg").style.opacity = "1";
        $d38a99eedc423f53$var$logoWrap_b.querySelector("img").style.opacity = "0";
        // setting loop to false doesn't work above so:
        $d38a99eedc423f53$var$anim.loop = true;
        $d38a99eedc423f53$var$anim_b.loop = true;
        $d38a99eedc423f53$var$anim.play();
        $d38a99eedc423f53$var$anim_b.play();
        setTimeout(function() {
            $d38a99eedc423f53$var$anim.loop = false;
            $d38a99eedc423f53$var$anim_b.loop = false;
        }, 100);
        var linkUrl = $(this).attr("href");
        if (e.ctrlKey || e.metaKey) window.open(linkUrl, "_blank");
        else setTimeout(function(url) {
            window.location = url;
        }, 1150, linkUrl);
    }
}
// The lottie of the phrog flipping acts as our loading indicator
function $d38a99eedc423f53$export$890d625a1c13ecbb() {
    $d38a99eedc423f53$var$logoWrap = document.querySelector("#ps-logo-wrap");
    $d38a99eedc423f53$var$logoWrap_b = document.querySelector("#ps-logo-wrap-black");
    // White lottie
    $d38a99eedc423f53$var$anim = lottie.loadAnimation({
        container: $d38a99eedc423f53$var$logoWrap,
        renderer: "svg",
        autoplay: true,
        loop: true,
        name: "clocked",
        // animationData: data
        path: "https://uploads-ssl.webflow.com/5f287eb0037f68c8a08d3520/5fc454a806388fa94227b1ee_White-V01.json"
    });
    // Black lottie
    $d38a99eedc423f53$var$anim_b = lottie.loadAnimation({
        container: $d38a99eedc423f53$var$logoWrap_b,
        renderer: "svg",
        autoplay: false,
        loop: false,
        name: "clocked",
        // animationData: data
        path: "https://uploads-ssl.webflow.com/5f287eb0037f68c8a08d3520/5fc456d931e1effecaab008c_Black-V02.json"
    });
    // as soon as animation is ready (before other media on page)
    $d38a99eedc423f53$var$anim.addEventListener("data_ready", ()=>{
        $d38a99eedc423f53$var$anim.play();
        $d38a99eedc423f53$var$logoWrap.querySelector("svg").style.opacity = "1";
        $d38a99eedc423f53$var$logoWrap.querySelector("img").style.opacity = "0";
    });
    // as soon as animation is ready (before other media on page)
    $d38a99eedc423f53$var$anim_b.addEventListener("data_ready", ()=>{
        $d38a99eedc423f53$var$anim_b.play();
        $d38a99eedc423f53$var$logoWrap_b.querySelector("svg").style.opacity = "0";
        $d38a99eedc423f53$var$logoWrap_b.querySelector("img").style.opacity = "1";
    });
}
// Makes the phrog flip when hovered
function $d38a99eedc423f53$var$logoMouseEvents() {
    $d38a99eedc423f53$var$logoWrap.addEventListener("mouseenter", ()=>{
        $d38a99eedc423f53$var$anim.play();
        $d38a99eedc423f53$var$anim.loop = true;
        $d38a99eedc423f53$var$logoWrap.querySelector("svg").style.opacity = "1";
        $d38a99eedc423f53$var$logoWrap.querySelector("img").style.opacity = "0";
    });
    $d38a99eedc423f53$var$logoWrap.addEventListener("mouseleave", ()=>{
        $d38a99eedc423f53$var$anim.loop = false;
        $d38a99eedc423f53$var$anim.addEventListener("complete", ()=>{
            $d38a99eedc423f53$var$logoWrap.querySelector("svg").style.opacity = "0";
            $d38a99eedc423f53$var$logoWrap.querySelector("img").style.opacity = "1";
        }, {
            once: true
        });
    });
    $d38a99eedc423f53$var$logoWrap_b.addEventListener("mouseenter", ()=>{
        $d38a99eedc423f53$var$anim_b.play();
        $d38a99eedc423f53$var$anim_b.loop = true;
        $d38a99eedc423f53$var$logoWrap_b.querySelector("svg").style.opacity = "1";
        $d38a99eedc423f53$var$logoWrap_b.querySelector("img").style.opacity = "0";
    });
    $d38a99eedc423f53$var$logoWrap_b.addEventListener("mouseleave", ()=>{
        $d38a99eedc423f53$var$anim_b.loop = false;
        $d38a99eedc423f53$var$anim_b.addEventListener("complete", ()=>{
            $d38a99eedc423f53$var$logoWrap_b.querySelector("svg").style.opacity = "0";
            $d38a99eedc423f53$var$logoWrap_b.querySelector("img").style.opacity = "1";
        }, {
            once: true
        });
    });
}
function $d38a99eedc423f53$var$stopLogoLoading() {
    $d38a99eedc423f53$var$anim.loop = false;
    $d38a99eedc423f53$var$anim.addEventListener("complete", ()=>{
        $d38a99eedc423f53$var$logoWrap.querySelector("svg").style.opacity = "0";
        $d38a99eedc423f53$var$logoWrap.querySelector("img").style.opacity = "1";
    }, {
        once: true
    });
}



var $6ff8a782f3fb5c74$export$2e2bcd8739ae039 = loadAnim = ()=>{
    var topMargin;
    if ($(window).width() <= 1024) topMargin = "15vh";
    else topMargin = "6vw";
    // let targetQuery = ".landing-text-box";
    // original
    // let targetQuery = ".landing-text-box, .project-card-parent";
    //get cookies
    var hasVisited = sessionStorage.getItem("washere");
    // anime.set(targetQuery, {
    //   opacity: 0,
    //   translateY: "4vh",
    // });
    (0, ($parcel$interopDefault($hDP3I$animejs))).set("#hamburger, .logos-box, #mute-btn-container", {
        opacity: 0,
        translateY: "-4vh"
    });
    (0, ($parcel$interopDefault($hDP3I$animejs))).set(".landing-video-container", {
        opacity: 0
    });
    const onOpen = (delay)=>{
        $(".body-dark").css({
            overflow: "visible"
        });
        $(".preloader-background").animate({
            opacity: 0
        }, 1000);
        $("#preloader").css({
            display: "none"
        });
        $("#mute-btn-container").css({
            display: "none"
        });
        (0, ($parcel$interopDefault($hDP3I$animejs)))({
            targets: ".landing-video-container",
            opacity: {
                value: 1,
                duration: 800,
                easing: "easeOutSine"
            },
            delay: delay
        });
        $("#mute-btn-container").css({
            display: "block"
        });
        $(".navigation-bar").css({
            display: "block"
        });
        (0, ($parcel$interopDefault($hDP3I$animejs)))({
            targets: "#hamburger, .logos-box, #mute-btn-container",
            opacity: {
                value: 1,
                duration: 800,
                easing: "easeOutSine"
            },
            translateY: {
                value: [
                    "-4vh",
                    "0vh"
                ],
                duration: 1000,
                easing: "easeOutQuad"
            },
            delay: (0, ($parcel$interopDefault($hDP3I$animejs))).stagger(500, {
                start: delay
            })
        });
    // anime({
    //   targets: targetQuery,
    //   opacity: { value: 1, duration: 800, easing: "easeOutSine" },
    //   translateY: { value: 0, duration: 1000, easing: "easeOutQuad" },
    //   delay: anime.stagger(500, { start: delay + 1000 }),
    // });
    };
    const visited = (delay)=>{
        $(".body-dark").css({
            overflow: "visible"
        });
        $(".preloader-background").css({
            display: "none"
        });
        $("#preloader").css({
            display: "none"
        });
        $(".navigation-bar").css({
            display: "block;"
        });
        $("#mute-btn-container").css({
            display: "block;"
        });
        (0, ($parcel$interopDefault($hDP3I$animejs)))({
            targets: ".landing-video-container",
            opacity: {
                value: 1,
                duration: 800,
                easing: "easeOutSine"
            },
            delay: delay
        });
        (0, ($parcel$interopDefault($hDP3I$animejs)))({
            targets: "#hamburger, .logos-box, #mute-btn-container",
            opacity: {
                value: 1,
                duration: 0,
                easing: "easeOutSine"
            },
            translateY: {
                value: [
                    "0",
                    "0vh"
                ],
                duration: 0,
                easing: "easeOutQuad"
            },
            delay: (0, ($parcel$interopDefault($hDP3I$animejs))).stagger(500, {
                start: delay
            })
        });
    // anime({
    //   targets: targetQuery,
    //   opacity: { value: 1, duration: 0, easing: "easeOutSine" },
    //   translateY: {
    //     value: ["0vh", "0vh"],
    //     duration: 1000,
    //     easing: "easeOutQuad",
    //   },
    //   delay: anime.stagger(500, { start: delay + 1000 }),
    // });
    };
    //if page has been visited - don't animate
    if (hasVisited || $(window).width() <= 1024) {
        // remove black cover from DOM if user has visited site
        $("#black-cover").remove();
        $(".landing-video-container").css({
            width: "80vw",
            height: "40vh",
            position: "relative",
            opacity: 0
        });
        visited(0);
    } else {
        $("#preloader").css({
            display: "block"
        });
        $("#trigger,#enter-btn").on("click", function() {
            // remove black cover from DOM if user has visited site
            $("#black-cover").remove();
            $(".landing-video-container").animate({
                width: "100vw",
                height: "100vh",
                opacity: 1
            }, 1000).delay(2000).animate({
                top: topMargin,
                width: "80vw",
                height: "40vh",
                position: "relative"
            }, 1000, function() {
                onOpen(0);
            });
            // do stuff
            console.log("Welcome, stranger !");
            sessionStorage.setItem("washere", true);
        });
    }
};


function $04e8563c0614c0b5$export$2e2bcd8739ae039(homePage) {
    const showreelHome = document.querySelector("#showreel_video");
    const showreelNav = document.querySelector("#showreelNavXL_video");
    // MOBILE CHECK
    window.mobileCheck = function() {
        let check = false;
        (function(a) {
            if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
        })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
    };
    const isMobile = mobileCheck();
    // Exit early if on mobile to prevent loading or playing UI sounds
    if (isMobile) return;
    // MUTE STATE
    let isMuted = false;
    let linkClicked = false;
    let muteState = sessionStorage.getItem("muteState");
    let musicState = sessionStorage.getItem("musicTime");
    if (muteState) {
        muteState = muteState == "true" ? muteState = true : muteState = false;
        isMuted = muteState;
    }
    // LOAD BG MUSIC
    music = new Audio();
    const music_volume = 0.3;
    music.volume = music_volume;
    music.loop = true;
    music.src = "https://psychoactive-website-media.sfo3.digitaloceanspaces.com/Audio/Music/ps-website-music-v2.mp3";
    // IF MUSIC STATE IS PRESENT, FADE IN (IF IT'S NOT MOBILE)
    if (document.readyState !== "loading") {
        if (musicState) music.currentTime = musicState + 10;
        if (mobileCheck() == false && muteState == false) fadeInMusic();
    }
    // FADE MUSIC OUT & STORE IN SESSION STATE BEFORE UNLOAD
    window.onbeforeunload = function() {
        sessionStorage.setItem("musicTime", music.currentTime);
        sessionStorage.setItem("muteState", isMuted);
        if (mobileCheck() == false) {
            if (!isMuted && !linkClicked) fadeToggle(music, music_volume, false);
        }
    };
    // MUTE AUDIO IF USER NAVIGATES AWAY FROM BROWSER-TAB
    document.addEventListener("visibilitychange", function() {
        if (mute_lottie.loop) {
            if (document.hidden) music.muted = true;
            else music.muted = false;
        }
    });
    // ************ UI AUDIO ************
    // preloader sound <-- currently using html audio from webflow instead
    // preloader_sound = new Audio();
    // addSrc(preloader_sound, 'preloader_sound');
    // open hamburger-menu sound
    frog_ui_open_menu = new Audio();
    addSrc(frog_ui_open_menu, "frog_ui_open_WET");
    // close hamburger-menu sound
    frog_ui_close_menu = new Audio();
    addSrc(frog_ui_close_menu, "frog_ui_close_WET");
    // menu click sounds
    frog_ui_single_click_1 = new Audio();
    addSrc(frog_ui_single_click_1, "frog_ui_single_1_WET");
    frog_ui_single_click_2 = new Audio();
    addSrc(frog_ui_single_click_2, "frog_ui_single_2_WET");
    // menu hover clack sound
    wood_clack_hover_menu = new Audio();
    wood_clack_hover_menu.volume = 0.9;
    addSrc(wood_clack_hover_menu, "wood_clack");
    // project hover & click sounds
    project_hover = new Audio();
    project_hover.volume = 0.4;
    addSrc(project_hover, "ui_hover_WET");
    project_click = new Audio();
    project_click.volume = 0.8;
    addSrc(project_click, "ui_click_WET");
    // text hover sound
    text_hover = new Audio();
    text_hover.volume = 0.1;
    addSrc(text_hover, "text_hover");
    // logo click sound
    home_ui = new Audio();
    addSrc(home_ui, "home_ui");
    // define metamorphosis sound
    metamorphosis_ui = new Audio();
    addSrc(metamorphosis_ui, "frog_sfx");
    // logo hover sound
    ps_logo_hover = new Audio();
    ps_logo_hover.loop = true;
    const logo_hover_volume = 0.2;
    ps_logo_hover.volume = logo_hover_volume;
    addSrc(ps_logo_hover, "hover_sound_short");
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
    ];
    // ^ADD AUDIO VARIABLES HERE IF YOU WANT THEM TO BE INCLUDED IN MUTE FUNCTIONALITY
    // MUTE FUNCTIONALITY
    const mute_btn = document.querySelector("#mute-btn-container");
    const soundwave = document.querySelector(".soundwave-svg");
    const wave = document.querySelectorAll(".wave");
    // toggle css animation on click
    soundwave.addEventListener("click", function() {
        toggleCssAnim();
    });
    // MUTE LOTTIE
    // need bodymovin cdn in header for this to work
    const mute_lottie = bodymovin.loadAnimation({
        container: mute_btn,
        path: "https://uploads-ssl.webflow.com/5f287eb0037f68c8a08d3520/639bd27ee53aaa1429f32a14_audio_wave_shorter.json",
        renderer: "svg",
        loop: true,
        autoplay: true
    });
    let showreelMuteState = false;
    // MUTE BUTTON TOGGLE ON CLICK
    mute_btn.addEventListener("click", function() {
        muteToggle();
        const isMobile = mobileCheck() == false;
        if (showreelHome) {
            if (!isMuted) {
                if (isMobile) {
                    if (!showreelHome.muted || !showreelNav.muted) // console.log("user unmuted during video playback");
                    showreelMuteState = false;
                    else {
                        // console.log("custom mute func ran");
                        music.volume = music_volume;
                        music.muted = false;
                    }
                }
                playLottie();
            } else {
                if (!showreelHome.muted || !showreelNav.muted) // console.log("user muted during video playback");
                showreelMuteState = true;
                stopLottie();
            }
        } else if (!isMuted) {
            if (isMobile) {
                if (!showreelNav.muted) // console.log("user unmuted during video playback");
                showreelMuteState = false;
                else {
                    // console.log("custom mute func ran");
                    music.volume = music_volume;
                    music.muted = false;
                }
            }
            playLottie();
        } else {
            if (!showreelNav.muted) // console.log("user muted during video playback");
            showreelMuteState = true;
            stopLottie();
        }
        if (muteState) music.play();
    });
    function playLottie() {
        mute_lottie.setSpeed(1);
        mute_lottie.loop = true;
        mute_lottie.play();
    }
    function stopLottie() {
        music.volume = 0;
        mute_lottie.setSpeed(1.5);
        mute_lottie.loop = false;
    }
    // catch to make sure music & mute-lottie is never out of sync
    mute_btn.addEventListener("click", function() {
        if (mobileCheck() == false) {
            if (!mute_lottie.loop) fadeOutMusic();
            else fadeInMusic();
        }
    });
    // MUTE ALL if user is muted
    if (muteState !== null && isMuted) {
        muteAll(uiSounds);
        if (mobileCheck() == false) fadeToggle(music, music_volume, false);
        // stop mute-btn lottie from playing - OLD
        mute_lottie.autoplay = false;
        // stop mute-btn lottie from playing - NEW
        wave.forEach((e)=>{
            e.setAttribute("style", "animation-iteration-count: 0!important;");
        });
    }
    // PLAY MUSIC WHEN CLICKED ANYWHERE (IF NO PRELOADER)
    if (muteState == false) document.body.addEventListener("click", function() {
        if (!isMuted && music.paused && mobileCheck() == false) music.play();
    });
    // ************ AUDIO TRIGGERS ************
    // PRELOADER TRIGGER
    const preloader_trigger = document.querySelectorAll("#trigger");
    const preloader_sound = document.querySelector("#preloader_sound");
    playSound(preloader_trigger, preloader_sound);
    playSound(preloader_trigger, music);
    // MENU NAV-LINKS
    const menu_links = document.querySelectorAll(".menu-link-box");
    playSound(menu_links, frog_ui_single_click_1, wood_clack_hover_menu);
    menu_links.forEach((link)=>{
        link.addEventListener("click", function() {
            wood_clack_hover_menu.muted = true;
            fadeOutMusic();
        });
    });
    // ABOUT DEFINITION CARD - AMPHIBIOUS LANGUAGE
    const amphibious_lang = document.querySelectorAll(".logo-sound");
    playSound(amphibious_lang, project_click, project_hover);
    // TEAM CARDS
    const team_links = document.querySelectorAll(".team-link-box");
    playSound(team_links, project_click, project_hover);
    // NEW HOME HOVER LINKS
    const home_links = document.querySelectorAll(".home-hover-outer");
    playSound(home_links, project_click, project_hover);
    // PROJECT LINKS & ALL ELEMENTS WITH CLASS NAME CARD SOUND
    const project_links = document.querySelectorAll(".project-link-wrapper, .project-link, .card-sound");
    playSound(project_links, project_click, project_hover);
    // ADD STANDARD UI SOUND TO ELEMENT
    const add_ui_sound = document.querySelectorAll(".add_ui_sound");
    playSound(add_ui_sound, project_click, project_hover);
    // ADD STANDARD UI SOUND TO ELEMENT - HOVER ONLY
    const add_ui_sound_hover = document.querySelectorAll(".add_ui_sound-hover-only");
    add_ui_sound_hover.forEach((trigger)=>{
        if (project_hover) trigger.addEventListener("mouseenter", function() {
            project_hover.currentTime = 0;
            project_hover.play();
        });
    });
    // UNDERLINED TEXT SOUNDS
    const underline_links = document.querySelectorAll(".gets-underlined, .underlined, .underline-sound");
    // FILTER OUT HOVER SOUND FOR 'OPEN POSITIONS' CAREERS CARDS and CONTENT HUB cards
    const filter_Out = [
        "sml",
        "content-hub-heading"
    ];
    playSound(underline_links, project_click, project_hover, filter_Out);
    // ARTICLE LINKS
    const article_links = document.querySelectorAll(".article-rich-text a");
    playSound(article_links, project_click, project_hover);
    // TAG-TEXT & ALL ELEMENTS WITH CLASS NAME TAG SOUND
    const tag_text = document.querySelectorAll(".tag-text, .button-text, .tag-sound");
    playSound(tag_text, frog_ui_single_click_2, text_hover);
    // FOOTER
    const footer_sound = document.querySelectorAll(".footer-sound");
    playSound(footer_sound, frog_ui_single_click_2, text_hover);
    // MUTE BTN
    const mute_btn_container = document.querySelectorAll("#mute-btn-container");
    playSound(mute_btn_container, frog_ui_single_click_2, text_hover);
    // CAREERS ACCORDION
    const careers_accordion = document.querySelectorAll(".career-subtitle-box");
    playSound(careers_accordion, frog_ui_single_click_1, text_hover);
    // CAREERS ARROW-BTNS
    const arrow_btns = document.querySelectorAll(".arrow");
    playSound(arrow_btns, frog_ui_single_click_2, text_hover);
    // HAMBURGER-MENU OPEN & CLOSE
    const hamburger_open = document.querySelector(".hamburger-box");
    const hamburger_close = document.querySelector(".burger-close-icon");
    // ABOUT DEFINITION CARD
    const about_definition = document.querySelectorAll(".see-more-button");
    playSound(about_definition, project_click, project_hover);
    // DEFINE METAMORPHOSIS BUTTON
    const metamorphosis_btn = document.querySelectorAll("#metamorphosis-btn");
    playSound(metamorphosis_btn, metamorphosis_ui);
    const navPlayReel = document.querySelector(".navbar_playreel-wrapper");
    let humburgerState = "closed";
    navPlayReel.addEventListener("click", ()=>{
        humburgerState = "closed";
    });
    // HAMBURGER MENU SOUNDS
    hamburger_open.addEventListener("click", function() {
        frog_ui_open_menu.currentTime = 0;
        frog_ui_open_menu.play();
        humburgerState = "open";
        setTimeout(()=>{
            wave.forEach((stroke)=>{
                stroke.style.fill = "#101012"; // change mute btn lottie to black
            });
        }, 500);
    });
    hamburger_open.addEventListener("mouseenter", function() {
        wood_clack_hover_menu.currentTime = 0;
        const closeAudio = wood_clack_hover_menu;
        closeAudio.volume = 0.9;
        closeAudio.play();
    });
    hamburger_close.addEventListener("click", function() {
        frog_ui_close_menu.currentTime = 0;
        frog_ui_close_menu.play();
        humburgerState = "closed";
        wave.forEach((stroke)=>{
            stroke.style.fill = "#F5F4F2"; // change mute btn lottie back to white
        });
    });
    hamburger_close.addEventListener("mouseenter", function() {
        wood_clack_hover_menu.currentTime = 0;
        const closeAudio = wood_clack_hover_menu;
        closeAudio.volume = 0.9;
        closeAudio.play();
    });
    // LOGO HOME CLICK & HOVER
    const home_link = document.querySelectorAll("#ps-logo-wrap, #ps-logo-wrap-black");
    home_link.forEach((link)=>{
        link.addEventListener("click", function() {
            project_hover.pause();
            home_ui.play();
            fadeOutMusic();
            ps_logo_hover.volume = 0;
        });
        // PS-LOGO HOVER SOUNDS
        link.addEventListener("mouseenter", function() {
            ps_logo_hover.currentTime = 0.1;
            ps_logo_hover.loop = true;
            ps_logo_hover.volume = logo_hover_volume;
            if (isMuted == false) ps_logo_hover.muted = false;
            ps_logo_hover.play();
        });
        link.addEventListener("mouseleave", function() {
            ps_logo_hover.loop = false;
        });
    });
    // ************ CUSTOM FUNCTIONS ************
    // func to add src url to audio variable
    function addSrc(audio, file) {
        audio.src = `https://psychoactive-website-media.sfo3.digitaloceanspaces.com/Audio/UI/${file}.mp3`;
    }
    // func to play a specified sound either click or hover, with the option to filter out a class
    function playSound(triggerLink, clickSound, hoverSound, filteredClass) {
        triggerLink.forEach((trigger)=>{
            trigger.addEventListener("click", function() {
                if (trigger.nodeName == "A") fadeOutMusic();
                clickSound.currentTime = 0;
                clickSound.play();
            });
            if (hoverSound) trigger.addEventListener("mouseenter", function() {
                // check if a filtered class exists
                if (filteredClass == undefined) {
                    hoverSound.currentTime = 0;
                    hoverSound.play();
                } else {
                    // if it exists, exit, if it doesn't play sound
                    if (filterOut(trigger, filteredClass)) return;
                    else {
                        hoverSound.currentTime = 0;
                        hoverSound.play();
                    }
                }
            });
        });
    }
    // func to filer out a class from nodelist
    const filterOut = (trigger, filteredClass)=>{
        let isFiltered = false;
        filteredClass.forEach((className)=>{
            if (trigger.classList.contains(className)) isFiltered = true;
        });
        return isFiltered;
    };
    // func to fade out music smoothly
    function fadeOutMusic() {
        if (!isMuted && mobileCheck() == false) fadeToggle(music, music_volume, false);
        linkClicked = true;
    }
    //func to fade in music smoothly
    function fadeInMusic() {
        music.play();
        const condition1 = showreelHome && (showreelHome.muted || showreelNav.muted);
        const condition2 = !showreelHome && showreelNav.muted;
        const overallCondition = (condition1 || condition2) && !isMuted;
        if (overallCondition) {
            music.volume = 0;
            $(music).animate({
                volume: music_volume
            }, 1500, "linear");
        }
    }
    // func to toggle volume
    function fadeToggle(audio = music, maxVolume = music_volume, isFromShowreel = true) {
        const condition1 = homePage && (showreelHome.muted || showreelNav.muted);
        const condition2 = !homePage && showreelNav.muted;
        const overallCondition = (condition1 || condition2) && isFromShowreel;
        if (overallCondition) {
            let muted = audio.muted;
            if (muted && !isFromShowreel) audio.muted = false;
            let newVolume = muted ? maxVolume : 0;
            if (!isFromShowreel) newVolume = maxVolume;
            $(audio).animate({
                volume: muted ? maxVolume : 0
            }, 1000, function() {
                audio.muted = !muted;
            });
        }
    }
    // func to toggle mute state
    function muteToggle() {
        if (isMuted) {
            unmuteAll(uiSounds);
            isMuted = false;
            showreelMuteState = false;
        } else {
            muteAll(uiSounds);
            isMuted = true;
            showreelMuteState = true;
        }
    }
    // func to mute all sounds
    function muteAll(audioArr = uiSounds) {
        audioArr.forEach((audio)=>{
            audio.muted = true;
        });
    }
    // func to unmute all sounds
    function unmuteAll(audioArr = uiSounds) {
        audioArr.forEach((audio)=>{
            audio.muted = false;
        });
    }
    // func to return mute state
    function mutedState() {
        return isMuted;
    }
    function getShowreelMuteState() {
        return showreelMuteState;
    }
    // forcefully set mute state
    function setMuteState(state) {
        isMuted = state;
    }
    // func to toggle the css animation of the soundwave (mute-btn)
    function toggleCssAnim() {
        wave.forEach((e)=>{
            const style = getComputedStyle(e);
            if (style["animation-iteration-count"] == "infinite") e.setAttribute("style", "animation-iteration-count: 1!important;");
            else e.setAttribute("style", "animation-iteration-count: infinite!important;");
            // catch to ensure mute btn stays black when toggled whilst hamburger menu is open
            if (humburgerState == "open") e.style.fill = "#101012"; //set mute svg fill back to white
        });
    }
    return {
        isMuted: isMuted,
        muteState: muteState,
        muteToggle: muteToggle,
        addSrc: addSrc,
        playSound: playSound,
        filterOut: filterOut,
        fadeOutMusic: fadeOutMusic,
        fadeInMusic: fadeInMusic,
        fadeToggle: fadeToggle,
        muteAll: muteAll,
        unmuteAll: unmuteAll,
        mutedState: mutedState,
        toggleCssAnim: toggleCssAnim,
        setMuteState: setMuteState,
        getShowreelMuteState: getShowreelMuteState
    };
}


var $0e9fad18b683d9f7$export$2e2bcd8739ae039 ///////////////////// ///////////////////// ///////////////////// ///////////////////// ///////////////////// /////////////////////
 ///////////////////// ///////////////////// ///////////////////// ///////////////////// ///////////////////// /////////////////////
 // ASCI ART ANIMATOR
 // document.addEventListener("DOMContentLoaded", function () {
 //   function loadSVG() {
 //     const container = document.getElementById("asci-left");
 //     // URL or path to the SVG file
 //     const svgURL =
 //       "https://cdn.prod.website-files.com/6761fc8483c673ae45ad8f4e/6784bf272a5d360fc3d33bb9_asci-art-left.svg";
 //     fetch(svgURL)
 //       .then((response) => response.text())
 //       .then((svgText) => {
 //         container.innerHTML = svgText; // Load SVG content into the div
 //         // Wait for SVG to fully load and for DOM to update
 //         setTimeout(() => {
 //           const svgElement = document.querySelector(".asci-art");
 //           if (svgElement) {
 //             console.log(svgElement);
 //             // Function to change the fill color to red
 //             function changeToRed() {
 //               svgElement.style.fill = "red";
 //             }
 //             // Function to change the fill color back to white
 //             function changeToWhite() {
 //               svgElement.style.fill = "#fff";
 //             }
 //             function randomFlicker() {
 //               const flickers = getRandomInt(2, 6); // Random number of flickers (2 to 6)
 //               const pause = getRandomInt(500, 3000); // Random pause (0.5 to 3 seconds)
 //               let flickCount = 0;
 //               function flick() {
 //                 if (flickCount < flickers) {
 //                   if (Math.random() > 0.5) {
 //                     changeToRed();
 //                   } else {
 //                     changeToWhite();
 //                   }
 //                   flickCount++;
 //                   setTimeout(flick, 5); // Quick switch every 100ms
 //                 } else {
 //                   setTimeout(() => {
 //                     randomFlicker();
 //                   }, pause); // Pause after flicker
 //                 }
 //               }
 //               flick();
 //             }
 //             function getRandomInt(min, max) {
 //               return Math.floor(Math.random() * (max - min + 1) + min);
 //             }
 //             // Start the flicker behavior
 //             randomFlicker();
 //           } else {
 //             console.log("SVG element not found.");
 //           }
 //         }, 100); // Timeout to ensure DOM update
 //       })
 //       .catch((error) => console.error("Error loading SVG:", error));
 //   }
 //   // Call the function to load the SVG
 //   loadSVG();
 // });
 ///////////////////// ///////////////////// ///////////////////// ///////////////////// ///////////////////// /////////////////////
 ///////////////////// ///////////////////// ///////////////////// ///////////////////// ///////////////////// /////////////////////
 // old version of text fade GSAP, taken from psychoactive work inner pages
 // let typeSplit = new SplitType("[text-split]", {
 //   // Split text into spans
 //   types: "words, chars",
 //   tagName: "span",
 // });
 // // Link timelines to scroll position
 // function createScrollTrigger(triggerElement, timeline) {
 //   // Reset tl when scroll out of view past bottom of screen
 //   ScrollTrigger.create({
 //     trigger: triggerElement,
 //     start: "top bottom",
 //     onLeaveBack: () => {
 //       timeline.progress(0);
 //       timeline.pause();
 //     },
 //   });
 //   // Play tl when scrolled into view (60% from top of screen)
 //   ScrollTrigger.create({
 //     trigger: triggerElement,
 //     start: "top 80%",
 //     onEnter: () => timeline.play(),
 //   });
 // }
 // $("[words-slide-up]").each(function (index) {
 //   let tl = gsap.timeline({ paused: true });
 //   tl.from($(this).find(".word"), {
 //     opacity: 0,
 //     yPercent: 100,
 //     duration: 0.5,
 //     ease: "back.out(2)",
 //     stagger: { amount: 0.5 },
 //   });
 //   createScrollTrigger($(this), tl);
 // });
 // $("[words-rotate-in]").each(function (index) {
 //   let tl = gsap.timeline({ paused: true });
 //   tl.set($(this).find(".word"), { transformPerspective: 1000 });
 //   tl.from($(this).find(".word"), {
 //     rotationX: -90,
 //     duration: 0.6,
 //     ease: "power2.out",
 //     stagger: { amount: 0.6 },
 //   });
 //   createScrollTrigger($(this), tl);
 // });
 // $("[words-slide-from-right]").each(function (index) {
 //   let tl = gsap.timeline({ paused: true });
 //   tl.from($(this).find(".word"), {
 //     opacity: 0,
 //     x: "1em",
 //     duration: 0.6,
 //     ease: "power2.out",
 //     stagger: { amount: 0.2 },
 //   });
 //   createScrollTrigger($(this), tl);
 // });
 // $("[letters-slide-up]").each(function (index) {
 //   let tl = gsap.timeline({ paused: true });
 //   tl.from($(this).find(".char"), {
 //     yPercent: 100,
 //     duration: 0.2,
 //     ease: "power1.out",
 //     stagger: { amount: 0.6 },
 //   });
 //   createScrollTrigger($(this), tl);
 // });
 // $("[letters-slide-down]").each(function (index) {
 //   let tl = gsap.timeline({ paused: true });
 //   tl.from($(this).find(".char"), {
 //     yPercent: -120,
 //     duration: 0.3,
 //     ease: "power1.out",
 //     stagger: { amount: 0.7 },
 //   });
 //   createScrollTrigger($(this), tl);
 // });
 // $("[letters-fade-in]").each(function (index) {
 //   let tl = gsap.timeline({ paused: true });
 //   tl.from($(this).find(".char"), {
 //     opacity: 0.2,
 //     duration: 0.5,
 //     ease: "power1.out",
 //     stagger: { amount: 0.8 },
 //   });
 //   createScrollTrigger($(this), tl);
 // });
 // $("[letters-fade-in-random]").each(function (index) {
 //   let tl = gsap.timeline({ paused: true });
 //   tl.from($(this).find(".char"), {
 //     opacity: 0,
 //     duration: 0.05,
 //     ease: "power1.out",
 //     stagger: { amount: 0.4, from: "random" },
 //   });
 //   createScrollTrigger($(this), tl);
 // });
 // $("[scrub-each-word]").each(function (index) {
 //   let tl = gsap.timeline({
 //     scrollTrigger: {
 //       trigger: $(this),
 //       start: "top 80%",
 //       end: "top 30%",
 //       scrub: true,
 //     },
 //   });
 //   tl.from($(this).find(".word"), {
 //     opacity: 0.2,
 //     duration: 0.5,
 //     ease: "power1.out",
 //     stagger: { each: 0.8 },
 //   });
 // });
 // // Avoid flash of unstyled content
 // gsap.set("[text-split]", { opacity: 1 });
 // more optimsied but less smooth version of mouse follower - in case we have performance issues with it
 // export default aboutPageCode = () => {
 //   // alert("we live on about page");
 //   const container = document.getElementById("container");
 //   const follower = document.getElementById("follower");
 //   if (container && follower) {
 //     container.style.position = "relative";
 //     follower.style.position = "absolute";
 //     follower.style.opacity = "0";
 //     const followerRadius = follower.offsetWidth / 2;
 //     // Variables for smooth movement (Lerp)
 //     let targetX = 0;
 //     let targetY = 0;
 //     let currentX = 0;
 //     let currentY = 0;
 //     let isAnimating = false;
 //     let lastMoveTime = 0;
 //     const throttleInterval = 16; // ~60 FPS
 //     const lerp = (start, end, t) => start + (end - start) * t;
 //     const updateFollowerPosition = () => {
 //       // Check if the follower is close enough to the target, and stop if so
 //       if (
 //         Math.abs(currentX - targetX) < 1 &&
 //         Math.abs(currentY - targetY) < 1
 //       ) {
 //         isAnimating = false;
 //         return;
 //       }
 //       // Smoothly interpolate current position towards target position
 //       currentX = lerp(currentX, targetX, 0.1); // Adjust 0.1 for faster/slower smoothing
 //       currentY = lerp(currentY, targetY, 0.1);
 //       // Update the follower's position
 //       follower.style.left = `${currentX}px`;
 //       follower.style.top = `${currentY}px`;
 //       follower.style.transform = "translate(-50%, -50%)";
 //       // Continue the animation loop
 //       if (isAnimating) {
 //         requestAnimationFrame(updateFollowerPosition);
 //       }
 //     };
 //     // Event listeners for mouseenter and mouseleave to show and hide the follower
 //     container.addEventListener("mouseenter", () => {
 //       follower.style.opacity = "1";
 //     });
 //     container.addEventListener("mouseleave", () => {
 //       follower.style.opacity = "0";
 //     });
 //     // Throttled mousemove event listener
 //     container.addEventListener("mousemove", (e) => {
 //       const now = Date.now();
 //       if (now - lastMoveTime < throttleInterval) return; // Throttle if less than the interval
 //       lastMoveTime = now;
 //       const rect = container.getBoundingClientRect();
 //       const mouseX = e.clientX - rect.left;
 //       const mouseY = e.clientY - rect.top;
 //       // Clamp target values to keep the circle inside the container
 //       targetX = Math.max(
 //         followerRadius,
 //         Math.min(mouseX, rect.width - followerRadius)
 //       );
 //       targetY = Math.max(
 //         followerRadius,
 //         Math.min(mouseY, rect.height - followerRadius)
 //       );
 //       // Start the animation loop if not already running
 //       if (!isAnimating) {
 //         isAnimating = true;
 //         updateFollowerPosition();
 //       }
 //     });
 //   }
 // };
 = aboutPageCode = ()=>{
    // alert("we live on about page");
    // GSAP Words fade in animation
    const scrollingHighlightElements = document.querySelectorAll("[data-animation='scrolling-highlight']");
    scrollingHighlightElements.forEach((element)=>{
        const splitText = new SplitType(element, {
            types: [
                "chars",
                "words"
            ]
        });
        gsap.from(splitText.chars, {
            scrollTrigger: {
                trigger: element,
                start: "top 75%",
                end: "top 25%",
                scrub: true
            },
            opacity: 0.05,
            stagger: 0.1
        });
    });
    const scrollingHighlightElementsBg = document.querySelectorAll("[data-animation='scrolling-highlight-bg']");
    scrollingHighlightElementsBg.forEach((element)=>{
        const splitText = new SplitType(element, {
            types: [
                "chars",
                "words"
            ]
        });
        gsap.from(splitText.chars, {
            scrollTrigger: {
                trigger: element,
                start: "top 75%",
                end: "top 25%",
                scrub: true
            },
            opacity: 1,
            stagger: 0.1
        });
    });
    ///////////////////// ///////////////////// ///////////////////// ///////////////////// ///////////////////// /////////////////////
    ///////////////////// ///////////////////// ///////////////////// ///////////////////// ///////////////////// /////////////////////
    // JavaScript Metamorphosis typewriting effect
    const typewriteText = (element, text, delay = 50)=>{
        let index = 0;
        const type = ()=>{
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
                setTimeout(type, delay);
            } else // Add blinking cursor after typing is complete
            element.innerHTML += '<span class="blinking-cursor">|</span>';
        };
        type();
    };
    // Function to handle intersection observer
    const handleTypewritingOnScroll = ()=>{
        const element = document.querySelector(".definition_search-bar_text");
        if (!element) return;
        // Initially hide the element
        element.style.visibility = "hidden";
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if (entry.isIntersecting) {
                    element.style.visibility = "visible"; // Make visible when in view
                    const fullText = element.getAttribute("data-text");
                    element.textContent = ""; // Clear text before typing
                    typewriteText(element, fullText);
                } else {
                    // Reset the content and visibility when out of view
                    element.textContent = "";
                    element.style.visibility = "hidden";
                }
            });
        }, {
            threshold: 0
        } // Trigger as soon as it enters or exits the viewport
        );
        observer.observe(element);
    };
    // Run function on page load
    handleTypewritingOnScroll();
    // Optionally retrigger on click - currently has a spam clicking bug though
    // document
    //   .querySelector(".definition_search-bar")
    //   ?.addEventListener("click", handleTypewritingOnScroll);
    // CSS for blinking cursor
    const style = document.createElement("style");
    style.textContent = `
  .blinking-cursor {
      display: inline-block;
      width: 0.2ch;
      animation: blink 1s steps(1) infinite;
      margin-left: 0.25rem;
  }

  @keyframes blink {
      0%, 100% {
          opacity: 0.7;
      }
      50% {
          opacity: 0;
      }
  }

  .definition_search-bar_text {
      visibility: hidden; /* Initially hide the element */
  }
`;
    document.head.appendChild(style);
    ///////////////////// ///////////////////// ///////////////////// ///////////////////// ///////////////////// /////////////////////
    ///////////////////// ///////////////////// ///////////////////// ///////////////////// ///////////////////// /////////////////////
    // Function to initialize the mouse follower
    const initializeMouseFollower = ()=>{
        const container = document.getElementById("container");
        const follower = document.getElementById("follower");
        if (container && follower) {
            if (window.innerWidth > 991) {
                container.style.position = "relative";
                follower.style.position = "absolute";
                follower.style.transform = "scale(0)";
                follower.style.transition = "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.3s ease-out";
                follower.style.transformOrigin = "center center";
                follower.style.opacity = "0";
            }
            const followerRadius = follower.offsetWidth / 2;
            let targetX = -100; // Start outside viewport to avoid (0,0) jump
            let targetY = -100;
            let currentX = targetX;
            let currentY = targetY;
            const lerp = (start, end, t)=>start + (end - start) * t;
            const updateFollowerPosition = ()=>{
                if (window.innerWidth > 991) {
                    // Adjust the lerp value for stickier behavior (lower = more sticky)
                    currentX = lerp(currentX, targetX, 0.2);
                    currentY = lerp(currentY, targetY, 0.2);
                    follower.style.left = `${currentX - followerRadius}px`;
                    follower.style.top = `${currentY - followerRadius}px`;
                    requestAnimationFrame(updateFollowerPosition);
                }
            };
            container.addEventListener("mouseenter", (e)=>{
                if (window.innerWidth > 991) {
                    const rect = container.getBoundingClientRect();
                    const mouseX = e.clientX - rect.left;
                    const mouseY = e.clientY - rect.top;
                    targetX = mouseX;
                    targetY = mouseY;
                    currentX = targetX; // Immediately update to avoid animation lag
                    currentY = targetY;
                    follower.style.left = `${currentX - followerRadius}px`;
                    follower.style.top = `${currentY - followerRadius}px`;
                    requestAnimationFrame(()=>{
                        follower.style.transform = "scale(1)";
                        follower.style.opacity = "1";
                    });
                }
            });
            container.addEventListener("mouseleave", ()=>{
                if (window.innerWidth > 991) {
                    requestAnimationFrame(()=>{
                        follower.style.transform = "scale(0)";
                        follower.style.opacity = "0";
                    });
                    setTimeout(()=>{
                        // Keep the last known position instead of resetting off-screen
                        targetX = currentX;
                        targetY = currentY;
                    }, 400); // Matches transition time
                }
            });
            container.addEventListener("mousemove", (e)=>{
                if (window.innerWidth > 991) {
                    const rect = container.getBoundingClientRect();
                    const mouseX = e.clientX - rect.left;
                    const mouseY = e.clientY - rect.top;
                    targetX = mouseX;
                    targetY = mouseY;
                }
            });
            updateFollowerPosition();
        }
    };
    // Variable to track whether the mouse follower is active
    let mouseFollowerActive = false;
    // Function to handle enabling/disabling the mouse follower
    const handleMouseFollower = ()=>{
        const follower = document.getElementById("follower");
        if (window.innerWidth > 991) {
            if (!mouseFollowerActive) {
                initializeMouseFollower();
                mouseFollowerActive = true;
            }
        } else {
            mouseFollowerActive = false;
            if (follower) {
                // Reset styles when below threshold
                follower.style.transform = "";
                follower.style.opacity = "";
            }
        }
    };
    // Run on initial load and on window resize
    handleMouseFollower();
    window.addEventListener("resize", handleMouseFollower);
///////////////////// ///////////////////// ///////////////////// ///////////////////// ///////////////////// /////////////////////
///////////////////// ///////////////////// ///////////////////// ///////////////////// ///////////////////// /////////////////////
// SWAP HERO VIDEO TO MOBILE / BACK
// document.addEventListener("DOMContentLoaded", (event) => {
// Cache all video elements
// const allVideos = document.querySelectorAll(".background-video");
// console.log(allVideos);
// // Debounce function to prevent frequent calls
// function debounce(func, wait) {
//   let timeout;
//   return function (...args) {
//     clearTimeout(timeout);
//     timeout = setTimeout(() => func.apply(this, args), wait);
//   };
// }
// // Function to update video sources based on screen width
// function updateVideoSources() {
//   allVideos.forEach((video) => {
//     console.log("update, ", video);
//     const currentSrc = video.querySelector("source").src;
//     const screenWidth = window.innerWidth;
//     let newSrc;
//     if (screenWidth <= 479) {
//       newSrc =
//         "https://psychoactive-website-media.sfo3.cdn.digitaloceanspaces.com/About-Page/psychoactive%20texture%20video%20MOBILE.mp4";
//     } else {
//       newSrc =
//         "https://psychoactive-website-media.sfo3.cdn.digitaloceanspaces.com/About-Page/psychoactive%20texture%20video.mp4";
//     }
//     if (currentSrc !== newSrc) {
//       video.pause();
//       video.querySelector("source").setAttribute("src", newSrc);
//       video.load();
//       video.play();
//     }
//   });
// }
// // Initial setup
// updateVideoSources();
// // Debounced event listener for window resize
// window.addEventListener("resize", debounce(updateVideoSources, 100));
// });
};


function $f4f04639bee629f7$export$5e493dfb2187de5c(audio) {
    const fadeMusicToggle = audio?.fadeToggle;
    const showreelMuteState = audio?.getShowreelMuteState;
    const homeBlock = document.querySelector("#showreel_block_home");
    const showreelVideo = document.querySelector("#showreel_video");
    const clickToUnmuteUI = document.querySelector(".showreel-ui-wrapper");
    const clickToMuteUI = document.querySelector(".showreel-ui-wrapper-2");
    const soundBtns = Array.from(document.querySelectorAll(".showreel-sound-button"));
    showreelVideo.volume = 0.7;
    let clickLogic = "none";
    let outOfView = false;
    // homepage showreel click logic
    homeBlock.addEventListener("click", ()=>{
        switch(clickLogic){
            case "none":
                firstClickLogic();
                break;
            case "once":
                secondClickLogic();
                break;
            case "twice":
                thirdClickLogic();
                break;
            default:
                firstClickLogic();
        }
    });
    // FIRST CLICK LOGIC
    function firstClickLogic() {
        showreelVideo.muted = false; //unmute video
        showreelVideo.currentTime = 0; //restart video
        clickToUnmuteUI.style.display = "none"; //hide unmute ui
        clickToMuteUI.style.opacity = 0; // set mute opacity to 0
        if (fadeMusicToggle && showreelMuteState && !showreelMuteState()) fadeMusicToggle(); //if unmuted, toggle music fade
        clickLogic = "once"; //update click logic
        outOfView = false; //ensure out of view logic is false
    }
    // SECOND CLICK LOGIC
    function secondClickLogic() {
        showreelVideo.muted = true; //mute video again
        if (fadeMusicToggle && showreelMuteState && !showreelMuteState()) fadeMusicToggle(); //if unmuted, toggle music fade
        clickToUnmuteUI.style.opacity = "100"; // set unmute opacity to 100
        clickToUnmuteUI.style.display = "flex"; // display unmute ui
        clickToMuteUI.style.display = "none"; // hide mute ui
        clickLogic = "twice"; //update click logic
    }
    // THIRD CLICK LOGIC
    function thirdClickLogic() {
        showreelVideo.muted = false; //unmute video
        if (fadeMusicToggle && showreelMuteState && !showreelMuteState()) fadeMusicToggle(); //if unmuted, toggle music fade
        clickToUnmuteUI.style.display = "none"; //hide unmute ui
        clickLogic = "once"; //update click logic
        outOfView = false; //ensure out of view logic is false
    }
    // catch for if user scrolls video out of view or clicks on nav
    showreelVideo.addEventListener("pause", function() {
        outOfView = true;
        if (showreelVideo.muted == false && // check if video is unmuted
        document.visibilityState == "visible" // check if user is not in another tab
        ) {
            secondClickLogic();
            clickLogic = "none"; //reset click logic
        }
    }, false);
    // catch to ensure mute ui is never visible when unmute ui is
    homeBlock.addEventListener("mouseenter", ()=>{
        if (clickToUnmuteUI.style.display == "flex") clickToMuteUI.style.display = "none";
    });
    // initial show / hide on hover
    homeBlock.addEventListener("mouseenter", ()=>{
        const unMuteStyle = window.getComputedStyle(clickToUnmuteUI);
        if (unMuteStyle.display == "none" && showreelVideo.muted) clickToUnmuteUI.style.display = "flex";
    });
    // hover out interaction with checks to ensure its not hovering out into the sound btns itself
    clickToUnmuteUI.addEventListener("mouseout", (event)=>{
        const unMuteStyle = window.getComputedStyle(clickToUnmuteUI);
        // Check if the mouse is still over clickToUnmuteUI or any soundBtns
        const isHoveringSoundBtns = soundBtns.some((btn)=>btn.contains(event.relatedTarget));
        const isHoveringClickToUnmute = clickToUnmuteUI.contains(event.relatedTarget);
        if (!isHoveringSoundBtns && !isHoveringClickToUnmute && unMuteStyle.display === "flex" && showreelVideo.muted) clickToUnmuteUI.style.display = "none";
    });
    // catch if user hovers off showreel, after clicking once
    showreelVideo.addEventListener("mouseout", function() {
        const clickedOnce = clickLogic == "once";
        if (clickedOnce && !outOfView) setTimeout(()=>{
            clickToMuteUI.style.display = "flex";
        }, 500);
    });
}
function $f4f04639bee629f7$export$703c2500fd6dece5(audio) {
    const fadeMusicToggle = audio?.fadeToggle;
    const showreelMuteState = audio?.getShowreelMuteState;
    const navPlayReel = document.querySelector(".navbar_playreel-wrapper");
    const wave = document.querySelectorAll(".wave");
    const showreelVideo = document.querySelector("#showreelNavXL_video");
    showreelVideo.volume = 0.7;
    // on showreel-nav click
    navPlayReel.addEventListener("click", ()=>{
        showreelVideo.muted = false; //unmute video
        showreelVideo.currentTime = 0; //restart video
        if (fadeMusicToggle && showreelMuteState && !showreelMuteState()) fadeMusicToggle(); //if unmuted, toggle music fade
        wave.forEach((stroke)=>{
            stroke.style.fill = "#F5F4F2"; //set mute svg fill back to white
        });
    });
    // when user navigates away from showreel
    showreelVideo.addEventListener("pause", function() {
        if (showreelVideo.muted == false && document.visibilityState == "visible") {
            if (fadeMusicToggle && showreelMuteState && !showreelMuteState()) fadeMusicToggle(); //if unmuted, toggle music fade
        }
    }, false);
}


function $d293eb13d4f2d3b3$export$d38dd5f6b63689ca(audio) {
    const fadeMusicToggle = audio?.fadeToggle;
    const isMuted = audio?.mutedState;
    const playVideoTriggers = document.querySelectorAll(".home-hover-outer");
    const allHomepageVideos = document.querySelectorAll(".home-video");
    // Reduce volume of all homepage videos to 0.7`
    allHomepageVideos.forEach((video)=>{
        if (video) video.volume = 0.7;
    });
    // Map to store click states for each video
    const videoClickStates = new Map();
    const videoOutOfViewStates = new Map();
    // homepage video click logic
    playVideoTriggers.forEach((trigger)=>{
        const currentVideo = trigger.querySelector(".home-video"); // get current video
        const currentPlayWrapper = trigger.querySelector(".play-video-wrapper");
        const currentPlayBtn = trigger.querySelector(".view-project-btn");
        if (!currentVideo) return; // exit if no video found
        // Initialize states for this video
        videoClickStates.set(currentVideo, "none");
        videoOutOfViewStates.set(currentVideo, false);
        // catch for if user scrolls video out of view or clicks on nav
        currentVideo.addEventListener("pause", function() {
            videoOutOfViewStates.set(currentVideo, true);
            if (currentVideo.muted == false && // check if video is unmuted
            document.visibilityState == "visible" // check if user is not in another tab
            ) {
                secondClickLogic(currentVideo, currentPlayWrapper);
                videoClickStates.set(currentVideo, "none"); //reset click logic
            }
        }, false);
        // trigger click logic
        trigger.addEventListener("click", (e)=>{
            // Check if the click was on the view project button or any of its children
            if (currentPlayBtn && (e.target === currentPlayBtn || currentPlayBtn.contains(e.target))) {
                e.stopPropagation();
                return; // Exit if so
            }
            const currentClickState = videoClickStates.get(currentVideo);
            switch(currentClickState){
                case "none":
                    firstClickLogic(currentVideo, currentPlayWrapper);
                    break;
                case "once":
                    secondClickLogic(currentVideo, currentPlayWrapper);
                    break;
                case "twice":
                    thirdClickLogic(currentVideo, currentPlayWrapper);
                    break;
                default:
                    firstClickLogic(currentVideo, currentPlayWrapper);
            }
        });
    });
    // FIRST CLICK LOGIC
    function firstClickLogic(currentVideo, currentPlayWrapper) {
        currentVideo.muted = false; //unmute video
        currentVideo.currentTime = 0; //restart video
        currentPlayWrapper.style.display = "none"; //hide play ui
        //if unmuted, toggle music fade
        if (fadeMusicToggle && !isMuted()) fadeMusicToggle();
        videoClickStates.set(currentVideo, "once"); //update click logic
        videoOutOfViewStates.set(currentVideo, false); //ensure out of view logic is false
    }
    // SECOND CLICK LOGIC
    function secondClickLogic(currentVideo, currentPlayWrapper) {
        currentVideo.muted = true; //mute video again
        currentPlayWrapper.style.opacity = "100"; // set unmute opacity to 100
        currentPlayWrapper.style.display = "flex"; // display unmute ui
        //if unmuted, toggle music fade
        if (fadeMusicToggle && !isMuted()) fadeMusicToggle();
        videoClickStates.set(currentVideo, "twice"); //update click logic
    }
    // THIRD CLICK LOGIC
    function thirdClickLogic(currentVideo, currentPlayWrapper) {
        currentVideo.muted = false; //unmute video
        currentPlayWrapper.style.display = "none"; //hide unmute ui
        videoClickStates.set(currentVideo, "once"); //update click logic
        //if unmuted, toggle music fade
        if (fadeMusicToggle && !isMuted()) fadeMusicToggle();
        videoOutOfViewStates.set(currentVideo, false); //ensure out of view logic is false
    }
}


function $7c3e89c5f19d915a$export$a438eb016f9365f0() {
    document.addEventListener("click", function(e) {
        if (e.ctrlKey || e.metaKey) document.querySelectorAll(".menu-transition-cover").forEach((element)=>{
            element.setAttribute("style", "visibility:hidden !important");
        });
    });
}


// ADDING NEW HOMEPAGE VIDEOS GUIDE
// 1. compress videos using handbrake, 1 for desktop at 1080p, 1 for laptop at 720p, 1 for mobile at 480p (name video_device.mp4)
// 2. add the video to the Responsive-Videos folder in the digital ocean space
// 3. change ID's, titles and poster images in custom code embeds on videos in webflow
// 4. update titles in LazyLoadHomeVideos and in setAllHomepageVideoSources function
// 5. ensure trigger elements are set up correctly (section above respective video)
// dynamically set video sources based on screen size
function $e65177e8323c8d44$var$setVideoSource(video) {
    let videoSrc;
    const isContentHub = video == "content-hub";
    const videoElem = isContentHub ? document.querySelector(".content-hub-video") : document.getElementById(`${video}_video`);
    if (window.innerWidth <= 560) videoSrc = isContentHub ? $e65177e8323c8d44$var$getURLContentHub(videoElem, "mobile") : $e65177e8323c8d44$var$getURL(video, "mobile");
    else if (window.innerWidth <= 1680) videoSrc = isContentHub ? $e65177e8323c8d44$var$getURLContentHub(videoElem, "laptop") : $e65177e8323c8d44$var$getURL(video, "laptop");
    else videoSrc = isContentHub ? $e65177e8323c8d44$var$getURLContentHub(videoElem, "desktop") : $e65177e8323c8d44$var$getURL(video, "desktop");
    // Check if the current source is already set, then update it
    if (isContentHub) {
        const sourceElement = videoElem.querySelector("source");
        let videoSource = sourceElement ? sourceElement.getAttribute("src") : null;
        if (sourceElement.getAttribute("src") !== videoSrc) {
            videoSource = videoSrc;
            sourceElement.setAttribute("src", videoSource);
            videoElem.load();
            videoElem.play();
        }
    } else {
        if (videoElem.getAttribute("src") !== videoSrc) try {
            videoElem.pause(); // Pause the video before changing the src
            videoElem.removeAttribute("src"); // Clear the current src to ensure a fresh load
            videoElem.setAttribute("src", videoSrc); // Set the new src
            videoElem.load(); // Explicitly load the video
        } catch (error) {
            console.warn(`Failed to update video source for ${video}`, error);
        }
    }
    // Preload only if the video is already in the viewport
    const isInViewport = (elem)=>{
        const rect = elem.getBoundingClientRect();
        return rect.top < (window.innerHeight || document.documentElement.clientHeight) && rect.bottom > 0 && rect.left < (window.innerWidth || document.documentElement.clientWidth) && rect.right > 0;
    };
    if (isInViewport(videoElem) && videoElem.paused) videoElem.play().catch((error)=>{
        console.warn(`Failed to autoplay video: ${video}`, error);
    });
}
function $e65177e8323c8d44$export$b30aa5d352cf450c() {
    function satNavSources() {
        $e65177e8323c8d44$var$setVideoSource("showreelNav");
        $e65177e8323c8d44$var$setVideoSource("showreelNavXL");
    }
    satNavSources();
    $e65177e8323c8d44$var$debounceWindowResizedListener(satNavSources);
}
function $e65177e8323c8d44$export$1fa270b1652124a() {
    function setAllVideoSources() {
        $e65177e8323c8d44$var$setVideoSource("superai");
        $e65177e8323c8d44$var$setVideoSource("wow");
        $e65177e8323c8d44$var$setVideoSource("sgf-25");
        $e65177e8323c8d44$var$setVideoSource("showreel");
        $e65177e8323c8d44$var$setVideoSource("metamorphoses");
    }
    setAllVideoSources();
    $e65177e8323c8d44$var$debounceWindowResizedListener(setAllVideoSources);
}
function $e65177e8323c8d44$export$cac0c0e141a3e3f9() {
    // SUPERAI VIDEO
    $e65177e8323c8d44$var$setupLazyLoad(document.getElementById("superai_video"), document.getElementById("agency-section"));
    // WOW VIDEO
    $e65177e8323c8d44$var$setupLazyLoad(document.getElementById("wow_video"), document.getElementById("project-thumbnails"));
    // SGF VIDEO
    $e65177e8323c8d44$var$setupLazyLoad(document.getElementById("sgf-25_video"), document.getElementById("project-thumbnails-2"));
    // SHOWREEL VIDEO
    $e65177e8323c8d44$var$setupLazyLoad(document.getElementById("showreel_video"), document.getElementById("project-thumbnails-3"));
    // HERO TESSELATION VIDEO
    $e65177e8323c8d44$var$setupLazyLoad(document.getElementById("metamorphoses_video"), document.getElementById("metamorphoses_video"));
}
function $e65177e8323c8d44$export$ef88b0e6bbf5f15() {
    $e65177e8323c8d44$var$debounceWindowResizedListener(()=>$e65177e8323c8d44$var$setVideoSource("content-hub"));
}
// UTILITY FUNCTIONS
// set up IntersectionObserver for lazy loading videos
function $e65177e8323c8d44$var$setupLazyLoad(videoElement, triggerElement) {
    const observer = new IntersectionObserver(([entry])=>{
        if (entry.isIntersecting) {
            videoElement.setAttribute("preload", "auto"); // Preload the video
            videoElement.play(); // Play the video
            observer.unobserve(triggerElement); // Stop observing after triggering
        }
    }, {
        threshold: 0
    });
    observer.observe(triggerElement); // Start observing the trigger element
}
// render new video source based on window screen size change event
function $e65177e8323c8d44$var$debounceWindowResizedListener(func) {
    let resizeTimeout;
    window.addEventListener("resize", ()=>{
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(func, 500);
    });
}
// return correct digital ocean url
function $e65177e8323c8d44$var$getURL(video, device) {
    let url;
    if (video.includes("Nav")) url = `https://psychoactive-website-media.sfo3.cdn.digitaloceanspaces.com/Responsive-Videos/showreel_${device}.mp4`;
    else url = `https://psychoactive-website-media.sfo3.cdn.digitaloceanspaces.com/Responsive-Videos/${video}_${device}.mp4`;
    return url;
}
function $e65177e8323c8d44$var$getURLContentHub(video, device) {
    const sourceElement = video.querySelector("source");
    const videoSource = sourceElement ? sourceElement.getAttribute("src") : null;
    const match = videoSource.match(/\/([^\/]+)_(mobile|laptop|desktop)\.mp4$/);
    const videoTitle = match ? match[1] : null;
    const url = `https://psychoactive-website-media.sfo3.cdn.digitaloceanspaces.com/Responsive-Videos/${videoTitle}_${device}.mp4`;
    return url;
}


const $84a264530b3fb4fb$var$parceled = true; // for checking localhost vs github pages / CDN
const $84a264530b3fb4fb$var$currentPage = window.location.pathname;
const $84a264530b3fb4fb$var$homePage = $84a264530b3fb4fb$var$currentPage == "/";
const $84a264530b3fb4fb$var$contentHubOuter = $84a264530b3fb4fb$var$currentPage === "/content-hub/";
const $84a264530b3fb4fb$var$contentHubInner = $84a264530b3fb4fb$var$currentPage.startsWith("/content-hub/") && !$84a264530b3fb4fb$var$contentHubOuter;
const $0e9fad18b683d9f7$export$2e2bcd8739ae039 = $84a264530b3fb4fb$var$currentPage == "/about-new"; // change to just about later
const $84a264530b3fb4fb$var$onReady = ()=>{
    (0, $d38a99eedc423f53$export$2eeae37ba58f5688)(); // hides preloader and add event listener for frog lottie
    const audio = (0, $04e8563c0614c0b5$export$2e2bcd8739ae039)($84a264530b3fb4fb$var$homePage); // adds music, ui-sounds and mute-lottie functionality
    (0, $e65177e8323c8d44$export$b30aa5d352cf450c)(); // make nav showreel load video sources dynamically
    if ($84a264530b3fb4fb$var$homePage) {
        (0, $d293eb13d4f2d3b3$export$d38dd5f6b63689ca)(audio); // code for home video audio
        (0, $e65177e8323c8d44$export$1fa270b1652124a)(); // make homepage load video sources dynamically
        (0, $e65177e8323c8d44$export$cac0c0e141a3e3f9)(); // make homepage videos lazy load in on scroll
    // showreelHome(audio); // code for homepage showreel video
    }
    if ($84a264530b3fb4fb$var$contentHubInner) (0, $e65177e8323c8d44$export$ef88b0e6bbf5f15)();
    (0, $f4f04639bee629f7$export$703c2500fd6dece5)(audio); // code for nav showreel video
    (0, $fa75cf8f5b7d35be$export$2e2bcd8739ae039)(); // copies email to clipboard in footer
    (0, $3173f2e19d0fd4ea$export$2e2bcd8739ae039)(); // sets color hovers and cms filtering style for work page & content hub
    document.querySelector(".landing-video-container") && (0, $6ff8a782f3fb5c74$export$2e2bcd8739ae039)(); // for home page intro anim
    document.querySelectorAll(".article-rich-text a").forEach((e)=>{
        e.target = "_blank";
    });
    if (0, $0e9fad18b683d9f7$export$2e2bcd8739ae039) (0, $0e9fad18b683d9f7$export$2e2bcd8739ae039)(); // all custom code for about page 
    (0, $7c3e89c5f19d915a$export$a438eb016f9365f0)(); // prevent command click from triggering page transition
};
const $84a264530b3fb4fb$var$onLoading = ()=>{
    (0, $d38a99eedc423f53$export$890d625a1c13ecbb)();
};
if (document.readyState !== "loading") {
    $84a264530b3fb4fb$var$onLoading();
    $84a264530b3fb4fb$var$onReady();
} else {
    window.addEventListener("load", $84a264530b3fb4fb$var$onReady);
    document.addEventListener("DOMContentLoaded", $84a264530b3fb4fb$var$onLoading);
}
// close menu on escape key press
const $84a264530b3fb4fb$var$handleEscape = (e)=>{
    if (e.key === "Escape") {
        const closeBtn = document.querySelector(".burger-close-icon");
        const hamburgerMenu = document.querySelector(".hamburger-box");
        if (hamburgerMenu.style.opacity == 0) closeBtn.click();
    }
};
window.addEventListener("keydown", $84a264530b3fb4fb$var$handleEscape);


//# sourceMappingURL=app.js.map

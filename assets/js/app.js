class colors {
  green = "#198556"
  purPule = "#622fa2"
}
function calculation(viewersPrice, views, hours) {
  if (viewersPrice && views && hours != "") {
    let value = viewersPrice * (views * hours);
    let cal = value.toFixed(2).replace(/\.?0+$/, '');
    var formattedPrice = cal.toLocaleString();
    return formattedPrice;
  }
}

(function ($) {
  "use strict";

  $(function () {
    //Data Background Set
    $('[data-background]').each(function () {
      $(this).css('background-image', 'url(' + $(this).attr('data-background') + ')');
    }); //ScrollTop
    $(".scrolltop-btn").on("click", function () {
      $("body,html").animate({
        scrollTop: 0
      });
    }); //Mobile Menu
    $(".mobile-menu-toggle").on("click", function () {
      $(".body-overlay").addClass('overlay-on');
      $(".mobile-menu").addClass("active");
      return false;
    });
    $(".close-menu").on("click", function () {
      $(".mobile-menu").removeClass("active");
      $(".body-overlay").removeClass("overlay-on");
    });
    $(".body-overlay").on("click", function () {
      $(".mobile-menu").removeClass("active");
      $(this).removeClass("overlay-on");
    });
    $(".mobile-menu ul li.has-submenu a").each(function () {
      $(this).on("click", function () {
        $(this).siblings('ul').slideToggle();
        $(this).toggleClass("icon-rotate");
      });
    }); //Canvus Menu
    $(".ofcanvus-btn").on("click", function () {
      $(".ofcanvus-menu").addClass("active");
      return false;
    });
    $(".close-canvus").on("click", function () {
      $(".ofcanvus-menu").removeClass("active");
      return false;
    }); // Hide ofcanvus when click outside it.
    $(document).on("mouseup", function (e) {
      const ofcanvusMenu = $(".ofcanvus-menu");
      if (!ofcanvusMenu.is(e.target) && ofcanvusMenu.has(e.target).length === 0) {
        ofcanvusMenu.removeClass("active");
      }
    }); //dark dark mood
    var setDarkMode = (active = false) => {
      var wrapper = document.querySelector(":root");
      if (active) {
        wrapper.setAttribute("data-bs-theme", "dark");
        localStorage.setItem("theme", "dark");
      } else {
        wrapper.setAttribute("data-bs-theme", "dark");
        localStorage.setItem("theme", "dark");
      }
    };
    var toggleDarkMode = () => {
      var theme = document.querySelector(":root").getAttribute("data-bs-theme"); // If the current theme is "dark", we want to activate dark
      setDarkMode(theme === "dark");
    };
    var initDarkMode = () => {
      var theme = localStorage.getItem("theme");
      if (theme == "dark") {
        setDarkMode(true);
      } else {
        setDarkMode(false);
      }
      var toggleButton = document.querySelector(".dark-light-switcher");
      toggleButton && toggleButton.addEventListener("click", toggleDarkMode);
    };
    initDarkMode(); //Pricing Table
    $(".switch-input").on("change", function () {
      if (this.checked) {
        $(".yearly-price").css({
          display: 'block'
        });
        $(".monthly-price").css({
          display: 'none'
        });
      } else {
        $(".yearly-price").css({
          display: 'none'
        });
        $(".monthly-price").css({
          display: 'block'
        });
      }
    });
    $(".expand-btn").each(function () {
      $(this).on("click", function () {
        $(this).siblings(".feature-list").toggleClass("expand-list");
        $(this).toggleClass("active");
      });
    }); //Feedback Slider
    const swiper = new Swiper('.feedback-slider', {
      slidesPerView: 3,
      speed: 700,
      spaceBetween: 30,
      slidesPerGroup: 2,
      loop: true,
      breakpoints: {
        320: {
          slidesPerView: 1
        },
        768: {
          slidesPerView: 2
        },
        1200: {
          slidesPerView: 3
        }
      }
    });
    const blogSlider = new Swiper('.hm2-blog-slider', {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      breakpoints: {
        320: {
          slidesPerView: 1
        },
        768: {
          slidesPerView: 2
        },
        1200: {
          slidesPerView: 3
        }
      }
    });
    const brandSlider = new Swiper(".brand-slider", {
      slidesPerView: 5,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 3000
      },
      breakpoints: {
        320: {
          slidesPerView: 1
        },
        400: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        768: {
          slidesPerView: 3
        },
        992: {
          slidesPerView: 4,
          spaceBetween: 25
        },
        1200: {
          slidesPerView: 5,
          spaceBetween: 25
        }
      }
    });
    const productSlider = new Swiper(".gm-product-slider", {
      slidesPerView: 4,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 3000
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      breakpoints: {
        320: {
          slidesPerView: 1
        },
        768: {
          slidesPerView: 2
        },
        992: {
          slidesPerView: 3
        },
        1400: {
          slidesPerView: 4,
          spaceBetween: 25
        }
      }
    });
    const dmFeedbackSlider = new Swiper(".dm-feedback-slider", {
      slidesPerView: 3,
      spaceBetween: 24,
      loop: true,
      speed: 1500,
      autoplay: {
        delay: 5000
      },
      breakpoints: {
        320: {
          slidesPerView: 1
        },
        768: {
          slidesPerView: 2
        },
        992: {
          slidesPerView: 3
        }
      }
    });
    const vps_scripts_slider = new Swiper(".vps-scripts-slider", {
      slidesPerView: 6,
      spaceBetween: 24,
      loop: true,
      speed: 1500,
      navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev'
      },
      autoplay: {
        delay: 5000
      },
      breakpoints: {
        320: {
          slidesPerView: 1
        },
        400: {
          slidesPerView: 2
        },
        768: {
          slidesPerView: 3
        },
        992: {
          slidesPerView: 4
        },
        1200: {
          slidesPerView: 5
        },
        1400: {
          slidesPerView: 6
        }
      }
    }); //HM2 Feedback Slider
    const hm2_feedback_slider = new Swiper(".hm2-feedback-slider", {
      slidesPerView: 1,
      spaceBetween: 24,
      loop: true,
      speed: 1500,
      autoplay: {
        delay: 5000
      }
    }); //Game Hosting Feedback Slider
    const gh_feedback_slider = new Swiper(".gh-feedback-slider", {
      slidesPerView: 3,
      spaceBetween: 24,
      loop: true,
      speed: 1500,
      autoplay: {
        delay: 5000
      },
      breakpoints: {
        320: {
          slidesPerView: 1
        },
        992: {
          slidesPerView: 2
        },
        1200: {
          slidesPerView: 3
        }
      }
    }); //Game Hosting Feedback Slider
    const h4_feedback_slider = new Swiper(".h4-feedback-slider", {
      slidesPerView: 3,
      spaceBetween: 24,
      loop: true,
      speed: 1500,
      autoplay: {
        delay: 5000
      },
      breakpoints: {
        0: {
          slidesPerView: 1
        },
        768: {
          slidesPerView: 2
        },
        1200: {
          slidesPerView: 3
        }
      }
    }); //home4 apps slider
    const h4AppsSlider = new Swiper(".h4-apps-slider", {
      slidesPerView: 4,
      spaceBetween: 24,
      loop: true,
      autoplay: {
        delay: 3000
      },
      breakpoints: {
        0: {
          slidesPerView: 1
        },
        375: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        768: {
          slidesPerView: 3
        },
        992: {
          slidesPerView: 4,
          spaceBetween: 25
        }
      }
    });
    const h5FeedbackSlider = new Swiper(".h5-feedback-slider", {
      slidesPerView: 3,
      spaceBetween: 24,
      loop: true,
      autoplay: {
        delay: 3000
      },
      navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev'
      },
      breakpoints: {
        0: {
          slidesPerView: 1
        },
        1200: {
          slidesPerView: 2
        },
        1400: {
          slidesPerView: 3
        }
      }
    });
    const pricingPlanSlider = new Swiper(".pricing-plan-slider", {
      slidesPerView: 4,
      spaceBetween: 24,
      loop: true,
      speed: 1500,
      autoplay: {
        delay: 5000
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      breakpoints: {
        0: {
          slidesPerView: 1
        },
        768: {
          slidesPerView: 2
        },
        992: {
          slidesPerView: 3
        },
        1400: {
          slidesPerView: 4
        }
      }
    });
    const emPricingSlider = new Swiper(".em-pricing-slider", {
      loop: true,
      speed: 1500,
      autoplay: {
        delay: 5000
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      breakpoints: {
        0: {
          slidesPerView: 1
        },
        768: {
          slidesPerView: 2,
          centeredSlides: false,
          spaceBetween: 24
        },
        992: {
          slidesPerView: 3,
          centeredSlides: true,
          spaceBetween: -25
        }
      }
    });
    const mnHeroPricingSlider = new Swiper(".mn-hero-pricing-slider", {
      loop: true,
      autoplay: true,
      navigation: {
        nextEl: '.slide-control-next',
        prevEl: '.slide-control-prev'
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 16,
          centeredSlides: false
        },
        768: {
          slidesPerView: 3,
          spaceBetween: -150,
          centeredSlides: true
        }
      }
    });
    const mnChattingSlider = new Swiper(".mn-chatting-slider", {
      loop: true,
      autoplay: true,
      slidesPerView: 3,
      centeredSlides: true,
      direction: "vertical"
    });
    const mnFeatureSlider = new Swiper(".mn-feature-slider", {
      autoplay: true,
      loop: true,
      spaceBetween: 24,
      breakpoints: {
        0: {
          slidesPerView: 1
        },
        768: {
          slidesPerView: 2
        },
        1200: {
          slidesPerView: 3
        }
      }
    });
    const mnFeedbackSlider = new Swiper(".mn-feedback-slider", {
      slidesPerView: 1,
      autoplay: true,
      speed: 700,
      loop: true,
      spaceBetween: 24,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      }
    });
    const hm7HeroSlider = new Swiper(".hm7-hero-slider", {
      slidesPerView: 1,
      autoplay: true,
      loop: true,
      speed: 700,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      navigation: {
        nextEl: '.hm7-hero-slider-next',
        prevEl: '.hm7-hero-slider-prev'
      }
    });
    const hm7ApplicationSlider = new Swiper(".hm7-application-slider", {
      slidesPerView: 3,
      spaceBetween: 24,
      autoplay: true,
      loop: true,
      speed: 700,
      navigation: {
        nextEl: '.hm7-app-slide-next',
        prevEl: '.hm7-app-slide-prev'
      },
      breakpoints: {
        0: {
          slidesPerView: 1
        },
        768: {
          slidesPerView: 2
        },
        992: {
          slidesPerView: 3
        },
        1200: {
          slidesPerView: 2
        },
        1400: {
          slidesPerView: 3
        }
      }
    });
    const hm7FeedbackSlider = new Swiper(".hm7-feedback-slider", {
      slidesPerView: 1,
      autoplay: true,
      loop: true,
      spaceBetween: 24,
      speed: 800,
      navigation: {
        nextEl: '.hm7-feedback-next',
        prevEl: '.hm7-feedback-prev'
      }
    });
    const cmpPricingSlider = new Swiper(".cmp-pricing-slider", {
      slidesPerView: 3,
      spaceBetween: 24,
      speed: 800,
      navigation: {
        nextEl: '.cmp-pricing-prev',
        prevEl: '.cmp-pricing-next'
      },
      breakpoints: {
        0: {
          slidesPerView: 1
        },
        768: {
          slidesPerView: 2
        },
        1200: {
          slidesPerView: 3
        }
      }
    });
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    const dd_feedback_slider = new Swiper(".dd-feedback-slider", {
      slidesPerView: 2,
      spaceBetween: 24,
      autoplay: true,
      speed: 700,
      loop: true,
      breakpoints: {
        0: {
          slidesPerView: 1
        },
        1200: {
          slidesPerView: 2
        }
      }
    });
    const hm10_feedback_slider = new Swiper(".hm10-feedback-slider", {
      slidesPerView: 3,
      spaceBetween: 24,
      autoplay: true,
      speed: 700,
      loop: true,
      breakpoints: {
        0: {
          slidesPerView: 1
        },
        768: {
          slidesPerView: 2
        },
        1200: {
          slidesPerView: 3
        }
      }
    });
    const ops_slider = new Swiper(".ops-slider", {
      slidesPerView: 3,
      spaceBetween: 24,
      autoplay: true,
      speed: 700,
      loop: true,
      navigation: {
        nextEl: '.ops-slider-btn.btn-next',
        prevEl: '.ops-slider-btn.btn-prev'
      },
      breakpoints: {
        0: {
          slidesPerView: 2
        },
        576: {
          slidesPerView: 3
        },
        768: {
          slidesPerView: 4
        },
        1200: {
          slidesPerView: 3
        }
      }
    }); //Accordion
    $(".hm2-accordion .accordion-header a").each(function () {
      $(this).on("click", function () {
        $(this).parents(".accordion").find(".show").parents(".acoridion-item").addClass("active");
      });
    }); //notice bar close
    $(".notice-close").on("click", function () {
      $(".notice-wrapper").slideUp();
      $(".notice-bar").slideUp();
      $("body").css("overflow", "auto");
    });
    $(".notice-toggle").on("click", function () {
      $(".notice-wrapper").toggleClass("active");
      if ($(".notice-wrapper").hasClass('active')) {
        $("body").css('overflow', 'hidden');
      } else {
        $("body").css("overflow", "auto");
      }
    });
  }); //video popup
  $('.vps-video-popup').magnificPopup({
    type: 'iframe'
  }); //counterup
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  }); //countdown timer
  $(".countdown-timer").each(function () {
    var $data_date = $(this).data('date');
    $(this).countdown({
      date: $data_date
    });
  }); //data center
  $(".mn-data-center .data-center-pointer").each(function () {
    $(this).on('mouseenter', function () {
      $(this).parents('.mn-data-center').find("a.active").removeClass('active');
      $(this).addClass("active");
    });
  }); //pricing switch
  $(".crm-monthly").each(function () {
    $(this).on("click", function () {
      $(this).parents(".crm-pricing-switch-wrapper").find(".crm-checkbox-switch").prop("checked", false);
    });
  });
  $(".crm-yearly").each(function () {
    $(this).on("click", function () {
      $(this).parents(".crm-pricing-switch-wrapper").find(".crm-checkbox-switch").prop("checked", true);
    });
  });
  $(".crm-pricing-switch").each(function () {
    $(this).on("click", function () {
      var isBoxChecked = $(this).find(".crm-checkbox-switch").is(":checked");
      if (isBoxChecked !== true) {
        $(this).parents(".table").find(".crm_monthly_price").show();
        $(this).parents(".table").find(".crm_yearly_price").hide();
      } else {
        $(this).parents(".table").find(".crm_monthly_price").hide();
        $(this).parents(".table").find(".crm_yearly_price").show();
      }
    });
  });
  $(window).on("scroll", function () {
    var offsetTop = $(window).scrollTop();
    if (offsetTop > 150) {
      $(".scrolltop-btn").fadeIn();
    } else {
      $(".scrolltop-btn").fadeOut();
    }
    var scrollBarPosition = $(window).scrollTop();
    if (scrollBarPosition > 80) {
      $("header").addClass("sticky-header");
    } else {
      $("header").removeClass("sticky-header");
    }
  }); //Sticky Header
  jQuery(window).on('load', function () {
    var feedBack = document.querySelectorAll(".feedback-wrapper");
    if (feedBack.length > 0) {
      var elem = document.querySelector('.feedback-massonry');
      var msnry = new Masonry(elem, {
        itemSelector: '.col-lg-4',
        columnWidth: 1
      });
    }
    $(".loader-wrap").fadeOut(); //Price range slider
    $(".range-slider").slider({
      min: 1,
      max: 6,
      value: 2
    });
    var rangeInput = $("#vps_range_slider input");
    var checkValue = rangeInput.val(); //vps 1 value

    $(".vps_1_value_").show();
    $(".vps_2_value_").hide();
    $(".vps_3_value_").hide();
    $(".vps_4_value_").hide();
    $(".vps_5_value_").hide();
    $(".vps_6_value_").hide();

    // Latest Code Starts From Here
    let color = new colors();
    let twitchBtn;
    let kickBtn;
    let viewersPrice;
    var views = 50;
    let hours;
    let result;
    $("#viewers-btn-5").click(function () {
      $("#viewers-btn-10").removeClass('active')
      $("#viewers-btn-25").removeClass('active')
      $("#viewers-btn-50").removeClass('active')
      $(".vps_1_value_").show();
      $(".vps_2_value_").hide();
      $(".vps_3_value_").hide();
      $(".vps_4_value_").hide();
      $(".vps_5_value_").hide();
      $(".vps_6_value_").hide();
      views = 50;
      calculate(views);
    })
    $("#viewers-btn-10").click(function () {
      $("#viewers-btn-5").removeClass('active')
      $("#viewers-btn-25").removeClass('active')
      $("#viewers-btn-50").removeClass('active')
      $(".vps_1_value_").hide();
      $(".vps_2_value_").show();
      $(".vps_3_value_").hide();
      $(".vps_4_value_").hide();
      $(".vps_5_value_").hide();
      $(".vps_6_value_").hide();
      views = 100;
      calculate(views);
    })
    $("#viewers-btn-25").click(function () {
      $("#viewers-btn-5").removeClass('active')
      $("#viewers-btn-10").removeClass('active')
      $("#viewers-btn-50").removeClass('active')
      $(".vps_1_value_").hide();
      $(".vps_2_value_").hide();
      $(".vps_3_value_").show();
      $(".vps_4_value_").hide();
      $(".vps_5_value_").hide();
      $(".vps_6_value_").hide();
      views = 250;
      calculate(views);
    })
    $("#viewers-btn-50").click(function () {
      $("#viewers-btn-5").removeClass('active')
      $("#viewers-btn-10").removeClass('active')
      $("#viewers-btn-25").removeClass('active')
      $(".vps_1_value_").hide();
      $(".vps_2_value_").hide();
      $(".vps_3_value_").hide();
      $(".vps_4_value_").show();
      $(".vps_5_value_").hide();
      $(".vps_6_value_").hide();
      views = 500;
      calculate(views);
    })
    function calculate(views) {
      // One twitch viewer costs $0.0045 for one hour.
      viewersPrice = 0.0045;
      if (checkValue == 1) {
        hours = 50;
        parseInt(views);
        parseInt(hours);
        result = calculation(viewersPrice*2.25, views, hours);
        $("#totalPrice").text("$" + result + "");
        if(views===50) {
          $("#purchaseLinkActual").attr("data-sellix-product", "64a3b6d161e27"); // Set href to "hours50"
        }
        if(views===100) {
          $("#purchaseLinkActual").attr("data-sellix-product", "64a3c8722d3fb"); // Set href to "hours50"
        }
        if(views===250) {
          $("#purchaseLinkActual").attr("data-sellix-product", "64a3ca0d98a78"); // Set href to "hours50"
        }
        if(views===500) {
          $("#purchaseLinkActual").attr("data-sellix-product", "64a3cc7676a27"); // Set href to "hours50"
        }
      }
      if (checkValue == 2) {
        hours = 100;
        parseInt(views);
        parseInt(hours);
        result = calculation(viewersPrice*2.25, views, hours)
        $("#totalPrice").text("$" + result + "");
        if(views===50) {
          $("#purchaseLinkActual").attr("data-sellix-product", "64a3c6c51aece"); // Set href to "hours50"
        }
        if(views===100) {
          $("#purchaseLinkActual").attr("data-sellix-product", "64a3c8bc096f3"); // Set href to "hours50"
        }
        if(views===250) {
          $("#purchaseLinkActual").attr("data-sellix-product", "64a3ca4e87bec"); // Set href to "hours50"
        }
        if(views===500) {
          $("#purchaseLinkActual").attr("data-sellix-product", "64a3ccc991e46"); // Set href to "hours50"
        }
      }
      if (checkValue == 3) {
        hours = 150;
        parseInt(views);
        parseInt(hours);
        result = calculation(viewersPrice*2.25, views, hours)
        $("#totalPrice").text("$" + result + "");
        if(views===50) {
          $("#purchaseLinkActual").attr("data-sellix-product", "64a3c7559f14a"); // Set href to "hours50"
        }
        if(views===100) {
          $("#purchaseLinkActual").attr("data-sellix-product", "64a3c8fc577c5"); // Set href to "hours50"
        }
        if(views===250) {
          $("#purchaseLinkActual").attr("data-sellix-product", "64a3ca9a5a2c1"); // Set href to "hours50"
        }
        if(views===500) {
          $("#purchaseLinkActual").attr("data-sellix-product", "64a3cd03c8ef6"); // Set href to "hours50"
        }
      }
      if (checkValue == 4) {
        hours = 200;
        parseInt(views);
        parseInt(hours);
        result = calculation(viewersPrice*2.25, views, hours)
        $("#totalPrice").text("$" + result + "");
        if(views===50) {
          $("#purchaseLinkActual").attr("data-sellix-product", "64a3c7a08bb4b"); // Set href to "hours50"
        }
        if(views===100) {
          $("#purchaseLinkActual").attr("data-sellix-product", "64a3c938bf2f4"); // Set href to "hours50"
        }
        if(views===250) {
          $("#purchaseLinkActual").attr("data-sellix-product", "64a3cad68e468"); // Set href to "hours50"
        }
        if(views===500) {
          $("#purchaseLinkActual").attr("data-sellix-product", "64a3cd36336f3"); // Set href to "hours50"
        }
      }
      if (checkValue == 5) {
        hours = 250;
        parseInt(views);
        parseInt(hours);
        result = calculation(viewersPrice*2.25, views, hours)
        $("#totalPrice").text("$" + result + "");
        if(views===50) {
          $("#purchaseLinkActual").attr("data-sellix-product", "64a3c7dc8ff0e"); // Set href to "hours50"
        }
        if(views===100) {
          $("#purchaseLinkActual").attr("data-sellix-product", "64a3c975a5e1f"); // Set href to "hours50"
        }
        if(views===250) {
          $("#purchaseLinkActual").attr("data-sellix-product", "64a3cb349b855"); // Set href to "hours50"
        }
        if(views===500) {
          $("#purchaseLinkActual").attr("data-sellix-product", "64a3cd6ab249b"); // Set href to "hours50"
        }
      }
      if (checkValue == 6) {
        hours = 300;
        parseInt(views);
        parseInt(hours);
        result = calculation(viewersPrice*2.25, views, hours)
        $("#totalPrice").text("$" + result + "");
        if(views===50) {
          $("#purchaseLinkActual").attr("data-sellix-product", "64a3c81e0562d"); // Set href to "hours50"
        }
        if(views===100) {
          $("#purchaseLinkActual").attr("data-sellix-product", "64a3c9b42b925"); // Set href to "hours50"
        }
        if(views===250) {
          $("#purchaseLinkActual").attr("data-sellix-product", "64a3cbbe551c0"); // Set href to "hours50"
        }
        if(views===500) {
          $("#purchaseLinkActual").attr("data-sellix-product", "64a3cd6d09b9d"); // Set href to "hours50"
        }
      }
    }
    function calculateBySlider() {
      // One twitch viewer costs $0.0045 for one hour.
      viewersPrice = 0.0045;
      let getViews = views;
      if (getViews != "") {
        if (checkValue == 1) {
          hours = 50;
          parseInt(views);
          parseInt(hours);
          result = calculation(viewersPrice*2.25, views, hours);
          $("#totalPrice").text("$" + result + "");
          if(views===50) {
            $("#purchaseLinkActual").attr("data-sellix-product", "64a3b6d161e27"); // Set href to "hours50"
          }
          if(views===100) {
            $("#purchaseLinkActual").attr("data-sellix-product", "64a3c8722d3fb"); // Set href to "hours50"
          }
          if(views===250) {
            $("#purchaseLinkActual").attr("data-sellix-product", "64a3ca0d98a78"); // Set href to "hours50"
          }
          if(views===500) {
            $("#purchaseLinkActual").attr("data-sellix-product", "64a3cc7676a27"); // Set href to "hours50"
          }
        }
        if (checkValue == 2) {
          hours = 100;
          parseInt(views);
          parseInt(hours);
          result = calculation(viewersPrice*2.25, views, hours)
          $("#totalPrice").text("$" + result + "");
          if(views===50) {
            $("#purchaseLinkActual").attr("data-sellix-product", "64a3c6c51aece"); // Set href to "hours50"
          }
          if(views===100) {
            $("#purchaseLinkActual").attr("data-sellix-product", "64a3c8bc096f3"); // Set href to "hours50"
          }
          if(views===250) {
            $("#purchaseLinkActual").attr("data-sellix-product", "64a3ca4e87bec"); // Set href to "hours50"
          }
          if(views===500) {
            $("#purchaseLinkActual").attr("data-sellix-product", "64a3ccc991e46"); // Set href to "hours50"
          }
        }
        if (checkValue == 3) {
          hours = 150;
          parseInt(views);
          parseInt(hours);
          result = calculation(viewersPrice*2.25, views, hours)
          $("#totalPrice").text("$" + result + "");
          if(views===50) {
            $("#purchaseLinkActual").attr("data-sellix-product", "64a3c7559f14a"); // Set href to "hours50"
          }
          if(views===100) {
            $("#purchaseLinkActual").attr("data-sellix-product", "64a3c8fc577c5"); // Set href to "hours50"
          }
          if(views===250) {
            $("#purchaseLinkActual").attr("data-sellix-product", "64a3ca9a5a2c1"); // Set href to "hours50"
          }
          if(views===500) {
            $("#purchaseLinkActual").attr("data-sellix-product", "64a3cd03c8ef6"); // Set href to "hours50"
          }
        }
        if (checkValue == 4) {
          hours = 200;
          parseInt(views);
          parseInt(hours);
          result = calculation(viewersPrice*2.25, views, hours)
          $("#totalPrice").text("$" + result + "");
          if(views===50) {
            $("#purchaseLinkActual").attr("data-sellix-product", "64a3c7a08bb4b"); // Set href to "hours50"
          }
          if(views===100) {
            $("#purchaseLinkActual").attr("data-sellix-product", "64a3c938bf2f4"); // Set href to "hours50"
          }
          if(views===250) {
            $("#purchaseLinkActual").attr("data-sellix-product", "64a3cad68e468"); // Set href to "hours50"
          }
          if(views===500) {
            $("#purchaseLinkActual").attr("data-sellix-product", "64a3cd36336f3"); // Set href to "hours50"
          }
        }
        if (checkValue == 5) {
          hours = 250;
          parseInt(views);
          parseInt(hours);
          result = calculation(viewersPrice*2.25, views, hours)
          $("#totalPrice").text("$" + result + "");
          if(views===50) {
            $("#purchaseLinkActual").attr("data-sellix-product", "64a3c7dc8ff0e"); // Set href to "hours50"
          }
          if(views===100) {
            $("#purchaseLinkActual").attr("data-sellix-product", "64a3c975a5e1f"); // Set href to "hours50"
          }
          if(views===250) {
            $("#purchaseLinkActual").attr("data-sellix-product", "64a3cb349b855"); // Set href to "hours50"
          }
          if(views===500) {
            $("#purchaseLinkActual").attr("data-sellix-product", "64a3cd6ab249b"); // Set href to "hours50"
          }
        }
        if (checkValue == 6) {
          hours = 300;
          parseInt(views);
          parseInt(hours);
          result = calculation(viewersPrice*2.25, views, hours);
          $("#totalPrice").text("$" + result + "");
          if(views===50) {
            $("#purchaseLinkActual").attr("data-sellix-product", "64a3c81e0562d"); // Set href to "hours50"
          }
          if(views===100) {
            $("#purchaseLinkActual").attr("data-sellix-product", "64a3c9b42b925"); // Set href to "hours50"
          }
          if(views===250) {
            $("#purchaseLinkActual").attr("data-sellix-product", "64a3cbbe551c0"); // Set href to "hours50"
          }
          if(views===500) {
            $("#purchaseLinkActual").attr("data-sellix-product", "64a3cd6d09b9d"); // Set href to "hours50"
          }
        }
      }
    }
    $("#vps_range_slider").on('mouseenter hover click', calculateBySlider)
    function twitchTvChangeColor() {
      $(".h5-pricing-controls li a").css("background-color", "");
      $(".h5-pricing-controls li a.active").css("background-color", color.purPule);
      $(".range-slider-wrapper .slider-selection").css("background-color", color.purPule);
      $(".range-slider-wrapper .slider-handle").css("background-color", "rgb(83 35 143)");
      $(".purchasePlansBtn").css("background", "linear-gradient(95.45deg, #622fa1 0.64%, #491d80 98.23%)");
      $("[data-bs-theme=dark] .price-slider-wrapper .vps_labels span").css("background", "linear-gradient(95.45deg, rgb(98, 47, 162) 0.64%, rgb(72 29 127) 98.23%)");
      var css = '[data-bs-theme=dark] .price-slider-wrapper .vps_labels span.active::after {'
        + 'content: "";'  // Change or remove the content
        + 'background-color: #562691;'  // Change the background color
        // Add more CSS properties as needed
        + '}';
      $('<style>')
        .prop('type', 'text/css')
        .html(css)
        .appendTo('head');
        var css2 = '.primary-btn::before {'
        + 'background: linear-gradient(95.45deg, #4f2288 98.23%, #622fa2 0.64%);'  // Change the background color
        // Add more CSS properties as needed
        + '}';
        $('<style>')
        .prop('type', 'text/css')
        .html(css2)
        .appendTo('head');
      twitchBtn = true;
      kickBtn = false;
      if (twitchBtn == true && kickBtn == false) {
        function calculate() {
          // One twitch viewer costs $0.0045 for one hour.
          viewersPrice = 0.0045;
          if (checkValue == 1) {
            hours = 50;
            parseInt(views);
            parseInt(hours);
            result = calculation(viewersPrice*2.25, views, hours);
            $("#totalPrice").text("$" + result + "");
            if(views===50) {
              $("#purchaseLinkActual").attr("data-sellix-product", "64a3b6d161e27"); // Set href to "hours50"
            }
            if(views===100) {
              $("#purchaseLinkActual").attr("data-sellix-product", "64a3c8722d3fb"); // Set href to "hours50"
            }
            if(views===250) {
              $("#purchaseLinkActual").attr("data-sellix-product", "64a3ca0d98a78"); // Set href to "hours50"
            }
            if(views===500) {
              $("#purchaseLinkActual").attr("data-sellix-product", "64a3cc7676a27"); // Set href to "hours50"
            }
          }
          if (checkValue == 2) {
            hours = 100;
            parseInt(views);
            parseInt(hours);
            result = calculation(viewersPrice*2.25, views, hours)
            $("#totalPrice").text("$" + result + "");
            if(views===50) {
              $("#purchaseLinkActual").attr("data-sellix-product", "64a3c6c51aece"); // Set href to "hours50"
            }
            if(views===100) {
              $("#purchaseLinkActual").attr("data-sellix-product", "64a3c8bc096f3"); // Set href to "hours50"
            }
            if(views===250) {
              $("#purchaseLinkActual").attr("data-sellix-product", "64a3ca4e87bec"); // Set href to "hours50"
            }
            if(views===500) {
              $("#purchaseLinkActual").attr("data-sellix-product", "64a3ccc991e46"); // Set href to "hours50"
            }
          }
          if (checkValue == 3) {
            hours = 150;
            parseInt(views);
            parseInt(hours);
            result = calculation(viewersPrice*2.25, views, hours)
            $("#totalPrice").text("$" + result + "");
            if(views===50) {
              $("#purchaseLinkActual").attr("data-sellix-product", "64a3c7559f14a"); // Set href to "hours50"
            }
            if(views===100) {
              $("#purchaseLinkActual").attr("data-sellix-product", "64a3c8fc577c5"); // Set href to "hours50"
            }
            if(views===250) {
              $("#purchaseLinkActual").attr("data-sellix-product", "64a3ca9a5a2c1"); // Set href to "hours50"
            }
            if(views===500) {
              $("#purchaseLinkActual").attr("data-sellix-product", "64a3cd03c8ef6"); // Set href to "hours50"
            }
          }
          if (checkValue == 4) {
            hours = 200;
            parseInt(views);
            parseInt(hours);
            result = calculation(viewersPrice*2.25, views, hours)
            $("#totalPrice").text("$" + result + "");
            if(views===50) {
              $("#purchaseLinkActual").attr("data-sellix-product", "64a3c7a08bb4b"); // Set href to "hours50"
            }
            if(views===100) {
              $("#purchaseLinkActual").attr("data-sellix-product", "64a3c938bf2f4"); // Set href to "hours50"
            }
            if(views===250) {
              $("#purchaseLinkActual").attr("data-sellix-product", "64a3cad68e468"); // Set href to "hours50"
            }
            if(views===500) {
              $("#purchaseLinkActual").attr("data-sellix-product", "64a3cd36336f3"); // Set href to "hours50"
            }
          }
          if (checkValue == 5) {
            hours = 250;
            parseInt(views);
            parseInt(hours);
            result = calculation(viewersPrice*2.25, views, hours)
            $("#totalPrice").text("$" + result + "");
            if(views===50) {
              $("#purchaseLinkActual").attr("data-sellix-product", "64a3c7dc8ff0e"); // Set href to "hours50"
            }
            if(views===100) {
              $("#purchaseLinkActual").attr("data-sellix-product", "64a3c975a5e1f"); // Set href to "hours50"
            }
            if(views===250) {
              $("#purchaseLinkActual").attr("data-sellix-product", "64a3cb349b855"); // Set href to "hours50"
            }
            if(views===500) {
              $("#purchaseLinkActual").attr("data-sellix-product", "64a3cd6ab249b"); // Set href to "hours50"
            }
          }
          if (checkValue == 6) {
            hours = 300;
            parseInt(views);
            parseInt(hours);
            result = calculation(viewersPrice*2.25, views, hours);
            $("#totalPrice").text("$" + result + "");
            if(views===50) {
              $("#purchaseLinkActual").attr("data-sellix-product", "64a3c81e0562d"); // Set href to "hours50"
            }
            if(views===100) {
              $("#purchaseLinkActual").attr("data-sellix-product", "64a3c9b42b925"); // Set href to "hours50"
            }
            if(views===250) {
              $("#purchaseLinkActual").attr("data-sellix-product", "64a3cbbe551c0"); // Set href to "hours50"
            }
            if(views===500) {
              $("#purchaseLinkActual").attr("data-sellix-product", "64a3cd6d09b9d"); // Set href to "hours50"
            }
          }
        }
        $("#vps_range_slider").on('mouseenter hover click', calculate)
        $("#twitch_click").on('mouseenter hover click', calculate)
        $("#kick_click").on('mouseenter hover click', calculate)
        $("#viewers-btn-5").click(function () {
          $("#viewers-btn-10").removeClass('active')
          $("#viewers-btn-25").removeClass('active')
          $("#viewers-btn-50").removeClass('active')
          $("#viewers-btn-5").css("background-color", color.purPule);
          $("#viewers-btn-10").css("background-color", "");
          $("#viewers-btn-25").css("background-color", "");
          $("#viewers-btn-50").css("background-color", "");
          $(".vps_1_value_").show();
          $(".vps_2_value_").hide();
          $(".vps_3_value_").hide();
          $(".vps_4_value_").hide();
          $(".vps_5_value_").hide();
          $(".vps_6_value_").hide();
          views = 50;
          calculate(views);
        })
        $("#viewers-btn-10").click(function () {
          $("#viewers-btn-5").removeClass('active')
          $("#viewers-btn-25").removeClass('active')
          $("#viewers-btn-50").removeClass('active')
          $("#viewers-btn-10").css("background-color", color.purPule);
          $("#viewers-btn-5").css("background-color", "");
          $("#viewers-btn-25").css("background-color", "");
          $("#viewers-btn-50").css("background-color", "");
          $(".vps_1_value_").hide();
          $(".vps_2_value_").show();
          $(".vps_3_value_").hide();
          $(".vps_4_value_").hide();
          $(".vps_5_value_").hide();
          $(".vps_6_value_").hide();
          views = 100;
          calculate(views);
        })
        $("#viewers-btn-25").click(function () {
          $("#viewers-btn-5").removeClass('active')
          $("#viewers-btn-10").removeClass('active')
          $("#viewers-btn-50").removeClass('active')
          $("#viewers-btn-25").css("background-color", color.purPule);
          $("#viewers-btn-5").css("background-color", "");
          $("#viewers-btn-10").css("background-color", "");
          $("#viewers-btn-50").css("background-color", "");
          $(".vps_1_value_").hide();
          $(".vps_2_value_").hide();
          $(".vps_3_value_").show();
          $(".vps_4_value_").hide();
          $(".vps_5_value_").hide();
          $(".vps_6_value_").hide();
          views = 250;
          calculate(views);
        })
        $("#viewers-btn-50").click(function () {
          $("#viewers-btn-5").removeClass('active')
          $("#viewers-btn-10").removeClass('active')
          $("#viewers-btn-25").removeClass('active')
          $("#viewers-btn-50").css("background-color", color.purPule);
          $("#viewers-btn-10").css("background-color", "");
          $("#viewers-btn-25").css("background-color", "");
          $("#viewers-btn-5").css("background-color", "");
          $(".vps_1_value_").hide();
          $(".vps_2_value_").hide();
          $(".vps_3_value_").hide();
          $(".vps_4_value_").show();
          $(".vps_5_value_").hide();
          $(".vps_6_value_").hide();
          views = 500;
          calculate(views);
        })
      }
    }
    $("#twitchTvBtn").on('click', twitchTvChangeColor)
    function kickChangeColor() {
      $(".h5-pricing-controls li a").css("background-color", "");
      $(".h5-pricing-controls li a.active").css("background-color", color.green);
      $(".range-slider-wrapper .slider-selection").css("background-color", color.green);
      $(".range-slider-wrapper .slider-handle").css("background-color", "rgb(17 109 69)");
      $(".purchasePlansBtn").css("background", "linear-gradient(95.45deg, #188455 0.64%, #0c5d3a 98.23%)");
      $("[data-bs-theme=dark] .price-slider-wrapper .vps_labels span").css("background", "linear-gradient(95.45deg, rgb(25 133 86) 0.64%, rgb(11 89 55) 98.23%)")
      var css = '[data-bs-theme=dark] .price-slider-wrapper .vps_labels span.active::after {'
        + 'content: "";'  // Change or remove the content
        + 'background-color: #126f46;'  // Change the background color
        // Add more CSS properties as needed
        + '}';
      $('<style>')
        .prop('type', 'text/css')
        .html(css)
        .appendTo('head');
        var css2 = '.primary-btn::before {'
        + 'background: linear-gradient(95.45deg, #0f643f 98.23%, #0f643f 0.64%);'  // Change the background color
        // Add more CSS properties as needed
        + '}';
        $('<style>')
        .prop('type', 'text/css')
        .html(css2)
        .appendTo('head');
      kickBtn = true;
      twitchBtn = false;
      if (kickBtn == true && twitchBtn == false) {
        function calculate() {
          // One kick viewer costs $0.006 for one hour - kick.
          viewersPrice = 0.006;
          if (checkValue == 1) {
            hours = 50;
            parseInt(views);
            parseInt(hours);
            result = calculation(viewersPrice*2.25, views, hours);
            $("#totalPrice").text("$" + result + "");
            if(views===50) {
              $("#purchaseLinkActual").attr("data-sellix-product", "6515cbf0abc25"); // Set href to "hours50"
            }
            if(views===100) {
              $("#purchaseLinkActual").attr("data-sellix-product", "6515cef61c3ee"); // Set href to "hours50"
            }
            if(views===250) {
              $("#purchaseLinkActual").attr("data-sellix-product", "6515d076dffa4"); // Set href to "hours50"
            }
            if(views===500) {
              $("#purchaseLinkActual").attr("data-sellix-product", "6515d1f381338"); // Set href to "hours50"
            }
          }
          if (checkValue == 2) {
            hours = 100;
            parseInt(views);
            parseInt(hours);
            result = calculation(viewersPrice*2.25, views, hours);
            $("#totalPrice").text("$" + result + "");
            if(views===50) {
              $("#purchaseLinkActual").attr("data-sellix-product", "6515ce17b9ab6"); // Set href to "hours50"
            }
            if(views===100) {
              $("#purchaseLinkActual").attr("data-sellix-product", "6515cf191e553"); // Set href to "hours50"
            }
            if(views===250) {
              $("#purchaseLinkActual").attr("data-sellix-product", "6515d0f81de16"); // Set href to "hours50"
            }
            if(views===500) {
              $("#purchaseLinkActual").attr("data-sellix-product", "6515d218e7125"); // Set href to "hours50"
            }
          }
          if (checkValue == 3) {
            hours = 150;
            parseInt(views);
            parseInt(hours);
            result = calculation(viewersPrice*2.25, views, hours);
            $("#totalPrice").text("$" + result + "");
            if(views===50) {
              $("#purchaseLinkActual").attr("data-sellix-product", "6515ce57f1c7a"); // Set href to "hours50"
            }
            if(views===100) {
              $("#purchaseLinkActual").attr("data-sellix-product", "6515cf3a2ddec"); // Set href to "hours50"
            }
            if(views===250) {
              $("#purchaseLinkActual").attr("data-sellix-product", "6515d13b5b8a6"); // Set href to "hours50"
            }
            if(views===500) {
              $("#purchaseLinkActual").attr("data-sellix-product", "6515d2489073b"); // Set href to "hours50"
            }
          }
          if (checkValue == 4) {
            hours = 200;
            parseInt(views);
            parseInt(hours);
            result = calculation(viewersPrice*2.25, views, hours);
            $("#totalPrice").text("$" + result + "");
            if(views===50) {
              $("#purchaseLinkActual").attr("data-sellix-product", "6515ce93f2a65"); // Set href to "hours50"
            }
            if(views===100) {
              $("#purchaseLinkActual").attr("data-sellix-product", "6515cf5a44d7a"); // Set href to "hours50"
            }
            if(views===250) {
              $("#purchaseLinkActual").attr("data-sellix-product", "6515d16d27a7f"); // Set href to "hours50"
            }
            if(views===500) {
              $("#purchaseLinkActual").attr("data-sellix-product", "6515d26be0ff9"); // Set href to "hours50"
            }
          }
          if (checkValue == 5) {
            hours = 250;
            parseInt(views);
            parseInt(hours);
            result = calculation(viewersPrice*2.25, views, hours);
            $("#totalPrice").text("$" + result + "");
            if(views===50) {
              $("#purchaseLinkActual").attr("data-sellix-product", "6515ceb32ddaa"); // Set href to "hours50"
            }
            if(views===100) {
              $("#purchaseLinkActual").attr("data-sellix-product", "6515cf7764900"); // Set href to "hours50"
            }
            if(views===250) {
              $("#purchaseLinkActual").attr("data-sellix-product", "6515d19620575"); // Set href to "hours50"
            }
            if(views===500) {
              $("#purchaseLinkActual").attr("data-sellix-product", "6515d28b3f07e"); // Set href to "hours50"
            }
          }
          if (checkValue == 6) {
            hours = 300;
            parseInt(views);
            parseInt(hours);
            result = calculation(viewersPrice*2.25, views, hours);
            $("#totalPrice").text("$" + result + "");
            if(views===50) {
              $("#purchaseLinkActual").attr("data-sellix-product", "6515ced085925"); // Set href to "hours50"
            }
            if(views===100) {
              $("#purchaseLinkActual").attr("data-sellix-product", "6515d048319d7"); // Set href to "hours50"
            }
            if(views===250) {
              $("#purchaseLinkActual").attr("data-sellix-product", "6515d1bc92800"); // Set href to "hours50"
            }
            if(views===500) {
              $("#purchaseLinkActual").attr("data-sellix-product", "6515d2ad675b6"); // Set href to "hours50"
            }
          }
        }
        $("#vps_range_slider").on('mouseenter hover click', calculate)
        $("#twitch_click").on('mouseenter hover click', calculate)
        $("#kick_click").on('mouseenter hover click', calculate)
        $("#viewers-btn-5").click(function () {
          $("#viewers-btn-10").removeClass('active')
          $("#viewers-btn-25").removeClass('active')
          $("#viewers-btn-50").removeClass('active')
          $("#viewers-btn-5").css("background-color", color.green);
          $("#viewers-btn-10").css("background-color", "");
          $("#viewers-btn-25").css("background-color", "");
          $("#viewers-btn-50").css("background-color", "");
          $(".vps_1_value_").show();
          $(".vps_2_value_").hide();
          $(".vps_3_value_").hide();
          $(".vps_4_value_").hide();
          $(".vps_5_value_").hide();
          $(".vps_6_value_").hide();
          views = 50;
          calculate(views);
        })
        $("#viewers-btn-10").click(function () {
          $("#viewers-btn-5").removeClass('active')
          $("#viewers-btn-25").removeClass('active')
          $("#viewers-btn-50").removeClass('active')
          $("#viewers-btn-10").css("background-color", color.green);
          $("#viewers-btn-5").css("background-color", "");
          $("#viewers-btn-25").css("background-color", "");
          $("#viewers-btn-50").css("background-color", "");
          $(".vps_1_value_").hide();
          $(".vps_2_value_").show();
          $(".vps_3_value_").hide();
          $(".vps_4_value_").hide();
          $(".vps_5_value_").hide();
          $(".vps_6_value_").hide();
          views = 100;
          calculate(views);
        })
        $("#viewers-btn-25").click(function () {
          $("#viewers-btn-5").removeClass('active')
          $("#viewers-btn-10").removeClass('active')
          $("#viewers-btn-50").removeClass('active')
          $("#viewers-btn-25").css("background-color", color.green);
          $("#viewers-btn-5").css("background-color", "");
          $("#viewers-btn-10").css("background-color", "");
          $("#viewers-btn-50").css("background-color", "");
          $(".vps_1_value_").hide();
          $(".vps_2_value_").hide();
          $(".vps_3_value_").show();
          $(".vps_4_value_").hide();
          $(".vps_5_value_").hide();
          $(".vps_6_value_").hide();
          views = 250;
          calculate(views);
        })
        $("#viewers-btn-50").click(function () {
          $("#viewers-btn-5").removeClass('active')
          $("#viewers-btn-10").removeClass('active')
          $("#viewers-btn-25").removeClass('active')
          $("#viewers-btn-50").css("background-color", color.green);
          $("#viewers-btn-10").css("background-color", "");
          $("#viewers-btn-25").css("background-color", "");
          $("#viewers-btn-5").css("background-color", "");
          $(".vps_1_value_").hide();
          $(".vps_2_value_").hide();
          $(".vps_3_value_").hide();
          $(".vps_4_value_").show();
          $(".vps_5_value_").hide();
          $(".vps_6_value_").hide();
          views = 500;
          calculate(views);
        })
      }
    }
    $("#kickBtn").on('click', kickChangeColor)

    if (checkValue <= 1) {
      // $(".vps_value").hide();
      $(".vps_1_value").show();
      $(".vps_label").removeClass("active");
      $(".vps_label_1").addClass("active");
    } else if (checkValue <= 2) {
      // $(".vps_value").hide();
      $(".vps_2_value").show();
      $(".vps_label").removeClass("active");
      $(".vps_label_2").addClass("active");
    } else if (checkValue <= 3) {
      // $(".vps_value").hide();
      $(".vps_3_value").show();
      $(".vps_label").removeClass("active");
      $(".vps_label_3").addClass("active");
    } else if (checkValue <= 4) {
      // $(".vps_value").hide();
      $(".vps_4_value").show();
      $(".vps_label").removeClass("active");
      $(".vps_label_4").addClass("active");
    } else if (checkValue <= 5) {
      // $(".vps_value").hide();
      $(".vps_5_value").show();
      $(".vps_label").removeClass("active");
      $(".vps_label_5").addClass("active");
    } else if (checkValue <= 6) {
      // $(".vps_value").hide();
      $(".vps_6_value").show();
      $(".vps_label").removeClass("active");
      $(".vps_label_6").addClass("active");
    }
    rangeInput.on("change", function () {
      checkValue = $(this).val();
      if (checkValue <= 1) {
        // $(".vps_value").hide();
        // $(".vps_1_value_").show();
        // $(".vps_2_value_").hide();
        // $(".vps_3_value_").hide();
        // $(".vps_4_value_").hide();
        // $(".vps_5_value_").hide();
        // $(".vps_6_value_").hide();
        $(".vps_1_hour_value").show();
        $(".vps_2_hour_value").hide();
        $(".vps_3_hour_value").hide();
        $(".vps_4_hour_value").hide();
        $(".vps_5_hour_value").hide();
        $(".vps_6_hour_value").hide();
        $(".vps_label").removeClass("active");
        $(".vps_label_1").addClass("active");
      } else if (checkValue <= 2) {
        // $(".vps_value").hide();
        // $(".vps_1_value_").show();
        // $(".vps_2_value_").hide();
        // $(".vps_3_value_").hide();
        // $(".vps_4_value_").hide();
        // $(".vps_5_value_").hide();
        // $(".vps_6_value_").hide();
        $(".vps_2_hour_value").show();
        $(".vps_1_hour_value").hide();
        $(".vps_3_hour_value").hide();
        $(".vps_4_hour_value").hide();
        $(".vps_5_hour_value").hide();
        $(".vps_6_hour_value").hide();
        $(".vps_label").removeClass("active");
        $(".vps_label_2").addClass("active");
      } else if (checkValue <= 3) {
        // $(".vps_1_value_").hide();
        // $(".vps_2_value_").hide();
        // $(".vps_3_value_").show();
        // $(".vps_4_value_").hide();
        // $(".vps_5_value_").hide();
        // $(".vps_6_value_").hide();
        $(".vps_1_hour_value").hide();
        $(".vps_2_hour_value").hide();
        $(".vps_3_hour_value").show();
        $(".vps_4_hour_value").hide();
        $(".vps_5_hour_value").hide();
        $(".vps_6_hour_value").hide();
        $(".vps_label").removeClass("active");
        $(".vps_label_3").addClass("active");
      } else if (checkValue <= 4) {
        // $(".vps_1_value_").hide();
        // $(".vps_2_value_").hide();
        // $(".vps_3_value_").hide();
        // $(".vps_4_value_").show();
        // $(".vps_5_value_").hide();
        // $(".vps_6_value_").hide();
        $(".vps_1_hour_value").hide();
        $(".vps_2_hour_value").hide();
        $(".vps_3_hour_value").hide();
        $(".vps_4_hour_value").show();
        $(".vps_5_hour_value").hide();
        $(".vps_6_hour_value").hide();
        $(".vps_label").removeClass("active");
        $(".vps_label_4").addClass("active");
      } else if (checkValue <= 5) {
        // $(".vps_1_value_").hide();
        // $(".vps_2_value_").hide();
        // $(".vps_3_value_").hide();
        // $(".vps_4_value_").hide();
        // $(".vps_5_value_").show();
        // $(".vps_6_value_").hide();
        $(".vps_1_hour_value").hide();
        $(".vps_2_hour_value").hide();
        $(".vps_3_hour_value").hide();
        $(".vps_4_hour_value").hide();
        $(".vps_5_hour_value").show();
        $(".vps_6_hour_value").hide();
        $(".vps_label").removeClass("active");
        $(".vps_label_5").addClass("active");
      } else if (checkValue <= 6) {
        // $(".vps_1_value_").hide();
        // $(".vps_2_value_").hide();
        // $(".vps_3_value_").hide();
        // $(".vps_4_value_").hide();
        // $(".vps_5_value_").hide();
        // $(".vps_6_value_").show();
        $(".vps_1_hour_value").hide();
        $(".vps_2_hour_value").hide();
        $(".vps_3_hour_value").hide();
        $(".vps_4_hour_value").hide();
        $(".vps_5_hour_value").hide();
        $(".vps_6_hour_value").show();
        $(".vps_label").removeClass("active");
        $(".vps_label_6").addClass("active");
      }
    });
    var rangeTooltip = $("#vps_range_slider .tooltip");
    if (rangeTooltip.length > 0) {
      var tooltipOffset = rangeTooltip.attr('style').match(/\d+/g);
      var labelPosition = tooltipOffset[0];
      $(".price-slider-wrapper .vps_labels span.active").css({
        marginLeft: tooltipOffset[0] - 2 + '%'
      });
      rangeInput.on("change", function () {
        var tooltipOffset = rangeTooltip.attr('style').match(/\d+/g);
        $(".price-slider-wrapper .vps_labels span.active").css({
          marginLeft: tooltipOffset[0] - 2 + '%'
        });
      });
    } // init Isotope

    var $isotop_filter_items = $('.gh-filter-items').isotope({// options
    }); // filter items on button click
    $('.gh-filter-controls').on('click', 'button', function () {
      var filterValue = $(this).attr('data-filter');
      $isotop_filter_items.isotope({
        filter: filterValue
      });
    }); //replace active class
    $(".gh-filter-controls button").each(function () {
      $(this).on("click", function () {
        $(this).parents(".gh-filter-controls").find("button.active").removeClass("active");
        $(this).addClass("active");
      });
    }); //data center filter
    var $dtc_grid = $('.dtc-grid').isotope({}); // filter items on button click
    $('.data-center-filter-btns').on('click', 'button', function () {
      var filterValue = $(this).attr('data-filter');
      $dtc_grid.isotope({
        filter: filterValue
      });
    });
    $(".data-center-filter-btns button").each(function () {
      $(this).on("click", function () {
        $(this).parent().find("button.active").removeClass("active");
        $(this).addClass("active");
      });
    }); //showing notice bar
    setTimeout(function () {
      $(".notice-bar").slideDown();
    }, 500);
  }); // Contact form
  if ($("#contactForm").length) {
    $("#contactForm").on("submit", function (event) {
      if (event.isDefaultPrevented()) {
        // handle the invalid form...
        submitMSG(false, '#contact');
      } else {
        // everything looks good!
        event.preventDefault();
        submitContactForm();
      }
    });
  }
  function submitContactForm() {
    // Initiate Variables With Form Content
    var name = $('#contactForm input[name="name"]').val();
    var email = $('#contactForm input[name="email"]').val();
    var phone = $('#contactForm input[name="phone"]').val();
    var subject = $('#contactForm input[name="subject"]').val();
    var message = $('#contactForm textarea[name="message"]').val(); // Ajax call
    if (name && email && message) {
      $.ajax({
        type: "POST",
        url: "libs/contact-form-process.php",
        data: {
          "name": name,
          "email": email,
          "phone": phone,
          "subject": subject,
          "message": message
        },
        success: function success(text) {
          if (text == "success") {
            $("#contactForm")[0].reset();
            submitMSG(true, '#contact');
          } else {
            submitMSG(false, '#contact');
          }
        }
      });
    } else {
      submitMSG(false, '#contact');
    }
  } // Showing message

  function submitMSG(valid, parentSelector) {
    if (valid) {
      $(parentSelector + " .message-box").removeClass('d-none').addClass('d-block ');
      $(parentSelector + " .message-box div").removeClass('alert-danger').addClass('alert-success').text('Form submitted successfully');
    } else {
      $(parentSelector + " .message-box").removeClass('d-none').addClass('d-block ');
      $(parentSelector + " .message-box div").removeClass('alert-success').addClass('alert-danger').text('Found error in the form. Please check again.');
    }
  }
})(jQuery);
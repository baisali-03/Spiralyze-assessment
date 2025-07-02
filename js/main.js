$(window).on("load", function () {
  $(".form input").val("");

  // Floating label for input
  $(".form input").on("focus blur input", function () {
    if ($(this).val() !== "" || $(this).is(":focus")) {
      $(this).addClass("focus");
    } else {
      $(this).removeClass("focus");
    }
    // Remove was-focused if value is present
    if ($(this).val() !== "") {
      $(this).removeClass("was-focused");
    }
  });

  // Floating label for select (country)
  $("#country").on("focus blur change", function () {
    if ($(this).val() !== "" || $(this).is(":focus")) {
      $(this).addClass("focus");
    } else {
      $(this).removeClass("focus");
    }
  });
});

/* Crousel Scripts*/
$(".carousel-testi").owlCarousel({
  loop: true,
  nav: false,
  dots: true,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1024: {
      items: 1,
    },
    1025: {
      items: 1,
    },
  },
});
var owl = $(".carousel-testi");
$(".testi-carousel .arrow-left").click(function () {
  owl.trigger("prev.owl.carousel");
});
$(".testi-carousel .arrow-right").click(function () {
  owl.trigger("next.owl.carousel");
});

function playPause() {
  var video = document.querySelector("#myVideo");
  if (video.paused) {
    video.play();
    $(".play").addClass("plo");
  } else {
    video.pause();
    $(".play").removeClass("plo");
  }
}

let menuOpen = false;

$(".nav-opener").click(function () {
  var $menu = $(".c-navbar ul");
  menuOpen = !menuOpen;
  if (menuOpen) {
    $menu.stop(true, true).slideDown(200);
  } else {
    $menu.stop(true, true).slideUp(200);
  }
});

$(window).on("resize", function () {
  var $menu = $(".c-navbar ul");
  var winWidth = $(window).width();
  //-------------------Reset state on Tab View--------------------------------
  if (winWidth >= 768) {
    $menu.stop(true, true).css("display", "flow");
    menuOpen = false; 
  } 
  //-----------------Reset state on desktop-------------------------
  else if (winWidth >= 1024) {
    $menu.stop(true, true).css("display", "flex");
    menuOpen = false; 
  } 
    else {
    if (menuOpen) {
      $menu.stop(true, true).css("display", "flex");
    } else {
      $menu.stop(true, true).css("display", "none");
    }
  }
});
$(window).trigger("resize");

function validate() {
  //--------------------Hide all previous errors---------------------------------
  $(".inp-box").removeClass("empty");
  $(".inp").removeClass("error was-focused");
  $(".drop-row").removeClass("empty");
  $(".drop-row select").removeClass("error was-focused");

  // REGEX
  const nameRegex = /^[A-Za-z\s'-]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // First Name
  const fName = $("#f-name");
  if (!fName.val() || !nameRegex.test(fName.val())) {
    fName.parent().addClass("empty");
    fName.addClass("error was-focused");
    return;
  }
  // Last Name
  const lName = $("#l-name");
  if (!lName.val() || !nameRegex.test(lName.val())) {
    lName.parent().addClass("empty");
    lName.addClass("error was-focused");
    return;
  }
  // Email
  const bEmail = $("#b-name");
  if (!bEmail.val() || !emailRegex.test(bEmail.val())) {
    bEmail.parent().addClass("empty");
    bEmail.addClass("error was-focused");
    return;
  }
  // Company
  const cName = $("#c-name");
  if (!cName.val() || !nameRegex.test(cName.val())) {
    cName.parent().addClass("empty");
    cName.addClass("error was-focused");
    return;
  }
  // Country
  if ($(".drop-row select").val() == "") {
    $(".drop-row").addClass("empty");
    $(".drop-row select").addClass("error was-focused");
    return;
  }
  // If all valid
  document.location = "thankyou.html";
}
$(document).click(function () {
  $(".inp-box .inp").each(function () {
    $(this).parent().removeClass("empty");
  });
  $(".drop-row").removeClass("empty");
});
$(".btn-row").click(function (e) {
  e.stopPropagation();
});

document.getElementById("year").textContent = new Date().getFullYear();

//-------------------Video Modal------------------------
function openVideoModal() {
  var modal = document.getElementById("videoModal");
  var video = document.getElementById("popupVideo");
  modal.style.display = "flex";
  video.currentTime = 0;
  video.play();
}
function closeVideoModal() {
  var modal = document.getElementById("videoModal");
  var video = document.getElementById("popupVideo");
  video.pause();
  modal.style.display = "none";
}
window.onclick = function (event) {
  var modal = document.getElementById("videoModal");
  if (event.target === modal) {
    closeVideoModal();
  }
};

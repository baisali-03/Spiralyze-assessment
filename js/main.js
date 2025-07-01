$(window).on("load", function () {
  $(".form input").val("");

  $(".form input").focusout(function () {
    if ($(this).val() != "") {
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

$(".nav-opener").click(function () {
  $(".c-navbar ul").animate({
    height: "toggle",
  });
});
function validate() {
  let num = 0;
  //---------------REGEX---------------------
  const nameRegex = /^[A-Za-z\s'-]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //-------------First Name---------------------
  const fName = $("#f-name");
  if (!fName.val() || !nameRegex.test(fName.val())) {
    fName.parent().addClass("empty");
    fName.addClass("error");
  } else {
    fName.parent().removeClass("empty");
    fName.removeClass("error");
    num++;
  }
  //---------------Last Name--------------------
  const lName = $("#l-name");
  if (!lName.val() || !nameRegex.test(lName.val())) {
    lName.parent().addClass("empty");
    lName.addClass("error");
  } else {
    lName.parent().removeClass("empty");
    lName.removeClass("error");
    num++;
  }
  //------------Email-------------------------
  const bEmail = $("#b-name");
  if (!bEmail.val() || !emailRegex.test(bEmail.val())) {
    bEmail.parent().addClass("empty");
    bEmail.addClass("error");
  } else {
    bEmail.parent().removeClass("empty");
    bEmail.removeClass("error");
    num++;
  }
  //-----------------Company (should be text, not empty)-----------
  const cName = $("#c-name");
  if (!cName.val() || !nameRegex.test(cName.val())) {
    cName.parent().addClass("empty");
    cName.addClass("error");
  } else {
    cName.parent().removeClass("empty");
    cName.removeClass("error");
    num++;
  }
  //------------Country select----------
  if ($(".drop-row select").val() == "") {
    $(".drop-row").addClass("empty");
    $(".drop-row select").addClass("error"); 
  } else {
    $(".drop-row").removeClass("empty");
    $(".drop-row select").removeClass("error"); 
    num++;
  }
  if (num === 5) {
    document.location = "thankyou.html";
  }
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

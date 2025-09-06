// Text Srcoll Animation Index Page

let scrollTimeout;

$(window).scroll(function () {
  var scrolled = $(window).scrollTop();
  var rotateX = scrolled * 0.1; // 3D tilt X
  var rotateY = scrolled * 0.05; // 3D tilt Y

  // Add scrolling class when moving
  $("body").addClass("scrolling");

  // Clear previous timeout and set a new one
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    $("body").removeClass("scrolling"); // Remove glow when scroll stops
  }, 200);

  if (scrolled > 0) {
    $(".y1").css({
      transform: `translate3d(0, ${
        scrolled * -0.15
      }px, 0) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      color: "#ff3b3b",
    });

    $(".y2").css({
      transform: `translate3d(0, ${
        scrolled * -0.25
      }px, 0) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      color: "#0077ff",
    });

    $(".y3").css({
      transform: `translate3d(0, ${
        scrolled * -0.3
      }px, 0) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      color: "#00b894",
    });

    $(".y4").css({
      transform: `translate3d(0, ${
        scrolled * -0.4
      }px, 0) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      color: "#ff9f1a",
    });

    $(".y5").css({
      transform: `translate3d(0, ${
        scrolled * -0.5
      }px, 0) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      color: "#9b59b6",
    });

    $(".y6").css({
      transform: `translate3d(0, ${
        scrolled * -0.6
      }px, 0) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      color: "#2ecc71",
    });
  } else {
    // Reset when at the top
    $(".y1, .y2, .y3, .y4, .y5, .y6").css({
      transform: "translate3d(0, 0, 0) rotateX(0) rotateY(0)",
      color: "#333",
    });
  }
});

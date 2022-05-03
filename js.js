(function ($) {
  $("#menu-bar").click(function () {
    $(this).toggleClass("fa-times");
    $(".navbar").toggleClass("nav-toggle");
  });

  $(window).on("load scroll", function () {
    $("#menu-bar").removeClass("fa-times");
    $(".navbar").removeClass("nav-toggle");

    $("section").each(function () {
      let top = $(window).scrollTop();
      let height = $(this).height();
      let id = $(this).attr("id");
      let offset = $(this).offset().top - 200;

      if (top > offset && top < offset + height) {
        $(".navbar ul li a").removeClass("active");
        $(".navbar").find(`[href="#${id}"]`).addClass("active");
      }
    });
  });

  $(".list .btn").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    let src = $(this).attr("data-src");
    $(".menu .row .image img").attr("src", src);
  });

  $("#beef").click(function () {
    $("#info1").html("<h3><span>1.</span>Porterhouse Steak</h3><p></p><p></p>");
  });

  $("#beef").click(function () {
    $("#info2").html(
      "<h3><span>2.</span>Filet Mignon Steak</h3><p></p><p></p>"
    );
  });

  $("#beef").click(function () {
    $("#info3").html("<h3><span>3.</span>Ribey Steake</h3><p></p><p></p>");
  });

  $("#beef").click(function () {
    $("#info4").html("<h3><span>4.</span>Sirloin Steak</h3><p></p><p></p>");
  });

  //****************************************************************************
  $("#chicken").click(function () {
    $("#info1").html(
      "<h3><span>1.</span>Memphis-Style BBQ Chicken</h3><p></p><p></p>"
    );
  });

  $("#chicken").click(function () {
    $("#info2").html(
      "<h3><span>2.</span>South Carolina-Style BBQ Chicken</h3><p></p><p></p>"
    );
  });

  $("#chicken").click(function () {
    $("#info3").html(
      "<h3><span>3.</span>North Carolina-Style BBQ Chicken</h3><p></p><p></p>"
    );
  });

  $("#chicken").click(function () {
    $("#info4").html(
      "<h3><span>4.</span>Korean BBQ Chicken</h3><p></p><p></p>"
    );
  });

  //****************************************************************************
  $("#pork").click(function () {
    $("#info1").html("<h3><span>1.</span>Baby Back Ribs</h3><p></p><p></p>");
  });

  $("#pork").click(function () {
    $("#info2").html("<h3><span>2.</span>Spare Ribs</h3><p></p><p></p>");
  });

  $("#pork").click(function () {
    $("#info3").html(
      "<h3><span>3.</span>St. Louis-Style Ribs</h3><p></p><p></p>"
    );
  });

  $("#pork").click(function () {
    $("#info4").html(
      "<h3><span>4.</span>Country-Style Ribs</h3><p></p><p></p>"
    );
  });

  //****************************************************************************
  $("#seafood").click(function () {
    $("#info1").html("<h3><span>1.</span>Bang Bang Shrimp</h3><p></p><p></p>");
  });

  $("#seafood").click(function () {
    $("#info2").html("<h3><span>2.</span>Lobster</h3><p></p><p></p>");
  });

  $("#seafood").click(function () {
    $("#info3").html("<h3><span>3.</span>Snow crab Legs</h3><p></p><p></p>");
  });

  $("#seafood").click(function () {
    $("#info4").html("<h3><span>4.</span>Atlantic Fest</h3><p></p><p></p>");
  });
})(jQuery);

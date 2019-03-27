// Gallery

// $(document).ready(function () {
//     $("img").click(function () {
//         var t = $(this).attr("src");
//         $(".modal-body").html("<img src='" + t + "' class='modal-img'>");
//         $("#myModal").modal();
//     });

//     $("video").click(function () {
//         var v = $("video > source");
//         var t = v.attr("src");
//         $(".modal-body").html("<video class='model-vid' controls><source src='" + t + "' type='video/mp4'></source></video>");
//         $("#myModal").modal();
//     });
// });//EOF Document.ready

var quadimages = document.querySelectorAll("#quad figure");
for (i = 0; i < quadimages.length; i++) {
    quadimages[i].addEventListener('click', function () { this.classList.toggle("expanded"); quad.classList.toggle("full") });
}



// Parallex
var particles = {
    dotColor: '#FFDF00',
    lineColor: '#DAA520',
    density: 20000,
    parallax: false
};
// var particleDensity;
var options = {
    effectWeight: 2,
    outerBuffer: 1.05,
    elementDepth: 300,
    perspectiveMulti: 1.5,
    enableSmoothing: true,
    onInit: function () {
        $('#particle-target').particleground(particles);
    }
};


$(document).ready(function () {

    $('#demo1').logosDistort(options);

});
$(document).ready(function() {

    $("#swimBtn").click(function() {
        $("#bike").slideUp();
        $("#run").slideUp();
        $("#swim").slideToggle();
    });

    $("#runBtn").click(function() {
        $("#bike").slideUp();
        $("#run").slideToggle();
        $("#swim").slideUp();
    });

    $("#bikeBtn").click(function() {
        $("#bike").slideToggle();
        $("#run").slideUp();
        $("#swim").slideUp();
    });

    $(".distances").click(function() {
        $("#swimTxt").text($(this).attr("swim"));
        $("#runTxt").text($(this).attr("run"));
        $("#bikeTxt").text($(this).attr("bike"));
        $("#txt").text($(this).attr("dName"));
    });

    var i = 0;

    $(".ready").click(function() {
        $(this).hide();
        i++;
        $("#procenty").text((i * 10) + "%");
    });

    $("#reset").click(function() {
        i = 0;
        $("#procenty").text((0) + "%");

        $(".ready").each(function() {
            $( this ).show();
        });
    });

    j = 3;

    $(".gadgets").click(function() {

        if($(this).hasClass("picked")){
            $(this).removeClass("picked");
            j++;
        }
        else{
            if(j > 0){
                $(this).addClass("picked");
                j--;
            }
        } 

        $("#j").text(j)
    });

    $(".kolor").click(function() {

        $(".kolor:checked").attr("value", $(this).val());

        $("#tshirt").attr("src","img/koszulka/"+$(this).attr("value")+".png");
    });

    $("#imie").on("keyup", function() {
        $("#textShirt").text($("#imie").val());
    });

    $("#logo").on("change", function() {
        $("#logoImg").attr("src","img/koszulka/tshirt-" + $("#logo").val() + ".png");
    });
});
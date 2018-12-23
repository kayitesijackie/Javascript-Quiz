$(document).ready(function(){
    $("form#form").submit(function(event){
    var q1= $("input:radio[name=qst1]:checked").val();
    var q2= $("input:radio[name=qst2]:checked").val();
    var q3= $("input:radio[name=qst3]:checked").val();
    var q4= $("input:radio[name=qst4]:checked").val();
    var q5= $("input:radio[name=qst5]:checked").val();
    var result=parseInt(q1)+parseInt(q2)+parseInt(q3)+parseInt(q4)+parseInt(q5);
    $("#result").text("YOU SCORED IS: " +result + "%");

    $("button").click(function() {
        $("#result").toggle();
        $("#form").toggle();
    });
    $("form#form").hide();
    $("#result").show();
    event.preventDefault();
    });
});

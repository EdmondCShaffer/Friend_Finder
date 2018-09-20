M.AutoInit();

$(".submitBtn").on("click", function (event) {
    event.preventDefault();

    var validate = true;
    if ($("#name").val() === "" || $("image").val() === "") {
        validate = false;

    } else if ($(".q1").val() === "empty" || $(".q2").val() === "empty" || $(".q3").val() === "empty" || $(".q4").val() === "empty" || $(".q5").val() === "empty" || $(".q6").val() === "empty" || $(".q7").val() === "empty" || $(".q8").val() === "empty" || $(".q9").val() === "empty" || $(".q10").val() === "empty") {
        valid = false;
   
    } if (validate === true) {

        var findFriend = {
            name: $("#name").val().trim(),
            image: $("#image").val(),
            scores: [
                $(".q1").val(),
                $(".q2").val(),
                $(".q3").val(),
                $(".q4").val(),
                $(".q5").val(),
                $(".q6").val(),
                $(".q7").val(),
                $(".q8").val(),
                $(".q9").val(),
                $(".q10").val()
            ]
        }
    };

    console.log(findFriend);
    //grab form options and store it in var
    // var newfrienddata={
    //     name: $("#name").val(),
    //     photo: $("#photo").val(),
    //     scores: [$("#q1").val(), $("#q2").val(), $("#q3").val(), $("#q4").val(), $("#q5").val(), $("#q6").val(), $("#q7").val(), $("#q8").val(), $("#q9").val(), $("#q10").val(), ]
    // }
    //to ajax post request and send data
});
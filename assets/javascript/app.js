$(document).ready(function () {

    var gameAnswers = ["Michael Jackson", "Muhammad Ali"];
    // console.log(gameAnswers[0])

    console.log("ready!");

    var correct = 0;
    var incorrect = 0;
    // var currentQuestion = 0;
    var timer = 60;

    $("#questionBox").hide();



    $("#startButton").on("click", function () {
        $("#jumbo").hide();
        $("#questionBox").show();
        $("#timer").text("Time Remaining: " + timer);


        // function checked1() {
        //     // var answersArray = [''];
        //     $("input").on("click", function () {
        //         if ($("input[name='q1']:checked")) {
        //             var userChoice1 = $("input[name='q1']:checked").val();
        //             console.log(userChoice1);
        //         }
        //     });
        //     checked2();
        // }

        // function checked2() {
        //     $("input").on("click", function () {
        //         if ($("input[name='q2']:checked")) {
        //             var userChoice2 = $("input[name='q2']:checked").val();
        //             console.log(userChoice2);
        //         }
        //     })
        // }




        // checked1();

        var timeInterval = setInterval(counter, 1000);

        function counter() {
            $("#timer").text("Time Remaining: " + timer);
            timer--;

            if (timer < 0) {
                // $("#questionBox").hide();
                clearInterval(timeInterval);
            };
        };
    });

    function checkAnswer1() {
        var userChoice1 = $(this).attr("value");
        if (gameAnswers[0] === userChoice1) {
            correct++;
            console.log(correct);
        } else {
            incorrect++;
            console.log(incorrect);
        }
    }

    function checkAnswer2() {
        var userChoice2 = $(this).attr("value");
        if (gameAnswers[1] === userChoice2) {
            correct++;
            console.log(correct);
        } else {
            incorrect++;
            console.log(incorrect);
        }
    }




    // function submitDone () {
    $("#done").on("click", function () {


    })



    // }

    $(document).on("click", ".choice1", function () {
        var userChoice1 = $(this).attr("value");
        console.log(userChoice1);
        function checkAnswer1() {
            var userChoice1 = $(this).attr("value");
            if (gameAnswers[0] === userChoice1) {
                correct++;
            } else {
                incorrect++;
            }
        }
    })

    $(document).on("click", ".choice2", function () {
        var userChoice2 = $(this).attr("value");
        console.log(userChoice2);
        function checkAnswer2() {
            var userChoice2 = $(this).attr("value");
            if (gameAnswers[1] === userChoice2) {
                correct++;
            } else {
                incorrect++;
            }
        }
        checkAnswer2();
        
    })

    $(document).on("click", ".choice3", function () {
        var userChoice3 = $(this).attr("value");
        console.log(userChoice3);
    })

    $(document).on("click", ".choice4", function () {
        var userChoice4 = $(this).attr("value");
        console.log(userChoice4);
    })

    $(document).on("click", ".choice5", function () {
        var userChoice5 = $(this).attr("value");
        console.log(userChoice5);
    })








});

                // answersArray.push(userChoice1);

                // if ($("input[name='q2']:checked")) {
                //     var userChoice2 = $("input[name='q2']:checked").val();
                //     console.log(userChoice2);
                //     // answersArray.push(userChoice2);
                // }

            // console.log(answersArray);


          // function checked() {
            //     if ($("input[name='q1']").is(':checked'))
            //         var userChoice1 = $("input[name='q1']:checked").val()
            //     console.log(userChoice1)
            // };

            // checked();


// $("input").on("click", function () {
//     var userChoice1 = $("input[name='q1']:checked").val();
//     console.log(userChoice1);
// });

    // $("input").on("click", function () {
    //     var userChoice2 = $("input[name='q2']:checked").val();
    //     console.log(userChoice2);
    // });

    // var userChoice1 = $("input[name='q1']:checked").val();





    // && $("input[name='q2']").is(':checked')
    //         && $("input[name='q3']").is(':checked')
    //         && $("input[name='q4']").is(':checked')
    //         && $("input[name='q5']").is(':checked')) {


    //             var userChoice2 = $("input[name='q1']:checked").val()
    //         var userChoice3 = $("input[name='q1']:checked").val()
    //         var userChoice4 = $("input[name='q1']:checked").val()
    //         var userChoice5 = $("input[name='q1']:checked").val()

    //         console.log(userChoice2)
    //         console.log(userChoice3)
    //         console.log(userChoice4)
    //         console.log(userChoice5)


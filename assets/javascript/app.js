var score = 0
var currentQuestion = 0;

var gameQuestions = [
    {
        question: "what color is the sky?",
        choices: ["blue", "black", "burgundy", "burple"],
        answer: "blue"
    }
]

function viewQuestion() {
    var question  = gameQuestions[currentQuestion].question;
    var choices = gameQuestions[currentQuestion].question;
    
}
// append with radio 



$("#startButton").on("click", function () {
    $("#jumbo").hide();
});
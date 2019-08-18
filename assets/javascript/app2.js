
var gameQuestions = [
    {
        question: "What is the first question?",
        choices: ["wrong answer", "wrong answer", "wrong answer", "right answer"],
        correctAnswer: "right answer"
    },
    {
        question: "What is the second question?",
        choices: ["wrong answer", "wrong answer", "wrong answer", "right answer"],
        correctAnswer: "right answer"
    },
    {
        question: "What is the third question?",
        choices: ["wrong answer", "wrong answer", "wrong answer", "right answer"],
        correctAnswer: "right answer"
    },
];

// console.log(gameQuestions);

var counter = 30;
var currentQuestion = 0;
var correct = 0;
var incorrect = 0;
var timer;

function loadQuestions() {
    var question = gameQuestions[currentQuestion].question;
    var choices = gameQuestions[currentQuestion].choices;

    $("#timer").html("<p>Time Remaining: " + counter + "</p>")
    $("#game").html("<h3>" + question + "</h3>");
    
    

loadQuestions();


function load2Choices(choices) {

    for (var i = 0; i < choices.length; i++) {
        var answerLine = $("<input>");
        answerLine.addClass("")


    



}

// Next we create a for loop to create crystals for every numberOption.
for (var i = 0; i < choices.length; i++) {

    // For each iteration, we will create an imageCrystal
    var imageCrystal = $("<input>");
    imageCrystal.addClass("choice");


    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    imageCrystal.attr("data-answer", choices[i]);


    <input type="radio" name="optradio" value=""> Option 4

    $("#game").append(imageCrystal);



    for (var i = 0; i < letters.length; i++) {

// Inside the loop...

// 2. Create a variable named "letterBtn" equal to $("<button>");
var letterBtn = $("<button>");

// 3. Then give each "letterBtn" the following classes: "letter-button" "letter" "letter-button-color".
letterBtn.addClass("letter-button letter letter-button-color");

// 4. Then give each "letterBtn" a data-attribute called "data-letter".
letterBtn.attr("data-letter", letters[i]);

// 5. Then give each "letterBtns" a text equal to "letters[i]".
letterBtn.text(letters[i]);

// 6. Finally, append each "letterBtn" to the "#buttons" div (provided).
$("#buttons").append(letterBtn);
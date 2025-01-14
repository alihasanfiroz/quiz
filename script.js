// Quiz Questions Array
const quizQuestions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      correctAnswer: 2, // Index of the correct answer
      description: "Paris is the capital city of France, known for its art, fashion, and the iconic Eiffel Tower.",
    },
    {
      question: "Who wrote 'Hamlet'?",
      options: ["Charles Dickens", "William Shakespeare", "J.K. Rowling", "Leo Tolstoy"],
      correctAnswer: 1,
      description: "William Shakespeare wrote 'Hamlet,' one of the most famous plays in English literature.",
    },
    {
      question: "What is the largest planet in our Solar System?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      correctAnswer: 2,
      description: "Jupiter is the largest planet in our Solar System, known for its Great Red Spot.",
    },
    {
      question: "Which element has the chemical symbol 'O'?",
      options: ["Oxygen", "Gold", "Osmium", "Ozone"],
      correctAnswer: 0,
      description: "The chemical symbol 'O' stands for Oxygen, an essential element for life on Earth.",
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Pablo Picasso", "Vincent van Gogh", "Leonardo da Vinci", "Claude Monet"],
      correctAnswer: 2,
      description: "Leonardo da Vinci painted the Mona Lisa, one of the most famous artworks in the world.",
    },
    {
      question: "What is the capital city of Japan?",
      options: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
      correctAnswer: 2,
      description: "Tokyo is the capital of Japan, a city famous for its modern architecture and culture.",
    },
    {
      question: "How many continents are there on Earth?",
      options: ["5", "6", "7", "8"],
      correctAnswer: 2,
      description: "There are 7 continents on Earth: Asia, Africa, North America, South America, Antarctica, Europe, and Australia.",
    },
    {
      question: "Which is the smallest prime number?",
      options: ["1", "2", "3", "5"],
      correctAnswer: 1,
      description: "2 is the smallest prime number. It is also the only even prime number.",
    },
    {
      question: "What is the boiling point of water in Celsius?",
      options: ["90°C", "100°C", "110°C", "120°C"],
      correctAnswer: 1,
      description: "Water boils at 100°C under normal atmospheric pressure.",
    },
    {
      question: "Who discovered gravity?",
      options: ["Albert Einstein", "Galileo Galilei", "Isaac Newton", "Marie Curie"],
      correctAnswer: 2,
      description: "Isaac Newton discovered gravity when he observed an apple falling from a tree.",
    },
  ];
  
  // Quiz State Variables
  let currentQuestionIndex = 0;
  let userScore = 0;
  
  // Load a Question
  function loadQuestion() {
    const questionData = quizQuestions[currentQuestionIndex];
    
    // Display Question Text
    document.getElementById("question-text").innerText = questionData.question;
    
    // Clear Options
    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = "";
  
    // Generate Option Buttons
    questionData.options.forEach((option, index) => {
      const optionButton = document.createElement("button");
      optionButton.innerText = option;
      optionButton.classList.add("option-button");
      optionButton.onclick = () => selectAnswer(index);
      optionsContainer.appendChild(optionButton);
    });
  
    // Hide Description and Next Button
    document.getElementById("answer-description").style.display = "none";
    document.getElementById("next-button").style.display = "none";
  }
  
  // Handle User Selection
  function selectAnswer(selectedIndex) {
    const questionData = quizQuestions[currentQuestionIndex];
    const optionButtons = document.querySelectorAll(".option-button");
  
    // Check if the selected answer is correct
    if (selectedIndex === questionData.correctAnswer) {
      userScore++;
      optionButtons[selectedIndex].classList.add("correct");
    } else {
      optionButtons[selectedIndex].classList.add("incorrect");
      optionButtons[questionData.correctAnswer].classList.add("correct");
    }
  
    // Disable all buttons after selection
    optionButtons.forEach((btn) => (btn.disabled = true));
  
    // Display Correct Answer Description
    const descriptionElement = document.getElementById("answer-description");
    descriptionElement.innerText = questionData.description;
    descriptionElement.style.display = "block";
  
    // Show Next Button
    document.getElementById("next-button").style.display = "block";
  }
  
  // Move to the Next Question
  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
      loadQuestion();
    } else {
      showSummary();
    }
  }
  
  // Show Summary
  function showSummary() {
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("summary-container").style.display = "block";
    document.getElementById("score").innerText = userScore;
  }
  
  // Restart Quiz
  function restartQuiz() {
    currentQuestionIndex = 0;
    userScore = 0;
    document.getElementById("summary-container").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
    loadQuestion();
  }
  
  // Initialize Quiz
  loadQuestion();
  
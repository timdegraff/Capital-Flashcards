// --- Game Data ---
// This object holds all the states, their capitals, and fun facts.
// It's the JavaScript equivalent of your Python dictionaries.
const statesData = {
    "Alabama": { capital: "Montgomery", facts: ["Known as the Yellowhammer State.", "Famous for its peanut production.", "Hosted the first Mardi Gras celebration in the U.S.", "Home to the U.S. Space & Rocket Center.", "Famous for its Civil Rights history."] },
    "Alaska": { capital: "Juneau", facts: ["The largest state in the U.S. by area.", "Has the highest mountain, Denali.", "Known for the Northern Lights.", "Has more coastline than all other states combined.", "Famous for its sled dog races."] },
    "Arizona": { capital: "Phoenix", facts: ["Home to the Grand Canyon.", "Has the most telescopes in the world in Tucson.", "Known for its saguaro cacti.", "Famous for its desert landscapes.", "A top spot for stargazing."] },
    "Arkansas": { capital: "Little Rock", facts: ["Known as the Natural State.", "Has the only active diamond mine in the U.S.", "Famous for its hot springs.", "Known for its beautiful Ozark Mountains.", "A major producer of rice."] },
    "California": { capital: "Sacramento", facts: ["Home to Hollywood.", "Has the tallest trees, called redwoods.", "Known for the Golden Gate Bridge.", "Grows the most avocados in the U.S.", "Famous for its earthquakes."] },
    "Colorado": { capital: "Denver", facts: ["Known as the Centennial State.", "Has the Rocky Mountains.", "Famous for its gold rush history.", "A top spot for skiing.", "Has the highest sand dunes in North America."] },
    "Connecticut": { capital: "Hartford", facts: ["Known as the Constitution State.", "Home to Yale University.", "Invented the hamburger in New Haven.", "Famous for its lighthouses along the coast.", "Known for its autumn foliage."] },
    "Delaware": { capital: "Dover", facts: ["The first to ratify the U.S. Constitution.", "Known as the Diamond State.", "Famous for its tax-free shopping.", "Home to the DuPont company.", "Has beautiful beaches on the Atlantic."] },
    "Florida": { capital: "Tallahassee", facts: ["Known as the Sunshine State.", "Home to Walt Disney World.", "Has the Everglades, a unique swamp ecosystem.", "Famous for its oranges.", "Known for its coral reefs."] },
    "Georgia": { capital: "Atlanta", facts: ["Known as the Peach State.", "Hosted the 1996 Summer Olympics.", "Famous for its pecans.", "Has the oldest state park, Indian Springs.", "Known for its southern cooking."] },
    "Hawaii": { capital: "Honolulu", facts: ["An island chain in the Pacific Ocean.", "Known for its active volcanoes.", "Famous for hula dancing.", "Grows the most pineapples in the U.S.", "Known for its surfing beaches."] },
    "Idaho": { capital: "Boise", facts: ["Known as the Gem State.", "Famous for its potatoes.", "Has the deepest river gorge, Hells Canyon.", "Known for its hot springs.", "Has a famous ski resort called Sun Valley."] },
    "Illinois": { capital: "Springfield", facts: ["Known as the Prairie State.", "Home to the city of Chicago.", "Has the tallest building, the Willis Tower.", "Famous for its corn production.", "Known for its deep-dish pizza."] },
    "Indiana": { capital: "Indianapolis", facts: ["Known as the Hoosier State.", "Hosts the Indianapolis 500 race.", "Famous for its limestone quarries.", "Known for its basketball tradition.", "Home to the University of Notre Dame."] },
    "Iowa": { capital: "Des Moines", facts: ["Known as the Hawkeye State.", "Famous for its cornfields.", "Hosts the Iowa State Fair.", "Known for its rolling hills.", "A major producer of pork."] },
    "Kansas": { capital: "Topeka", facts: ["Known as the Sunflower State.", "Famous for its wheat production.", "Home to the geographic center of the U.S. mainland.", "Inspired the Wizard of Oz.", "Known for its wide open plains."] },
    "Kentucky": { capital: "Frankfort", facts: ["Known as the Bluegrass State.", "Hosts a famous annual horse race called the Derby.", "Famous for its bourbon whiskey.", "Known for its horse farms.", "Home to Mammoth Cave, the world’s longest cave system."] },
    "Louisiana": { capital: "Baton Rouge", facts: ["Known as the Pelican State.", "Famous for its Cajun food.", "Known for its jazz music.", "Has the Mississippi River delta.", "Celebrates Mardi Gras with parades."] },
    "Maine": { capital: "Augusta", facts: ["Known as the Pine Tree State.", "Famous for its lobster.", "The northeasternmost in the U.S.", "Known for its rocky coastline.", "Home to Acadia National Park."] },
    "Maryland": { capital: "Annapolis", facts: ["Known as the Old Line State.", "Famous for its blue crabs.", "Home to the Chesapeake Bay.", "The Star-Spangled Banner was written at Fort McHenry.", "Known for its historic lighthouses."] },
    "Massachusetts": { capital: "Boston", facts: ["Known as the Bay State.", "Home to Harvard University.", "Hosted the Boston Tea Party.", "Famous for its cranberries.", "Known for its historic battles."] },
    "Michigan": { capital: "Lansing", facts: ["Known as the Great Lakes State.", "Famous for its car industry in Detroit.", "Surrounded by four Great Lakes.", "Known for its cherries.", "Has beautiful sand dunes."] },
    "Minnesota": { capital: "St. Paul", facts: ["Known as the Land of 10,000 Lakes.", "Home to the Mall of America.", "Famous for its wild rice.", "The northernmost in the mainland U.S.", "Known for its cold winters."] },
    "Mississippi": { capital: "Jackson", facts: ["Known as the Magnolia State.", "Famous for its blues music.", "Home to the Mississippi River.", "Known for its catfish farming.", "Home to the world’s largest shrimp and fish sculpture in Biloxi."] },
    "Missouri": { capital: "Jefferson City", facts: ["Known as the Show-Me State.", "Home to the Gateway Arch in St. Louis.", "Famous for its barbecue.", "The starting point of the Pony Express.", "Known for its caves."] },
    "Montana": { capital: "Helena", facts: ["Known as Big Sky Country.", "Home to Glacier National Park.", "Has more cows than people.", "Famous for its sapphire mining.", "Known for its wide open spaces."] },
    "Nebraska": { capital: "Lincoln", facts: ["Known as the Cornhusker State.", "Famous for its beef production.", "Home to the world’s largest indoor rainforest at Henry Doorly Zoo.", "Hosts the College World Series in Omaha.", "Known for its sandhill cranes."] },
    "Nevada": { capital: "Carson City", facts: ["Known as the Silver State.", "Famous for Las Vegas.", "Home to Area 51.", "The driest in the U.S.", "Known for its desert races."] },
    "New Hampshire": { capital: "Concord", facts: ["Known as the Granite State.", "Famous for its maple syrup.", "Home to the White Mountains.", "Has the shortest coastline in the U.S.", "Known for its covered bridges."] },
    "New Jersey": { capital: "Trenton", facts: ["Known as the Garden State.", "Home to the world’s tallest roller coaster, Kingda Ka.", "Famous for its boardwalks in Atlantic City.", "Invented the drive-in movie theater.", "Known for its blueberries."] },
    "New Mexico": { capital: "Santa Fe", facts: ["Known as the Land of Enchantment.", "Famous for its hot air balloon festival in Albuquerque.", "Home to Carlsbad Caverns.", "Known for its chili peppers.", "Has ancient cliff dwellings."] },
    "New York": { capital: "Albany", facts: ["Known as the Empire State.", "Home to the Statue of Liberty.", "Famous for Niagara Falls.", "Was once called New Amsterdam.", "Known for its apple orchards."] },
    "North Carolina": { capital: "Raleigh", facts: ["Known as the Tar Heel State.", "Famous for its barbecue.", "Home to the Wright Brothers’ first flight.", "Known for its tobacco production.", "Has beautiful beaches."] },
    "North Dakota": { capital: "Bismarck", facts: ["Known as the Peace Garden State.", "Famous for its sunflower fields.", "Home to Theodore Roosevelt National Park.", "A major producer of wheat.", "Known for its oil fields."] },
    "Ohio": { capital: "Columbus", facts: ["Known as the Buckeye State.", "Home to the Rock and Roll Hall of Fame.", "Famous for its roller coasters at Cedar Point.", "The airplane was invented here.", "Known for its Amish communities."] },
    "Oklahoma": { capital: "Oklahoma City", facts: ["Known as the Sooner State.", "Famous for its Native American heritage.", "Home to the National Cowboy & Western Heritage Museum.", "Known for its tornadoes.", "Has a famous Route 66."] },
    "Oregon": { capital: "Salem", facts: ["Known as the Beaver State.", "Famous for Crater Lake, the deepest in the U.S.", "Home to the city of Portland, known for roses.", "Has the most covered bridges.", "Known for its wine country."] },
    "Pennsylvania": { capital: "Harrisburg", facts: ["Known as the Keystone State.", "Home to the Liberty Bell.", "Famous for its chocolate in Hershey.", "Hosted the signing of the Declaration of Independence.", "Known for its coal mines."] },
    "Rhode Island": { capital: "Providence", facts: ["Known as the Ocean State.", "The smallest in the U.S. by area.", "Famous for its sailing in Newport.", "Founded the first circus in the U.S.", "Known for its colonial history."] },
    "South Carolina": { capital: "Columbia", facts: ["Known as the Palmetto State.", "Famous for its sweet tea.", "Home to Myrtle Beach.", "Started the Civil War at Fort Sumter.", "Known for its plantations."] },
    "South Dakota": { capital: "Pierre", facts: ["Known as the Mount Rushmore State.", "Home to Mount Rushmore.", "Famous for the Badlands National Park.", "Hosts the Sturgis Motorcycle Rally.", "Known for its buffalo herds."] },
    "Tennessee": { capital: "Nashville", facts: ["Known as the Volunteer State.", "Famous for country music in Nashville.", "Home to Graceland, Elvis Presley’s mansion.", "Has the Great Smoky Mountains.", "Known for its bluegrass music."] },
    "Texas": { capital: "Austin", facts: ["Known as the Lone Star State.", "The second-largest in the U.S. by area.", "Famous for its barbecue.", "Home to the Alamo.", "Known for its cattle ranches."] },
    "Utah": { capital: "Salt Lake City", facts: ["Known as the Beehive State.", "Famous for its salt flats.", "Hosted the 2002 Winter Olympics.", "Home to Zion National Park.", "Known for its red rock arches."] },
    "Vermont": { capital: "Montpelier", facts: ["Known as the Green Mountain State.", "Famous for its maple syrup.", "Known for its ski resorts.", "Has the smallest state capital by population.", "Famous for its dairy farms."] },
    "Virginia": { capital: "Richmond", facts: ["Known as the Old Dominion.", "Home to Colonial Williamsburg.", "Famous for its peanuts.", "Hosted the first permanent English settlement, Jamestown.", "Known for its Shenandoah Valley."] },
    "Washington": { capital: "Olympia", facts: ["Known as the Evergreen State.", "Home to the Space Needle in Seattle.", "Famous for its apples.", "Home to Mount Rainier.", "Known for its coffee culture."] },
    "West Virginia": { capital: "Charleston", facts: ["Known as the Mountain State.", "Famous for its coal mining.", "Home to the New River Gorge Bridge.", "Split from another state during the Civil War.", "Known for its whitewater rafting."] },
    "Wisconsin": { capital: "Madison", facts: ["Known as the Badger State.", "Famous for its cheese.", "Home to the Harley-Davidson Museum.", "Known for its dairy farms.", "Has beautiful lakes."] },
    "Wyoming": { capital: "Cheyenne", facts: ["Known as the Equality State.", "Home to Yellowstone National Park.", "The first to give women the right to vote.", "Famous for its rodeos.", "Known for its geysers."] }
};

// --- DOM Element References ---
// Getting references to all the HTML elements we will interact with.
const instructionLabel = document.getElementById('instruction-label');
const selectionContainer = document.getElementById('selection-container');
const gameArea = document.getElementById('game-area');
const resultsArea = document.getElementById('results-area');
const promptLabel = document.getElementById('prompt-label');
const stateImage = document.getElementById('state-image');
const answerArea = document.getElementById('answer-area');
const scoreLabel = document.getElementById('score-label');
const timeLabel = document.getElementById('time-label');
const progressBarContainer = document.getElementById('progress-bar-container');
const finalScore = document.getElementById('final-score');
const finalGrade = document.getElementById('final-grade');
const finalTime = document.getElementById('final-time');
const wrongAnswersContainer = document.getElementById('wrong-answers');
const replayButton = document.getElementById('replay-button');

// --- Game State Variables ---
let currentMode = '';
let difficulty = '';
let numStates = 0;
let score = 0;
let startTime = 0;
let timerInterval = null;
let currentIndex = 0;
let selectedStates = [];
let wrongAnswers = [];
let correctAnswers = [];
let askedQuestions = [];
let correctAnswer = '';

// --- Sound Effects ---
// Pre-loading sounds to avoid delays during gameplay.
// NOTE: You need to create these sound files and place them in a 'sounds' folder.
const clickSound = new Audio('sounds/click.mp3');
const correctSound = new Audio('sounds/correct.mp3');
const incorrectSound = new Audio('sounds/incorrect.mp3');

function playSound(sound) {
    sound.currentTime = 0;
    sound.play().catch(e => console.error("Error playing sound:", e));
}

// --- Initial Game Setup ---
// This function runs when the script first loads.
function init() {
    showModeSelection();
    replayButton.addEventListener('click', restartGame);
}

// --- Game Flow Functions ---

/**
 * Displays the initial game mode selection buttons.
 */
function showModeSelection() {
    instructionLabel.textContent = 'Select a game mode to start!';
    selectionContainer.innerHTML = ''; // Clear previous buttons

    const modes = [
        { text: "State Shape Challenge", value: "State Shape Challenge" },
        { text: "Capital Quest", value: "Capital Quest" },
        { text: "Reverse Recall", value: "Reverse Recall" },
        { text: "State Facts Challenge", value: "State Facts Challenge" }
    ];

    modes.forEach(mode => {
        const btn = document.createElement('button');
        btn.textContent = mode.text;
        btn.onclick = () => selectMode(mode.value);
        selectionContainer.appendChild(btn);
    });
}

/**
 * Handles the selection of a game mode and proceeds to the number of states selection.
 * @param {string} mode - The selected game mode.
 */
function selectMode(mode) {
    playSound(clickSound);
    currentMode = mode;
    showNumStatesSelection();
}

/**
 * Displays buttons for selecting the number of states for the quiz.
 */
function showNumStatesSelection() {
    instructionLabel.textContent = 'How many states do you want to play with?';
    selectionContainer.innerHTML = '';

    [10, 20, 30, 40, 50].forEach(num => {
        const btn = document.createElement('button');
        btn.textContent = `${num} states`;
        btn.onclick = () => selectNumStates(num);
        selectionContainer.appendChild(btn);
    });
}

/**
 * Handles the selection of the number of states and proceeds to difficulty selection.
 * @param {number} num - The selected number of states.
 */
function selectNumStates(num) {
    playSound(clickSound);
    numStates = num;
    showDifficultySelection();
}

/**
 * Displays buttons for selecting the game difficulty.
 */
function showDifficultySelection() {
    instructionLabel.textContent = 'Select your difficulty level:';
    selectionContainer.innerHTML = '';

    const difficulties = [
        { text: "Easy (2 options)", value: "easy" },
        { text: "Medium (5 options)", value: "medium" },
        { text: "Hard (text entry)", value: "hard" }
    ];

    difficulties.forEach(diff => {
        const btn = document.createElement('button');
        btn.textContent = diff.text;
        btn.onclick = () => selectDifficulty(diff.value);
        selectionContainer.appendChild(btn);
    });
}

/**
 * Handles the difficulty selection and starts the game.
 * @param {string} diff - The selected difficulty ('easy', 'medium', 'hard').
 */
function selectDifficulty(diff) {
    playSound(clickSound);
    difficulty = diff;
    startGame();
}

/**
 * Initializes the main game screen and state variables.
 */
function startGame() {
    // Reset all game state variables
    currentIndex = 0;
    score = 0;
    wrongAnswers = [];
    askedQuestions = [];
    correctAnswers = Array(numStates).fill(null);
    scoreLabel.textContent = `Score: 0`;
    timeLabel.textContent = `Time: 0s`;

    // Hide selection screen, show game area
    instructionLabel.classList.add('hidden');
    selectionContainer.classList.add('hidden');
    gameArea.classList.remove('hidden');
    resultsArea.classList.add('hidden');

    // Prepare the list of states for the game
    const allStates = Object.keys(statesData);
    // Shuffle the array
    for (let i = allStates.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [allStates[i], allStates[j]] = [allStates[j], allStates[i]];
    }
    selectedStates = allStates.slice(0, numStates);

    // Start the timer
    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 1000);

    showNextFlashcard();
}

/**
 * Displays the next question/flashcard.
 */
function showNextFlashcard() {
    updateProgressBar();

    // Check if the game is over
    if (currentIndex >= numStates) {
        endGame();
        return;
    }

    const stateName = selectedStates[currentIndex];
    const capital = statesData[stateName].capital;
    const stateFilename = stateName.toLowerCase().replace(/ /g, '_') + '.png';
    stateImage.src = `states_images/${stateFilename}`;
    stateImage.alt = `Shape of ${stateName}`;
    
    // Default to showing the image
    stateImage.classList.remove('hidden');

    // Set the prompt and correct answer based on the game mode
    switch (currentMode) {
        case "State Shape Challenge":
            promptLabel.textContent = "What is this state?";
            correctAnswer = stateName;
            break;
        case "Capital Quest":
            promptLabel.textContent = `What is the capital of ${stateName}?`;
            correctAnswer = capital;
            break;
        case "Reverse Recall":
            promptLabel.textContent = `Which state has the capital ${capital}?`;
            correctAnswer = stateName;
            stateImage.classList.add('hidden'); // Hide image for this mode
            break;
        case "State Facts Challenge":
            const fact = statesData[stateName].facts[Math.floor(Math.random() * statesData[stateName].facts.length)];
            promptLabel.textContent = fact;
            correctAnswer = stateName;
            askedQuestions.push(fact); // Store the question for the results screen
            stateImage.classList.add('hidden'); // Hide image for this mode
            break;
    }

    setupAnswerArea();
}

/**
 * Sets up the answer area based on the selected difficulty.
 */
function setupAnswerArea() {
    answerArea.innerHTML = ''; // Clear previous answer options

    if (difficulty === 'hard') {
        const input = document.createElement('input');
        input.type = 'text';
        input.id = 'answer-entry';
        input.placeholder = 'Type your answer...';
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                checkAnswer(input.value);
            }
        });

        const submitBtn = document.createElement('button');
        submitBtn.textContent = 'Submit';
        submitBtn.onclick = () => checkAnswer(input.value);

        answerArea.appendChild(input);
        answerArea.appendChild(submitBtn);
        input.focus();
    } else {
        const numOptions = difficulty === 'easy' ? 2 : 5;
        let options = [correctAnswer];
        let allPossibleAnswers;

        // Determine the pool of potential wrong answers
        if (currentMode === 'Capital Quest') {
            allPossibleAnswers = Object.values(statesData).map(d => d.capital);
        } else {
            allPossibleAnswers = Object.keys(statesData);
        }

        // Remove the correct answer from the pool
        allPossibleAnswers = allPossibleAnswers.filter(ans => ans !== correctAnswer);

        // Randomly select wrong answers
        while (options.length < numOptions && allPossibleAnswers.length > 0) {
            const randomIndex = Math.floor(Math.random() * allPossibleAnswers.length);
            options.push(allPossibleAnswers.splice(randomIndex, 1)[0]);
        }
        
        // Shuffle the final options
        for (let i = options.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [options[i], options[j]] = [options[j], options[i]];
        }

        // Create a button for each option
        options.forEach(option => {
            const btn = document.createElement('button');
            btn.textContent = option;
            btn.onclick = () => checkAnswer(option);
            answerArea.appendChild(btn);
        });
    }
}

/**
 * Checks the user's answer, updates the score, and provides feedback.
 * @param {string} userAnswer - The answer provided by the user.
 */
function checkAnswer(userAnswer) {
    const isCorrect = userAnswer.trim().toLowerCase() === correctAnswer.toLowerCase();
    const feedbackColor = isCorrect ? 'var(--light-green)' : 'var(--light-red)';
    
    // Provide visual feedback
    document.body.style.backgroundColor = feedbackColor;
    setTimeout(() => {
        document.body.style.backgroundColor = 'var(--background-gray)';
    }, 500);

    if (isCorrect) {
        playSound(correctSound);
        score++;
        correctAnswers[currentIndex] = true;
    } else {
        playSound(incorrectSound);
        correctAnswers[currentIndex] = false;
        const questionText = (currentMode === 'State Facts Challenge') ? askedQuestions[currentIndex] : promptLabel.textContent;
        wrongAnswers.push({
            question: questionText,
            correct: correctAnswer,
            yours: userAnswer
        });
    }

    scoreLabel.textContent = `Score: ${score}`;
    currentIndex++;
    showNextFlashcard();
}

/**
 * Ends the game and displays the final results screen.
 */
function endGame() {
    clearInterval(timerInterval); // Stop the timer
    const totalTime = Math.round((Date.now() - startTime) / 1000);
    const percentage = Math.round((score / numStates) * 100);

    // Hide game area, show results
    gameArea.classList.add('hidden');
    resultsArea.classList.remove('hidden');

    // Display final stats
    finalScore.textContent = `Your score: ${score}/${numStates} (${percentage}%)`;
    finalGrade.textContent = `Grade: ${calculateGrade(percentage)}`;
    finalTime.textContent = `Time taken: ${totalTime} seconds`;

    // Display list of wrong answers
    wrongAnswersContainer.innerHTML = '';
    if (wrongAnswers.length > 0) {
        const header = document.createElement('h3');
        header.textContent = 'Review your mistakes:';
        wrongAnswersContainer.appendChild(header);

        wrongAnswers.forEach(wa => {
            const p = document.createElement('p');
            p.innerHTML = `<strong>Q:</strong> ${wa.question}<br>
                           <strong>Correct:</strong> ${wa.correct} | <strong>You answered:</strong> ${wa.yours}`;
            wrongAnswersContainer.appendChild(p);
        });
    }
}

/**
 * Resets the game to the initial mode selection screen.
 */
function restartGame() {
    playSound(clickSound);
    resultsArea.classList.add('hidden');
    instructionLabel.classList.remove('hidden');
    selectionContainer.classList.remove('hidden');
    init();
}

// --- Helper Functions ---

/**
 * Updates the timer display every second.
 */
function updateTimer() {
    const elapsed = Math.round((Date.now() - startTime) / 1000);
    timeLabel.textContent = `Time: ${elapsed}s`;
}

/**
 * Updates the visual progress bar at the top of the game area.
 */
function updateProgressBar() {
    progressBarContainer.innerHTML = '';
    const segmentWidth = 100 / numStates;
    for (let i = 0; i < numStates; i++) {
        const segment = document.createElement('div');
        segment.classList.add('progress-segment');
        segment.style.width = `${segmentWidth}%`;
        if (correctAnswers[i] === true) {
            segment.classList.add('correct');
        } else if (correctAnswers[i] === false) {
            segment.classList.add('incorrect');
        }
        progressBarContainer.appendChild(segment);
    }
}

/**
 * Calculates a letter grade based on the percentage score.
 * @param {number} percentage - The final score percentage.
 * @returns {string} The calculated letter grade.
 */
function calculateGrade(percentage) {
    if (percentage >= 90) return "A";
    if (percentage >= 80) return "B";
    if (percentage >= 70) return "C";
    if (percentage >= 60) return "D";
    return "F";
}

// --- Start the Application ---
// This is the entry point of the script.
document.addEventListener('DOMContentLoaded', init);

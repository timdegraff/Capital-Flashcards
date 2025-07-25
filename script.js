// --- Game Data ---
// This object holds all the states, their capitals, and fun facts.
// It's the JavaScript equivalent of your Python dictionaries.
const statesData = {
    "Alabama": { capital: "Montgomery", facts: ["Known as the Yellowhammer State.", "Famous for its peanut production.", "Hosted the first Mardi Gras celebration in the U.S.", "Home to the U.S. Space & Rocket Center.", "Famous for its Civil Rights history."] },
    "Alaska": { capital: "Juneau", facts: ["The largest state in the U.S. by area.", "Has the highest mountain, Denali.", "Known for the Northern Lights.", "Has more coastline than all other states combined.", "Famous for its sled dog races."] },
    "Arizona": { capital: "Phoenix", facts: ["Home to the Grand Canyon.", "Has the most telescopes in the world in Tucson.", "Known for its saguaro cacti.", "Home to the Barringer Crater, a meteorite impact site nearly one mile across?", "Which state is the last of the 48 contiguous states to be admitted to the Union?"] },
    "Arkansas": { capital: "Little Rock", facts: ["Known as the Natural State.", "Has the only active diamond mine in the U.S.", "Famous for its hot springs.", "Which state is the nation's leading producer of rice?", "A major producer of rice."] },
    "California": { capital: "Sacramento", facts: ["Home to Hollywood.", "Has the tallest trees, called redwoods.", "Known for the Golden Gate Bridge.", "Grows the most avocados in the U.S.", "Contains the lowest point in North America, Badwater Basin in Death Valley?"] },
    "Colorado": { capital: "Denver", facts: ["Known as the Centennial State.", "Has the Rocky Mountains.", "Has the highest average elevation in the United States?", "Which state is home to the world's deepest hot springs, measured at over 1,000 feet deep?", "Has the highest sand dunes in North America."] },
    "Connecticut": { capital: "Hartford", facts: ["Known as the Constitution State.", "Home to Yale University.", "Invented the hamburger in New Haven.", "Famous for its lighthouses along the coast.", "Home to the first nuclear-powered submarine, the USS Nautilus?"] },
    "Delaware": { capital: "Dover", facts: ["The first to ratify the U.S. Constitution.", "Known as the Diamond State.", "Famous for its tax-free shopping.", "Home to the DuPont company.", "Which state is known for being the corporate home to more than half of all U.S. publicly traded companies?"] },
    "Florida": { capital: "Tallahassee", facts: ["Known as the Sunshine State.", "Home to Walt Disney World.", "Has the Everglades, a unique swamp ecosystem.", "Famous for its oranges.", "Home to the Kennedy Space Center, the launch site for U.S. space missions?"] },
    "Georgia": { capital: "Atlanta", facts: ["Known as the Peach State.", "Hosted the 1996 Summer Olympics.", "Famous for its pecans.", "Has the oldest state park, Indian Springs.", "Which state is the birthplace of both Coca-Cola and the Civil Rights Movement leader, Martin Luther King Jr.?"] },
    "Hawaii": { capital: "Honolulu", facts: ["An island chain in the Pacific Ocean.", "Known for its active volcanoes.", "Famous for hula dancing.", "Grows the most pineapples in the U.S.", "Known for its surfing beaches."] },
    "Idaho": { capital: "Boise", facts: ["Known as the Gem State.", "Famous for its potatoes.", "Has the deepest river gorge, Hells Canyon.", "Known for its hot springs.", "Has a famous ski resort called Sun Valley."] },
    "Illinois": { capital: "Springfield", facts: ["Known as the Prairie State.", "Home to the city of Chicago.", "Has the tallest building, the Willis Tower.", "Famous for its corn production.", "Known for its deep-dish pizza."] },
    "Indiana": { capital: "Indianapolis", facts: ["Known as the Hoosier State.", "Hosts the Indianapolis 500 race.", "Famous for its limestone quarries.", "Which state produces more popcorn than any other in the U.S.?", "Home to the University of Notre Dame."] },
    "Iowa": { capital: "Des Moines", facts: ["Known as the Hawkeye State.", "Famous for its cornfields.", "Hosts the Iowa State Fair.", "Known for its rolling hills.", "A major producer of pork."] },
    "Kansas": { capital: "Topeka", facts: ["Known as the Sunflower State.", "Famous for its wheat production.", "Home to the geographic center of the U.S. mainland.", "Was the fictional home of Dorothy, who was swept away by a tornado in The Wizard of Oz?", "A leading producer of helium, a gas found in underground deposits?"] },
    "Kentucky": { capital: "Frankfort", facts: ["Known as the Bluegrass State.", "Hosts a famous annual horse race called the Derby.", "Famous for its bourbon whiskey.", "Known for its horse farms.", "Which state is home to Fort Knox, which holds a large portion of the United States' gold reserves?"] },
    "Louisiana": { capital: "Baton Rouge", facts: ["Known as the Pelican State.", "Famous for its Cajun food.", "Has the tallest state capitol building in the United States?", "Has the Mississippi River delta.", "Celebrates Mardi Gras with parades."] },
    "Maine": { capital: "Augusta", facts: ["Known as the Pine Tree State.", "Famous for its lobster.", "The northeasternmost in the U.S.", "Known for its rocky coastline.", "Home to Acadia National Park."] },
    "Maryland": { capital: "Annapolis", facts: ["Known as the Old Line State.", "Famous for its blue crabs.", "Home to the Chesapeake Bay.", "The Star-Spangled Banner was written at Fort McHenry.", "Known for its historic lighthouses."] },
    "Massachusetts": { capital: "Boston", facts: ["Known as the Bay State.", "Home to Harvard University.", "Hosted the Boston Tea Party.", "Famous for its cranberries.", "Known for its historic battles."] },
    "Michigan": { capital: "Lansing", facts: ["Known as the Great Lakes State.", "Famous for its car industry in Detroit.", "Surrounded by four Great Lakes.", "Known for its cherries.", "Home to the Sleeping Bear Dunes, with sand bluffs rising 450 feet tall?"] },
    "Minnesota": { capital: "St. Paul", facts: ["Known as the Land of 10,000 Lakes.", "Home to the Mall of America.", "Famous for its wild rice.", "The northernmost in the mainland U.S.", "Known for its cold winters."] },
    "Mississippi": { capital: "Jackson", facts: ["Known as the Magnolia State.", "Famous for its blues music.", "Home to the Mississippi River.", "Known for its catfish farming.", "Home to the world’s largest shrimp and fish sculpture in Biloxi."] },
    "Missouri": { capital: "Jefferson City", facts: ["Known as the Show-Me State.", "Home to the Gateway Arch in St. Louis.", "Was the official starting point of the Pony Express in 1860?", "The starting point of the Pony Express.", "Known for its caves."] },
    "Montana": { capital: "Helena", facts: ["Known as Big Sky Country.", "Home to Glacier National Park.", "Has more cows than people.", "Famous for its sapphire mining.", "Which state's Triple Divide Peak is the only place in the U.S. where water flows to three different oceans (Pacific, Atlantic, and Arctic)?"] },
    "Nebraska": { capital: "Lincoln", facts: ["Known as the Cornhusker State.", "Famous for its beef production.", "Home to the world’s largest indoor rainforest at Henry Doorly Zoo.", "Hosts the College World Series in Omaha.", "Known for its sandhill cranes."] },
    "Nevada": { capital: "Carson City", facts: ["Known as the Silver State.", "Famous for Las Vegas.", "Home to Area 51.", "The driest in the U.S.", "Known for its desert races."] },
    "New Hampshire": { capital: "Concord", facts: ["Known as the Granite State.", "Famous for its maple syrup.", "Home to the White Mountains.", "Has the shortest coastline in the U.S.", "Was the first of the original 13 colonies to declare its independence from Great Britain?"] },
    "New Jersey": { capital: "Trenton", facts: ["Known as the Garden State.", "Home to the world’s tallest roller coaster, Kingda Ka.", "Which state has the most diners in the world and is often referred to as the 'Diner Capital of the World'?", "Invented the drive-in movie theater.", "Known for its blueberries."] },
    "New Mexico": { capital: "Santa Fe", facts: ["Known as the Land of Enchantment.", "Famous for its hot air balloon festival in Albuquerque.", "Home to Carlsbad Caverns.", "Known for its chili peppers.", "Which state was the site of the top-secret Manhattan Project at Los Alamos, where the first atomic bomb was developed?"] },
    "New York": { capital: "Albany", facts: ["Known as the Empire State.", "Home to the Statue of Liberty.", "Famous for Niagara Falls.", "Was once called New Amsterdam.", "Which state established the first state park in the U.S. at Niagara Falls?"] },
    "North Carolina": { capital: "Raleigh", facts: ["Known as the Tar Heel State.", "Home to the tallest lighthouse in the U.S., the Cape Hatteras Lighthouse?", "Home to the Wright Brothers’ first flight.", "Known for its tobacco production.", "Which state is home to the largest privately owned home in the U.S., the Biltmore Estate?"] },
    "North Dakota": { capital: "Bismarck", facts: ["Known as the Peace Garden State.", "Famous for its sunflower fields.", "Home to Theodore Roosevelt National Park.", "A major producer of wheat.", "Known for its oil fields."] },
    "Ohio": { capital: "Columbus", facts: ["Known as the Buckeye State.", "Home to the Rock and Roll Hall of Fame.", "Famous for its roller coasters at Cedar Point.", "The airplane was invented here.", "Which state is the only one with a non-rectangular flag?"] },
    "Oklahoma": { capital: "Oklahoma City", facts: ["Known as the Sooner State.", "Famous for its Native American heritage.", "Home to the National Cowboy & Western Heritage Museum.", "Has more man-made lakes than any other state?", "Has the largest Native American population in the United States?"] },
    "Oregon": { capital: "Salem", facts: ["Known as the Beaver State.", "Famous for its Crater Lake, the deepest in the U.S.", "Home to the city of Portland, known for roses.", "Home to the largest independent bookstore in the world, Powell's City of Books?", "Known for its wine country."] },
    "Pennsylvania": { capital: "Harrisburg", facts: ["Known as the Keystone State.", "Home to the Liberty Bell.", "Famous for its chocolate in Hershey.", "Hosted the signing of the Declaration of Independence.", "Home to the first zoo in the United States, the Philadelphia Zoo?"] },
    "Rhode Island": { capital: "Providence", facts: ["Known as the Ocean State.", "The smallest in the U.S. by area.", "Which state hosted the America's Cup sailing race for over 50 years?", "Founded the first circus in the U.S.", "Known for its colonial history."] },
    "South Carolina": { capital: "Columbia", facts: ["Known as the Palmetto State.", "Home to the only large-scale commercial tea plantation in North America?", "Home to Myrtle Beach.", "Started the Civil War at Fort Sumter.", "Which state is known for its unique Gullah culture, which has preserved many African linguistic and cultural traditions?"] },
    "South Dakota": { capital: "Pierre", facts: ["Known as the Mount Rushmore State.", "Home to Mount Rushmore.", "Famous for the Badlands National Park.", "Hosts the Sturgis Motorcycle Rally.", "Known for its buffalo herds."] },
    "Tennessee": { capital: "Nashville", facts: ["Known as the Volunteer State.", "Which state is home to the most visited National Park in the United States, the Great Smoky Mountains?", "Home to Graceland, Elvis Presley’s mansion.", "Has the Great Smoky Mountains.", "Known for its bluegrass music."] },
    "Texas": { capital: "Austin", facts: ["Known as the Lone Star State.", "The second-largest in the U.S. by area.", "Home to NASA's Johnson Space Center, also known as Mission Control?", "Home to the Alamo.", "Known for its cattle ranches."] },
    "Utah": { capital: "Salt Lake City", facts: ["Known as the Beehive State.", "Famous for its salt flats.", "Hosted the 2002 Winter Olympics.", "Home to Zion National Park.", "Known for its red rock arches."] },
    "Vermont": { capital: "Montpelier", facts: ["Known as the Green Mountain State.", "Produces the most maple syrup in the U.S.?", "Known for its ski resorts.", "Has the smallest state capital by population.", "Which state was the first to constitutionally abolish slavery?"] },
    "Virginia": { capital: "Richmond", facts: ["Known as the Old Dominion.", "Home to Colonial Williamsburg.", "Which state is home to the Pentagon, the headquarters of the U.S. Department of Defense?", "Hosted the first permanent English settlement, Jamestown.", "Known for its Shenandoah Valley."] },
    "Washington": { capital: "Olympia", facts: ["Known as the Evergreen State.", "Home to the Space Needle in Seattle.", "Famous for its apples.", "Home to Mount Rainier.", "The only one named after a U.S. President?"] },
    "West Virginia": { capital: "Charleston", facts: ["Known as the Mountain State.", "Which state is located entirely within the Appalachian Mountain region, earning it the nickname 'The Mountain State'?", "Home to the New River Gorge Bridge.", "Split from another state during the Civil War.", "Known for its whitewater rafting."] },
    "Wisconsin": { capital: "Madison", facts: ["Known as the Badger State.", "Produces the most cheese in the United States?", "Home to the Harley-Davidson Museum.", "Which state is the only one that requires butter, not margarine, to be served in its public schools and prisons?", "Has beautiful lakes."] },
    "Wyoming": { capital: "Cheyenne", facts: ["Known as the Equality State.", "Home to Yellowstone National Park.", "The first to give women the right to vote.", "Contains Devils Tower, the first landmark to be declared a U.S. National Monument?", "Known for its geysers?"] }
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

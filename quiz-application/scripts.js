/*
    Page name: Home Page
    HTML Page: index.html
    CSS Page: home.css
*/
const homePageBody = document.getElementById('homePageBody');
if(homePageBody) {
    const homePagecontainer = document.createElement('div');
    homePagecontainer.classList.add('container', 'vh-100','d-flex', 'justify-content-center','flex-column', 'align-items-center');

    const quickQuiz = document.createElement('h1');
    quickQuiz.classList.add('text-primary','mb-4');
    quickQuiz.innerText = "QuickQuiz";

    const play = document.createElement('button');
    play.classList.add('w-25','mb-2', 'btn', 'btn-primary');
    play.id = "play";
    play.innerText = "Play";

    const highScores = document.createElement('button');
    highScores.classList.add('w-25','mb-2', 'btn', 'btn-primary');
    highScores.id = "highScores";
    highScores.innerText = "High scores";

    homePagecontainer.append(quickQuiz, play, highScores);
    homePageBody.appendChild(homePagecontainer);


    document.getElementById('play').addEventListener('click', () => {
        window.location.href = "game/game.html";
    });

    document.getElementById('highScores').addEventListener('click', () => {
        window.location.href = "highscores/highscores.html";
    });
}

/*
    Page name: Main Page
    HTML Page: game.html
    CSS Page: game.css
*/
const gamePageBody = document.getElementById('gamePageBody');
let score = 0;
let questionList = []
if(gamePageBody) {
    let questionNumber = 1;
    const fetchQuizQuestion  = async() => {
        let quizQuestion = await fetch('https://opentdb.com/api.php?amount=10&category=17&difficulty=easy&type=multiple');
        data = await quizQuestion.json();
        const result = data.results.map(element => {
            element.incorrect_answers.push(element.correct_answer);
            return element;
        });
        questionList = result;
        return result;
    }

    fetchQuizQuestion().then((data, index) => {
        const mainPageContainer = document.createElement('div');
        mainPageContainer.setAttribute('class','container');
        mainPageContainer.setAttribute('id','mainPageContainer');
    
        // Question number & score wrapper
        const mainPageHeaderWrapper= document.createElement('div');
        mainPageHeaderWrapper.classList.add('d-flex','justify-content-between', 'main-page-header-wrapper');
    
        
        // Question number
        const progressWrapper = document.createElement('div');
    
        const progressLabel = document.createElement('span');
        progressLabel.appendChild(document.createTextNode('Question '));
        progressWrapper.appendChild(progressLabel);
    
        const progressValue = document.createElement('span');
        progressValue.setAttribute('id', 'progressText');
        progressValue.appendChild(document.createTextNode(`${questionNumber}/10`));
        progressWrapper.appendChild(progressValue);
    
        mainPageHeaderWrapper.appendChild(progressWrapper);
    
        // Score
        const scoreWrapper = document.createElement('div');
    
        const scoreLabel = document.createElement('span');
        scoreLabel.appendChild(document.createTextNode('Score '));
        scoreWrapper.appendChild(scoreLabel);
    
        const scoreValue = document.createElement('span');
        scoreValue.setAttribute('id', 'score');
        scoreValue.appendChild(document.createTextNode(`${score}`));
        scoreWrapper.appendChild(scoreValue);
    
        mainPageHeaderWrapper.appendChild(scoreWrapper);
        mainPageContainer.append(mainPageHeaderWrapper);
    
        // Question
        const questionNode = document.createElement('p');
        questionNode.setAttribute('id', 'question');
        questionNode.appendChild(document.createTextNode(data[0].question));
        mainPageContainer.append(questionNode);
    
        // Choice 
        data[0].incorrect_answers.forEach((element,index) => {
            let choiceNode = document.createElement('button');
            choiceNode.setAttribute('class', 'answers');
            choiceNode.setAttribute('id', `answer${index}`);
            choiceNode.appendChild(document.createTextNode(element));
            mainPageContainer.append(choiceNode);
        });
    
            // Action
        const mainPageActionWrapper= document.createElement('div');
        mainPageActionWrapper.classList.add('d-flex','justify-content-between', 'main-page-action-wrapper');
    
        const previousBtnLabel = document.createElement('button');
        previousBtnLabel.setAttribute('disabled', true);
        previousBtnLabel.setAttribute('id', 'previousBtn');
        previousBtnLabel.appendChild(document.createTextNode('<- Previous'));
        mainPageActionWrapper.appendChild(previousBtnLabel);
    
        const nextBtnValue = document.createElement('button');
        nextBtnValue.setAttribute('id', 'nextBtn');
        nextBtnValue.setAttribute('disabled', true);
        nextBtnValue.appendChild(document.createTextNode('Next ->'));
        mainPageActionWrapper.appendChild(nextBtnValue);
    
        mainPageContainer.append(mainPageActionWrapper);
    
        gamePageBody.appendChild(mainPageContainer);
    
        document.getElementById('mainPageContainer').addEventListener('click', (event) => {
            if(event.target.id === 'previousBtn') {
                if(questionNumber > 1) {
                    questionNumber = questionNumber - 1;
                    setTheCurrentQuestionAndChoices();
                    if(questionNumber === 1) {
                        document.getElementById("previousBtn").disabled = true;
                    }
                    highlightTheSelectedAnswers();
                }
            } else if(event.target.id === 'nextBtn') {
                if(questionNumber < 10) {
                    questionNumber = questionNumber + 1;
                    setTheCurrentQuestionAndChoices();
                    document.getElementById("previousBtn").disabled = false;
                    document.getElementById("nextBtn").disabled = true;
                    if(questionNumber === 10) {
                        document.getElementById("nextBtn").innerText = 'Finish';
                        // document.getElementById("nextBtn").disabled = false;
                    }
                    highlightTheSelectedAnswers();
                } else {
                    localStorage.setItem('score', score);
                    window.location.href = "../end/end.html";
                }
            } else if (event.target.className === 'answers') {
                if(!(questionList[questionNumber-1].hasOwnProperty('choosenAnswer'))) {
                    if(questionList[questionNumber-1].correct_answer === event.target.innerText) {
                        document.getElementById(event.target.id).classList.add('text-success');
                        score = score + 10;
                        document.getElementById('score').innerText = score;
                    } else {
                        document.getElementById(event.target.id).classList.add('text-danger');
                    }
                    questionList[questionNumber-1].choosenAnswer = event.target.innerText;
                    document.getElementById("nextBtn").disabled = false;
                }
            }
        });
    });

    function highlightTheSelectedAnswers () {
        if(questionList[questionNumber-1].hasOwnProperty('choosenAnswer')) {
            document.getElementById("nextBtn").disabled = false;
            questionList[questionNumber-1].incorrect_answers.forEach((element, index) => {
                document.getElementById(`answer${index}`).classList.remove('text-success');
                document.getElementById(`answer${index}`).classList.remove('text-danger');
            }) 
            questionList[questionNumber-1].incorrect_answers.forEach((element, index) => {
                if(element === questionList[questionNumber-1].choosenAnswer) {
                    if(questionList[questionNumber-1].correct_answer === questionList[questionNumber-1].choosenAnswer) {
                        document.getElementById(`answer${index}`).classList.add('text-success');
                    } else {
                        document.getElementById(`answer${index}`).classList.add('text-danger');
                    }
                } 
            });
        } else {
            questionList[questionNumber-1].incorrect_answers.forEach((element, index) => {
                document.getElementById(`answer${index}`).classList.remove('text-success');
                document.getElementById(`answer${index}`).classList.remove('text-danger');
            })  
        }
    }

    function setTheCurrentQuestionAndChoices() {
        document.getElementById('progressText').innerText = `${questionNumber}/10`
        document.getElementById(`question`).innerText = questionList[questionNumber-1].question;
        questionList[questionNumber-1].incorrect_answers.forEach((element, index) => {
            document.getElementById(`answer${index}`).innerText = element
        });
    }
}

/*
    Page name: End Page
    HTML Page: end.html
    CSS Page: end.css
*/
const endPageBody = document.getElementById('endPageBody');
let highScoreList = [];
if(endPageBody) {
    let username = '';
    if(localStorage.getItem('score')) {
        score = localStorage.getItem('score');
    }
    if(localStorage.getItem('highScore')) {
        highScoreList = JSON.parse(localStorage.getItem('highScore'));
    }
    
    const endPageContainer = document.createElement('div');
    endPageContainer.classList.add('container','vh-100');
    endPageContainer.setAttribute('id','endPageContainer');

    const endPageWrapper = document.createElement('div');
    endPageWrapper.classList.add('w-25','h-100','d-flex', 'justify-content-center','flex-column', 'm-auto', 'text-center');

    const displayScore = document.createElement('div');
    displayScore.classList.add('mb-2');
    displayScore.setAttribute('id','score');
    displayScore.appendChild(document.createTextNode(score));
    endPageWrapper.appendChild(displayScore);

    const userName = document.createElement('input');
    userName.classList.add('mb-2');
    userName.setAttribute('type','text');
    userName.setAttribute('id','username');
    endPageWrapper.appendChild(userName);

    
    const saveScoreBtn = document.createElement('button');
    saveScoreBtn.classList.add('mb-4');
    saveScoreBtn.setAttribute('id','saveScoreBtn');
    saveScoreBtn.setAttribute('disabled', true);
    saveScoreBtn.appendChild(document.createTextNode('Save'));
    endPageWrapper.appendChild(saveScoreBtn);


    const goHome = document.createElement('button');
    goHome.classList.add('mb-2');
    goHome.setAttribute('id','goHome');
    goHome.appendChild(document.createTextNode('Go home'));
    endPageWrapper.appendChild(goHome);


    const playAgain = document.createElement('button');
    playAgain.classList.add('mb-2');
    playAgain.setAttribute('id','playAgain');
    playAgain.appendChild(document.createTextNode('Play again'));
    endPageWrapper.appendChild(playAgain);

    endPageContainer.appendChild(endPageWrapper);
    endPageBody.appendChild(endPageContainer);

    document.getElementById('username').addEventListener('keyup', (event) => {
            username = event.target.value;
            if(username.length) {
                document.getElementById('saveScoreBtn').disabled = false;
            } else {
                document.getElementById('saveScoreBtn').disabled = true;
            }
    });

    document.getElementById('endPageContainer').addEventListener('click', (event) => {
        if(event.target.id === 'saveScoreBtn') {
            highScoreList.push({ 'username': username, 'score': score });
            localStorage.setItem('highScore', JSON.stringify(highScoreList));
            username = '';
            score = 0;
            questionList = [];
            localStorage.removeItem('score');
            document.getElementById('score').style.display = 'none';
            document.getElementById('username').style.display = 'none';
            document.getElementById('saveScoreBtn').style.display = 'none';
        } else if(event.target.id === 'goHome') {
            window.location.href = "../index.html";
        } else if(event.target.id === 'playAgain') {
            window.location.href = "../game/game.html";
        }
    });
}

/*
    Page name: High score Page
    HTML Page: highscores.html
    CSS Page: highscores.css
*/
const highScorePageBody = document.getElementById('highScorePageBody');
if(highScorePageBody) {
    if(localStorage.getItem('highScore')) {
        highScoreList = JSON.parse(localStorage.getItem('highScore'));
    }
    const highScoreContainer = document.createElement('div');
    highScoreContainer.classList.add('container','vh-100');
    highScoreContainer.setAttribute('id','highScorePageContainer');

    const highScoreWrapper = document.createElement('div');
    highScoreWrapper.classList.add('w-25','h-100','d-flex', 'justify-content-center','flex-column', 'm-auto', 'text-center');

    const highScoreLabel = document.createElement('div');
    highScoreLabel.classList.add('mb-2', 'text-primary', 'high-score-label');
    highScoreLabel.appendChild(document.createTextNode('High scores'));
    highScoreWrapper.appendChild(highScoreLabel);

    if(highScoreList.length) {
        highScoreList.forEach(element => {
            const score = document.createElement('div');
            score.classList.add('mb-2');
            score.appendChild(document.createTextNode(`${element.username} - ${element.score}`));
            highScoreWrapper.appendChild(score);
        });
    } else {
        const score = document.createElement('div');
        score.classList.add('mb-2');
        score.appendChild(document.createTextNode('No high records'));
        highScoreWrapper.appendChild(score);
    }

    const goHome = document.createElement('button'); 
    goHome.classList.add('mt-4');
    goHome.setAttribute('id','goHome');
    goHome.appendChild(document.createTextNode('Go home'));
    highScoreWrapper.appendChild(goHome);

    highScoreContainer.appendChild(highScoreWrapper);
    highScorePageBody.appendChild(highScoreContainer);

    document.getElementById('highScorePageContainer').addEventListener('click', (event) => {
        if(event.target.id === 'goHome') {
            window.location.href = "../index.html";
        }
    });
}
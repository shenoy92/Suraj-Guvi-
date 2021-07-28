

const homePageBody:HTMLElement |null = document.getElementById('homePageBody');
if(homePageBody) {

	const homePagecontainer: HTMLDivElement = document.createElement('div');
	homePagecontainer.classList.add('container', 'vh-100','d-flex', 'justify-content-center','flex-column', 'align-items-center');

	const img: HTMLImageElement=document.createElement('img');
	img.id="img"
	img.setAttribute('src','https://img.poki.com/cdn-cgi/image/quality=78,width=600,height=600,fit=cover,g=0.5x0.5,f=auto/d07c1db617a36898b5e8c71013d228d11003eb36d7150b7abfe988fe097c7d66.png');

	const start: HTMLButtonElement = document.createElement('button');
	start.id= "start";
	start.innerText = "Start";

	homePagecontainer.append(img,start);
	homePageBody.appendChild(homePagecontainer);

	document.getElementById('start').addEventListener('click', () => {
        window.location.href = "games/game.html";
    });
}

const WINNING_COMBINATIONS:number[][] = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

const gamePageBody: HTMLElement |null = document.getElementById('gamePageBody');

if(gamePageBody) { 

    let X_CLASS:string='x'
    let CIRCLE_CLASS:string = 'circle'
 
    const cellElements:any= document.querySelectorAll('[data-cell]')
    const board: HTMLElement |null= document.getElementById('board')
    const restartButton: HTMLElement |null= document.getElementById('restartButton')
    const EndButton: HTMLElement|null = document.getElementById('EndButton')
    const winningMessageElement: HTMLElement|null = document.getElementById('winningMessage')
    const winningMessageTextElement = document.querySelector('[data-winning-message-text]')
    let circleTurn:any

    const setBoardHoverClass=()=> {
        board.classList.remove(X_CLASS)
        board.classList.remove(CIRCLE_CLASS)
        if(circleTurn) {
            board.classList.add(CIRCLE_CLASS)
        }else {
            board.classList.add(X_CLASS)
        }
    } 

    const isDraw=()=> {
        return [...cellElements].every(cell => {
            return cell.classList.contains(X_CLASS) ||
            cell.classList.contains(CIRCLE_CLASS)
        })
    } 

    const placeMark=(cell,currentClass)=>{
        cell.classList.add(currentClass)
    }

    const swapTurns=()=> {
        circleTurn = !circleTurn
    }

    const checkWin=(currentClass)=> {
       
        return WINNING_COMBINATIONS.some(combination=>{
           
            return combination.every(index => {
                return cellElements[index].classList.contains(currentClass)

            })
        })
    }

    const handleClick=(e:any)=> {
        const cell= e.target
        const currentClass:string= circleTurn?CIRCLE_CLASS:X_CLASS
        placeMark(cell,currentClass)
        if (checkWin(currentClass)){
            endGame(false)
        } else if (isDraw()){
            endGame(true)
        } else {
            swapTurns()
            setBoardHoverClass()
        }
    }


    const startGame=()=>{
        circleTurn=false
        cellElements.forEach(cell =>{
            cell.classList.remove(X_CLASS)
            cell.classList.remove(CIRCLE_CLASS)
            cell.removeEventListener('click',handleClick)
            cell.addEventListener('click',handleClick,{once:true})
        })
        setBoardHoverClass()
        winningMessageElement.classList.remove('show')
    }
    startGame()

   
    

    restartButton.addEventListener('click',startGame)

    EndButton.addEventListener('click', () => {
        window.location.href = "../index.html";
    });

    const endGame=(draw)=> {
        // if(draw){
        //     winningMessageTextElement.innerText ='Draw!'
        // } else {
        //     winningMessageTextElement.innerText = `${circleTurn ? "O's":"X's"} Wins!`
        // }
        winningMessageElement.classList.add('show')
    }
}

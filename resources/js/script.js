document.addEventListener('DOMContentLoaded',()=>{
    const userGrid = document.querySelector('.grid-user')
    const computerGrid = document.querySelector('.grid-computer')
    const displayGrid = document.querySelector('.grid-display')
    const ships = document.querySelectorAll(.ship)
    const destroyer = document.querySelector('.destroyer-container')
    const submarine = document.querySelector('.submarine-container')
    const crusier= document.querySelector('.crusier-container')
    const battleship= document.querySelector('.battleship-container')
    const carrier= document.querySelector('.carrier-container')
    const StartButton = document.querySelector('#start')
    const rotateButton = document.querySelector('#rotate')
    const turnDisplay = document.querySelector('#whose-go')
    const infoDisplay = document.querySelector('#info')
    const userSquares = []

    const width = 10

    // Create Board
    function createBoard(){
        for (let i =0; i<width * width; i++){
            const square = document.createElement('div')
            userSquares.dataset.id = i
            userGrid.appendChild(square)
            userSquares.push(square)
            // Continue on from 25:00
        }

    }
})
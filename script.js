const boxes = document.querySelectorAll('.btn');
const resetBtn = document.querySelector('#reset-btn');
const msg =document.querySelector('.msg')
const newBtn = document.querySelector('#new-btn')
const msgContainer = document.querySelector('.msg-container')

let turnO = true;

let winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((btn) => {
  btn.addEventListener('click', () => {
    console.log('button clicked');
    if (turnO === true) {
      btn.innerText = '0';
      turnO = false;
    } else {
      btn.innerText = 'X';
      turnO = true;
    }
    btn.disabled = true;

    checkWinner();
  });
});

const disabledBtn = () =>{
  for(let box of boxes){
    box.disabled = true;
  }
}
const enableBoxes = () =>{
  for(let box of boxes){
    box.disabled = false;
    box.innerText = '';
  }
}
const resetGame = () => {
  turnO = true;
  enableBoxes()
  msgContainer.classList.add('hide')
}

const showWinner = (winner) => {
  msg.innerText = `Congratulation winner is ${winner}`;
  msgContainer.classList.remove('hide');
  disabledBtn()
}

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != '' && pos2Val != '' && pos3Val != '') {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log('winner');
        showWinner(pos1Val)
      }
    }
  }
};

resetBtn.addEventListener('click', resetGame)
newBtn.addEventListener('click', resetGame)

const savage = document.querySelector('svg')
const leftDna = document.getElementsByClassName('left-dna')
const RightDna = document.getElementsByClassName('right-dna')


savage.addEventListener('click', () => {
    savage.classList.toggle('twist')
    leftDna.classList.toggle('twist')
    RightDna.classList.toggle('twist')
})
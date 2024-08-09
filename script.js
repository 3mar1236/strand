const savage = document.querySelector('svg')
const leftDna = document.getElementsByClassName('left-dna')
const RightDna = document.getElementsByClassName('right-dna')


// savage.addEventListener('click', () => {
//     savage.classList.toggle('twist')
//     leftDna.classList.toggle('twist')
//     RightDna.classList.toggle('twist')
// })


document.addEventListener('scroll', () => {
    const {scrollTop, scrollHeight} = document.documentElement;
    const scrollPercent = scrollTop / (scrollHeight - window.innerHeight);

    const rotationPercent = `${Math.min(scrollPercent *  300, 90)}deg`;
    
    document.querySelector('svg').style.setProperty('--rotation', rotationPercent)

    // window.scrollY > 1? navHi.classList.add('scrolled') : navHi.classList.remove('scrolled');
    if (window.scrollY > 40){
        savage.classList.add('twist')
    } else if (window.scrollY <= 0){
        setTimeout(() => savage.classList.remove('twist'), 500);
        // savage.classList.remove('twist');
    }
});
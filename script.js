const loveMe =document.querySelector('.loveMe')
const times =document.querySelector('#times')

let clickTime = 0
let timesClicked = 0

// loveMe.addEventListener('dblclick', (e)=>{
//     console.log(123)
// })
loveMe.addEventListener('click', (e)=>{
    if (clickTime === 0) {
        clickTime = new Date().getTime()
    }else{
        if ((new Date().getTime() - clickTime) < 800) {
            // console.log(123)
            createHeart(e)
            clickTime = 0
        }else{
            clickTime = new Date().getTime()
        }
    }
    
})

const createHeart = (e) => {
    const heart = document.createElement('i')
    heart.classList.add('fas')
    heart.classList.add('fa-heart')

    const x = e.clientX
    const y = e.clientY

    const leftOffset = e.target.offsetLeft
    const topOffset = e.target.offsetTop

    const xInside = x - leftOffset
    const yInside = y - topOffset

    heart.style.left = `${xInside}px`
    heart.style.top = `${yInside}px`

    loveMe.appendChild(heart)
    times.innerHTML = ++timesClicked

    setTimeout(() => {heart.remove()}, 1000)
    // console.log(x,y)
    // console.log(xInside,yInside)
}
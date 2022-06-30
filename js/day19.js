const now = new Date()

// console.log(now)
// console.log(typeof now)

// console.log(now.getFullYear())
// console.log(now.getMonth())
// console.log(now.getUTCFullYear())
// console.log(now.getTime())
// console.log(now.toDateString())
// console.log(now.toTimeString())
// console.log(now.getMilliseconds())

// //TImestamps and comparison
const before = new Date('February 1 2021 12:00:00')

// console.log(before.getTime())

// const diff = now.getTime() - before.getTime()

// console.log(diff)

// const mins = Math.round(diff / 1000 / 60)
// const hours = Math.round(mins / 60)
// const days = Math.round(hours / 24)
// const month = Math.round(days / 30)
// const year = Math.floor(month / 12)

// const clock = document.querySelector('.clock')

// function tick() {
//     const now = new Date()

//     const h = now.getHours()
//     const m = now.getMinutes()
//     const s = now.getSeconds()

//     const html =
//         `<span>${h} :</span>
//          <span>${m} :</span>
//          <span>${s}</span>`
    
//     clock.innerHTML = html
// }

// // function glow() {
// //     clock.classList.toggle('glow')
// // }

// setInterval(tick, 1000)
// // 

console.log(dateFns.isToday(now))

//Formatting Times and Dates

console.log(dateFns.format(now, 'dddd Do MMMM YYYY'))

console.log(dateFns.distanceInWords(before, now, {addSuffix: true}))
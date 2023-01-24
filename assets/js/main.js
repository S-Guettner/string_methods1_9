const text1 = "Sam is going to codingschool"
const text2 = "Susi"
const text3 = "programming bike"
const text4 = "and"

let first = text1.replace("codingschool","school")
let firstText = " and to the movie theater"
let firstResult = first.concat(firstText)
console.log(firstResult);

let second = text1.replace("codingschool","movie theater")
console.log(second);

let third = text2.concat(" ",text4 ," ",text1.slice(0,3)," are going ",firstResult.slice(13,22) )
console.log(third);

fourth = third.slice(0,25).concat(" gym and to the " , second.slice(15,29))
console.log(fourth);

let fifth = firstResult.replace("Sam","susi")
console.log(fifth);

document.write(firstResult + "<br>" + second + "<br>" + third + "<br>" + fourth + "<br>" + fifth)
let counter = document.getElementById("counter")
let add = document.getElementById("add")
let sub = document.getElementById("sub")
let reset = document.getElementById("reset")
let container = document.querySelectorAll(".container")
let zikir = document.getElementById("zikir")
let box = document.getElementById(".box-body")
let count = 0

let myArray = ["Subahanallah","Walhamdulillah","Wallahu Akubar","Laa Ilaha Illallahu Wahdahu La sharika Lahu Lahul Mulk Walahul Hamdu Wa Huwa Alaa Kulli Sheyi'n Qadir"]
// function addN()
// {
//     count = count + 1
//     counter.innerHTML = count

// }
 
add.addEventListener("click", ()=>{
    if(count < 33) {
    zikir.innerHTML = myArray[0]
    count = count + 1
    counter.innerHTML = count
    document.body.style.backgroundColor = "#66ad24"
}
    else if(count >= 66 && count <= 98 )  {
    document.body.style.backgroundColor = "#8fad24"
    zikir.innerHTML = myArray[2]
    count = count + 1
    counter.innerHTML = count
    }
    else if(count >= 33 && count < 66)
    {
    zikir.innerHTML = myArray[1]
    count = count + 1
    counter.innerHTML = count
    document.body.style.backgroundColor = "#24ada6"
    }
    else if(count === 99)
    {
        zikir.innerHTML = myArray[3]
        count = 0
        counter.innerHTML = count
    }
    showtask()
})

function savedata()
{
    localStorage.setItem("data",count.innerHTML);
}
function showtask()
{
    count.innerHTML = localStorage.getItem("data");
}
showtask();

reset.addEventListener("click", () => {

    count = 0;
    counter.innerHTML = count
    document.body.style.backgroundColor = "#66ad24"
})

sub.addEventListener("click", ()=>{
    if(count === 0)
    {
        count = 0;
        counter.innerHTML = count
    }
    else 
    {
    count = count - 1
    counter.innerHTML = count
}
})
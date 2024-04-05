let leftChev = document.querySelector(".leftChev"),
    rightChev = document.querySelector(".rightChev"),
    header = document.querySelector(".header"),
    header1 = document.querySelector(".header1")


leftChev.addEventListener("click", function () {
    header.classList.remove("dispnone")
    header1.classList.remove("disp")

})
rightChev.addEventListener("click", function () {
    header.classList.add("dispnone")
    header1.classList.add("disp")
})

let animalDiv = document.querySelectorAll(".animalDiv")
let div;
animalDiv.forEach(ele => {
    ele.addEventListener("mouseenter", function () {
        div = document.createElement("div")

        div.classList.add("divStyle")
        ele.appendChild(div)
    })
})

animalDiv.forEach(ele => {
    ele.addEventListener("mouseleave", function () {
        div.classList.remove("divStyle")
    })
})

let duffleMainDiv = document.querySelector(".duffleMainDiv")
let duffleMainDiv1 = document.querySelector(".duffleMainDiv1")

let all = document.querySelector(".all")
let best = document.querySelector(".best")
let sale = document.querySelector(".sale")


all.addEventListener("click", function () {
    duffleMainDiv.classList.remove("dis")
    duffleMainDiv1.classList.remove("dis")

})
best.addEventListener("click", function () {
    duffleMainDiv.classList.add("dis")
    duffleMainDiv1.classList.remove("dis")
    console.log(duffleMainDiv);
    console.log(best);
})

sale.addEventListener("click", function () {
    duffleMainDiv1.classList.add("dis")
    duffleMainDiv.classList.remove("dis")
})


let heartDiv = document.querySelectorAll(".heartDiv")
let grayDiv = document.querySelector(".grayDiv")
let cross = document.querySelector(".cross")
let grayImg = document.querySelector(".grayImg")
let imgName = document.querySelector(".imgName")

heartDiv.forEach(ele => {
    ele.addEventListener('click', function () {
        grayDiv.classList.add("opac")
        // console.log(ele.parentElement.nextElementSibling.nextElementSibling.innerHTML);
        grayImg.src = ele.previousElementSibling.src
        imgName.innerHTML = ele.parentElement.nextElementSibling.innerHTML;
        console.log(ele.parentElement.nextElementSibling.innerHTML);
    })
})

cross.addEventListener("click", function () {
    grayDiv.classList.remove("opac")
})
const inputText = document.querySelector(".inputText")
const searchBtn = document.querySelector(".searchBtn")
const contentWrap = document.querySelector(".contentWrap")
const url = "https://jsonplaceholder.typicode.com/posts"

searchBtn.addEventListener("click",()=>{
    fetch(url)
    .then(res => res.json())
    .then(data =>{
        data.map((e)=>{
            console.log(e);
        })
    })
})



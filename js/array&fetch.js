const inputText = document.querySelector(".inputText")
const searchBtn = document.querySelector(".searchBtn")
const contentWrap = document.querySelector(".contentWrap")
const url = "https://jsonplaceholder.typicode.com/posts"

searchBtn.addEventListener("click",()=>{
fetch(url + `?id=${inputText.value}`)
.then(res => res.json())
.then(data => {
    data.forEach((e,i,a) => {
            // 配列処理を行いたい
                contentWrap.innerHTML = `
                <div class="user">
                <h2>${e.id}</h2>
                <p>${e.title}</p>
                </div>
                `
    });
})


    // mapでも配列処理を行える
    // 第一引数配列内で現在処理中の要素
    // 第二引数配列内で現在処理中の要素の配列内における添字
    // 第三引数配列内でmap が呼び出された配列
    // const mapArray = data.map((e,i)=>{
    //     return e.id * 2;
    // })

    // console.log(mapArray);
})
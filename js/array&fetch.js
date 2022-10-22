fetch(`https://jsonplaceholder.typicode.com/posts`)
.then(res => res.json())
.then(data => {
    data.forEach((e,i,a) => {
        a.map((i)=>{
            i.id > 10;
        })
    });
})
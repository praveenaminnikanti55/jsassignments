let div = document.getElementById("demo")

function get_posts() {
    url = "https://jsonplaceholder.typicode.com/posts"
    fetch(url)
        .then(res =>
            res.json()
        )
        .then(data => {
            console.log(data)
            for (let c of data){
                b_title=c.title
                b_body=c.body
                let h1=document.createElement("h1")
                h1.textContent=b_title
                div.append(h1)
                let para=document.createElement("p")
                para.textContent=b_body
                div.append(para)
                let hr=document.createElement("hr")
                div.append(hr)
            }
        })
}
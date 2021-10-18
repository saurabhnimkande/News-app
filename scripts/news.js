
    let data=JSON.parse(localStorage.getItem("news_details"));
    console.log(data)
    display_data(data);

    function display_data(el) {
        console.log(el.title)
        let main_div=document.getElementById("main_container");

        let div=document.createElement("div");

        let img=document.createElement("img");
        img.src=el.image

        let title=document.createElement("h3");
        title.innerText=el.title;

        let date=document.createElement("p");
        date.innerText="Published on: "+el.date;

        let author=document.createElement("p");
        author.innerText="Published by: "+el.author;

        let source=document.createElement("p");
        source.innerText="Source: "+el.source;

        let description=document.createElement("p");
        description.innerText=el.description;

        let content=document.createElement("p");
        content.innerText=el.content;

        let url=document.createElement("p");
        let z=el.url;
        url.innerHTML=`<p>Source:<a href=${z}>Click Here<\a><\p>`;

        div.append(img,title,date,author,source,description,content,url);

        main_div.append(div);

       


    }

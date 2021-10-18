async function get_top_news() {
    let res = await fetch(`https://newsapi.org/v2/everything?q=trending&from=2021-10-18&sortBy=popularity&apiKey=00894624a7074153bc033e5d48e2c703`);
    let data= await res.json();
    console.log(data.articles);
    display_news(data.articles);
  }

  get_top_news();

  function display_news(object) {

      object.forEach((el) => {

          let parent_div=document.getElementById("display_news");

          let div=document.createElement("div");

              div.onclick=() => {
                  if(localStorage.getItem("news_details")==null) {
                      localStorage.setItem("news_details",JSON.stringify({}));
                  }

                  let newdata=JSON.parse(localStorage.getItem("news_details"));

                  newdata.image=el.urlToImage;
                  newdata.title=el.title
                  newdata.description=el.description;
                  newdata.date=el.publishedAt;
                  newdata.author=el.author;
                  newdata.source=el.source.name;
                  newdata.url=el.url;
                  newdata.content=el.content;

                  let one=JSON.stringify(newdata);
                  localStorage.setItem("news_details", one);

                  window.location.href="news.html";

              }

          let img=document.createElement("img");
          img.src=el.urlToImage;

          let title=document.createElement("h4");
          title.innerText=el.title;

          let author=document.createElement("p");
          if(el.author==null) {
              author.innerText="Not Available";
          } else {
              author.innerText=el.author;
          }

          let description=document.createElement("p");
          description.innerText=el.description;


          div.append(img,title,author,description);

          parent_div.append(div);


      })

  }



  let search_news=() => {

      let news_topic=document.getElementById("search_value").value;

      if(localStorage.getItem("topic")==null) {
          localStorage.setItem("topic",JSON.stringify({}));
        }


        let newdata=JSON.parse(localStorage.getItem("topic"));
        newdata.topic=news_topic;

        let one=JSON.stringify(newdata);
        localStorage.setItem("topic", one);

        window.location.href="search.html";




  }


  

  let search_news1=() => {
  if(localStorage.getItem("topic")==null) {
  localStorage.setItem("topic",JSON.stringify({}));
  }

  let newdata=JSON.parse(localStorage.getItem("topic"));
  newdata.topic="Sports";

  let one=JSON.stringify(newdata);
  localStorage.setItem("topic", one);

  window.location.href="search.html";

  }

  let search_news2=() => {
  if(localStorage.getItem("topic")==null) {
  localStorage.setItem("topic",JSON.stringify({}));
  }

  let newdata=JSON.parse(localStorage.getItem("topic"));
  newdata.topic="Technology";

  let one=JSON.stringify(newdata);
  localStorage.setItem("topic", one);

  window.location.href="search.html";

  }

  let search_news3=() => {
  if(localStorage.getItem("topic")==null) {
  localStorage.setItem("topic",JSON.stringify({}));
  }

  let newdata=JSON.parse(localStorage.getItem("topic"));
  newdata.topic="Cryptocurrency";

  let one=JSON.stringify(newdata);
  localStorage.setItem("topic", one);

  window.location.href="search.html";

  }

  let search_news4=() => {
  if(localStorage.getItem("topic")==null) {
  localStorage.setItem("topic",JSON.stringify({}));
  }

  let newdata=JSON.parse(localStorage.getItem("topic"));
  newdata.topic="Covid";

  let one=JSON.stringify(newdata);
  localStorage.setItem("topic", one);

  window.location.href="search.html";

  }

  let search_news5=() => {
  if(localStorage.getItem("topic")==null) {
  localStorage.setItem("topic",JSON.stringify({}));
  }

  let newdata=JSON.parse(localStorage.getItem("topic"));
  newdata.topic="Agriculture";

  let one=JSON.stringify(newdata);
  localStorage.setItem("topic", one);

  window.location.href="search.html";

  }

  let search_news6=() => {
  if(localStorage.getItem("topic")==null) {
  localStorage.setItem("topic",JSON.stringify({}));
  }

  let newdata=JSON.parse(localStorage.getItem("topic"));
  newdata.topic="Entertainment";

  let one=JSON.stringify(newdata);
  localStorage.setItem("topic", one);

  window.location.href="search.html";

  }

  let search_news7=() => {
  if(localStorage.getItem("topic")==null) {
  localStorage.setItem("topic",JSON.stringify({}));
  }

  let newdata=JSON.parse(localStorage.getItem("topic"));
  newdata.topic="Finance";

  let one=JSON.stringify(newdata);
  localStorage.setItem("topic", one);

  window.location.href="search.html";

  }
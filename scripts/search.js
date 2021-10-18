async function get_top_news(value) {
    let res = await fetch(`https://newsapi.org/v2/everything?q=${value}&pageSize=20&apiKey=00894624a7074153bc033e5d48e2c703`);
    let data= await res.json();
    console.log(data.articles);
    display_news(data.articles);
  }

  let data=JSON.parse(localStorage.getItem("topic"));
  console.log(data.topic)
  get_top_news(data.topic);

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
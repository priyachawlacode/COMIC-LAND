function searchAnime(event){
  
    event.preventDefault();
  
    const form=new FormData(this);
    const query=form.get("search");
  
    fetch('https://api.jikan.moe/v3/search/manga?q='+query+'&page=1')
    .then(res=>res.json())
    .then(updateDOM)
    .catch(err=>console.warn(err.message));
  
  }
  
function watchlist(img_url,title,description,url)
{
    //var opened = document.getElementById('container');
    
    window.location.href="watchlist.html";
    document.write("<div class=\"card\"><img src="+img_url+" class=\"card-img-top\" alt=\"...\" class=\"cardimg\"><div class=\"card-body\"><h5 class=\"card-title\">"+title+"</h5><p class=\"card-text\">"+description+"</p><a href="+url+" class=\"btn btn-primary\">View More</a></div></div>");
}


  function updateDOM(data){
    const searchResults=document.getElementById('search-results');

    searchResults.innerHTML=data.results.sort((a,b)=>a.episode-b.episode).
    map(manga => {
      return `<div class="card"  >
        <img src="${manga.image_url}" class="card-img-top" alt="..." class="cardimg">
        <div class="card-body">
          <h5 class="card-title">${manga.title}</h5>
          <p class="card-text">${manga.synopsis}</p>
          <a href="${manga.url}" class="btn btn-primary">View More</a>
          <button onclick="watchlist('${manga.image_url}','${manga.title}','${manga.synopsis}','${manga.url}')" class="btn btn-primary">Watchlist</button>
          </div>
      </div>`
    });
  }
  
  function removefooter(){
    var down=document.getElementById('foot')
    var up = document.getElementById('videocard')
    down.remove()
  }
  
  function pageLoaded(){
    const form=document.getElementById('search_form')
    if(form){
      form.addEventListener("submit",removefooter)
    form.addEventListener("submit",searchAnime)
  }
  }
    
  window.addEventListener("load",pageLoaded);
  
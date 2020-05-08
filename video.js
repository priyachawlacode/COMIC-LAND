function searchAnime(event){
  
  event.preventDefault();

  const form=new FormData(this);
  const query=form.get("search");

  fetch('https://api.jikan.moe/v3/search/anime?q='+query+'&page=1')
  .then(res=>res.json())
  .then(updateDOM)
  .catch(err=>console.warn(err.message));

}

function updateDOM(data){

  const searchResults=document.getElementById('search-results');

  searchResults.innerHTML=data.results.sort((a,b)=>a.episode-b.episode).
  map(anime => {

    return `<div class="card"  >
    <img src="${anime.image_url}" class="card-img-top" alt="..." class="cardimg">
    <div class="card-body">
      <h5 class="card-title">${anime.title}</h5>
      <p class="card-text">${anime.synopsis}</p>
      <a href="https://myanimelist.net/anime/${anime.mal_id}/${anime.title}/video" class="btn btn-primary">View More</a>    </div>
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

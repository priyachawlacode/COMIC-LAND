function checklogin(){
    console.log('working');
    console.log(sessionStorage.getItem('check'));
    if(sessionStorage.getItem('check')==null){
        console.log('not logged in');
        document.getElementById("myAnchor").href = "login.html";
        console.log('again working');
    }
    else{
        document.getElementById("myAnchor").href = "comic.html";
    }
}

function loginfunc(){
    console.log('again working');
    sessionStorage.setItem('check','logged');
    document.getElementById("login").action = "home.html";
    alert("you are logged in");
}

function videochecklogin(){
    console.log('working');
    console.log(sessionStorage.getItem('check'));
    if(sessionStorage.getItem('check')==null){
        console.log('not logged in');
        document.getElementById("myvideoAnchor").href = "login.html";
        console.log('again working');
    }
    else{
        document.getElementById("myvideoAnchor").href = "videos.html";
    }
}
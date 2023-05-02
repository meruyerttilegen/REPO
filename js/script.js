document.addEventListener('DOMContentLoaded', function () {
    let items = document.getElementsByClassName("item")
    for(let i=0; i<items.length; i++){
        if (i%2==0)
            items[i].style.background = "rgb(235, 250 , 180, 0.6 )"
        else   
            items[i].style.background = "rgb(220, 220 , 250, 0.6 )"
    }
  }, false);
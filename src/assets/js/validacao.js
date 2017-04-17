    var itemprojeto = document.getElementsByClassName("itemprojeto")
    
    function exibirUrl(e){
        var links = e.nextElementSibling;
        if(links.style.display=="" || links.style.display=="none"){
            e.nextElementSibling.style.display = "block";
        }else{
            e.nextElementSibling.style.display = "none";
        }
        
    }

    for(var i=0;i<itemprojeto.length;i++){
      itemprojeto[i].onclick = function(){exibirUrl(this);}
    }

  
   
    var itemprojeto = document.getElementsByClassName("itemprojeto")
    
    function exibirUrl(e){
        e.style.display = "none";
    }

    for(var i =0; i<itemprojeto.length;i++){
        itemprojeto.addEventListener("click",exibirUrl(itemprojeto[i]),false);
        
    }
    
   
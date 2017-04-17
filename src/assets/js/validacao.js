    var itemprojeto = document.getElementsByClassName("itemprojeto")
    console.log(itemprojeto);
    function exibirUrl(e){
        console.log('------------------------------------');
        console.log(e.children);
        console.log('------------------------------------');
        e.children[0].style.display = "block";
    }

    for(var i=0;i<itemprojeto.length;i++){
      itemprojeto[i].onclick = function(){exibirUrl(this);}
    }

  
   
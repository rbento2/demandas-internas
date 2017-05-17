    function exibirUrl(e) {
        var links = e.nextElementSibling;
        if (links.style.display == "" || links.style.display == "none") {
            e.nextElementSibling.style.display = "block";
        } else {
            e.nextElementSibling.style.display = "none";
        }
    }

    (function(){ // coloca um listener em todos os itensprojetos
        var itemprojeto = document.getElementsByClassName("itemprojeto")
        for (var i = 0; i < itemprojeto.length; i++) {
            itemprojeto[i].onclick = function() { exibirUrl(this); }
        }
    })();
    
    var btnmais = document.getElementsByClassName("mais");
    console.log(btnmais);
   /* btnmais[0].onclick = function() { adicionaProjeto(); }*/
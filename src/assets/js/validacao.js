    function exibirUrl(e) {
        var links = e.nextElementSibling;
        if (links.style.display == "" || links.style.display == "none") {
            e.nextElementSibling.style.display = "block";
        } else {
            e.nextElementSibling.style.display = "none";
        }
    }

    function adicionaProjeto() {
        var formlink = "<li class='itemprojeto -claro'>teste </li>";
        formlink += "<section class='form -link'>";
        formlink += "<ul class='listaatribo'>";
        formlink += "<li class='atributo'>";
        formlink += "<ul class='listalink'>";
        formlink += "<li class='link'>Link de Dev </li>";
        formlink += "<li class='link'>Link de Hmg </li>";
        formlink += "<li class='link'>Link de Produção </li>"
        formlink += "</ul>";
        formlink += "</li>";
        formlink += "<li class='atributo'>";
        formlink += "<ul class='listalink'>";
        formlink += "<li class='link'><a href='#'>xxx</a></li>";
        formlink += "<li class='link'><a href='#'>xxx</a></li>";
        formlink += "<li class='link'><a href='#'>xxx</a></li>";
        formlink += "</ul>";
        formlink += "</li>";
        formlink += "</ul>";
        formlink += "</section>";

        var itemprojeto = document.getElementsByClassName("form -link");
        itemprojeto = itemprojeto[itemprojeto.length - 1];
        itemprojeto.innerHtml = formlink;
    }

    var itemprojeto = document.getElementsByClassName("itemprojeto")
    for (var i = 0; i < itemprojeto.length; i++) {
        itemprojeto[i].onclick = function() { exibirUrl(this); }
    }

    var btnmais = document.getElementsByClassName("mais");
    console.log(btnmais);
    btnmais.onclick = function() { adicionaProjeto(); }
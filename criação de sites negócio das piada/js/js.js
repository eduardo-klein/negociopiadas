let form=document.form_piada;
console.log(form);
form.onsubmit=()=>{
        console.log("1");

        let titulo = form.titulo.value;
        let conteudo = form.piada.value;

        let piadaCompleta = {"titulo":titulo,"piada":conteudo};
        salvar(piadaCompleta);

        return false;
    }

let salvar=(piada)=>{
    let piadaStr = localStorage.getItem("piadas"); //<- só salva string
    console.log(piadaStr);
    if(!piadaStr){
        piadaStr=new Array();

    }else{
        piadaStr=JSON.parse(piadaStr);

    }
    piadaStr.push(piada);
    piadaStr=JSON.stringify(piadaStr);
    localStorage.setItem("piadas",piadaStr);
}



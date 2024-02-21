const sortear = () => {
let nomes = ["hello kitty","barbie","moranguinho","meninas super poderosas","pantera cor de rosa"]

let h1Nome = document.getElementById("nome"); // o ponto é o metodo;

let achouNumero = false; // o let é quando some e nao fica no servidor;
let numeroSorteado;

while (achouNumero == false) { //estrutura de repeticao; //comparaçao ==... atribuiçao =;
    numeroSorteado = Math.floor(Math.random() * 100);
    if (numeroSorteado < nomes.length) { // algoritimo de validaçao;
        achouNumero = true;
    }
}

switch (numeroSorteado) {
    case 0:
        h1Nome.innerText = nomes[numeroSorteado];
        break;
    case 1:
        h1Nome.innerText = nomes[numeroSorteado];
        break;
    case 2:
        h1Nome.innerText = nomes[numeroSorteado];
        break;
    case 3:
        h1Nome.innerText = nomes[numeroSorteado];
        break;
    case 4:
        h1Nome.innerText = nomes[numeroSorteado];
        break;
    case 5:
        h1Nome.innerText = nomes[numeroSorteado];
        break;

        default:
            h1Nome.innerText = " o numero sorteado nao tem na lista";
            break;        
}
h1Nome.innerText += " o numero sorteado foi:" + numeroSorteado; //+= recebe a variavel + o q eu quero;
}
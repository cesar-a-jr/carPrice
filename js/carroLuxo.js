


const carrosLuxo = [
    carro001= {
        nome: "AUDI A6",
        description: "2.0 TFSI AMBIENTE GASOLINA 4P S-TRONIC",
        img1: "https://image.webmotors.com.br/_fotos/AnuncioUsados/gigante/2022/202203/20220305/audi-a6-2.0-tfsi-ambiente-gasolina-4p-stronic-wmimagem09320858640.jpg?s=fill&w=249&h=186&q=70",
        img2: "https://image.webmotors.com.br/_fotos/AnuncioUsados/gigante/2022/202203/20220305/audi-a6-2.0-tfsi-ambiente-gasolina-4p-stronic-wmimagem09320858640.jpg?s=fill&w=249&h=186&q=70",
        img3: "https://image.webmotors.com.br/_fotos/AnuncioUsados/gigante/2022/202203/20220305/audi-a6-2.0-tfsi-ambiente-gasolina-4p-stronic-wmimagem09321132581.jpg?s=fill&w=249&h=186&q=70",
        price: "168990"
    },
]

criarCarroSecreto();
function criarCarroSecreto(){
    const indexCarro = parseInt(Math.random()*carrosLuxo.length)

    carroSecretoSorteado = carrosLuxo[indexCarro].nome
    carroSecretoCatergoria = carrosLuxo[indexCarro].description
    carroSecretoPrice = carrosLuxo[indexCarro].price
    carroSecretoIMG1 = carrosLuxo[indexCarro].img1
    carroSecretoIMG2 = carrosLuxo[indexCarro].img2
    carroSecretoIMG3 = carrosLuxo[indexCarro].img3



    console.log(indexCarro)
    console.log(carroSecretoSorteado)
    console.log(carroSecretoCatergoria)
    console.log(carroSecretoPrice)

}



montarCarroNaTela()
function montarCarroNaTela(){
    const nome = document.getElementById("nameCar");
    nome.innerHTML = carroSecretoSorteado

    const description = document.getElementById("description");
    description.innerHTML = carroSecretoCatergoria

    document.getElementById("imagem1").src = carroSecretoIMG1;
    document.getElementById("imagem2").src = carroSecretoIMG2;
    document.getElementById("imagem3").src = carroSecretoIMG3;


    
}

//calcular pontuação


const btn  =document.querySelector("#send");

btn.addEventListener("click", function (e) {

    e.preventDefault();

    const valor = document.getElementById("valor");

    const chute = valor.value;

    pontuacaoMaxima = 100
    x = chute * pontuacaoMaxima
    y = x / carroSecretoPrice

    console.log (chute);

    if (y <1  ){
        y = 1;
    } else if (y > 200){
        y = 1
    } 
    else if(y > 100 && y < 200){
        y =  100 - (y -100)   
    };
    console.log (y.toFixed(0))
    

})



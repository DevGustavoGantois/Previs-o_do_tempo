//Chave da API utilizada:
const key = "ff6f3123525ae9a6ae65857f357f1ade"


//Colocar os dados da tela:
function ShowData (data){
    console.log(data)
    document.querySelector(".title").innerHTML = `Tempo em ${data.name}` 
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "°C"
    document.querySelector(".text-previsao").innerHTML = data.weather[0].description
    document.querySelector(".umidade").innerHTML = data.main.humidity + "%"
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
}




//Buscar a cidade no servidor:
async function searchCity (input) {

    let data = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())

    ShowData(data)
    
}

//Função onde vai entrar dados para hora da busca:
function ClickTheButton () {
    const input = document.querySelector(".input-city").value

    searchCity(input)
}
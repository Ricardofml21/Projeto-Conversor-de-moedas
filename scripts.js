const convertButton = document.querySelector(".convert-button");
const currencySelectFrom = document.querySelector("#fromcurrency");
const currencySelectTo = document.querySelector(".currency-select");


function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value;
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
    const currencyValueConverted = document.querySelector(".currency-value");

    console.log(currencySelectTo.value);

    const rates = {
        real: 1,
        dolar: 5.9,
        euro: 6.2,
        bitcoin: 250000
    };

    const fromRate = rates[currencySelectFrom.value];
    const toRate = rates[currencySelectTo.value];

    const convertedValue = (inputCurrencyValue * fromRate) / toRate;

    if (currencySelectTo.value == "bitcoin") {
        currencyValueConverted.innerHTML = (convertedValue).toFixed(8) + " BTC";
    } else {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: currencySelectTo.value === "dolar" ? "USD" :
                      currencySelectTo.value === "euro" ? "EUR" : "BRL"
        }).format(convertedValue);
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: currencySelectFrom.value === "dolar" ? "USD" :
                  currencySelectFrom.value === "euro" ? "EUR" : "BRL"
    }).format(inputCurrencyValue);
}


function changeCurrency() {
    const currencyNameFrom = document.getElementById("currancy-from");
    const currencyImageFrom = document.querySelector(".currency-imgfrom");
    const currencyNameTo = document.getElementById("currency-name");
    const currencyImageTo = document.querySelector(".currency-imgs");

    if (currencySelectFrom.value == "dolar") {
        currencyNameFrom.innerHTML = "Dólar americano";
        currencyImageFrom.src = "./assets/estados-unidos.png";
    }

    if (currencySelectFrom.value == "euro") {
        currencyNameFrom.innerHTML = "Euro";
        currencyImageFrom.src = "./assets/Euro.png";
    }

    if (currencySelectFrom.value == "real") {
        currencyNameFrom.innerHTML = "Real";
        currencyImageFrom.src = "./assets/brasil.png";
    }

    if (currencySelectFrom.value == "bitcoin") {
        currencyNameFrom.innerHTML = "Bitcoin";
        currencyImageFrom.src = "./assets/bitcoin.png";
    }

    if (currencySelectTo.value == "dolar") {
        currencyNameTo.innerHTML = "Dólar americano";
        currencyImageTo.src = "./assets/estados-unidos.png";
    }

    if (currencySelectTo.value == "euro") {
        currencyNameTo.innerHTML = "Euro";
        currencyImageTo.src = "./assets/Euro.png";
    }

    if (currencySelectTo.value == "real") {
        currencyNameTo.innerHTML = "Real";
        currencyImageTo.src = "./assets/brasil.png";
    }

    if (currencySelectTo.value == "bitcoin") {
        currencyNameTo.innerHTML = "Bitcoin";
        currencyImageTo.src = "./assets/bitcoin.png";
    }
}


convertValues();

currencySelectFrom.addEventListener("change", changeCurrency);
currencySelectTo.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);





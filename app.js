var btnTranslate = document.querySelector("#btntranslate");
var txtInput = document.querySelector("#txtinput");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/morse.json"

function getTranslationURL(input){
    return serverURL + "?" + "text=" + input
}

function errorHandler(error){
    console.log("error occured!",error);
    alert("There is something wrong with the server Try again after sometime")
}

btnTranslate.addEventListener("click", function clickEventHandler() {
    var inputText = txtInput.value;
    
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json =>{
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
    })
    .catch(errorHandler)
})
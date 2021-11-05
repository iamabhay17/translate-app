var btnTranslate=document.querySelector("#btn-translate");
var txtInput=document.querySelector("#txt-input");
var outputDiv=document.querySelector("#output");

var serverURL="https://api.funtranslations.com/translate/dothraki.json";
function getTranslation(text)
{
    return serverURL + "?" + "text=" + text
}

function errorHandler(error)
{
    console.log("Error occured "+ error);
    alert("Something is wrong with the server ! please try again after sometime")
}


btnTranslate.addEventListener("click",clickEventHandler);

function clickEventHandler()
{
    var inputText =txtInput.value;

    fetch(getTranslation(inputText))
     .then(response=>response.json())
     .then(json=>{
         var translatedText = json.contents.translated;
         outputDiv.innerText= translatedText;
     })
     .catch(errorHandler)
};


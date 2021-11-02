var btnTranslate=document.querySelector("#btn-translate");
var txtInput=document.querySelector("#txt-input");


btnTranslate.addEventListener("click",clickEventHandler);

function clickEventHandler()
{

    console.log("You just clicked button");
    console.log(txtInput.value);

    
};
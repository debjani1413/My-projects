let screen= document.getElementById('screen');
let button= document.querySelectorAll('button');
let screenValue='';
for(item of button)
{
    item.addEventListener('click', (e) => {
        buttonText= e.target.innerText;
        console.log(buttonText);
        if(buttonText=='C')
        { 
            screenValue='';
           screen.value=screenValue;
        }
        else if(buttonText=='=')
        {
       screen.value= eval(screenValue);
       screenValue= '';
        }
        else if(buttonText=='B')
        {
            screenValue=screen.value;
            screen.value= screenValue.substring(0,screenValue.length -1);
            screenValue=screen.value;
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}
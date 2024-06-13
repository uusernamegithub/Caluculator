let input = document.querySelector('#dis');
let buttons=document.querySelectorAll('button');
let store="";

input.disabled=true;        // disabling the input to box to avoid unecessay overwritings

buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
        if(button.innerText=="=")
            {
                try {
                    store = eval(store);
                    input.value = store;
                    resetNext = true;
                } catch (e) {
                    input.value = "Error !!";
                    store = "";
                }                           // value is used to modify or acccess the text in input box
            }
        else if(button.innerText=="AC")
            {
                store="";
                input.value=store;
            }
        else if(button.innerText=="DEL")
            {
                let n=store.length;
                store=store.slice(0,n-1);
                input.value=store;
            }
        else
            {
                store+=button.innerText;
                input.value=store;
            }
    })
})

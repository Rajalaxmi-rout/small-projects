const butttons=document.querySelectorAll(".button")
const body=document.querySelector("body")
butttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id==='gray'){
            body.style.backgroundColor =e.target.id;
        }
        if(e.target.id==='white'){
            body.style.backgroundColor ='lightwhite';
        }
        if(e.target.id==='blue'){
            body.style.backgroundColor ='lightblue';
        }
        if(e.target.id==='yellow'){
            body.style.backgroundColor ='lightyellow';
        }
    });
})


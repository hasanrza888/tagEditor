const add = document.getElementById('add');
const box = document.querySelector('.box');
const p = document.querySelector(".paragraph");
const sil = document.querySelector('.span');

let data = [];


    add.addEventListener('keypress', (event)=>{
        

            if(event.keyCode===13){
                let div=document.createElement('div');
                    div.className = 'parpar';

                let p=document.createElement('p');
                    p.className = 'paragraph';
                let span =document.createElement('p')

                // p.innerHTML=`<div class = "parpar"><p class="paragraph">${event.target.value}</p><span class="span">x</span></div>`;
                    
                p.innerHTML = event.target.value;
                div.append(p)
                span.innerHTML = 'X';
                span.className = 'span';
                div.append(span)

                box.insertBefore(div, add)
                event.target.value = "";
                console.log(p.innerText)


                const paragraphs = document.querySelectorAll('p');
                // console.log(paragraphs[0].innerText)

                for(let i=0; i<paragraphs.length; i++){

                    if(paragraphs[i].innerText === p.value){
                        paragraphs[i].remove();
                    }else{
                        continue;
                    }
                }

            }
                   
    });



        


box.addEventListener('click',(event)=>{
    
    if(event.target.classList.contains("span")){
        event.target.parentElement.remove();
    }
})
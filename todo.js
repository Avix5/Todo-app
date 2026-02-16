let taskinput=document.getElementById("taskinput")
let addbtn=document.getElementById("addbtn")
let list=document.getElementById("list")

addbtn.addEventListener("click",function(){
    let li=document.createElement('li')
    let cancelbtn=document.createElement('button')
    cancelbtn.innerText="X"
    cancelbtn.addEventListener("click",function(){
        li.remove()
    })
   
    li.innerText=taskinput.value
    li.appendChild(cancelbtn)
    list.appendChild(li)
    taskinput.value=""
})
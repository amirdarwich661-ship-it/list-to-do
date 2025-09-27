let btn=document.getElementById("take")

function add(){
    let list=document.getElementById("lists")
    let inputing=document.getElementById("inp")
    let input=inputing.value.trim()
    let checkbox=document.createElement("input")
    let done=document.getElementById("done")
    checkbox.type="checkbox";
    if(input==""){
        return;
    }
    let li=document.createElement("li")
    let del=document.createElement("button")
    del.className="del"
    del.textContent="🗑️"
    li.appendChild(checkbox)
    li.appendChild(del)
    li.appendChild(document.createTextNode(""+input))
    del.onclick=()=>{
        li.remove()
    }

        checkbox.addEventListener('change',function(){
        const lii=this.closest('li')
        

if(checkbox.checked){
       
        done.appendChild(li)

        }        
    })

list.appendChild(li);
document.getElementById("inp").value=""

}



btn.addEventListener("click",add);
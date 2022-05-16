//........... HTML İD LERİNE ERİŞİM ............//

let btnDOM = document.querySelector("#liveToastBtn")
let listDOM = document.querySelector("#list")
let taskDOM = document.querySelector("#task")


//........... ELEMAN EKLEME FONKSİYONU .........//


btnDOM.addEventListener("click",element_added)

function element_added() {
    if (taskDOM.value == "") { 
        $(".error").toast("show")
    }
    else {
        $(".success").toast("show")
        let liDOM = document.createElement("li")
        listDOM.appendChild(liDOM)

            localStorage.setItem("list",taskDOM.value)
        
        liDOM.innerHTML = taskDOM.value
        taskDOM.value = ""
        
        liDOM.onclick = check;
        
        let delete_Button = document.createElement("span");
        delete_Button.textContent = "x";
        delete_Button.classList.add("close");
        delete_Button.onclick = removeButton;
        
        liDOM.append(delete_Button);
        listDOM.append(liDOM);
        inputElement.value = ("");
        
    }
        
}


//........... ÇARPI FONKSİYONU .................//

let ullength = document.getElementsByName("li")

for (let i=0 ; i < ullength.length ; i++) {
    let delete_Button = document.createElement("span")
    delete_Button.textContent = "x"
    delete_Button.classList.add("close")
    delete_Button.onclick = removeButton
    
    ullength[i].append(delete_Button)

}

function check(){
    this.classList.toggle("checked"); 
  }
  
  function removeButton(){

        localStorage.removeItem("list")

    this.parentElement.remove();  
  }





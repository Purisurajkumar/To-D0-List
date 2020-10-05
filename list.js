let array=[]
function work(){
    let x=document.getElementById("inputbox")
    array.push(x.value)
    x.value=''
    showitem()
}
function showitem(){
     let length=array.length
     let itembox=document.createElement("p")
         itembox.className="list"
         itembox.id=length-1
     let deletebutton=document.createElement("button") 
     deletebutton.addEventListener("click",()=> out(length-1))
     let deletebuttontext=document.createTextNode("x")
     deletebutton.appendChild(deletebuttontext)  
     let itemboxtext=document.createTextNode(array[length-1])
     itembox.appendChild(itemboxtext)
     itembox.appendChild(deletebutton)
     document.body.appendChild(itembox)
     document.body.insertBefore(itembox,document.body.childNodes[2])
}
function out(index){
    array.splice(index, 1)
    let deleteitem=document.getElementById(index)
    document.body.removeChild(deleteitem)
} 




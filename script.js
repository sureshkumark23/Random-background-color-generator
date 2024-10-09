let butt= document.getElementById("button");
let spa=document.getElementsByTagName("span");
const hex=["0","1","2","3","4","5","6","7","8","9","0","A","B","C","D","E","F"]

function generatehexcolor(){
    one="#"
    for(i=0;i<6;i++){
        one+=hex[Math.floor(Math.random()*16)];
        

    }
    return one;
}
function sethexcolor(){
    let newcolor=generatehexcolor();
    document.body.style.backgroundColor= newcolor;
    spa[0].innerText=newcolor;
    

}

butt.addEventListener("click",sethexcolor);
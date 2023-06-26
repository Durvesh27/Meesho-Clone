function displayDown(){
    var a=document.getElementById("home");
    var b=document.getElementById("down");
    
    if(a.style.display==="none"){
        a.style.display="block";
        b.style.transform="rotate(180deg)";
    }
    else{
        a.style.display="none";  
        b.style.transform="rotate(0deg)";
    }
}
displayDown()

function newDrop(){
    var x=document.getElementById("display");
    var y=document.getElementById("click");
    
    if(x.style.display==="none"){
        x.style.display="block";
        y.style.transform="rotate(180deg)";
    }
    else{
        x.style.display="none";  
        y.style.transform="rotate(0deg)";
    }
}
newDrop()
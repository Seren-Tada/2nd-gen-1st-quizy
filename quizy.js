const matigai1 = document.getElementById("matigai1");
const matigai2 = document.getElementById("matigai2");
const matigai3 = document.getElementById("matigai3");
const success  = document.getElementById("success ");
const failure  = document.getElementById("failure ");
const TorF     = document.getElementById("TorF");
const trueis   = document.getElementById("trueis");
const target   = document.getElementById("target");
const success1 = document.createTextNode("正解！");
const success2 = document.createTextNode("正解は『たかなわ』です！");
const failure1 = document.createTextNode("不正解！");
// const failure2 = document.createTextNode("正解は『たかなわ』です！");

matigai1.onclick= function(){
    matigai1.classList.add("red");
    matigai2.classList.add("blue");
    TorF.appendChild(failure1);
    trueis.appendChild(success2);
    target.classList.add("target");
    TorF.classList.add("ansF");
    matigai1.classList.add("cantclick");
    matigai2.classList.add("cantclick");
    matigai3.classList.add("cantclick");
};
matigai2.onclick= function(){
    matigai2.classList.add("blue");
    TorF.appendChild(success1);
    trueis.appendChild(success2);
    target.classList.add("target");
    TorF.classList.add("ansT");
    matigai1.classList.add("cantclick");
    matigai2.classList.add("cantclick");
    matigai3.classList.add("cantclick");
};
matigai3.onclick= function(){
    matigai3.classList.add("red");
    matigai2.classList.add("blue");
    TorF.appendChild(failure1);
    trueis.appendChild(success2);
    target.classList.add("target");
    TorF.classList.add("ansF");
    matigai1.classList.add("cantclick");
    matigai2.classList.add("cantclick");
    matigai3.classList.add("cantclick");
};


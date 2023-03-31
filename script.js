
let string="";

function sum()
{
   
    let j=document.querySelector("#ans")
    // if(string[0]==0)
    // {
    //     string.pop()
    // }
    string=string + this.innerText;
     
    j.innerText+=this.innerText
     
}
const var2=document.querySelector("#sum");
var2.addEventListener("click",sum)
// function operator()
// {
//   a=score;
//    score=0;
//    let j=document.querySelector("#ans")
//    j.innerText+=this.innerText;

// }
function clear()
{
    string="";
    let j=document.querySelector("#ans")
    j.innerText=string;
    
}
function calculate()
{
    // b=score;
    let j=document.querySelector("#ans")
    // let oper=this.innerText;
   
    j.innerText= eval(string);

}

const var3=document.querySelector("#sum1")
var3.addEventListener("click",sum)

const var4=document.querySelector("#equal")
var4.addEventListener("click",calculate);
const var5=document.querySelector("#sum2")
var5.addEventListener("click",sum);
const var6=document.querySelector("#sum3")
var6.addEventListener("click",sum);
const var7=document.querySelector("#sum4")
var7.addEventListener("click",sum);
const var8=document.querySelector("#sum5")
var8.addEventListener("click",sum);
const var9=document.querySelector("#sum6")
var9.addEventListener("click",sum);
const var10=document.querySelector("#sum7")
var10.addEventListener("click",sum);
const var11=document.querySelector("#sum8")
var11.addEventListener("click",sum);
const var12=document.querySelector("#sum0")
var12.addEventListener("click",sum);
const var13=document.querySelector("#sum9")
var13.addEventListener("click",sum);
const var15=document.querySelector("#sumd")
var15.addEventListener("click",sum);
const var16=document.querySelector("#mod")
var16.addEventListener("click",sum);
const var17=document.querySelector("#sub")
var17.addEventListener("click",sum);
const var18=document.querySelector("#divi")
var18.addEventListener("click",sum);
const var19=document.querySelector("#mul")
var19.addEventListener("click",sum);
const var20=document.querySelector("#sqr")
var20.addEventListener("click",sum);
const var21=document.querySelector("#clear")
var21.addEventListener("click",clear);

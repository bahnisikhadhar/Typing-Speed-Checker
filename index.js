const outerPara=document.querySelector(".outer_para");

const inputContainer=document.getElementById("input_container");
const inputArr = inputContainer.value.split("");

const timer=document.querySelector(".timer");
timer.innerText="0";

const speedDisplay=document.querySelector(".speed_display");
//--------------------------spliting the letters or characters of the string nd keeping it in an array------------

const demoQuote="we are going to test our typing speed and also practice dom to make this project";
const paraCharArr=demoQuote.split("");
// console.log(paraCharArr);

//----------------------------adding span tag to individual character of the string------------------------------

outerPara.innerHTML=""; 
paraCharArr.forEach((char)=>{
    const charSpan=document.createElement("span");
    charSpan.innerText=char;
    outerPara.appendChild(charSpan);
    
})
// console.log(outerPara);
const outerArr = outerPara.querySelectorAll("span");
//------------------------------------adding eventlistner to inputcontainer----------------------------------------

inputContainer.addEventListener("input",(event)=>{
    
  const outerArr = outerPara.querySelectorAll("span");
  const inputArr = inputContainer.value.split("");
//   console.log(inputArr);
//   console.log(outerArr);

  //-------------------------------------Checking whether input and demo matches or not--------------------------
  
  outerArr.forEach((charInSpan,index)=>{
    if(charInSpan.innerText==inputArr[index]){ // if input char matches the demo text's char
        charInSpan.classList.add("green");
    } 
     else if(inputArr[index]==null) //if we made a mistake and just going backword,not typing any character
    {
        charInSpan.classList.remove("green");
        charInSpan.classList.remove("red");
    }
    else //if input char doesn't match the demo text's char
    {
        charInSpan.classList.add("red");
    }
   })

  timeCount();

});

var myInterval=null;
function timeCount(){
if(myInterval==null)
{
    var count=0;
    myInterval = setInterval(()=>{
        count++;
        timer.innerText=count;
    }, 1000);
}
 
if(inputContainer.value.length==outerArr.length)
{
clearInterval(myInterval);
console.log(timer.innerText);// will get the current time
const speed=demoQuote.split(" ").length/(timer.innerText/60); //typing speed in wpm(word per minute)
console.log(speed);
check=null;
timer.classList.add("size");
timer.innerText=`Your typing Speed is   ${(speed).toFixed(2)} wpm`;

}
}






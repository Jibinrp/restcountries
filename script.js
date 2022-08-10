var div =document.createElement("div");
div.style.textAlign="center";
var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","country");

var button=document.createElement("button");
button.setAttribute("type","button");
button.setAttribute("class","btn btn-primary");
button.innerHTML="search";
button.addEventListener("click",foo);

let Active =document.createElement("div");
Active.setAttribute("id","Active");

let Recovered =document.createElement("div");
Recovered.setAttribute("id","Recovered");

let Deaths =document.createElement("div");
Deaths.setAttribute("id","Deaths");

div.append(input,button,Active,Recovered,Deaths);
document.body.append(div);

async function foo(){
     let res =document.getElementById("country").value;
     var url=`https://api.covid19api.com/dayone/country/${res}`;
     
     let result = await fetch(url);
     let  result1 = await result.json();
     var index=result1.length-1;

     console.log(result1[index].Active);
     Active.innerHTML=`Total Active Case:${result1[index].Active}`;

     console.log(result1[index].Recover);
     Recovered.innerHTML=`Total Recoverd Case:${result1[index].Recovered}`;

    console.log(result1[index].Deaths);
     Deaths.innerHTML=`Total Deaths Case:${result1[index].Deaths}`;
}

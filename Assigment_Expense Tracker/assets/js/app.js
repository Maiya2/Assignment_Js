const blance = document.getElementById("blance");
const money_plus = document.getElementById("money-plus");
const money_minus = document.getElementById("money-minus");
const list = document.getElementById("list");
const form = document.getElementById("from");
const text = document.getElementById("text");
const amount = document.getElementById("amount");


let Transctions =[];

//Add Transctions
function addTransction(e){
e.preventDefault();
if(
    text.ariaValueMax.trim() ===  amount.ariaValueMax.trim() === ""
){
    alert("places Enter Text value");
}else{ 
    const transction = {
        id:GeneratID(),
        text:text.value,
        amount: +amount.value,
    };
   Transctions.push(transction);
   addTransctionsDOM(transction);
   updateValues();
   text.value="";
   amount.value="";
}
}
//Generat id
function GeneratID(){
    return Math.floor(Math.random()*1000000);
} 

function addTransctionsDOM(transction) {
  const sing = transction.Amount < 0 ? "-" : "+";
  const item = document.createElement("li");

item.classList.add(
    transction.amount < 0 ? "minus" : "plus"
)

item.innerHTML =`
${transction.text}<span>${sing}${Math.abs(
    transction.amount
    )}</span>
   <button class="delet-btn" onclick="">X</button>`;

list.appendChild(item);
 }
//Update updateValue
function updateValues(){
    const amounts = Transctions.map(transction => transction.amount);
    const total = amounts.reduce((acc,item) => (acc =+ item),0).toFixed(2);
    const income = amounts.filter(item => item > 0).reduce((acc,item)=>(acc + item),0).toFixed(2);
const expence = (
    amounts.filter(item => item < 0).reduce((acc,item)=> (acc,item),0)* -1
).toFixed(2)


blance.innerText=`$${total}`;
money_plus.innerHTML=`$${income}`;
money_minus.innerHTML=`$${expence}`;
}

//Init app
function Init(){
    list.innerHTML="";
    Transctions.forEach(addTransctionsDOM);
    updateValues();
}

Init();

form.addEventListener("submit", addTransction);


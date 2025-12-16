//get modeSelect, input and outputs, calcButton
const selection = document.getElementById('selection');
const inputsDiv = document.getElementById('inputs');
const outputsDiv = document.getElementById('outputs');
const calcBtn = document.getElementById('calc');

//templates
const templates = {
  tax: () => 
  `<label>Price: <input id="p" type="number" /></label>
   <label>Tax %: <input id="r" type="number" /></label>`,
   
  discount: () => 
  `<label>Original Price: <input id="p" type="number" /></label>
   <label>Discount %: <input id="r" type="number" /></label>`,
   
  tip: () => 
  `<label>Bill Amount: <input id="p" type="number" /></label>
   <label>Tip % (default 15): <input id="r" type="number" /></label>`
   
};

//initial render
inputsDiv.innerHTML = templates[selection.value]();

//Change-shape listener: arrow callback 
	selection.addEventListener("change", () =>
	inputsDiv.innerHTML = templates[selection.value]());

const getNum = id => +document.getElementById(id).value;

//calculate button
calcBtn.addEventListener("click", () => {
  const mode = selection.value;
  let p = getNum("p");
  let r = getNum("r");

  if (mode === "tip" && !r) 
	  r = 15;
  
  if (p <= 0) 
	  return outputsDiv.textContent = "Please enter a valid price > 0.";

  const rate = r / 100;
  let result = "";

  if (mode === "tax") //calculating tax
  {
    const total = calcTax(p, rate);
    result = `Total: ${round(total)}`;
  }
  
  else if (mode === "discount") //calculating discount 
  {
    const sale = calcDiscount(p, rate);
    result = `Sale Price: ${round(sale)}`;
  }
  
  else { // tip
    const { tip, total } = calcTip(p, rate);
    result = `Tip: ${round(tip)}, Total: ${round(total)}`;
  }

  outputsDiv.textContent = result;
});


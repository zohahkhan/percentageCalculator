//this is where the math lives, exactly four arrow functions
//this rounds the num
const round = x => Math.round(x * 100) / 100;

// total + tax
const calcTax = (price, rate) => round(price * (1 + rate));

//price - discount 
const calcDiscount = (price, rate) => round(price * (1 - rate));

//total + tip 
const calcTip = (bill, rate = 0.15) => {
	const tip = bill * rate;
	const total = bill + tip;
	return { tip: round(tip), total: round(total) };
};

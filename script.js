const initialPrice = document.querySelector("#inital-price");
const currentPrice = document.querySelector("#current-price");
const numOfStocks = document.querySelector("#stocks");
const calculateBtn = document.querySelector("#btn");
const result = document.querySelector("#result");

result.style.display="none";

calculateBtn.addEventListener("click", () => {
  
  let input = initialPrice.value;
  let qty = numOfStocks.value;
  let curr = currentPrice.value;
  calculateProfitLoss(input, qty, curr);
})

function calculateProfitLoss(initalPrice, stockQuantity, currentPrice) {
  if (currentPrice > initalPrice) {
    let profit = (currentPrice - initalPrice) * stockQuantity;
    let profitpercentage = ((profit / initalPrice) * 100).toFixed(2);
    showmessage(`You gained ${profitpercentage}%. Your total profit is ${profit}`, "#26c40e");
}
  else if (currentPrice < initialPrice) {
    let loss = (initalPrice - currentPrice) * stockQuantity;
    let losspercentage = ((loss / initalPrice) * 100).toFixed(2);
    showmessage(`You lost ${losspercentage}%. Your total loss is ${loss}`,"#f50a16");
}
  else {
    showmessage("No gain no pain");
}
errorHandler();

}

function showmessage(msg, color) {
  result.style.display="block";
  result.innerText = msg;
  result.style.color=color;
};

function errorHandler() {
     
    if(initialPrice.value === ''){
        showmessage("Please fill out all Fields!!", "yellow");
      
    }
    if(numOfStocks.value === '' )
    {
      showmessage("Please fill out all Fields!!", "yellow");
     
    }
    if(currentPrice.value === ''){
       showmessage("Please fill out all Fields!!", "yellow");
      
    }
    if(initialPrice.value < 0 || numOfStocks.value < 0 || currentPrice.value < 0) {
        showmessage("Please enter a valid number!!", "yellow");
      
    }
}





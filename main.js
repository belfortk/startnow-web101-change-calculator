
$("#change-calculator").submit(calculateChange);

//$("#calculate-change").click(calculateChange);

function calculateChange(event) {
    alert('stuff and things');
    event.preventDefault();

    const tendered = $("#amount-received").val();
    const cost = $("#amount-due").val();
    
    const change = (tendered - cost).toFixed(2);
    console.log(change);


  

    text = change.toString();
    
    dollarsText = text.split(".")[0];
    centsText = text.split(".")[1];
    
    
   var dollars = parseInt(dollarsText);
  
   var cents = parseInt(centsText);
  
   let quarters = Math.floor(cents/25);
   let remAfterQuarters = cents-(25*quarters);
   let dimes = Math.floor(remAfterQuarters/10);
   let remAfterDimes = remAfterQuarters-(10*dimes);
   let nickels = Math.floor(remAfterDimes/5);
   let remAfterNickels = remAfterDimes-(5*nickels);
   let pennies = remAfterNickels;
    
    
    $("#dollars-output").text(dollarsText);
    $("#quarters-output").text(quarters);
    $("#dimes-output").text(dimes);
    $("#nickels-output").text(nickels);
    $("#pennies-output").text(pennies);
    
    
    
    
    return false;


}










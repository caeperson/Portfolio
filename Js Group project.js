document.write("^ Calculate!");
var calButton = document.getElementById("calculate");
//Calculate salestax
function calculatesalestax() {
  var billAmt = document.getElementById("billamt").value;
  var state = document.getElementById("state").value;
  var numOfPeople = document.getElementById("numberofitems").value;

  //validate input and check to see if this input is empty or less than or equal to 1
  if (billAmt === "" || state == 0) {
    alert("Please enter values");
    return;
  } else if (numOfPeople === "") {
    numOfPeople = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }
  
  try {
  //Calculate salestax
  var totalperitem = (billAmt * state) / numOfPeople;
  var total = (billAmt * state);
  } catch (err) {
	  window.alert("Please enter non-zero values");
	  return;
  } finally {
	  calButton.innerHTML = "Calculating...";
  }
  //round to two decimal places
  totalperitem = Math.round(totalperitem * 100) / 100;
  total = Math.round(total * 100) / 100;
  //next line allows us to always have two digits after decimal point
  totalperitem = totalperitem.toFixed(2);
  total = total.toFixed(2);
  document.getElementById("totalSalesTax").style.display = "block";
  document.getElementById("salestax").innerHTML = totalperitem;
  document.getElementById("totalamount").innerHTML = total;
}

document.getElementById("totalSalesTax").style.display = "none";
document.getElementById("each").style.display = "none";

//click to call function
document.getElementById("calculate").onclick = function() {
  calculatesalestax();
  calButton.innerHTML = "Calculated!";
};
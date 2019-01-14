/*jslint devel: true */
function calculateTip() {

  //get values from the fields
    "use strict";
    var billAmt = document.getElementById("billAmt").value;
    var service = document.getElementById("service").value;
    var friendsAmt = document.getElementById("friendsAmt").value;

  //validate input
    if (billAmt === "" || service === 0) {
        alert("Please enter the value");
        return;
    }
  //Check to see if this input is empty or less than or equal to 1
    if (friendsAmt === "" || friendsAmt <= 1) {
        friendsAmt = 1;
        document.getElementById("each1").style.display = "none";
        document.getElementById("each2").style.display = "none";
    } else {
        document.getElementById("each1").style.display = "block";
        document.getElementById("each2").style.display = "block";
    }

  //Calculate tip
    var totalTip = (billAmt * service) / friendsAmt;

    //Calculate Total Amount
    var totalAmount = (billAmt / friendsAmt) + totalTip;
    //round to two decimal places
    totalAmount = Math.round(totalAmount * 100) / 100;
    //next line allows us to always have two digits after decimal point
    totalAmount = totalAmount.toFixed(2);

  //round to two decimal places
    totalTip = Math.round(totalTip * 100) / 100;
  //next line allows us to always have two digits after decimal point
    totalTip = totalTip.toFixed(2);


  //Display the tip
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = totalTip;

    //Display the Total Amount
    document.getElementById("totalAmt").style.display = "block";
    document.getElementById("amtPlusTip").innerHTML = totalAmount;

}

//Hide the tip amount on load
//document.getElementById("totalTip").style.display = "none";
//document.getElementById("each1").style.display = "none";

//click to call function
document.getElementById("calculateTip").onclick = function () {
    "use strict";
    calculateTip();

};
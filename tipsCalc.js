/*jslint devel: true */
function calculateTip() {

  //get values from the fields
    "use strict";
    var billAmt = document.getElementById("billAmt").value;
    var service = document.getElementById("service").value;
    var friendsAmt = document.getElementById("friendsAmt").value;

  //validate input not null and number (isNan)
    if (billAmt === "" || service === 0 || isNaN(billAmt) || isNaN(friendsAmt)) {
        alert("Please enter the only positive numbers!");
        return;
    }
  //Check the amount of friends and according to the number it will show or block text "each"
    if (friendsAmt === "" || friendsAmt <= 1) {
        friendsAmt = 1;
        document.getElementById("each1").style.display = "none";
        document.getElementById("each2").style.display = "none";
    } else {
        document.getElementById("each1").style.display = "block";
        document.getElementById("each2").style.display = "block";
    }

  //Calculate the amount of tip
    var totalTip = (billAmt * service) / friendsAmt;

    //Calculate the total amount to be paid
    var totalAmount = (billAmt / friendsAmt) + totalTip;
    //round to two decimal places
    totalAmount = Math.round(totalAmount * 100) / 100;
    //next line allows us to always have two digits after decimal point
    totalAmount = totalAmount.toFixed(2);

  //round to two decimal places
    totalTip = Math.round(totalTip * 100) / 100;
  //next line allows us to always have two digits after decimal point
    totalTip = totalTip.toFixed(2);


  //Display the tip in the form
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = totalTip;

    //Display the Total Amount in the form
    document.getElementById("totalAmt").style.display = "block";
    document.getElementById("amtPlusTip").innerHTML = totalAmount;

}


//Call the function to be performed
document.getElementById("calculateTip").onclick = function () {
    "use strict";
    calculateTip();

};
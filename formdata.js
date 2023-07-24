
function processData(){
    let fullname=document.getElementById("fullname").value;
    let address=document.getElementById("address").value;
    let postalcode=document.getElementById("postalcode").value;
    let phone=document.getElementById("phone").value;
    let email=document.getElementById("email").value;
    let pickupdate=document.getElementById("pickupdate").value;
    
    // alert("Name: " +fullname+ "\nAddress: " +address+ "\nPostal Code: "+ postalcode+ "\nPhone: "+phone+ "\nEmail: " +email+ "\nPickup Date: "+pickupdate+".");
    displaydetails(fullname, address, postalcode, phone, email, pickupdate);
}

function displaydetails(fn, add, pc, ph, email, pickd){
    document.getElementById("cxfullname").innerHTML = fn;
    document.getElementById("cxaddress").innerHTML = add;
    document.getElementById("cxpostalcode").innerHTML = pc;
    document.getElementById("cxphone").innerHTML = ph;
    document.getElementById("cxemail").innerHTML = email;
    document.getElementById("cxpickupdate").innerHTML = ("Date you selected for pickup - " + pickd);

    document.getElementById("outputform").style.display = "initial";
}

function resetform() {
    document.getElementById("outputform").style.display = "none";
}
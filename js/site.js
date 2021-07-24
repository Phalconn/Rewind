//get the string from the page
//controller fucntion
function getValue(){

    document.getElementById("alert").classList.add("invisible");

    let userString = document.getElementById("userString").value;

    let revString = reverseString(userString);

    displayString(revString);

}

//Reverse the string
//logic function
function reverseString(userString){

    let revString = [];

    //let name = Abdoulie
    //name[0] = "A";
    //name[4] = "u";
    //last position in an array is name.length - 1

    //reverse a string using a for loop
    for (let index = userString.length - 1 ; index >= 0; index--) {
        revString += userString[index];
        
    }
    return revString;

}

//display the message with reverse string to the user
//view function
function displayString(revstring){

    //write to the page
    document.getElementById("msg").innerHTML = `Your string reversed is: ${revstring}`;

    //show the alert box
    document.getElementById("alert").classList.remove("invisible");

}
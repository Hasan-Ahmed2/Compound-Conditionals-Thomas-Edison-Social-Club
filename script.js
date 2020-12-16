// set the correct username and password combination below
var correctUsername = "Thomas Edison";
var correctPassword = "123456";


$("button").click(function() {
    var username = $(".username").val();
    var password = $(".password").val();
    
    // WRITE YOUR COMPOUND CONDITIONAL BELOW THIS LINE

    if (username === "Thomas Edsion" && password === "123456") {
    $(".message").text("Success!"); 
    }
    else if (username === "Thomas Edsion" && password !== "123456") {
    $(".message").text("Password incorrect!");
    }
    else if (username !== "Thomas Edsion" && password === "123456") {
    $(".message").text("Username incorrect!");
    }
    else if (username === "" || password === "") {
    $(".message").text("Try entering something!");
    }
    else if (username !== "Thomas Edsion" || password !== "123456") {
    $(".message").text("Incorrect!");
    }
    else if (username === "" || password === "") {
    $(".message").text("Try entering something!");
    }
    

});
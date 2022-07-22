//create the User constructor
class User {
    constructor(fname, lname, age, address, email, password,passwordConfirmation, paymentMethod) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.address = address;
        this.email = email;
        this.password = password;
        this.passwordConfirmation = passwordConfirmation;
        this.paymentMethod = paymentMethod;

    }
}
function isValid(user){
    //return true if user is valid
    //return false if user is not valid
    let valid = true;
    if(user.fname.length==0){
        valid = false;
        $("#txtFirstName").addClass("input-error");
        console.error("Please enter a valid username");
    }
    if(user.lname.length==0){
        valid = false;
        $("#txtLastName").addClass("input-error");
        console.error("Please enter your last name");
    }
    if(String(user.age).length==0){
        valid = false;
        $("#numAge").addClass("input-error");
        console.error("Please enter a valid age");
    }
    if(user.address.length==0){
        valid = false;
        $("#txtAddress").addClass("input-error");
        console.error("Please enter a valid address");
    }
    if(user.email.length==0){
        valid = false;
        $("#txtEmail").addClass("input-error");
        console.error("Please enter a valid email");
    }
    if(user.password.length<6){
        valid=false;
        $("#txtPassword").addClass("input-error");
        console.error("Please enter a valid password");
    }
    if(user.passwordConfirmation.length==0){
        valid = false;
        $("#txtPasswordConfirmation").addClass("input-error");
        console.error("Please enter a valid password confirmation");
    }
    return valid;
}
function validatePassword() {
    console.log("Validating Password");
    let txtPass=$("#txtPassword");//this is the element
    let password=txtPass.val();//this is the value inside the input
    if(password.length<6){
        txtPass.css("background-color","red");//this jquery fn changes the css
    }else{
        txtPass.css("background-color","green");//this jquery fn changes the css
    }
}
function confirmPassword() {
    let txtPass=$("#txtPassword").val();
    let txtPassConfirmation=$("#txtPasswordConfirmation").val();
    if(txtPass==txtPassConfirmation){
        console.log("The password is the same");
    }else{
        console.log("The password is different");
    }
}

//create the register function
function register() {
    //get the values from the inputs
    let userName=$("#txtFirstName").val();
    let userLname=$("#txtLastName").val();
    let userAge=$("#numAge").val();
    let userAddress=$("#txtAddress").val();
    let userEmail=$("#txtEmail").val();
    let userPass=$("#txtPassword").val();
    let passwordConfirmation=$("#txtPasswordConfirmation").val();
    let paymentMethod=$("#paymentMethod").val();
    // create the object
    let newUser = new User(userName, userLname, userAge, userAddress, userEmail, userPass, passwordConfirmation, paymentMethod);
    //display the user on the console
    console.log(newUser);
    if(isValid(newUser)) {
        saveUser(newUser); //this fn is in the storeManager
    }
    clearInputs(); 
}

function clearInputs() {
    $("#txtFirstName").val("");
    $("#txtLastName").val("");
    $("#numAge").val("");
    $("#txtAddress").val("");
    $("#txtEmail").val("");
    $("#txtPassword").val("");
    $("#txtPasswordConfirmation").val("");
    $("#paymentMethod").val("");
}

function init() {
    $("#userForm").hide();

    //hook events
    //show the userForm
    $("#newUser").on("click",function(){
        $("#userForm").slideDown(1200);
    });
    //hide the userForm
    $("#hideForm").on("click",function(){
        $("#userForm").slideUp(1200);
    });
    $("#txtPassword").keyup(validatePassword);
    $("#txtPasswordConfirmation").keyup(confirmPassword);
}

window.onload = init;
//jquery vs javascript
// document.getElementById("txtFirstName").value;
// $("#txtFirstName").val();

// document.getElementById("txtLastName").style.display="none";
// $("#txtLastName").hide();
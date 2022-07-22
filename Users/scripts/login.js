function login(){
    //get the values from the form
    let txtPass=$("#txtPassword").val();
    let userEmail=$("#txtEmail").val();
    //use a flag
    let flag=true;
    //get the users from the localStorage
    let users=readUsers();//this is the user array
    //travel the user array
    for(i=0; i<users.length; i++){
        //get the user
        let user=users[i];
        //compare the input values from the LS
        if(user.email==userEmail && user.password==txtPass){
            window.location="users.html";
        }else{
            flag=false;
        }
    }
    if(!flag){
        $("#alertError").removeClass("hide");
        setTimeout(function(){
            $("#alertError").addClass("hide");
        },3000);
    }
}
function init(){
    $("#loginBtn").click(login);

}
window.onload=init;
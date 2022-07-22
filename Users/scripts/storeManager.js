const KEY="users";
function saveUser(user){
    let oldData=readUsers();// getting localstorage data
    oldData.push(user);//add new user
    let value = JSON.stringify(oldData);
    //send the user to the local storage
    localStorage.setItem(KEY,value);
}
function readUsers(){
    let data=localStorage.getItem(KEY);
    if(!data){ //is not data
        return [];//creating the array
    }else{
        //we have data
        let list=JSON.parse(data);//parse the string to objects
        return list;//return array with objects
    }
}
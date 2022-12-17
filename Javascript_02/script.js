var user_1 = {
    name: "Henrique Eduardo",
    age: 21,
    username: "henriqueedu2001",
    email: "henrique_eduardo_souza@hotmail.com"
};

var user_2 = {
    name: "Carlos Eduardo Ferreira",
    age: 40,
    username: "cef",
    email: "cef@usp.br"
};

function printUsers(){
    console.log("Printing the objects");
    console.log(user_1);
    console.log(user_2);
    console.log("Printing with our function");
    showUserInfo(user_1);
    showUserInfo(user_2);
}

function showUserInfo (user){
    console.log("Name: " + user.name);
    console.log("Age: " + user.age);
    console.log("Username: " + user.username);
    console.log("Email: " + user.email);
}

printUsers();
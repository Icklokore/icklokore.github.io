"use strict";

function getUserFromLocalStorage() {
    return JSON.parse(localStorage.getItem("user"));
}

function saveUserInLocalStorage(user) {
    if(localStorage.getItem("user") === null){
        localStorage.setItem("user", JSON.stringify(user));
    }
}

function removeUserFromLocalStorage(){
    localStorage.removeItem("user");
}
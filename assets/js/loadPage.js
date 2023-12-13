"use strict";
document.addEventListener("DOMContentLoaded", init);

function init(e) {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    if(user === "name"){
        document.querySelector("#SecretLink").classList.add("hidden");
    } else {
        document.querySelector("#SecretLink").classList.remove("hidden");
    }
    document.querySelector("#set").addEventListener("click", clickSetHandler);
    document.querySelector("#remove").addEventListener("click", clickRemoveHandler);
}

function clickSetHandler(e){
    e.preventDefault;
    saveUserInLocalStorage("name");
    //refresh page
    location.reload();
}

function clickRemoveHandler(e){
    e.preventDefault;
    removeUserFromLocalStorage();
    //refresh page
    location.reload();
}
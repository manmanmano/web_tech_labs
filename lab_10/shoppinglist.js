function checkInput(user) {
    while (true) {
        if (user === "" || user === null) {
            alert("input left blank!");
            user = prompt("please enter your name");
        } else {
            break;
        }
    }
    return user;
}

function logout() {
    document.cookie = "name=''; expires=Mon, 31 Dec 2018 12:00:00 UTC; path=/~madang/Web_Technologies/lab_10/;";
    window.location.reload(false);
}

function addItem() {
    var item = document.getElementById("item").value;
    var quantity = document.getElementById("quantity").value;
    if (quantity == "" || item == "" || quantity < 0) {
        alert("Invalid input in form!");
        return;
    }
    window.location.reload(false);
}

if (document.cookie == "") {
    var name = prompt("Please enter your name: ");
    name = checkInput(name);
    if (name != "" && name != null) {
        document.cookie = "name=" + name + "; path=/~madang/Web_Technologies/lab_10/;";
    }
}
sessionStorage.setItem("name", name);
document.getElementById("user").innerHTML = name + "'s Shopping List";

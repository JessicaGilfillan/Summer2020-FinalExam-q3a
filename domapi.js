
    let listItem = document.getElementById("list"); //
    let addButton = document.querySelector("#listItem + input");
    let ul = document.querySelect("ul"); //

    addButton.onclick = (e) => {
        //

        let li = document.createElement("li");
        let delButton = document.createElement("button");
        let checkBox = document.createElement("input");

        let item = listItem.value;
        li.textContent = item;
        delButton.textContent = "Got It!";

        li.appendChild(delButton);
        ul.appendChild('li');//

        delButton.onclick = deleteIt;
    };

    function deleteIt(e) {
        alert("Are you sure you want to delete this from your grocery list?");
        let delItem = e.target.closet("li");//
        delItem.remove();
    }
var count = 0;

function addItem() {
    var listItem = document.createElement("div");
    listItem.className = "data-container list-Item";
    listItem.id = "data-container"+count;

    var h1 = [];

    var itemName = document.getElementById("name").value;
    h1[0] = document.createElement("input");
    h1[0].placeholder = "Name";
    h1[0].value = itemName;

    var itemCost = document.getElementById("cost").value;
    h1[1] = document.createElement("input");
    h1[1].placeholder = "Cost";
    h1[1].value = itemCost;
    h1[1].setAttribute("onchange","currency(this); getTotal(this,this.nextElementSibling, this.parentElement.children[3]); allItems();");

    var itemAmount = document.getElementById("amount").value;
    h1[2] = document.createElement("input");
    h1[2].placeholder = "Amount";
    h1[2].value = itemAmount;
    h1[2].setAttribute("onchange","getTotal(this.previousElementSibling, this, this.parentElement.children[3]); allItems();");

    var itemTotal = document.getElementById("total").innerText;
    h1[3] = document.createElement("h1");
    h1[3].placeholder = "total";
    h1[3].innerHTML = itemTotal;

    var input = document.createElement("input");
    input.type = "button";
    input.value = "remove";
    input.id = "remove";
    input.setAttribute("onclick","removeItem(this.parentElement); allItems();")

    listItem.appendChild(h1[0]);
    listItem.appendChild(h1[1]);
    listItem.appendChild(h1[2]);
    listItem.appendChild(h1[3]);
    listItem.appendChild(input);

    var parent = document.getElementById("output-container");
    var info = document.getElementById("information");;
    
    parent.insertBefore(listItem, info);
    count++;
}

function removeItem(a) {
    var obj = document.getElementById(a.id);
    obj.remove();
    count--;
}

Number.prototype.Dollars = function() {
    var val = this;
    var cur = "$"+val.toFixed(2);
    return cur;
}

Object.prototype.Simple = function() {
    return Number((this.toString()).replace(/[^0-9.-]+/g,""))
}

function currency(a) {
    var currency = a.value;
    var val = Number(currency.replace(/[^0-9.-]+/g,"")); //raw value
    if (val) {
        a.value = val.Dollars();
    }
    else if (val <= 0) {
        a.value = "$0.00";
    }
}

function getTotal(a,b,total) {
    var itemCost = a.value.Simple();
    var amount = b.value.Simple();
    console.log(total);
    total.innerText = (itemCost*amount).Dollars();
}

function allItems() {
    var list = document.getElementsByClassName("list-Item");
    var len = list.length;
    var other = [];
    var arr = [];
    while(len--) {
        arr.push(list[len].innerText.Simple());
        other.push(list[len].childNodes[2].value.Simple())
    }
    var bank = 0;
    var totalItems = 0;
    if (list.length !== 0) {
        bank = arr.reduce(function(acc,cur) {
            return acc+cur;
        }).toFixed(2);
        totalItems = other.reduce(function(acc,cur) {
            return acc+cur;
        });
    }
    var total = document.getElementById("totalC");
    total.innerText="Total Cost: $"+bank
    var totalA = document.getElementById("totalA");
    totalA.innerText="Total Amount: "+totalItems;
    var totalI = document.getElementById("totalI");
    totalI.innerText="Total Items: "+list.length;
}
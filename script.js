//Get.a("box").named("conner");

/*create a function with the above notation that does the following...

creates a global variable inside the function
names the variable using the parameter inside the .named function
makes the variable an array if the .a() function has the "box" string
makes the variable a number if the .a() function has the "number" string
and gives the variable 1 to 10 items that are strings named "empty"

*/

//a("box").named("conner");

var a = function(string) {
    return new get(string);
}

class get {
    constructor(type) {
        this.type = type;
    }
    named(name) {
        var value;
        if (this.type === "box") {
            value = "[]";
        }
    }
}

function randomArray(from,to,itemName) {
    var randArray = [];
    for (var i=from; i<to; i++) {
        randArray.push(itemName);
    }
    return randArray;
}

var debug = new Handler();

function Handler() {
    this.Log = function(any) {
        var doc = document.createElement("div");
        var testHold = document.createElement("h1");
        var test = document.createTextNode(any);
        testHold.appendChild(test);
        doc.appendChild(testHold);
        doc.style.textAlign = "center";
        doc.style.paddingTop = "40vh";
        document.body.appendChild(doc);
    }
}

try {
    try {
        debug.Log(b);
    }
    catch (error) {
        debug.Log(typeof b);
    }
}
catch (error) {
    console.error("no");
}
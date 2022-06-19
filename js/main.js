const goods = {
    
    "111" : {
        "name" : "TV",
        "price" : 10,
        "availability" : "yes"
    },

    "222" : {
        "name" : "phone",
        "price" : 20,
        "availability" : "no"
    },

    "333" : {
        "name" : "stereosystem",
        "price" : 100,
        "availability" : "yes"
    },

    "444" : {
        "name" : "frying pan",
        "price" : 15,
        "availability" : "no"
    },

    "555" : {
        "name" : "mirror",
        "price" : 50,
        "availability" : "yes"
    }

};


console.log(goods);

let out = "";

for (let key in goods) {
    out += "NAME: " + goods[key].name + "<br>";
    out += "PRICE: " + goods[key].price + "<br>"; 
}

document.getElementById("out").innerHTML = out;

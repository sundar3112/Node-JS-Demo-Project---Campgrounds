var fake = require("faker");
for(var i=0;i<10;i++)
{
    var prod = fake.commerce.productName();
    var price = fake.commerce.price();
    console.log(prod," - $",price);
}


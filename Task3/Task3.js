var itemsArr = [
    {
        name: "tshirt",
        price: 20,
        taxable: false
    },
    {
        name: "skirt",
        price: 30,
        taxable: true
    },
    {
        name: "pants",
        price: 70,
        taxable: false
    },
    {
        name: "jacket",
        price: 100,
        taxable: true
    },
    {
        name: "socks",
        price: 10,
        taxable: false
    }
];
var discount = 25;
var getDiscount = function (arr, discount) {
    discount /= 100;
    var totalBeforeTaxes = 0;
    var totalAfterTaxes = 0;
    var totalSST = 0;
    var totalServiceTax = 0;
    arr.forEach(function (item) {
        totalBeforeTaxes += item.price;
        if (item.taxable) {
            var SST = item.price * 0.06;
            var serviceTax = item.price * 0.1;
            totalSST += SST;
            totalServiceTax += serviceTax;
            totalAfterTaxes += item.price + serviceTax + SST;
        }
        else {
            totalAfterTaxes += item.price;
        }
    });
    var totalDiscount = totalAfterTaxes * discount;
    var totalAfterDiscount = totalAfterTaxes - totalDiscount;
    console.log("Total amount before tax: " + roundToNearst5Cents(totalBeforeTaxes));
    console.log("Total amount of discount: " + roundToNearst5Cents(totalDiscount));
    console.log("Total amount after discount: " + roundToNearst5Cents(totalAfterDiscount));
    console.log("Total SST (6%): " + roundToNearst5Cents(totalSST));
    console.log("Total service tax (10%) " + roundToNearst5Cents(totalServiceTax));
};
var roundToNearst5Cents = function (n) {
    var res = Math.round(n * 20) / 20;
    return res;
};
getDiscount(itemsArr, discount);

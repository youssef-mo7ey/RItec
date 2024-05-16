interface item {
    name: string;
    price:number;
    taxable:boolean;
  }

const itemsArr=[
{
    name:"tshirt",
    price:20,
    taxable:false
},
{
    name:"skirt",
    price:30,
    taxable:true
},
{
    name:"pants",
    price:70,
    taxable:false
},
{
    name:"jacket",
    price:100,
    taxable:true
},
{
    name:"socks",
    price:10,
    taxable:false
}]
   
const discount=25

const getDiscount = (arr:item[],discount:number) =>{
    discount/=100;
    let totalBeforeTaxes=0
    let totalAfterTaxes=0
    let totalSST=0
    let totalServiceTax=0
    arr.forEach(item => {
        totalBeforeTaxes+=item.price
        if(item.taxable){
            let SST=item.price*0.06;
            let serviceTax=item.price*0.1;
            totalSST+=SST;
            totalServiceTax+=serviceTax;
            totalAfterTaxes+=item.price+serviceTax+SST;
        }
        else{
            totalAfterTaxes+=item.price;
        }
    })
    const totalDiscount=totalAfterTaxes*discount;
    const totalAfterDiscount=totalAfterTaxes-totalDiscount;

    console.log("Total amount before tax: " + roundToNearst5Cents(totalBeforeTaxes))
    console.log("Total amount of discount: "+roundToNearst5Cents(totalDiscount))
    console.log("Total amount after discount: "+roundToNearst5Cents(totalAfterDiscount))
    console.log("Total SST (6%): "+roundToNearst5Cents(totalSST))
    console.log("Total service tax (10%) "+roundToNearst5Cents(totalServiceTax))
  
}
const roundToNearst5Cents=(n:number)=>{
    const res=Math.round(n*20)/20
    return res
}

getDiscount(itemsArr,discount)
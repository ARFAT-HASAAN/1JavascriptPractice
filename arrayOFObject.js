
const phones = [
    {name: "iphone", price: 2222, battery: 34332 },
    {name: "sumsung", price: 203923, battery: 34332 },
    {name: "HOWYI", price: 20000, battery: 34332 },
    {name: "Nokia", price: 3000, battery: 34332 },
    {name: "Mi", price: 10000, battery: 34332 }

]


let budgetPhone = phones[0]

for(const phone of phones){
    // console.log(phone);
    if(phone.price > budgetPhone.price ){
        budgetPhone = phone;
    }
}
console.log(budgetPhone)
// console.log(typeof(budgetPhone))
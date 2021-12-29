
function SimpleInterestFormula(P,T,R){
 
 let interest = ((P*T*R)/100)
 return interest;

}

const diposite = SimpleInterestFormula(1000,1,5.4)
console.log(diposite);
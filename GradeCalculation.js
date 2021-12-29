
function GradeCalculation(n) {
    
   if(n >=80 && n <= 100){
       return "A+"
   }
   else if(n >= 75){
       return "A"
   }
   else if(n >= 65){
       return "B"
   }
   else if(n >= 50){
       return "B"
   }
   else if(n >= 45){
       return "C"
   }
   else if(n >= 33){
       return "D"
   }
   else{
       return "Fail"
   }


    
}

 const grade = GradeCalculation(49)
 console.log(grade);
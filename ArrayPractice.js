// remove duplicate array element from an array

const names = ['arfat', 'hasan', 'fahim', 'noman', 'ali', 'jhankar', 'arfat']

  const SpecipicName = [];
for(let element of names){

    if(SpecipicName.indexOf(element) == -1){
        SpecipicName.push(element)
    }
  
} 
 console.log(SpecipicName)

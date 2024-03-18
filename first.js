// for button we use onclick

function calculate(){
   var a= parseInt(document.getElementById('bookOne').value);
   var b= parseInt(document.getElementById('bookTwo').value);
   var c= parseInt(document.getElementById('bookThree').value);
   var d= parseInt(document.getElementById('bookFour').value);
   var e= parseInt(document.getElementById('bookFive').value);

   var obtain = a+b+c+d+e;
   document.getElementById("obtained").innerHTML=obtain;
   var percentage = obtain / 500 * 100;
   document.getElementById("percentage").innerHTML=percentage;
   var grade;
   var getGrade = document.getElementById('grade')

       if (percentage>=80){
           grade = "A+"
           getGrade.innerHTML = grade
            }
        
      else if (percentage>=60){
          grade = "A"   
          getGrade.innerHTML = grade
           }
        
       else if (percentage>=50){
           grade = "B"
           getGrade.innerHTML = grade
           }
       
       
        else{
           grade = "FAILED"
           getGrade.innerHTML = grade
           }


        }


   
            

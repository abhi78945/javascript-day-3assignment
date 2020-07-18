

let marks = Number(prompt("Enter your marks",));



switch(true)
{
 case marks <= 35:
  alert("You Fail");
  break;
  case marks >= 36 && marks <= 40:
    alert("E");
    break;
  case marks >= 40 && marks <= 50:
  alert("D");
  break;
 case marks >= 50 && marks <= 60:
  alert("C");
  break;
 case marks >= 61 && marks <=80:
  alert("B");
  break;
 case marks > 81:
  alert("A");
  break;
}

   

    var person = prompt();
    var str = person;
  

    var splitStr = str.split(' ')[0]; // Will separate str on each period character

   // console.log(splitStr); // [ "Hello", " I am a string", " You can separate me", "" ]
   // console.log(str); // "Hello. I am a string. You can separate me."
  //  console.log("the os name is" + splitStr[0]+ "and version" + splitStr[1]+ "</br>");

   
   
    //var fullname=person.GetVar("Fullname");
   // var name = splitStr; // try "Paul", "Paul Steve"
    //var first_name = splitStr.split(' ')[0]
    var last_name = str.substring(splitStr.length).trim()
   // console.log(splitStr);
   // console.log(last_name);
    console.log("The os name is " + splitStr + " and version " + last_name + "");

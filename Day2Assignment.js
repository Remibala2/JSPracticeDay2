function dayTime()
{
    var today = new Date().getDay(); //gets the number of the day 0-6
    var hour = new Date().getHours();
    var min = new Date().getMinutes();
    var sec = new Date().getSeconds();
    if (today == 0) today = "Sunday";
    else if (today == 1) today = "Monday";
    else if (today == 2) today = "Tuesday";
    else if (today == 3) today = "Wednesday";
    else if (today == 4) today = "Thursday";
    else if (today == 5) today = "Friday";
    else if (today == 6) today = "Saturday";
    document.getElementById("day").innerHTML = today;
    document.getElementById("time").innerHTML =
      hour + " PM : " + min + " : " + sec;
}

function area(a,b,c) {
    let s = (a+b+c)/2;
    let area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
  //  console.log(s);
   // console.log(area);
    document.getElementById("areaTriangle").innerHTML = area;
}

function leapYear()
{
    var y = document.getElementById("inputYear").value;
    console.log(y);
    if(y%400 === 0)
    {
        if(y%100 != 0)
        {
            document.getElementById("leapYear").innerHTML = "Not a leap Year";
            console.log("No");
        }  
        else
        {
            document.getElementById("leapYear").innerHTML = "Leap Year. It has 366 days.";
            console.log("leap");
        }      
    }  
     else if(y%4 === 0)
     {
        document.getElementById("leapYear").innerHTML = "Leap Year. It has 366 days.";
        console.log("leap");   
     }
     else{
        document.getElementById("leapYear").innerHTML = "Not a leap Year";
        console.log("No");
     }
}

function daysForChristmas()
{
    var today = new Date();
    console.log(today);
if(today.getMonth() == 11 && today.getDay >= 25 )
{
    document.getElementById("daysForChristmas").innerHTML = "Its Christmas Season";
}
else 
{

}
}

function multiply()
{
    var x = document.getElementById("first").value;
    var y = document.getElementById("second").value;
    
    var ans = x * y;
    document.getElementById("answer").innerHTML = ans;
}

function divide()
{
    var x = document.getElementById("first").value;
    var y = document.getElementById("second").value;
    
    var ans = x / y;
    document.getElementById("answer").innerHTML = ans;
}
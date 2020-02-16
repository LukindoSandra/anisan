var day=document.getElementById('day').innerHTML
var day=document.getElementById('month').innerHTML
var day=document.getElementById('year').innerHTML

var maleNames=['Kwasi','Kwado','Kwabena','Kwaku','Yaw','Kofi','Kwame'];
var femaleNames=['Akosua','Adwoa','Abenna','Akua','Yaa','Afua','Ama'];

function akanName(){
    var day=parseInt(document.getElementById('day')).value;
    var month=parseInt(document.getElementById('month')).value;
    var year=parseInt(document.getElementById('year')).value;
    
};

var gender=getGender();
var date=new Date(year+"/" +month+"/"+day);
var dayBorn=date.getDay();
var akanNameName;
var validateGender=(gender!=="male"&&gender!=="female");

if(year<=0){
    alert("The is invalid");
}

else if(month<=0|| month > ){
    alert("Invalid month should be between 1 and 12");
}

else if(day<=0 || day>31){
    alert("invalid date");
}

else if(validate==false){
    alert("invalid input");
}

if(gender==="male"&&year > 0 && month > 0 && month <13 && day <32){
    akanName=maleNames[dayBorn];
    alert("You were born on" + dayOfTheWeek[dayBorn]+ "and your Akan name is" +akanName );
}

else if(gender==="female"&&year> 0&& month> 0&&month <13&&day> 0&&day<32){
    akanName=femaleNames[dayBorn];
    alert("You were born on" + dayOfTheWeek[dayBorn] +"and your Akan name is" +akanName );
}

functiongetGender(){
    var gender= document.getElementsByName("gender");
    for( i= 0;i<gender.length;i++){
        if(gender[i].checked){
            return(gender[i].value)
        }
    }
}



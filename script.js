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



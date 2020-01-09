
function validate()
{
var arr = [];
var myvalue = JSON.parse(localStorage.getItem('detail'));
console.log(myvalue);
if(myvalue!=null){
for(let i=0;i<myvalue.length;i++){
	arr.push(myvalue[i]);
}
}
var a = document.getElementById('usr').value;
    var b = document.getElementById('roll').value;
    var c = document.getElementById('age').value;
    var d = document.getElementById('mail').value;
    var e = document.getElementById('dept').value;
    var f = document.getElementById('cg').value;
    var g = document.getElementById('college').value;
    var h = document.getElementById('comment').value;	
    if(a == null || a == "", b == null || b == "", c == null || c == "", d == null || d == "" , e ==null || e == "", f == null || f == "", g == null || g =="", h == null || h == "") {
      alert("Please Fill All Required Field");
      return false;
      }
    else if(c<18 || c>25)
       {
  	   alert("Age should be greater than 18 and less than 25");
  	   return false;
        }
    else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(d))
       {
var data ={
	user:a,
	Rollnumber:b,
	Age: c,
	Email: d,
	Department:e,
	CGPA:f,
	college:g,
	comment: h
};
    console.log(data);
    arr.push(data);
    console.log(arr);
    localStorage.setItem("detail", JSON.stringify(arr));
 	   alert("Registered successfully");
 	   location.replace("b.html");

       return true;
       }

        {
          alert("You have entered an invalid email address!")
         return false
     }
      
  
}

function process(){
var rows = JSON.parse(localStorage.getItem('detail'));
var html = "<table border='1|1'>";
for (var i = 0; i < rows.length; i++) 
{
		console.log(rows[i]);
	document.getElementById('result').innerHTML += '<tr><td>'+rows[i].user+'</td><td>'
	+rows[i].Rollnumber+'</td><td>'+rows[i].Age+'</td><td>'+rows[i].Email
	+'</td><td>'+rows[i].Department+'</td><td>'+rows[i].CGPA+'</td><td>'+rows[i].college+'</td><td>'+rows[i].comment+'</td></tr>';
	
   }

}	
function otherfun(){
	location.replace("index.html");
}
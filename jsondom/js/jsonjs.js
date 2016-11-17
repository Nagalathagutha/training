$(document).ready(function(){
var employee=  {
 "empdetails":[{
  "ename":"nagalatha",
  "empid":"1024",
  "exp":"0",
  "designation":"trainee"
 },{
  "ename":"namratha",
  "empid":"1039",
  "exp":"1",
  "designation":"software engineer"
 },
 {
    "ename":"varudhini",
  "empid":"1029",
  "exp":"1",
  "designation":"software engineer"
 }
   ]
}
var details= '';

    $.each(employee.empdetails, function (i,data) {

        details += '<tr><td>' +employee.empdetails[i].ename + '</td><td>' + employee.empdetails[i].empid + '</td><td>'+ employee.empdetails[i].exp+ '</td><td>'+ employee.empdetails[i].designation+ '</td></tr>';
    });

    $('#repeating').append(details);
	});

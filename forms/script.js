function ValidateEmail(_inputemail)
{
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@(?!gmail)(?!hotmail)(?!yahoo)(?!outlook)[a-zA-Z0-9-]+(?!.edu)(?:\.[a-zA-Z0-9-]+)*$/;
if(_inputemail.value.match(mailformat))
{
    document.form1.text1.focus();
return true;
}
else
{
alert("Please enter a valid work email!");
document.form1.text1.focus();
return false;
}
}
function phonenumber(inputtxt)
{
  var phoneno = /^\d{10}$/;
  if(inputtxt.value.match(phoneno))
      return true;
      else
        {
        alert("Please enter a valid mobile number!");
        return false;
        }
}
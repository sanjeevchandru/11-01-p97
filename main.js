document.write("61.to concatenate two strings except for their first character."+"<br>");
function test61(str1,str2){
    var x=str1.substring(1);
    var y=str2.substring(1);
    return x+y;
}
document.write("The strings are :sanjeev ,chandru  ,Ans :"+test61("sanjeev","chandru")+"<br><br>");
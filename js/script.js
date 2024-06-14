function Calculate(n1,n2){
  let Result = null
  /*Check if numbers are valid*/
  if ( n1 && n2 && n1>1 && n2>1 && Math.round(n1)==n1 && Math.round(n2)==n2 && n1!=n2){
    let index = 1
    for ()
  } else{
    return null
  }
  /*Return the gcf*/
  return Result
}
function Result(){
  /*Variables*/
  let Number1 = document.getElementById("1").value
  let Number2 = document.getElementById("2").value
  /* Get GCF */
  let ToDisplay = Calculate(Number1,Number2)
  /* Checking if the result is a valid number, to display error or gcf*/
  if (ToDisplay!=null){
    document.getElementById("Result").innerHTML="The greatest common factor of "+Number1+" and "+Number2+" is "+ToDisplay
  } else{
    document.getElementById("Result").innerHTML="The program has encountered an error. <br> This is usually either because the numbers aren't both positive and whole, or they are equal numbers please check your numbers and try again."
  }
}
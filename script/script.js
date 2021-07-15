function getHistory(){
    return document.getElementById("history-value").innerText;
}

function printHistory(num){
    document.getElementById("history-value").innerText=num;
}

function getOutput(){
    return document.getElementById("output-value").innerText;
}

function printOutput(num){
    if(num==""){
        document.getElementById("output-value").innerText=num;
    }else{
        document.getElementById("output-value").innerText=getFormattedNumber(num);

    }
   }
alert(getHistory());

function getFormattedNumber(num){
   if(num=="-"){
       return "";
   }
     var n=Number(num);
     var value=n.toLocaleString("en");
     return value;
}
//printOutput("123232")

function reverseNumberFormat(num){
    // removes , from the number
   return Number(num.replace(/,/g,''));
}
//alert(reverseNumberFormat(getOutput()))
var operator=document.getElementsByClassName("operator");
for(var i=0; i<operator.length; i++){
    operator[i].addEventListener('click',function(){
       if(this.id=="clear"){
           printHistory("");
           printOutput("");
       }
      else if(this.id=="backspace"){
          // get the ouput and reverse
          var output=reverseNumberFormat(getOutput()).toString();
          if(output){
              // has value
              output=output.substr(0,output.length-1);
              printOutput(output);
          } 
       }else{
           var output=getOutput();
           var history=getHistory();
             
           if(output=="" && history!=""){
               if(isNaN(history[history.length-1])){
                   history=history.substr(0,history.length-1);
               }
           }



           if(output!=""|| history!=""){
               // condition?true:false;
               output=output==""?output:reverseNumberFormat(output);
              //console.log(history,output);
              history=history+output;
              printHistory(history);
              console.log(history);
              if(this.id=="="){
                  var result=eval(history);
                  printOutput(result);
                  printHistory("");
              }
              else{
                 history=history+this.id; 
                 printHistory(history);
                 printOutput("");
              }
           }
       }
    });

}

var number=document.getElementsByClassName("number");
for(var i=0; i<number.length; i++){
    number[i].addEventListener('click',function(){
       var output=reverseNumberFormat(getOutput());
       // check if a number 
       if(output!=NaN){
          output=output+this.id;
          printOutput(output); 
       }
    });
}
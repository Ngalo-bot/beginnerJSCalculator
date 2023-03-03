//declaring variables  for the error alarm and all buttons
var arr=[];
var alarmC=document.getElementById('alarm');

var btndiv=document.getElementById('div')
var btnpower=document.getElementById('power')
var btnadd=document.getElementById('add')
var btnmult=document.getElementById('mult')
var btnminus=document.getElementById('minus')
var btnsqt=document.getElementById('sqt')

var ans=document.getElementById("digits");
var digits=document.getElementById("answer");

var signchange=['none'];

//delete operation
const deloperation=(fig)=>{
    arr.push(fig);
}

//all functions with numbers define behabior when the button is clicked
function one(){
    ans.value=ans.value+"1";
    deloperation(ans.value)
    if(alarmC.style.backgroundColor!='white'){
        alarmC.style.backgroundColor='white';
    }
}

function two(){
    ans.value=ans.value+"2";
    deloperation(ans.value);
    if(alarmC.style.backgroundColor!='white'){
        alarmC.style.backgroundColor='white';
    }
}

function three(){
    ans.value=ans.value+"3";
    deloperation(ans.value);
    if(alarmC.style.backgroundColor!='white'){
        alarmC.style.backgroundColor='white';
    }
}

function four(){
    ans.value=ans.value+"4";
    deloperation(ans.value);
    if(alarmC.style.backgroundColor!='white'){
        alarmC.style.backgroundColor='white';
    }
}

function five(){
    ans.value=ans.value+"5";
    deloperation(ans.value);
    if(alarmC.style.backgroundColor!='white'){
        alarmC.style.backgroundColor='white';
    }
}

function six(){
    ans.value=ans.value+"6";
    deloperation(ans.value);
    if(alarmC.style.backgroundColor!='white'){
        alarmC.style.backgroundColor='white';
    }
}

// ES6 just for fun
 const seven =()=>{
    ans.value=ans.value+"7";
    deloperation(ans.value);
    if(alarmC.style.backgroundColor!='white'){
        alarmC.style.backgroundColor='white';
    }
}

function eight(){
    ans.value=ans.value+"8";
    deloperation(ans.value);
    if(alarmC.style.backgroundColor!='white'){
        alarmC.style.backgroundColor='white';
    }
}

const nine=()=>{
    ans.value=ans.value+"9";
    deloperation(ans.value);
    if(alarmC.style.backgroundColor!='white'){
        alarmC.style.backgroundColor='white';
    }
}


const zero=()=>{
    ans.value=ans.value+"0";
    deloperation(ans.value);
    if(signchange[0]=='div' && ans.value=='0'){

        alarmC.style.backgroundColor='red';
        
    }
}

// now for perfoming the math
const add=()=>{
    btnadd.style.backgroundColor='red';
    btnadd.style.borderColor='white';
    signchange[0]='plus';
    digits.value=ans.value;
    ans.value=''
}
const minus=()=>{
    btnminus.style.backgroundColor='red';
    btnminus.style.borderColor='white';
    signchange[0]='minus';
    digits.value=ans.value;    
    ans.value=''
    if(alarmC.style.backgroundColor!='white'){
        alarmC.style.backgroundColor='white';
    }
}

const mult=()=>{
    btnmult.style.backgroundColor='red';
    btnmult.style.borderColor='white';
    signchange[0]='mult';
    digits.value=ans.value;
    ans.value=''
    if(alarmC.style.backgroundColor!='white'){
        alarmC.style.backgroundColor='white';
    }
}

const div=()=>{
    btndiv.style.backgroundColor='red';
    btndiv.style.borderColor='white';
    signchange[0]='div';
    digits.value=ans.value;
    ans.value=''
}

const sqtroot=()=>{
    btnsqt.style.backgroundColor='red';
    btnsqt.style.borderColor='white';
    signchange[0]='sqt';
    digits.value=ans.value;
    ans.value=''
}

const power=()=>{
    btnpower.style.backgroundColor='red';
    btnpower.style.borderColor='white';
    signchange[0]='power';
    digits.value=ans.value;
    ans.value=''
    if(alarmC.style.backgroundColor!='white'){
        alarmC.style.backgroundColor='white';
    }
}

const clearAll=()=>{
    ans.value='';
    digits.value='';
    if(alarmC.style.backgroundColor!='white'){
        alarmC.style.backgroundColor='white';
    }
}


const backspace=()=>{
    arr.pop();
    ans.value=arr.toString();
    if(alarmC.style.backgroundColor!='white'){
        alarmC.style.backgroundColor='white';
    }
}

const period=()=>{
    ans.value=ans.value+".";
    if(alarmC.style.backgroundColor!='white'){
        alarmC.style.backgroundColor='white';
    }
}

const equals=()=>{
     
    if (signchange[0]=='plus'){
        digits.value=parseFloat(digits.value)+parseFloat(ans.value);
        ans.value='';
    }
    else if (signchange[0]=='minus'){
        digits.value=parseFloat(digits.value)-parseFloat(ans.value);
        ans.value='';
    }

    else if (signchange[0]=='div'){        
        digits.value=parseFloat(digits.value)/parseFloat(ans.value);
        ans.value='';  
    
    }

    else if (signchange[0]=='mult'){
        digits.value=parseFloat(digits.value)*parseFloat(ans.value);
        ans.value='';
    }

    else if (signchange[0]=='sqt'){
        digits.value=Math.sqrt(parseFloat(digits.value));
        ans.value='';
    }
    else if (signchange[0]=='power'){
        digits.value=Math.pow(parseFloat(digits.value),parseFloat(ans.value));
        ans.value='';
    }

   if(btndiv.style.backgroundColor=='red') {
        btndiv.style.backgroundColor='rgb(39, 223, 55)';
        btndiv.style.borderColor='black';
    }
    if(btnpower.style.backgroundColor=='red') {
        btnpower.style.backgroundColor='rgb(39, 223, 55)';
        btnpower.style.borderColor='black';
    }
    if(btnadd.style.backgroundColor=='red') {
        btnadd.style.backgroundColor='rgb(39, 223, 55)';
        btnadd.style.borderColor='black';
    }
    if(btnminus.style.backgroundColor=='red') {
        btnminus.style.backgroundColor='rgb(39, 223, 55)';
        btnminus.style.borderColor='black';
    }
    if(btnmult.style.backgroundColor=='red') {
        btnmult.style.backgroundColor='rgb(39, 223, 55)';
        btnmult.style.borderColor='black';
    }
    if(btnsqt.style.backgroundColor=='red') {
        btnsqt.style.backgroundColor='rgb(39, 223, 55)';
        btnsqt.style.borderColor='black';
    }


}


var count=0; //counts which flight is being processed

var c=0;



function processing(){

var size= fn2.length;
var temparr=[];
var h;
var g;
                                  // for calculating cost

////////// emergency///////////////////


for(h=0; h<size; h++){                                                 // emergency array of fuel
if(fn3[h]=='YES'){
temparr.push(fn2[h]);
fn2oo.splice(h-c,1);
c++;


}
fn2o=temparr.concat(fn2oo);
}

for(g=0; g<size; g++){                                                // emergency array of flight no.
var lm= fn2.indexOf(fn2o[g]);
fn1o.push(fn1[lm]);
}

///////////emrgncy end///////////////////////

var i=2;   
var cost=[];

while((fxl.length<= obj.landing_queue) && (count<= fn2.length)){      // processing of main atc

if(fxt.length<= obj.takeoff_queue){
fxt.push(fn1o[count]);
count++;
cost.push(landing_fuel);
}
else{

count1=count-1;
fxl.push(fn1o[count1]);
var tempcost= ((landing_fuel) + (i*waiting_fuel));
cost.push(tempcost);
count++;
i++;
}
}
cost[2]= landing_fuel + waiting_fuel;

document.getElementById('main').innerHTML= '<table class="abcd" border="1px solid black" style="float:left; margin-left:300px">'+
'<tr><th></th><th>Flight No</th><th>Fuel</th></tr>'+
'<tr><td rowspan="2">Take off</td><td>'+fxt[0]+'</td><td>'+cost[0]+'</td></tr>'+
'<tr><td>'+fxt[1]+'</td><td>'+cost[1]+'</td></tr>'+
'<tr><td rowspan="3">Landing</td><td>'+fxl[0]+'</td><td>'+cost[2]+'</td></tr>'+
'<tr><td>'+fxl[1]+'</td><td>'+cost[3]+'</td></tr>'+
'<tr><td>'+fxl[2]+'</td><td>'+cost[4]+'</td></tr>'+
'</table>';

processing1();
}

function processing1(){    // processing of atc_1

var i=1;       
var cost=[];             // for calculating cost

while((fx1l.length<= obj1.landing_queue) && (count<= fn2.length)){

if(fx1t.length<= obj1.takeoff_queue){
fx1t.push(fn1o[count1]);
var tempcost= ((landing_fuel) + (milage*obj1.distance));
cost.push(tempcost);
count1++;
}
else{
count2=count1-1;
fx1l.push(fn1o[count2]);
var tempcost= ((landing_fuel) + ((i+1)*waiting_fuel) + (milage*obj1.distance));
cost.push(tempcost);
count1++;
i++;
}
}
cost[3]= (landing_fuel + waiting_fuel + (milage*obj1.distance));
document.getElementById('atc1').innerHTML= '<table class="abcd" border="1px solid black">'+
'<tr><th></th><th>Flight No</th><th>Fuel</th></tr>'+
'<tr><td rowspan="3">Take off</td><td>'+fx1t[0]+'</td><td>'+cost[0]+'</td></tr>'+
'<tr><td>'+fx1t[1]+'</td><td>'+cost[1]+'</td></tr>'+
'<tr><td>'+fx1t[2]+'</td><td>'+cost[2]+'</td></tr>'+
'<tr><td rowspan="2">Landing</td><td>'+fx1l[0]+'</td><td>'+cost[3]+'</td></tr>'+
'<tr><td>'+fx1l[1]+'</td><td>'+cost[4]+'</td></tr>'+
'</table>';

processing2();
}

function processing2(){     // processing of atc_2

var i=1;           
var cost=[];          // for cost calculation

while((fx2l.length<= obj2.landing_queue) && (count<= fn2.length)){

if(fx2t.length<= obj2.takeoff_queue){
fx2t.push(fn1o[count2]);
var tempcost= ((landing_fuel) + (milage*obj2.distance));
cost.push(tempcost);
count2++;
}
else{
count3= count2-1;
fx2l.push(fn1o[count3]);
var tempcost= ((landing_fuel) + ((i+1)*waiting_fuel) + (milage*obj2.distance));
cost.push(tempcost);
count2++;
i++;
}
}
cost[3]= (landing_fuel + waiting_fuel + (milage*obj2.distance));
document.getElementById('atc2').innerHTML= '<table class="abcd" style="float:left;margin-left:300px" border="1px solid black">'+
'<tr><th></th><th>Flight No</th><th>Fuel</th></tr>'+
'<tr><td rowspan="3">Take off</td><td>'+fx2t[0]+'</td><td>'+cost[0]+'</td></tr>'+
'<tr><td>'+fx2t[1]+'</td><td>'+cost[1]+'</td></tr>'+
'<tr><td>'+fx2t[2]+'</td><td>'+cost[2]+'</td></tr>'+
'<tr><td rowspan="3">Landing</td><td>'+fx2l[0]+'</td><td>'+cost[3]+'</td></tr>'+
'<tr><td>'+fx2l[1]+'</td><td>'+cost[4]+'</td></tr>'+
'<tr><td>'+fx2l[2]+'</td><td>'+cost[5]+'</td></tr>'+
'</table>';
processing3();
}

function processing3(){    // processing of atc_3

var i=1;  
var cost=[];                 // for calculation of cost

while((fx3l.length<= obj3.landing_queue) && (count<= fn2.length)){

if(fx3t.length<= obj3.takeoff_queue){
fx3t.push(fn1o[count3]);
var tempcost= ((landing_fuel) + (milage*obj3.distance));
cost.push(tempcost);
count3++;
}
else{
count4= count3-1;
fx3l.push(fn1o[count4]);
var tempcost= ((landing_fuel) + ((i+1)*waiting_fuel) + (milage*obj3.distance));
cost.push(tempcost);
count3++;
i++;
}
}
cost[2]= (landing_fuel + waiting_fuel + (milage*obj3.distance));
document.getElementById('atc3').innerHTML= '<table class="abcd" border="1px solid black">'+
'<tr><th></th><th>Flight No</th><th>Fuel</th></tr>'+
'<tr><td rowspan="2">Take off</td><td>'+fx3t[0]+'</td><td>'+cost[0]+'</td></tr>'+
'<tr><td>'+fx3t[1]+'</td><td>'+cost[1]+'</td></tr>'+
'<tr><td rowspan="3">Landing</td><td>'+fx3l[0]+'</td><td>'+cost[2]+'</td></tr>'+
'<tr><td>'+fx3l[1]+'</td><td>'+cost[3]+'</td></tr>'+
'<tr><td>'+fx3l[2]+'</td><td>'+cost[4]+'</td></tr>'+
'</table>'

func();
}

function func(){
 
document.getElementById('nota').innerHTML=fxt[0] + " landed successfully in main atc <br>"+ fxt[1]+" landed successfully in main atc";
setTimeout(funcqa, 10000);
setTimeout(func1, 15000);
setTimeout(func2, 20000);
setTimeout(func3, 25000);

}

function funcqa(){
document.getElementById('notb').innerHTML= fxt[0] + " took off successfully from main atc";
setTimeout(funcqat, 10000);
}
function funcqat(){
document.getElementById('notbt').innerHTML=fxl[0] +" landed successfully in main atc";
setTimeout(funcqb, 10000);
}
function funcqb(){
document.getElementById('notc').innerHTML=fxt[1] + " took off successfully from main atc";
setTimeout(funcqbt, 10000);
}
function funcqbt(){
document.getElementById('notct').innerHTML=fxl[1] +" landed successfully in main atc";
setTimeout(funcqc, 10000);
}
function funcqc(){
document.getElementById('notd').innerHTML=fxl[0] + " took off successfully from main atc";
setTimeout(funcqct, 10000);
}
function funcqct(){
document.getElementById('notdt').innerHTML=fxl[2] + " landed successfully in main atc";
setTimeout(funcqct1, 10000);
}
function funcqct1(){
document.getElementById('notdt1').innerHTML=fxl[1] + " took off successfully from main atc";
setTimeout(funcqct2, 10000);
}
function funcqct2(){
document.getElementById('notdt2').innerHTML=fxl[2] + " took off successfully from main atc";
}


function func1(){
document.getElementById('not1a').innerHTML=fx1t[0] + " landed successfully in atc1 <br>"+ fx1t[1] + " landed successfully in atc1 <br>"+ fx1t[2] +" landed successfully in atc1";
setTimeout(func1qa, 10000);
}
function func1qa(){
document.getElementById('not1b').innerHTML=fx1t[0] + " took off successfully from atc1";
setTimeout(func1qat, 10000);
}
function func1qat(){
document.getElementById('not1bt').innerHTML=fx1l[0] +" landed successfully in atc1";
setTimeout(func1qb, 10000);
}
function func1qb(){
document.getElementById('not1c').innerHTML=fxtl[1] + " took off successfully from atc1";
setTimeout(func1qbt, 10000);
}
function func1qbt(){
document.getElementById('not1ct').innerHTML= fx1l[1]+ " landed successfully in atc1";
setTimeout(func1qbt1, 10000);
}
function func1qbt1(){
document.getElementById('not1ct1').innerHTML= fx1t[2]+ " took off successfully from atc1";
setTimeout(func1qbt2, 10000);
}
function func1qbt2(){
document.getElementById('not1ct2').innerHTML=fx1l[0] + " took off successfully from  atc1";
setTimeout(func1qbt3, 10000);
}
function func1qbt3(){
document.getElementById('not1ct3').innerHTML= fx1l[1]+ " took off successfully from atc1";
}


function func2(){
document.getElementById('not2a').innerHTML= fx2t[0]+ " landed successfully in atc2 <br>"+fx2t[1] +" landed successfully in atc2 <br>"+ fx2t[2]+" landed successfully in atc2";
setTimeout(func2qa, 10000);
}
function func2qa(){
document.getElementById('not2b').innerHTML=fx2t[0] + " took off successfully from atc2";
setTimeout(func2qat, 10000);
}
function func2qat(){
document.getElementById('not2bt').innerHTML=fx2l[0] + " landed successfully in atc2";
setTimeout(func2qb, 10000);
}
function func2qb(){
document.getElementById('not2c').innerHTML=fx2t[1] + " took off successfully from atc2";
setTimeout(func2qbt, 10000);
}
function func2qbt(){
document.getElementById('not2ct').innerHTML=fx2l[1] + " landed successfully in atc2";
setTimeout(func2qc, 10000);
}
function func2qc(){
document.getElementById('not2d').innerHTML= fx2t[2]+ " took off successfully from atc2";
setTimeout(func2qct, 10000);
}
function func2qct(){
document.getElementById('not2dt').innerHTML=fx2l[2] + " landed successfully in atc2";
setTimeout(func2qct1, 10000);
}
function func2qct1(){
document.getElementById('not2dt1').innerHTML=fx2l[0] + " took off successfully from atc2";
setTimeout(func2qct2, 10000);
}
function func2qct2(){
document.getElementById('not2dt2').innerHTML=fx2l[1] + " took off successfully from atc2";
setTimeout(func2qct3, 10000);
}
function func2qct3(){
document.getElementById('not2dt3').innerHTML=fx2l[2] + " took off successfully from atc2";
}



function func3(){
document.getElementById('not3a').innerHTML=fx3t[0] + " landed successfully in atc3 <br>"+ fx3t[1]+ " landed successfully in atc3";
setTimeout(func3qa, 10000);
}
function func3qa(){
document.getElementById('not3b').innerHTML=fx3t[0] + " took off successfully from atc3";
setTimeout(func3qat, 10000);
}
function func3qat(){
document.getElementById('not3bt').innerHTML=fx3l[0] + " landed successfully in atc3";
setTimeout(func3qb, 10000);
}
function func3qb(){
document.getElementById('not3c').innerHTML= fx3t[1]+ " took off successfully from atc3";
setTimeout(func3qbt, 10000);
}
function func3qbt(){
document.getElementById('not3ct').innerHTML=fx3l[1] + " landed successfully in atc3";
setTimeout(func3qc, 10000);
}
function func3qc(){
document.getElementById('not3d').innerHTML= fx3t[2]+ " took off successfully from atc3";
setTimeout(func3qct, 10000);
}
function func3qct(){
document.getElementById('not3dt').innerHTML=fx3l[2] + " landed successfully in atc3";
setTimeout(func3qct1, 10000);
}
function func3qct1(){
document.getElementById('not3dt1').innerHTML=fx3l[1] + " took off successfully from atc3";
setTimeout(func3qct2, 10000);
}
function func3qct2(){
document.getElementById('not3dt2').innerHTML=fx3l[2] + " took off successfully from atc3";
}



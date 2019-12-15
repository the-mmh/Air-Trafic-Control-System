var s  = '{"ATC_name" : "atc", "Runway" : 1, "takeoff_queue" : 2, "landing_queue" : 3}'
var s1 = '{"ATC_name" : "atc_1", "Runway" : 1, "takeoff_queue" : 3, "landing_queue" : 2, "distance" : 5}';
var s2 = '{"ATC_name" : "atc_2", "Runway" : 1, "takeoff_queue" : 3, "landing_queue" : 3, "distance" : 8}';
var s3 = '{"ATC_name" : "atc_3", "Runway" : 1, "takeoff_queue" : 2, "landing_queue" : 3, "distance" : 10}';


var obj = JSON.parse(s);
var obj1 = JSON.parse(s1);
var obj2 = JSON.parse(s2);
var obj3 = JSON.parse(s3);


document.getElementById('homeatclanding').innerHTML=obj.landing_queue;
document.getElementById('homeatctakeoff').innerHTML=obj.takeoff_queue;
document.getElementById('homeatcrunway').innerHTML=obj.Runway;


/************************************************************************************************************/
////////////////////////////////////////////////Info about ATC 1///////////////////////////////////////////////////




$(document).ready(function(){

	$("#open1").click(function(){
		$("#aboutATC").slideToggle("slow");
		document.getElementById("aboutATC").innerHTML="ATC_name: " + obj1.ATC_name + "<br>" + "Runway: "+ obj1.Runway + "<br>" +
		"Takeoff Queue Limit: " + obj1.takeoff_queue + "<br>" + "Landing Queue Limit: " + obj1.landing_queue + "<br>" + "Distance: " + obj1.distance;
	});
});



/************************************************************************************************************/




/************************************************************************************************************/
///////////////////////////////////////////////////Info about ATC 2///////////////////////////////////////////////////

$(document).ready(function(){

	$("#open2").click(function(){
		$("#aboutATC").slideToggle("slow");
		document.getElementById("aboutATC").innerHTML="ATC_name: " + obj2.ATC_name + "<br>" + "Runway: "+ obj2.Runway + "<br>" +
		"Takeoff Queue Limit: " + obj2.takeoff_queue + "<br>" + "Landing Queue Limit: " + obj2.landing_queue + "<br>" + "Distance: " + obj2.distance;
	});
});


/************************************************************************************************************/

////////////////////////////////////////////////Info about ATC 3////////////////////////////////////////////////////

$(document).ready(function(){

	$("#open3").click(function(){
		$("#aboutATC").slideToggle("slow");
		document.getElementById("aboutATC").innerHTML="ATC_name: " + obj3.ATC_name + "<br>" + "Runway: "+ obj3.Runway + "<br>" +
		"Takeoff Queue Limit: " + obj3.takeoff_queue + "<br>" + "Landing Queue Limit: " + obj3.landing_queue + "<br>" + "Distance: " + obj3.distance;
	});
});



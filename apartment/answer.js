//runs through sorted array and and  writes name and cost.

function answer(){
for(i=0; i< appartment.length ; i++){
	
	var txt = "WEBSITE";
	var x= appartment[i].webURL
	var hyperlink= txt.link(x);


	document.write("rank# " +(i+1)+ "<br />");
	document.write("NAME: "+ appartment[i].name+ "<br />");
	document.write("webURL: "+ hyperlink + "<br />");
	document.write("address: "+ appartment[i].address+ "<br />");
	document.write("SIZE:" + appartment[i].bed+ "<br />");
	document.write( "<br />");
	document.write("TOTAL: " + appartment[i].apMonthCost+ "<br />");
	document.write("LAUNDRY & PARKING: " + appartment[i].extraTotal+ "<br />");
	document.write("______________________________________________________");
	document.write( "<br />");
	document.write( "<br />");

	}
};


document.write("<p>Link: " + txt.link("http://www.w3schools.com") + "</p>");

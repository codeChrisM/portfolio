

 

function utilities(){
	for(var i=0;i<=appartment.length; i++){
	appartment[i].elect = (appartment[i].elect == "yes") ? 0 : 80;
	appartment[i].gas = (appartment[i].gas == "yes") ? 0 : 25;
	appartment[i].water = (appartment[i].water == "yes") ? 0 : 25;
	appartment[i].laundry = (appartment[i].laundry == "yes") ? 0 : 16;
	appartment[i].parking = (appartment[i].parking == "yes") ? 0 : 50;
	

	var utilitiesTotal= appartment[i].elect + appartment[i].gas + appartment[i].water; 
	var extraTotal= appartment[i].laundry + appartment[i].parking;
	var spaceCost = appartment[i].space;

	appartment[i].extraTotal= extraTotal;
	appartment[i].utilities = utilitiesTotal;  //sets apartment utility cost
	appartment[i].apMonthCost = utilitiesTotal + extraTotal+ spaceCost;



	}
}




/*




	var monthCost = appartment[i].apMonthCost
	
	document.write("Utilities bill costs $" + utilitiesTotal +" for app # "+ (i+1)+ "<br />");
	document.write(" Plus, laundry and parkign costs $" + extraTotal+ "<br />");
	document.write(" ap month cost $" + extraTotal+ "<br />");
	document.write(" Total per month is $" + monthCost + "<br />");
	document.write("<br />");
	

function compare(a,b) {
  if (a.apMonthCost < b.apMonthCost)
     return -1;
  if (a.apMonthCost > b.apMonthCost)
    return 1;
  return 0;
}


function rank(){
	
	appartment.sort(compare);

	for(var i=0;i<=appartment.length; i++){
	document.write(appartment[i].elect);
	
};
	
*/
//Sorts Array of Appartment from least to most expensive.



//runs through sorted array and and  writes name and cost.













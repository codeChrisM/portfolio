	

function compare(a,b) {
  if (a.apMonthCost < b.apMonthCost)
     return -1;
  if (a.apMonthCost > b.apMonthCost)
    return 1;
  return 0;
}


function rank(){
	
	appartment.sort(compare);

};
 






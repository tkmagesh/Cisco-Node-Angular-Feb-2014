var products = [
	{id:11,name:"hen",cost:100,units:10,category:1},
	{id:17,name:"ten",cost:90,units:70,category:2},
	{id:13,name:"len",cost:10,units:40,category:1},
	{id:16,name:"den",cost:20,units:50,category:2},
	{id:12,name:"ken",cost:60,units:90,category:1},
	{id:19,name:"zen",cost:10,units:20,category:2},
]

var categories = [
	{id : 1, name : "stationary"},
	{id : 2, name : "grocery"},
]

function sort(list,attrName){
  for(var i=0;i<list.length-1;i++)
    for(var j=i+1;j<list.length;j++)
      if (list[i][attrName] > list[j][attrName]){
          var temp = list[i];
          list[i] = list[j];
          list[j] = temp;
      }
}

function sort(list,comparer){
  for(var i=0;i<list.length-1;i++)
    for(var j=i+1;j<list.length;j++)
      if (comparer(list[i],list[j]) > 0){
          var temp = list[i];
          list[i] = list[j];
          list[j] = temp;
      }
}

function pValueComparer(p1,p2){
   if (p1.cost * p1.units > p2.cost * p2.units) return 1;
   if (p1.cost * p1.units < p2.cost * p2.units) return -1;
   if (p1.cost * p1.units == p2.cost * p2.units) return 0;
}

function groupBy(list,selector){
	var selectorFn = (typeof selector === "string" ? function(i){ return i[selector]} : selector);
	var result = {};
	for(var i=0;i<list.length;i++){
		var key = selectorFn(list[i]);
		if (!result[key]) result[key] = [];
		result[key].push(list[i]);
	}
	return result;
}

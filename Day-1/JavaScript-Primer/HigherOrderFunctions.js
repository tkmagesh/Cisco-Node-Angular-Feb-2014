var products = [
	{id:11,name:"hen",cost:100,units:10,category:1},
	{id:17,name:"ten",cost:90,units:70,category:2},
	{id:13,name:"len",cost:10,units:40,category:1},
	{id:16,name:"den",cost:20,units:50,category:2},
	{id:12,name:"ken",cost:60,units:90,category:1},
	{id:19,name:"zen",cost:10,units:20,category:2},
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
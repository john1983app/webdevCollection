var data = [{name:"Zard",age:28},{name:"Nico",age:29},{name:"Jim",age:30}];
data.sort(createComparisonFunction("name"));
console.log(data[0].name);
data.sort(createComparisonFunction("age"));
console.log(data[0].name);

function createComparisonFunction(property)
{
	return function(obj1,obj2)
	{
		var value1 = obj1[property];
		var value2 = obj2[property];
		if(value1<value2)
		{
			return -1;
		}
		else if(value1>value2)
		{
			return 1;
		}
		else
		{
			return 0;
		}
			
	}
}
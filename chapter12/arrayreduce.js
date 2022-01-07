const array1 = [1, 2, 3, 4];
const reducer = (previousValue, currentValue) => previousValue + currentValue;
console.log(array1.reduce(reducer));

/*var people = [{id: 1, name: 'edison' },{id: 2, name: 'Annand'}, 
{id: 3, name: 'Vasnath'}];
let groupbyid = people.reduce((acc, curr) => {
  if(acc[curr.id]){
  acc[curr.id]=++acc[curr.id]
  }else{
    acc[curr.id]=1
  }
  return acc;
  }, {});
  console.log(groupbyid);*/

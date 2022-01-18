var people = [{id: 1, name: 'edison' },{id: 2, name: 'Annand'}, 
{id: 3, name: 'Vasnath'},{id:1,name:'edison'}];
let groupbyid = people.reduce((acc, curr) => {
  if(acc[curr.id]){
  acc[curr.id]=++acc[curr.id]
  }else{
    acc[curr.id]=1
  }
  return acc;
  }, {});
  console.log(groupbyid);

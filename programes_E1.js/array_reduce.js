var people = [{id: 1, name: 'edison' },{id: 2, name: 'Annand'}, 
{id: 3, name: 'Vasnath'}];
let groupbyid = people.reduce((r, a) => {
  r[a.id]=a[r.id]+1 || 1
   return r;
  }, {});
  console.log(groupbyid);

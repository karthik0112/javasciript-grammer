
let array = [
    {id: 1, name: 'Stephen covey'},
    {id: 2, name: 'Robin Sharma' }, 
    {id: 3, name: 'Tolstoy'}, 
    {id: 4, name: 'Tolstoy'}, 
    {id: 5, name: 'James clear'}
];
let removeDuplicate = new Set();
const filteredArr = array.filter(values => {
  const duplicate1= removeDuplicate.has(values.id);
  removeDuplicate.add(values.id);
  const duplicate2= removeDuplicate.has(values.name);
  removeDuplicate.add(values.name);
  return !duplicate1,!duplicate2 ;
});
console.log(filteredArr);





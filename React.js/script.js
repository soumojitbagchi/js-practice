// 
// let h2 = React.createElement('h2',null,'bonjour from france');
// let container=document.querySelector('#container');
// let root = ReactDOM.createRoot(container);
// let div = React.createElement('div',{id:'parant'},[h1,h2]);
// root.render(div)
import name from './app.js';

const h1=()=>{
  return React.createElement('h1',null,'hello from world');
}
let root=ReactDOM.createRoot(document.querySelector('#container'));
root.render(h1());
console.log(name);
// let div = document.createElement('div');
// let tag = document.createElement('h1');
// tag.textContent = 'Hello World by Javascript';
// div.className = 'rooting'
// div.append(tag);
// document.body.append(div);

let parent = React.createElement('div', { id: 'parent' }, [
  React.createElement('div', { id: 'child' }, [
    React.createElement('h1', { id: 'header' }, 'this is a heading tag one'),
    React.createElement(
      'h2',
      { id: 'header' },
      'this is a heading tag number two'
    ),
  ]),
  React.createElement('div', { id: 'child2' }, [
    React.createElement('h1', { id: 'header' }, 'this is a heading tag 2 one'),
    React.createElement('h2', { id: 'header' }, 'this is a heading tag 2 two'),
  ]),
]);

let header = React.createElement(
  'h1',
  { id: 'heading' },
  'Hello world by React Js this is first code !!!'
);

let root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(header);
root.render(parent);
console.log(parent);

console.log('there  buddy');

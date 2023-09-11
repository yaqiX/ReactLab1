import React from 'react';
import HelloWorld from './HelloWorld';
import ColorChanger from './ColorChanger';
import TextInput from './TextInput';
import ItemList from './ItemList';

function App() {
  const items = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <div className="App">
      <HelloWorld />
      <ColorChanger />
      <TextInput />
      <ItemList items={items} />
    </div>
  );
}

export default App;

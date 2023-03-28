import './App.css';

function App() {
  let todoListItems = [
      'Laundry',
      'Dishes',
      'Sweep the floor',
      'Feed my cats',
      'Clean the shower',
      'Random task A',
      'Another task'
  ];

  return (
    <div>
      <ul>
        {
          // I can do JS here
            todoListItems.map((item) => {
              return (<li>{item}</li>)
            })
        }
      </ul>
    </div>
  );
}

export default App;

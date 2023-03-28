import './App.css';

function App() {
    let todoListItems = [
        'Laundry',
        'Dishes',
        'Sweep the floor',
        'Feed my cats',
        'Clean the shower',
        'Random task A',
        'Another task',
        'Another task',
    ];

    return (
        <div>
            <ul>
                {
                    // I can do JS here
                    todoListItems.map((item, index) => {
                        return (<li key={index}>{item}</li>)
                    })
                }
            </ul>
            {/* events must be camel cased */}
            <input
                onChange={(event) => {
                    console.log(event.target.value)
                }}
            />
        </div>
    );
}

export default App;

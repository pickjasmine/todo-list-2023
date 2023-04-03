import './App.css';

// two ways to declare a component, both will work
// const App = () => { // inside of curly braces will remain the same }

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
                onMouseOver={(event) => {
                    console.log('moused over!')
                }}
                onChange={(event) => {
                    console.log(event.target.value)
                }}
            />
        </div>
    );
}

export default App;

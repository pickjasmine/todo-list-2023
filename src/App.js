import './App.css';
import React from 'react';

// two ways to declare a component, both will work
// const App = () => { // inside of curly braces will remain the same }

function App() {
    const [listItems, setListItems] = React.useState([]);
    // this is basically equivalent to this....
    /*
    const useState = () => {
        // logic goes here

        return [yourVariable, setYourVariable]
    }
     */
    return (
        <div>
            <ul>
                {
                    // I can do JS here
                    listItems.map((item, index) => {
                        return (<li key={index}>{item}</li>)
                    })
                }
            </ul>
            {/* events must be camel cased */}
            <input
                onChange={(event) => {
                    setListItems([event.target.value])
                    console.log(event.target.value)
                }}
            />
        </div>
    );
}

export default App;

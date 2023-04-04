import './App.css';
import React from 'react';

function App() {

    const [userEnteredTodo, setUserEnteredTodo] = React.useState();
    const [listItems, setListItems] = React.useState([]);

    console.log(userEnteredTodo)

    return (
        <div>
            <ul>
                {
                    listItems.map((item, index) => {
                        return (<li key={index}>{item}</li>)
                    })
                }
            </ul>
            <input
                onChange={(event) => {
                    setUserEnteredTodo(event.target.value)
                    console.log(event.target.value)
                }}
            />
            <button
                onClick={() => {
                    console.log('here')
                    setListItems([
                        ...listItems,
                        userEnteredTodo
                    ])
                }}
            >Add</button>
        </div>
    );
}

export default App;

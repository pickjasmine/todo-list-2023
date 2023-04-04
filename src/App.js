import './App.css';
import React from 'react';

function App() {
    const [userEnteredTodo, setUserEnteredTodo] = React.useState("");
    const [listItems, setListItems] = React.useState([]);

    const saveItemAndClearInput = () => {
        setListItems([
            ...listItems,
            userEnteredTodo
        ])

        // add logic to clear input
        setUserEnteredTodo("");
    }

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
                }}
                onKeyDown={(event) => {
                    if (event.key === "Enter") {
                        saveItemAndClearInput()
                    }
                }}
                value={userEnteredTodo}
            />
            <button
                onClick={() => {
                    saveItemAndClearInput()
                }}
            >Add</button>
        </div>
    );
}

export default App;

import './App.css';
import React from 'react';
import ListItem from "./ListItem";
import Input from "./Input";

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
                        return (
                            <ListItem
                                key={index}
                                item={item}
                                index={index}
                                listItems={listItems}
                                setListItems={setListItems}
                            />
                        )
                    })
                }
            </ul>
            <Input
                id={'input-id'}
                name={'user-entered-todo'}
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
            >Add
            </button>
        </div>
    );
}

    export default App;

import React, {useState} from 'react';
import './App.css';

function App() {
    const [value, setValue] = useState<number>(0)
    const incHandler = () => {
        setValue(value + 1)
    }
    // устанавливаем значение
    const setToLocalStorageHandler = () => {
        // записать значения:
        localStorage.setItem('counterValue', JSON.stringify(value))
        localStorage.setItem('counterValue + 1', JSON.stringify(value + 1))
    }
// sessionStorage - отличается временем жизни = жизнь сессии то время пока вкладка открыта - использует такие же методы как "локалсторедж":
    /* const setToLocalStorageHandler = () => {
         // записать значения:
         sessionStorage.setItem('counterValue', JSON.stringify(value))
         sessionStorage.setItem('counterValue + 1', JSON.stringify(value + 1))
     }*/
    // получить значение ранее установленное с локал сторедж независимо от того насколько мы теперь изменили счетчик, получаем "засетенное" значение
    const getToLocalStorageHandler = () => {
        let valString = localStorage.getItem('counterValue')
        if (valString) {
            let newValue = JSON.parse(valString)
            setValue(newValue)
        }
    }
    // очищение локал...
    const clearLocalStorage = () => {
        localStorage.clear()
        setValue(0)
    }
    // removeItem зачищает переданные данные, а clear зачищает весь локал...
    const removeItem = () => {
        localStorage.removeItem('counterValue + 1')
    }
    // чтобы при загрузке приложения мы СРАЗУ получали локал, а не по нажатию на кнопку getToLocalStorage и так же когда "инкрементим чтобы сразу в Aplication добавлялось значение используем useEffect()":

    return (
        <div className="App">
            <h1>{value}</h1>
            <button onClick={incHandler}>inc</button>
            <button onClick={setToLocalStorageHandler}>setToLocalStorage</button>
            <button onClick={getToLocalStorageHandler}>getToLocalStorage</button>
            <button onClick={clearLocalStorage}>clear_local_St</button>
            <button onClick={removeItem}>remove-item</button>
        </div>
    );
}

export default App;

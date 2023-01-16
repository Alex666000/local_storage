import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
    // useState - асинхронный хук
    const [value, setValue] = useState<number>(0)
    // сразу чтобы при загрузке приложения мы СРАЗУ получали локал, а не по нажатию
    // на кнопку getToLocalStorage и так же когда "инкрементим - добавляем оно изменялось в ЛС а не по кнопке
    // чтобы сразу в Aplication добавлялось значение используем useEffect() без него никак не сделать":

    // синхронизируем получение данных:
    useEffect(() => {
        let valueString = localStorage.getItem('counterValue')
        if (valueString) {
            let newValue = JSON.parse(valueString)
            setValue(newValue)
        }
    }, [])

// синхронизируем установку:
    useEffect(() => {
        // каждый раз когда изменяется value - мы установим локал ст....
        localStorage.setItem('counterValue', JSON.stringify(value))
    }, [value]) //  [] - пустой массив - попадем один раз в этот хук, если не указать попадем каждый раз в него


    const incHandler = () => {
        setValue(value + 1)
    }

    return (
        <div className="App">
            <h1>{value}</h1>
            <button onClick={incHandler}>inc</button>
        </div>
    );
}

export default App;

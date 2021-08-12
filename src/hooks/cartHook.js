import {useState, useEffect} from 'react'

export const useStorage = (initial) => {
    const [array, setArray] = useState([])

    useEffect(() => {
        const memory = JSON.parse(window.localStorage.getItem('cart'))
        setArray(memory ? memory : [])
    })

    function setStorage (a){
        setArray(a);
        window.localStorage.setItem('cart', JSON.stringify(a))
    }

    return [array, setStorage]
}
import React, {useEffect, useState} from 'react'

export default function ClockFunction() {

  const [state, setState] = useState({
    fecha: new Date(),
    edad: 0,
    nombre: 'Franco',
    apellidos: 'Ferrari'
  })

  const [timerID, setTimerID] = useState()

  function tick() {
    setState((state) => {
      let edad = state.edad + 1;
      return {
        ...state,
        fecha: new Date(),
        edad
      }
    });
  }

  useEffect(() => {
    setTimerID(setInterval(
        () => tick(), 1000
      )
    )
    return clearInterval(timerID);
  })

  return (
    <div>
      <h2>
        Hora Actual:
        {state.fecha.toLocaleTimeString()}
      </h2>
      <h3>{state.nombre} {state.apellidos}</h3>
      <h1>Edad: {state.edad}</h1>
    </div>
  )
}
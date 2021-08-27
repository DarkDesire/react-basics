import React, {useState, useEffect} from 'react'

const Card = props => {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const recordMouse = e => {
        setX(e.clientX)
        setY(e.clientY)
    }
    console.log('mouse event', x, y)

    useEffect(() => {
        window.addEventListener('mousemove', recordMouse)
        return () => {
            console.log("cardjs cleanup")
            window.removeEventListener('mousemove',recordMouse)
        }
    }, [])
    return (
        <div className="card">
            <p>position X:{x}</p>
            <p>position Y:{y}</p>
            <img src={props.avatar} alt="Avatar" style={{width:'100%'}}/>
            <div className="container">
            <h4><b>{props.name}</b></h4>
            <p>{props.title}</p>
            <input type="text" value={props.name} onChange={props.onChangedName}></input>
            <p><button className="button button-red" onClick={props.onDelete}>Delete</button></p>
            </div>
        </div>
    )
}

export default Card

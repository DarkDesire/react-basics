import React from 'react'

const Card = props => {
    console.log(props)
    return (
        <div className="card">
            <img src={props.avatar} alt="Avatar" style={{width:'100%'}}/>
            <div className="container">
            <h4><b>{props.name}</b></h4>
            <input type="text" onChange={props.onChangeInput} value={props.name}></input>
            <p>{props.title}</p>
            <p><button className="button button4" onClick={props.onChangeName}>Change Name</button></p>
            <div>{props.children}</div>
            </div>
        </div>
    )
}

export default Card

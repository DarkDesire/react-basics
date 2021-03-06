import React from 'react'

const Card = props => {
    return (
        <div className="card">
            <img src={props.avatar} alt="Avatar" style={{ width: '100%' }} />
            <div className="container">
                <h4><b>{props.name}</b></h4>
                <p>{props.phone}</p>
                <p>{props.email}</p>
                <input type="text" value={props.name} onChange={props.onChangedName}></input>
                <p><button className="button button-red" onClick={props.onDelete}>Delete</button></p>
            </div>
        </div>
    )
}

export default Card

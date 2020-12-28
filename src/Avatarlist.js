import React from 'react';

const Avatarlist = (props) => {
    return (
        <div className = "avatarstyle ma4 bg-light-purple dib pa4 tc grow shadow-4">
           <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="Avatar" />
           <h1> Hey Hi!</h1>
           <h2> {props.name}</h2>
           <h4> {props.work}</h4>
    </div>
    )
}

export default Avatarlist;
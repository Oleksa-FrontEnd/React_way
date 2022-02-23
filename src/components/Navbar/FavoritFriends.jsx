import React from 'react';
import NavFriends from "./NavFriends";
import s from './FavoritFriends.module.css'

const FavoritFriends = (props) => {

    let favoritArray = props.favorit.map(f => <NavFriends name={f.name} avatar={f.avatar}/>);
    return (
        <div className={s.container}>
            <h4>Friends</h4>
            <div className={s.avaContainer}>{favoritArray}</div>
        </div>
    )
};

export default FavoritFriends;

import React from "react";
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                    <div className={s.dialog + ' ' + s.active}>
                           Dimich
                    </div>
                    <div className={s.dialog}>
                        Viktor
                    </div>
                    <div className={s.dialog}>
                        Sveta
                    </div>
                    <div className={s.dialog}>
                        Roman
                    </div>
            </div>
            <div className={s.massages}>
                    <div className={s.massage}>Hi!</div>
                    <div className={s.massage}>How are you?</div>
                    <div className={s.massage}>Super!!!</div>
            </div>
        </div>
    )
}

 export default Dialogs;
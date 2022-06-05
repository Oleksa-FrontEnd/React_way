import React from "react";
import s from './News.module.css';

const News = () => {

    let AddNewsElement = React.createRef();
    let addNews = () => {
        let text = AddNewsElement.current.value;
        alert(text);
    }

    return (
        <div>
            <div className={s.content}>
                <h3>Content in News.jsx</h3>
            </div>
            <div>
                <textarea ref={AddNewsElement}>Add...</textarea>
                <div>
                    <button onClick={addNews}>Add news</button>
                </div>
            </div>
        </div>
    );
}

export default News;
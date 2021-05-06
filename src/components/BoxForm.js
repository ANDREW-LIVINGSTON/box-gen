import React, { useState } from 'react';
import App from '../App';
import styles from './BoxForm.module.css';


const BoxForm = () => {
    const [boxInfo, setBoxInfo] = useState({
        color: "",
        height: "px",
        width: "px"

    });

    const [allBoxes, setAllBoxes] = useState([]);

    const changeHandler = (e)=>{
        setBoxInfo({
            ...boxInfo,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e)=>{
        e.preventDefault()
        setAllBoxes([...allBoxes, boxInfo])
        setBoxInfo({
            color: "",
            height: "px",
            width: "px"
        })

    }
    
    return (
        <div>
            <form onSubmit = {submitHandler}>
                <label htmlFor="color">Color:</label>
                <input type="text" name="color" onChange={changeHandler} value={boxInfo.color}></input>
                <label htmlFor="boxHeight">Height:</label>
                <input type="text" name="boxHeight" onChange={changeHandler} value={boxInfo.boxHeight}></input>
                <label htmlFor="boxWidth">Width:</label>
                <input type="text" name="boxWidth" onChange={changeHandler} value={boxInfo.boxWidth}></input>
                <button type="submit">ADD</button>
            </form>
            <br></br>
            <br></br>
            <div>
                {allBoxes.map(box=>{
                    return <div className={styles.oneBox} style = {{backgroundColor: box.color, height: box.boxHeight, height: box.boxHeight}}>
                        
                    </div>
                })}
            </div>
        </div>
    );
};

BoxForm.propTypes = {};

export default BoxForm;
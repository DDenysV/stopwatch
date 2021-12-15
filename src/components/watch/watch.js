import React from "react";
import './watch.css'

function Watch({onStart, onClear, onWait, second, minuts, hours}) {
    return(<>
        <section className ='watch'>
            <article className='watch-face'>
                <p className = 'out'>
                    <span className = 'min'>{hours}</span>
                    <span className = 'sec'>:{minuts}</span>
                    <span className = 'sec'>:{second}</span>
                </p>
                <div className = 'control-btns'>
                    <button className = 'btn' onClick = { (event)=>{onStart()}}>Start/Stop</button>
                    <button className = 'btn' onClick = {(event)=>{onClear()}}>Reset</button>
                    <button className = 'btn' onClick = {(event)=>{onWait()}}>Wait</button>
                </div>
            </article>
        </section>
    </>)
}

export default Watch
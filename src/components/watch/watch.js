import React from "react";
import './watch.css'

function Watch({onStart, onStop, onClear, msecond, second, minuts}) {
    return(<>
        <section className ='watch'>
            <article className='watch-face'>
                <p className = 'out'><span className = 'min'>{minuts}</span>:<span className = 'sec'>{ second}</span><span className = 'msec'>{msecond}</span></p>
                <div className = 'btns'>
                    <p className = 'text'>Что-то на арабском</p>
                    <button className = 'btn' onClick = {(event)=>{onStop()}}>Stop</button>
                    <button className = 'btn start' onClick = { (event)=>{onStart()}}>Start</button>
                    <button className = 'btn' onClick = {(event)=>{onClear()}}>Clear</button>
                </div>
            </article>
        </section>
    </>)
}

export default Watch
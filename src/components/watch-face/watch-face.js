import React from "react";
import { StopwatchFormat } from "../stopwatch-format/stopwatch-format";
import './watch-face.css'

function WatchFace({onStart, onReset, onWait, timer}) {
    return(<>
        <section className ='watch'>
            <article className='watch-face'>
                <p className = 'out'>
                    <span className = 'time'>{StopwatchFormat(timer)}</span>
                </p>
                <div className = 'control-btns'>
                    <button className = 'btn' onClick = {()=>{onStart()}}>Start/Stop</button>
                    <button className = 'btn' onClick = {()=>{onReset()}}>Reset</button>
                    <button className = 'btn wait' onClick = {()=>{onWait()}}>Wait</button>
                </div>
            </article>
        </section>
    </>)
}

export default WatchFace
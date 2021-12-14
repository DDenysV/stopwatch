import React from 'react'
import Watch from '../watch/watch'

class App extends React.Component {
    state = {
        minuts:"0",
        second:"0",
        msecond:"0",
        interval: ""
    }

    onStart = () => {
        if(this.state.interval===""){
            this.state.interval =  setInterval(()=>{
                this.setState(({msecond, second, minuts})=>{
                    msecond++
    
                    if(msecond === 100){
                        second++
                        msecond = 0
    
                        if(second === 60){
                            minuts++
                            second = 0
                        }
                    }
                    return{
                        second,  msecond, minuts
                    }
                    
                    
                }) 
            }, 10)
        }else return
    }

    onStop = () => {
        this.setState(({minuts, second, msecond, interval})=>{
            clearInterval(interval)
            interval = ""
            let min = minuts,
                sec = second,
                msec = msecond
            return {
                min, sec, msec, interval
            }
        })
    }

    onClear = () => {
        
        this.setState(({minuts, second, msecond, interval})=>{
            clearInterval(interval)
            interval = ""
            minuts = "0"
            second = "0"
            msecond = "0"
            return{
                second,  msecond, minuts, interval
            }
        })
    }

    render() {
        return(<>
        {console.log(this.state)}
            <Watch 
            onStart = {this.onStart} 
            msecond = {this.state.msecond < 10? `0${this.state.msecond}`:this.state.msecond}
            second = {this.state.second < 10? `0${this.state.second}`:this.state.second}
            minuts = {this.state.minuts < 10? `0${this.state.minuts}`:this.state.minuts}
            onStop = {this.onStop} 
            onClear = {this.onClear}/>
        </>)
    }
}

export default App
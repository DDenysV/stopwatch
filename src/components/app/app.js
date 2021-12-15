import React from 'react'
import Watch from '../watch/watch'

class App extends React.Component {
    state = {
        minuts:"0",
        second:"0",
        hours:"0",
        interval: "",
        count: ""
    }

    onStart = () => {
        if(this.state.interval===""){
            this.state.interval =  setInterval(()=>{
                this.setState(({second, minuts, hours})=>{
                    second++
                    if(second === 60){
                        minuts++
                        second = 0
    
                        if(minuts === 60){
                            hours++
                            minuts = 0
                            if (hours === 24) {
                                alert('Day')
                            }
                        }
                        
                    }
                    return{
                        second,  minuts, hours
                    }
                }) 
            }, 1000)
        }else {this.onStop()}
    }

    onStop = () => {
        this.setState(({minuts, second, hours, interval})=>{
            clearInterval(interval)
            interval = ''
            minuts = '0'
            second = '0'
            hours = '0'
            return {
                minuts, second, hours, interval
            }
        })
    }

    onClear = () => {
        this.setState(({minuts, second, hours,})=>{
            minuts = "0"
            second = "0"
            hours = "0"
            return{
                second,  hours, minuts, 
            }
            
        })
        

    }

    onWait = () => {
        this.setState(({minuts, second, hours, interval, count})=>{
            clearInterval(interval)
            interval = ""
            return {
                minuts, second, hours, interval, count: ""
            }
        })
    }

    render() {
        return(<>
        {console.log(this.state)}
            <Watch 
            second = {this.state.second < 10? `0${this.state.second}`:this.state.second}
            minuts = {this.state.minuts < 10? `0${this.state.minuts}`:this.state.minuts}
            hours = {this.state.hours < 10? `0${this.state.hours}`:this.state.hours}
            onStart = {this.onStart} 
            onClear = {this.onClear}
            onWait = {this.onWait}
            />
        </>)
    }
}

export default App
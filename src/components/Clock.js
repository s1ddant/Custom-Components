import React from 'react'
import {useEffect, useState} from 'react'

class ClockClassBased extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            date : new Date(),
        }
    }

    componentDidMount(){
        this.timerID = setInterval(() => {
            this.tick()
        }, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.timerID)
    }

    tick(){
        this.setState({
            date : new Date(),
        })
    }

    render(){
        return <h1>{this.state.date.toLocaleTimeString()}</h1>;
    }
}

const ClockFunctionalBased = () => {
    const [date, setDate] = useState(new Date());
    useEffect(()=>{
        const timerID = setInterval(() => {
            tick();
        }, 
        1000);

        return ()=>{
            clearInterval(timerID);
        }
    }, []);

    function tick(){
        setDate(new Date());
    }

    return <div>{date.toLocaleTimeString()}</div>;
}

export default ClockClassBased

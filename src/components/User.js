import { useEffect, useState } from "react";

const User = (props) => {
    const {name, age, location} = props;

    const [count, setCount] = useState(0);

    updateCount = () => {
        setCount(count + 1) 
    }

    useEffect(() => {
        console.log("useEffect is called");
        const timer = setInterval(() => {
            console.log("timer called in useEffect");
        }, 1000);

        return () => {
            clearInterval(timer);
            console.log("useEffect component is unmounted");
        }
    }, [])

    console.log("rendered");

    return (
        <div>
            <h3>Count: {count}</h3>
            <button onClick={updateCount}>Increment Count</button>
            <h2>Name: {name}</h2>
            <h2>Age: {age}</h2>
            <h2>Location: {location}</h2>
        </div>
    )
}

export default User;
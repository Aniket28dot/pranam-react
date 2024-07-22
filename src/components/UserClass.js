import React from "react";

class UserClass extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Any area"
            },
            count: 0
        }

        console.log("Child Constructor");
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/aniket28dot");
        const json = await data.json();

        this.setState({
            userInfo: json
        })

        console.log(json);

        this.timer = setInterval(() => {
            console.log("timer called");
        }, 1000);
    }

    componentDidUpdate (prevProps, prevState){
        if (this.state.count !== prevState.count) {
            console.log("count did update");
        }
    }

    componentWillUnmount (){
        clearInterval(this.timer);

        console.log("Component unmounted");
    }

    render() {
        const {name, location} = this.state.userInfo;

        console.log("Child rendered");

        return (
            <div>
                <h3>Class Count: {this.state.count}</h3>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1
                    })
                }}>Increment Count</button>

                <h2>Name: {name}</h2>
                <h2>Location: {location}</h2>
            </div>
        )
    }
}

export default UserClass;
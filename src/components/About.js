import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
    constructor(props){
        super(props);

        console.log("Parent constructor");
    }

    render() {
        console.log("Parent is rendered");

        return (
            <div>
                <h1>About</h1>
                <User name="Aniket" age={23} location="Faridabad"/>
    
                {/* <UserClass name="Aniket" id={23} location="Faridabad"/> */}
            </div>
        );
    }
}

// const About = () => {
//     return (
//         <div>
//             <h1>About</h1>
//             {/* <User name="Aniket" age={23} location="Faridabad"/> */}

//             <UserClass name="Aniket" age={23} location="Faridabad"/>
//         </div>
//     );
// }

export default About;
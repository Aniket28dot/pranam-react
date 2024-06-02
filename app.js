import React from "react";
import ReactDOM from "react-dom/client";

//JSX is transpiled before it reaches the JS by Parcel with the help of Babel that returns the JSX object as a browser compatible JS

// JSX => React.createElement() => JS object => Html element (render)

//-||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||-

//Assignment 3

function Search() {
    const searchTerm = document.getElementById("searchbox").value;

    if(searchTerm == "apple"){
        document.getElementById("output").innerHTML = "Search Matched!";
    }
    else{
        document.getElementById("output").innerHTML = "Nothing Matched.";
    }
}

const Logo = () => {
    return <div>
        <img src="https://unsplash.com/photos/silver-colored-letter-k-wall-decor-jRjHSce08Os" className="logo"></img>
    </div>
}

const SearchBar = () => {
    return (
        <div>
            <input type="text" id="searchbox" placeholder="Search Here!"></input>
            <button onClick={Search}>Search</button>
            <p id="output"></p>
        </div>
    )
}

const UserIcon = function () {
    return <div id="usericon">
        <img src="user.png" className="icon" />
    </div>
}

const Header = () => {
    return (
        <div id="header">
            <Logo/>
            <SearchBar/>
            <UserIcon/>
        </div>
    )
}

//-||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||-

const Heading = () => <h1 id="heading"> This is first heading </h1>;

const HeadingComponent = () => {
    return (
        <div id="container">
            {Heading()}
            <h1 className="heading">This heading is inside a functional Component.</h1>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);

// root.render(header);

root.render(<Header/>);
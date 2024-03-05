
const parent = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" }, [React.createElement("h1", {}, "This is an h1 tag nested inside the div tags"),
    React.createElement("h2", {}, "This is an h2 tag nested inside the div tags")])
)

console.log(parent);

//creating a root is the functionality of the reactDOM, root is the element over which dom manipulations will act.
const root = ReactDOM.createRoot(document.getElementById("root"));

//rendering the heading tag inside our root element
root.render(parent);
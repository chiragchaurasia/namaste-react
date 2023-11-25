const heading = React.createElement(
  "h1",
  {
    id: "title", //style | null | id:"title", className:"class"
  },
  "Heading 1"
);
const heading2 = React.createElement(
  "h2",
  {
    id: "title",
  },
  "Namaste"
);

const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading, heading2] // children (react elements - object)
);

const root = ReactDOM.createRoot(document.getElementById("root")); // override root(html)
//passing a react element inside the root

//async defer
root.render(container);

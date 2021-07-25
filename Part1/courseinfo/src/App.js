import React from "react";

const Header = (props) => (
  <>
    <h1>{props.name}</h1>
  </>
);
const Content = (props) => (
  <>
    <Part part="Fundamentals of React" exercises="10" />
    <Part part="Using props to pass data" exercises="7" />
    <Part part="State of a component" exercises="14" />
  </>
);
const Part = (props) => (
  <p>
    {props.part} {props.exercises}
  </p>
)
const Total = (props) => (
  <>
    <p>
      Number of exercises{" "}
      {parseInt(props.exercises1) +
        parseInt(props.exercises2) +
        parseInt(props.exercises3)}
    </p>
  </>
);
const App = () => {
  return (
    <div>
      <Header name="Half Stack application development" />
      <Content/>
      <Total exercises1="10" exercises2="7" exercises3="14" />
    </div>
  );
};

export default App;

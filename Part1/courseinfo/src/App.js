import React from "react";

const Part = (props) => {
  return (
    <>
      <p>
        {props.part} {props.exercises}
      </p>
    </>
  );
};
const Header = (props) => {
  return (
    <>
      <h1>{props.name}</h1>
    </>
  );
};
const Content = () => {
  return (
    <>
      <Part part="Fundamentals of React" exercises="10" />
      <Part part="Using props to pass data" exercises="7" />
      <Part part="State of a component" exercises="14" />
    </>
  );
};
const Total = (props) => {
  return (
    <>
      <p>
        Number of excercises{" "}
        {parseInt(props.one) + parseInt(props.two) + parseInt(props.three)}
      </p>
    </>
  );
};

const App = () => {
  return (
    <>
      <Header name="Half Stack application development" />
      <Content />
      <Total one="10" two="7" three="14" />
    </>
  );
};

export default App;
/*
arrow function with statements except return
const funcName = () => {
  yada yada yada yada
  return(
    yada yada yada yada
  )
}
==========================================
arrow function with just return statement
const funcName = () => (
  write your return content here
)

some noteworthy points:
1. React components name should always be capitalized
2. in every react component there must be root element containing all the stuff of the component
however the root element can be nameless or just <> and </>

*/

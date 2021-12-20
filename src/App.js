import React, { useState } from "react";
import Header from "./mycomponents/Header";
import Addtodo from "./mycomponents/Addtodo";
import Todos from "./mycomponents/Todos";
import Footer from "./mycomponents/Footer";
import About from "./mycomponents/About";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  const onDelete = (todo) => {
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };

  const addTodo = (title, desc) => {
    let myTodo = {
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
  };

  const [todos, setTodos] = useState([
    {
      no: 1,
      title: "Go to the market",
      desc: "you have to go to the market and get the job done.",
    },
    {
      no: 2,
      title: "Go to the mall",
      desc: "you have to go to the mall and get the job done.",
    },
    
  ]);

  return (
    
      <Router>
        <Header title="To-Do List" />

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Addtodo addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} />
          </Route>
        </Switch>

        <Footer />
      </Router>
    
  );
}

export default App;

import React from "react";

import Form from "./Form";
import CheckAll from "./CheckAll";
import Filter from "./Filter";
import Todo from "./Todo";

let currentId = 0

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      filter: "all",
      todos: []
    };
  }

  render() {
    const { todos, filter } = this.state;
    const filterTodos = todos.filter(({completed}) => {
      switch (filter) {
        case "all":
          return true;
        case "uncompleted":
          return !completed;
        case "completed":
          return completed;
        default:
          return true;
      }
    });

    return (
    <div>
      <Form onSubmit={this.handleSubmit} />

      <CheckAll allCompleted={todos.length > 0 && todos.every(({ completed }) => completed)} onChange={this.handleChangeAllCompleted} />

      <Filter filter={filter} onChange={this.handleChangeFilter} />

      <ul>
        {filterTodos.map(({ id, text, completed }) => (
          <li key={id}>
            <Todo id={id} text={text} completed={completed} onChange={this.handleChangeCompleted} />
          </li>
        ))}
      </ul>

      <button onClick={this.handleClickDeleteCompleted}>完了済みを全て削除</button>
    </div>
    );
  }

  handleSubmit = text => {
    const newTodo = {
      id: currentId,
      text,
      completed: false,
    };
    const newTodos = [...this.state.todos, newTodo];
    this.setState({ todos: newTodos });
    currentId++;
  };

  handleChangeAllCompleted = completed => {
    const newTodos = this.state.todos.map(todo => {
      return {
        ...todo,
        completed,
      };
    });

    this.setState({ todos: newTodos });
  };

  handleChangeFilter = filter => {
    this.setState({ filter });
  }

  handleChangeCompleted = (id, completed) => {
    const newTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed,
        };
      };

      return todo
    });

    this.setState({ todos: newTodos });
  };

  handleClickDeleteCompleted = () => {
    const newTodos = this.state.todos.filter(({ completed }) => !completed);
    this.setState({ todos: newTodos });
  };
}

export default App;

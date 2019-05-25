import React from "react";

import Form from "./Form";
import Todo from "./Todo";

class App extends React.Component {
  render() {
    return (
    <div>
      <Form />

      <label>
        <input type="checkbox" />
        全て完了にする
      </label>

      <select>
        <option>全て</option>
        <option>未完了</option>
        <option>完了済み</option>
      </select>

      <ul>
        <li>
          <Todo id={0} text="洗濯する" />
        </li>
        <li>
          <Todo id={0} text="宿題する" />
        </li>
        <li>
          <Todo id={0} text="腹筋する" />
        </li>
      </ul>

      <button>完了済みを全て削除</button>
    </div>
    );
  }
}

export default App;

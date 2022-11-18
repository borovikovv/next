import { useEffect, useState, SetStateAction } from "react";
import { Todo, User } from "../types/fetchTypes";

type Props = {
  todos: Todo[];
  users: User[];
}

export default  function Complete({todos, users}: Props) {
  return (
    <ul>
      {
        todos.map((todo: Todo ) => {
          return (
            <li key={todo.id}>
              {todo.title}
            </li>
          )
        })
      }
    </ul>
  )
}

export async function getStaticProps() {
  const todos = await fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response) => response.json())
    .then((json) => json);

  const users = await fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((json) => json);


  return {
    props: {
      todos,
      users
    },
  }
}
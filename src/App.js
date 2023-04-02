import React, { useRef, useState } from 'react';
import Hello from "./Hello";
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import Wrapper from "./Wrapper";
import Counter from "./Counter";
import InputSample from "./InputSample";
import UserList from "./UserList";
import CreateUser from "./CreateUser";
function App() {
    const [inputs, setInputs] = useState({
        username: '',
        email: ''
    });
    const { username, email } = inputs;
    const onChange = e => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };
    const users = [
        {
            id: 1,
            username: 'velopert',
            email: 'public.velopert@gmail.com'
        },
        {
            id: 2,
            username: 'tester',
            email: 'tester@example.com'
        },
        {
            id: 3,
            username: 'liz',
            email: 'liz@example.com'
        }
    ];
  const nextId = useRef(4);
  const onCreate = () => {
      setInputs({
          username: '',
          email: ''
      });
      nextId.current += 1;
  };
  return (
    <div className="App">
      <Wrapper>
        <Hello name ="Minha" color = "red"/>
        <Hello name ="Hani" color = "blue"/>
        <Hello />
        <Hello isSpecial={true}/>
      </Wrapper>
      <Counter />
      <InputSample />
      <CreateUser username={username}
                  email={email}
                  onChange={onChange}
                  onCreate={onCreate}
      />
      <UserList users={users}/>
    </div>
  );
}

export default App;

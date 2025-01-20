import { useState } from 'react';
import { myapp_backend } from '../../declarations/myapp_backend';

function App() {
  const [greeting, setGreeting] = useState('');
  const [name, setName] = useState(''); 
  const [principle, setPrinciple] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log('name:', name);
    myapp_backend.greet(name).then((greeting) => {
      setGreeting(greeting);
    });
    return false;
  }

  function getPrinciple() {
    myapp_backend.user_info().then((principle) => {
      console.log('principle:', principle);
      setPrinciple(principle);
    });
    return false;
  }
  function getUsers() {
    myapp_backend.get_old_users().then((users) => {
      console.log('users:', users);
    });
    return false;
  }

  return (
    <main>
      <img src="/logo2.svg" alt="DFINITY logo" />
      <br />
      <br />
      <form action="#" onSubmit={handleSubmit}>
        <label htmlFor="name">Enter your name: &nbsp;</label>
        <input id="name" name='name' alt="Name" type="text" onChange={(e)=>{setName(e.target.value)}}/>
        <button type="submit">Click Me!</button>
      </form>
      <button onClick={getPrinciple}>get principle</button>
      <section id="greeting">{greeting}</section>
      <button onClick={getUsers}>get users</button>
    </main>
  );
}

export default App;

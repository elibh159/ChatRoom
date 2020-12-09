import React, { useContext } from 'react'
import { UserContext } from '../../UserContext';
import { Link } from 'react-router-dom';

const Home = () => {
  const { user, setUser } = useContext(UserContext);
  const setAsEli = () => {
    const eli = {
      name: 'Eli',
      email: 'eli@email.com',
      id: '123'
    }
    setUser(eli);
  }
  const setAsTom = () => {
    const tom = {
      name: 'Tli',
      email: 'tli@email.com',
      id: '456'
    }
    setUser(tom);
  }
  return (
    <div>
      <h1>Home {JSON.stringify(user)}</h1>
      <button onClick={setAsEli}>set as Eli</button>
      <button onClick={setAsTom}>set as Tom</button>
      <Link to={'/chat'}>
        <button>go to chat</button>
      </Link>
    </div>
  )
}

export default Home

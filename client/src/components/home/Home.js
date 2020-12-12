import React, { useContext } from 'react'
import { UserContext } from '../../UserContext';
import { Link } from 'react-router-dom';
import RoomList from './RoomList';
const Home = () => {
  const { user, setUser } = useContext(UserContext);
  const rooms = [
    {
      name: 'room1',
      _id: '123'
    },
    {
      name: 'room2',
      _id: '234'
    }]
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
      name: 'Tom',
      email: 'tom@email.com',
      id: '456'
    }
    setUser(tom);
  }
  return (
    <div>

      <div className="row">
        <div className="col s12 m6">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">welcome {user ? user.name : ""}</span>
              <form >
                <div className="row">
                  <div className="input-field col s12">
                    <input placeholder="Enter a room name" id="first_name" type="text" className="validate" />
                    <label htmlfor="room">Room</label>
                  </div>
                </div>
                <button className="btn">Create Room</button>
              </form>
            </div>
            <div className="card-action">
              <a href="/" onClick={setAsEli}>set as Eli</a>
              <a href="/" onClick={setAsTom}>set as Tom</a>
            </div>
          </div>
        </div>
        <div className="col s6 m5 offset-1">
          <RoomList rooms={rooms} />
        </div>

      </div>
      <Link to={'/chat'}>
        <button>go to chat</button>
      </Link>
    </div>

  )
}

export default Home

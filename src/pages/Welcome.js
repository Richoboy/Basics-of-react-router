import React from 'react';
import { Route } from 'react-router-dom';

const Welcome = () => {
  return (
    <div>
      <h1>This is the Welcome page!</h1>
      <Route to='/welcome/new-user'>
        <p>Welcome, new user</p>
      </Route>
    </div>
  )
}

export default Welcome

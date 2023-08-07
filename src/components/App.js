
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  let [user,setUser] = useState({name: "", email: "", password: ""})
  
  function userDetails(e){
    e.preventDefault()
    console.log(user)
  }

  return (
    <div>
        <form onSubmit={(e) => userDetails(e)}>
          <div>
            <label for="name">Name</label>
            <input type="text" id="name" onChange={(e) => setUser({...user,name: e.target.value})}/>
          </div>
          <div>
            <label for="email">Email</label>
            <input type="email" id="email" onChange={(e) => setUser({...user,email: e.target.value})}/>
          </div>
          <div>
            <label for="password">Password</label>
            <input type="password" id="password" onChange={(e) => setUser({...user,password: e.target.value})}/>
          </div>
          <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default App

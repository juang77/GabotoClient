import React, { useState} from "react"
import SignInSignUp from "./page/SignInSignUp";

export default function App() {
  const [user, setUser] = useState({name:"juan"});

  return(
    <div>
      {user ? <div>
        <SignInSignUp/>
      </div> : <h1>No estas Logueado</h1>};
    </div>
  )
}



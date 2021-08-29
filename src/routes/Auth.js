import React, { useState } from "react";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChange = (e) => {
      const {
          target: {name, value},
      } = e;

      if(name === email) {
          setEmail(value);
      } else if(name === password) {
          setPassword(value);
      }
  }


  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Email"
          required
          value={email}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="password"
          required
          value={password}
          onChange={onChange}
        />
        <input type="button" value="Log In" />
      </form>
      <div>
        <button>Continue with Googgle</button>
        <button>Continue with Github</button>
      </div>
    </div>
  );
};

export default Auth;

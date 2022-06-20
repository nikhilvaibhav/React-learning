import * as React from 'react';
import './style.css';

export default function App() {
  const [btn, setbtn] = React.useState(false);
  const action = () => {
    setbtn((prevState) => !prevState);
  };

  if (btn) {
    return (
      <div>
        <h2>Welcome Nikhil, Hope you having a good time</h2>
        <button onClick={action}>LogOut</button>
      </div>
    );
  } else {
    return (
      <div>
        <h2>Welcomo Guest !!!</h2>
        <button onClick={action}>LogIn</button>
      </div>
    );
  }
}

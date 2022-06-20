import * as React from 'react';
import './style.css';

export default function App() {
  const [btn, setbtn] = React.useState(false);
  const action = () => {
    setbtn((prevState) => !prevState);
  };

  //ternary operator way of conditional rendering
  return btn ? (
    <div>
      <h2>Hello Nikhil</h2>
      <button onClick={action}>LogOut</button>
    </div>
  ) : (
    <div>
      <h2>Welcome Guest</h2>
      <button onClick={action}>LogIn</button>
    </div>
  );

  //if-else way if conditional rendering
  // if (btn) {
  //   return (
  //     <div>
  //       <h2>Welcome Nikhil, Hope you having a good time</h2>
  //       <button onClick={action}>LogOut</button>
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div>
  //       <h2>Welcomo Guest !!!</h2>
  //       <button onClick={action}>LogIn</button>
  //     </div>
  //   );
  // }
}

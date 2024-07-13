import { useState } from 'react';

const User = props => {
  const [count,setCount ] = useState(0);
  const [count2,setCount2 ] = useState(2);
  console.log(props);
  return (
    <div className='user-card'>
      <h1>Count : {count}</h1>
      <h1>Count2 : {count2}</h1>
      <h2>Name : {props.name}</h2>
      <h3>Location : Hyderabad</h3>
      <h4>Contact : xyz@gmail.com</h4>
    </div>
  );
};
export default User;

import User from './User';
import UserClass from './UserClass';

const About = () => {
  return (
    <div>
      <h1>Welcome to About Page</h1>
      <h2>This is a About component</h2>
      {/* <User name='Srujan kumar (Functional)' /> */}
      <UserClass name='Srujan kumar (Class)' location='Hyderabad City' />
    </div>
  );
};

export default About;

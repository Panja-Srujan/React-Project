import React from 'react';

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      userInfo: {
        login: 'dummy',
        id: 'hyd',
        avatar_url: '',
      },
    };

    console.log('this is a constructor');
  }
  async componentDidMount() {
    const getData = await fetch('https://api.github.com/users/Panja-Srujan');
    const json = await getData.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
    console.log('this is componentDidMount');
  }
  componentDidUpdate() {
    console.log('this is uopdated after UI updates ');
  }
  componentWillUnmount() {
    console.log('this is unmounted component');
  }
  render() {
    console.log('this is render');
    const { login, id, avatar_url } = this.state.userInfo;
    return (
      <div className='user-card'>
        <img src={avatar_url} alt='Description of image' />
        <h2>Name : {login}</h2>
        <h3>Location : {id}</h3>
      </div>
    );
  }
}
export default UserClass;

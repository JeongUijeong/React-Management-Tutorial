import React, { Component } from 'react';
import logo from './logo.svg';
import Customer from './components/Customer'
import './App.css';

const customers = [{
  'id' : 1, 
  'image' : 'https://placeimg.com/64/64/1', 
  'name' : '정의정', 
  'birthday' : '991117', 
  'gender' : '여자', 
  'job' : '대학생'
},
{
  'id' : 2, 
  'image' : 'https://placeimg.com/64/64/2', 
  'name' : '최영석', 
  'birthday' : '990407', 
  'gender' : '남자', 
  'job' : '대학생'
},
{
  'id' : 3, 
  'image' : 'https://placeimg.com/64/64/3', 
  'name' : '김철수', 
  'birthday' : '990101', 
  'gender' : '남자', 
  'job' : '대학생'
}]
class App extends Component {
  render() {
    return(
      <div>
        { customers.map(c => {
            return(
              <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
              />
            )
          }) }
      </div>
    );
  }
}

/*
function App() {
  return (
    <div className="gray-background">
      <img src={logo} lat="logo"/>
      <h2>Let's develop management system!</h2>
    </div>
  );
}
*/

export default App;

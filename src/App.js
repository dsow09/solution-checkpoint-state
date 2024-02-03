import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'Djibril SOW',
        bio: "Je suis un développeur web ASP.NET/JAVA | Angular/React/NodeJS. Je maîtrise plusieurs langages informatiques et je suis capable de travailler sur différentes plateformes et en équipe. Je suis également autonome,disponible et capable d'intervenir sur toutes les étapes d'un projet informatique et d'apprendre très rapidement de nouvelles technologies.",
        imgSrc: 'https://media.licdn.com/dms/image/C4E03AQEEavGd452dBg/profile-displayphoto-shrink_400_400/0/1661770568868?e=1712188800&v=beta&t=0Ohtj5QudjkFWnTFNZ637Xnrv4p9zor3F8cQl5FAXjo',
        profession: 'Développeur FullStack',
      },
      show: false,
      timeValue: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({ timeValue: prevState.timeValue + 1}));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleShow = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  render() {
    const { person, show, timeValue } = this.state;

    return (
      <div className='App'>
        <button onClick={this.handleShow}>Afficher profile</button>
        {show && (
          <div>
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt="Person" />
            <p>Profession: {person.profession}</p>
          </div>
        )}
        <p>Interval de temps: {timeValue} seconds</p>
      </div>
    );
  }
}

export default App;


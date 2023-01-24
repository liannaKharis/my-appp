import {Component} from 'react';
import './App.css';

// const Header = ()=> {
//   return <h2>Hello world!</h2>
// }

// const Field = ()=> {
//   const holder = 'Enter here';
//   const styledField = {
//     width: '300px'
//   };
//   return <input 
//             placeholder={holder} 
//             type="text" 
//             style={styledField}/>
// }

// class Field extends Component {
//   render() {
//     const holder = 'Enter here';
//   const styledField = {
//     width: '300px'
//   };
//   return <input 
//   placeholder={holder} 
//   type="text" 
//   style={styledField}/>
//   }
// }

// function Btn() {
//   const text = 'Log in';
//   const logged = false;
  
//   return <button>{logged ? 'Enter' : text}</button>
// }

// function App() {
//   return (
//     <div className="App">
//       <StrictMode> 
//          <Header/>
//          </StrictMode>
//      <Field/>
//      <Btn/>
//     </div>
//   );
// }

// export {Header};
// export default App;


class WhoAmI extends Component {
  constructor(props){
     super(props);
     this.state = {
          years: 27,
          position: ''
     }
     
    //  слева - обычное свойство которое будет у экземпляра, справа - жестко привязываем 
    //  this.nextYear = this.nextYear.bind(this)
  }

  nextYear = () => {
    console.log('+++');  
    this.setState(state=> ({
        years: state.years +1
    }))
  }

  commitInputChanges = (e, color) => {
    
   this.setState({
    position: e.target.value
   })
  }
     render() {
      const {name, surname, link} = this.props;
      const {position, years} = this.state;
       return (
  <>
   {/* передаем только название метода, аналог addEventListener */}
    <button onClick={this.nextYear}>+++</button>
    <h1>My name is {name}, 
        surname - {surname}, 
        age - {years}, 
        position - {position}</h1>
    <a href={link}>My profile</a>
    <form>
      <span>Введите должность</span>
      <input type="text" onChange={(e)=> this.commitInputChanges(e, 'some color')}/>
    </form>
  </>
)
  }
}

function App() {
  return (
    <div className='App'>
     <WhoAmI name= 'John' surname="Smith" link="facebook.com"/>
     <WhoAmI name= 'Alex' surname="Shepard" link="facebook.com"/>
    </div>
      )
};

export default App;
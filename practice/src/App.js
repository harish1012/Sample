import React from 'react';
import './App.css';

class App extends React.Component{
       constructor(props){
         super(props);
         this.state={
           description:'the content',
           
          description2:'the content type'
        };
     } 
  render()
  {
      return (
    <div className="App">
      <form>
         <textarea value={this.state.description} ></textarea>   
         <textarea value={this.state.description2}></textarea>  
  </form>
    </div>
  );
  }
}
export default App;

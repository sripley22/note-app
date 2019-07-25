import React ,{Component}from 'react';
import logo from './logo.svg';
import './App.css';
import { nodeInternals } from 'stack-utils';

class App extends Component{

  constructor(props){
  super(props);
  this.notes = [
    {
      id: 1,
      text: 'Feed all dogs'
    },
    {
      id: 2,
      text: 'Please cook dinner'
    },
    {
      id: 3,
      text: 'I am studying, please go away!'
    },
  ];
}

    render(){
    return (

      <div className="wrap">
        <div className="container">
          <div className="notes">

          {
              this.notes.map(function(note){

                return (
                  <div className="note" key={note.id}>
                    <div className="note-body">
                      <i className="far fa-times-circle note-remove"></i>
                      <div className="note-text">
                        {note.text}
                      </div>
                    </div>
                  </div>
                );

              })
            }


        
            <div className="note new-note">

              <form className="note-body">
        
                  <div class="form-group">
                    <label for="note-input">New note</label>
                    <input type="text" class="form-control" id="note-input"/>
                  </div>
            
                  <button type="submit" class="btn btn-primary">Add</button>
              </form>
              
            </div>
          </div>
        </div>
      </div>
            
    );
  }
}
export default App;
                                  
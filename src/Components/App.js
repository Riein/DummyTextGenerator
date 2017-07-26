import React, {Component} from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paras: 4,
      html: true,
      text: ''
    }
  }

  componentWillMount() {
    this.getText();
  }

  getText(){
    axios.get('http://hipsterjesus.com/api?paras='+this.state.paras+'&html='+this.state.html)
    .then((response)=> {
    this.setState({text: response.data.text}, function() {
      console.log(this.state);
    });
  })
    .catch((err) => { // If an error occurs in retrieving data from the API or setting the
                  // state of the text, then throw an error
      console.log(err);
    });
  }

  render() {
    return (
      <div>
        My App!
      </div>
    );
  }
}

export default App;





const App = React.createClass({

  getInitialState : function(){
  return {
    time : 0
  }
},

setTimeState : function(time) {

  console.log(time);
},


  render: function(){
    return(
      <div>
      <Display />
      <Start startWatch={this.startWatch}/>
      <Stop />
      <Clear />
      </div>
    )
  }
})



const Display = React.createClass({

  render: function(){
    return(
      <div>
  DISPLAY
      </div>
    )
  }
})

const Start = React.createClass({

  startWatch: function(event){
    event.preventDefault()
    console.log("Start Button Clicked");

    var time = 0
    this.props.startWatch(time)

  },

  render: function(){
    return(
      <div>
      <button ref="start" onClick={this.startWatch}>Start</button>
      </div>
    )
  }
})


const Stop = React.createClass({
  stopWatch: function(event){
    event.preventDefault()
    var stopButton = this.refs.stop
    console.log("Stop Button Clicked");

  },

  render: function(){
    return(
      <div>
      <button ref="stop" onClick={this.stopWatch}>Stop</button>
      </div>
    )
  }
})

const Clear = React.createClass({
  clearWatch: function(event){
    event.preventDefault()
    var stopButton = this.refs.clear
    console.log("Clear Button Clicked");

  },



  render: function(){
    return(
      <div>
      <button ref="clear" onClick={this.clearWatch}>Clear</button >
      </div>
    )
  }
})


ReactDOM.render(
  <App />,
  document.getElementById('container')
)

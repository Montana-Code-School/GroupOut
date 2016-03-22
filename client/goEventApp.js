var AllEventBox = require('./allEventBox');
var React = require('react');
var ReactDOM = require('react-dom');



var GoEventApp = React.createClass({
  propTypes: {
        url: React.PropTypes.string.isRequired
    },
    getInitialState: function(){
        return {
            events: [],
            
        }
        console.log(events)
    },
    loadEventsFromServer: function(){
        var self=this;
        $.ajax ({
            url: this.props.url,
            method: 'GET'
        }).done(function(d){
            console.log(d);
            self.setState({
                events: d
            })
        })
    },
    componentDidMount: function(){
        console.log("componentDidMount fired");
        this.loadEventsFromServer()
        this.loadUserFromServer();
    },
    render: function() {
    return (
      <div>
        <AllEventBox events={this.state.events} />
      </div>

      )
    }
});


ReactDOM.render(<GoEventApp url="/api/event/" />,
  document.getElementById('goCard-app-all'));


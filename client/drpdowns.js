
var React = require( 'react');
var SelectField = require('material-ui/lib/select-field');
var MenuItem = require('material-ui/lib/menus/menu-item');


var DropDownCategories= React.createClass({
    getInitialState: function() {
      return {
        value: ""
      }
    },
    handleChange: function(event, index, value) {
      this.props.handleCatChange(value);
      this.setState({value: value});
    },
    render: function() {
      var actualValues = this.props.categories.map(function(e){
        return <MenuItem value={e._id} primaryText={e.name} />
      })
        return (
          
                <SelectField value={this.state.value} onChange={this.handleChange}>
                  { actualValues }
                </SelectField>
            )
    }

});

var DropDownLevels= React.createClass({
    getInitialState: function() {
      return {
        value: ""
      }
    },
    handleChange: function(event, index, value) {
      this.props.handleLevelChange(value);
      this.setState({value: value});
    },
    render: function() {
      var actualValues = this.props.levels.map(function(e){
        return <MenuItem value={e._id} primaryText={e.name} />
      })
        return (
              
                <SelectField value={this.state.value} onChange={this.handleChange}>
                  { actualValues }
                </SelectField>

            )
    }

});

var DropDowns = React.createClass({
    render: function() {
        return (
            <div>  
              <div className="row">
                <div className="input-field col s12">
                    <p>What kind of GO is this?</p>
                    <DropDownCategories handleCatChange={this.props.handleCategoryChange} categories={ this.props.categories } />
                </div>
              </div>
              <div className="row">     
                <div className="input-field col s12">   
                    <p>How difficult is your GO?</p>
                    <DropDownLevels handleLevelChange={this.props.handleLevelChange} levels={this.props.levels} />
                </div>
              </div>
            </div>
            )
    }

});

module.exports = DropDowns;
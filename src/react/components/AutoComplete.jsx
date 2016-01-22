var React = require("react");
var Geosuggest = require("react-geosuggest");

var AutoComplete = React.createClass({
    getInitialState(){
        return {
            location: '',
            focused: false
        }
    },
    onSuggestSelect(suggest){
        this.setState({
            location: {lat: suggest.location.lat, lng: suggest.location.lng}
        });
    },
    show(){
        if(!this.state.focused){
            this.refs.input.refs.geosuggestInput.focus();
            this.setState({
                focused: true
            })
        } else {
            this.refs.input.refs.geosuggestInput.blur();
            this.setState({
                focused: false
            })
        }
    },
    render: function () {
        return (
            <div className="container">
                <Geosuggest
                    placeholder={"Search City"}
                    onSuggestSelect={this.onSuggestSelect}
                    types={["(cities)"]}
                    ref="input"
                />
                <div className="searchGlassContainer" onClick={this.show}><i className="fa fa-search searchGlass"></i></div>
            </div>
        )
    }
});

module.exports = AutoComplete;
var Students = React.createClass({

  getInitialState: function(){
    return {
      showing: false
    };
  },
	renderDetails: function(){

		var shouldShow = this.state.showing;

		if(shouldShow){
			return this.props.children
		} else{
			return null
		}
	},
	toggle: function(){
    this.setState({
      showing: !this.state.showing
    })
	},
	render: function(){
		return(
		<div>
			<h1 onClick={this.toggle}> Students </h1>
			<ul>
				<p> {this.props.anything} </p>
				<p> {this.renderDetails()} </p>
			</ul>
		</div>
		);
	}
})

var App = React.createClass({
    render: function() {
        return (
          <div>
            <Students anything="summary">
            	<p>this is a big statement</p>
            </Students>
          </div>
          );
    }
});

React.render(<App/>, document.body);
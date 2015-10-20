var Students = React.createClass({
	render: function(){
		return(
			<div>
				<h1>Students</h1>
				<ul>
					<p> {this.props.anything} </p>
				</ul>
			</div>
		);
	}
})

var App = React.createClass({
    render: function() {
    	function saySomething(msg){
    		alert(msg);
    	};
        return (
          <div>
            <Students anything="this data is being passed in the parent component"/>
          </div>
          );
    }
});

React.render(<App/>, document.body);
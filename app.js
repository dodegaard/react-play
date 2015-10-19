
var NUM5 = [1,2,3,4,5];

function filt(n){
	return n > 3
}

function myMapper(n){
	return <li> {n} </li>;
}

var numbers = NUM5.filter(filt).map(myMapper);

var App = React.createClass({
	render: function() {
		return (
			<div>
				<h1>I am a boring component</h1>
				<ul>
					{numbers}
				</ul>	
			</div>
			)

	}

});

React.render(<App/>, document.body);

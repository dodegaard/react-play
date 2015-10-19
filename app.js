var USERS = [
 {id: 1, name: "doug", email: "doug@kosmojo.com"},
 {id: 2, name: "paul", email: "paul@kosmojo.com"},
 {id: 3, name: "emily", email: "emily@kosmojo.com"},
]

function userMapper(user) {
	return <li key={user.id}> {user.name} - {user.email} </li>;
}

var users = USERS.map(userMapper);

var App = React.createClass({
	render: function() {
		var user = this.props.data;
		return (
			<div>
				<h1>Menu</h1>
				<h2>{user}</h2>
				<ul>
					{users}
				</ul>	
			</div>
			)
	}
});

React.render(<App data={USERS}/>, document.body);

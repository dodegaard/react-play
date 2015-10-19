var USERS = [
 {id: 1, name: "doug", email: "doug@kosmojo.com"},
 {id: 2, name: "paul", email: "paul@kosmojo.com"},
 {id: 3, name: "emily", email: "emily@kosmojo.com"},
 {id: 4, name: "dougo", email: "doug@intralogix.biz"},
]

var GRAVATAR_URL = "http://gravatar.com/avatar";

function userMapper(user) {
	return <li key={user.id}> {user.name} - {user.email} </li>;
}



var App = React.createClass({
	render: function() {
	   var users = this.props.datausers.map(function(u){

       var hash = md5(u.email);
       var size = 36;

       var url = GRAVATAR_URL + "/" + hash + "?=" + size;
     
     return (
       <li> <img src={url} /> {u.email} </li>
       )
 	});
		return (
			<div>
				<h1>Menu</h1>
				<ul>
					{users}
				</ul>	
			</div>
			);
	}
});

React.render(<App datausers={USERS}/>, document.body);

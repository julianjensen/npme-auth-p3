var Auth = require( './index' ),
	auth = new Auth.Authenticator();
console.log( "Auth:", Auth );


auth.authenticate( { "body": { "name": "julian", "password": "Stea123!", "email": "julian@steamengine.com" } }, function( err, resp ) {
	if ( err ) console.error( "ERROR:", err );
	else
	console.log( "success:", resp );
});

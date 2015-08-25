

var fs = require( 'fs' ),
    ufile = '/etc/npme/service.json',
    us = fs.statSync( ufile ),
    users = require( ufile );

function P3Authenticator() {}

P3Authenticator.prototype.authenticate = function( creds, cb ) {

    var lus = fs.statSync( ufile );

    if ( lus.ctime > us.ctime )
    {
        users = require( ufile );
        us = lus;
    }

    for ( var m in users )
    {
        var u = users[ m ];

        if ( u.name == creds.body.name && u.password == creds.body.password )
            return cb( null, {
                token: m,
                user: {
                    name: creds.body.name,
                    email: creds.body.email
                }
            });
    }

    return cb( Error( 'Invalid P3 login' ) );
};


module.exports = P3Authenticator;

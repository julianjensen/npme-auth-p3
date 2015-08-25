
function P3Authorizer( config ) {}

P3Authorizer.prototype.authorize = function( req, cb ) {

    return cb( null, true );

};

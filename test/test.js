
var flatten = require( 'flatten' );
var expect = require( 'expect.js' );

describe( 'flatten', function() {

  it( 'flatten a flat array should equal itself', function() {
    var a = [ 2, 4, 56, 67, 8, 5, 224, 6, 75 ];
    expect( flatten( a ) ).to.eql( a );
  } );

  it( 'flatten a nested array', function() {
    var a = [ 2, 4, 56, 67, 8, 5, 224, 6, 75 ];
    var b = [ [2, [4, [56]]], [67, [8, 5, [224, 6], 75]] ];
    expect( flatten( b ) ).to.eql( a );
  } );

} );

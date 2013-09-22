
function flatten( tree, list ) {
  list || ( list = [] );
  tree.forEach( function( el ) {
    if ( Array.isArray( el ) ) {
      flatten( el, list )
    } else {
      list.push( el );
    }
  } );
  return list;
}

module.exports = exports = flatten;

import React from 'react';

function Child({ match }) {
  return <h3>Requested Param: {match.params.id}</h3>;
}
export default Child;
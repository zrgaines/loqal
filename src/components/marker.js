import React from 'react';


class Marker extends React.Component {

  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
       <i className="fa fa-map-marker" aria-hidden="true"></i>
      </div>
    );
  }
}


export default Marker;

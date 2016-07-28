import React from 'react';


class Marker extends React.Component {
  constructor(props){
    super(props);
  }
  _handleClick(event){
    this.props.addindex(this.props.title);
  }
  render(){
    return(
      <div>
       <i onClick={this._handleClick.bind(this)} className="fa fa-map-marker fa-2x" aria-hidden="true"></i>
      </div>
    );
  }
}


export default Marker;

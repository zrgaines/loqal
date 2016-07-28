import React from 'react';

class ListItem extends React.Component {

  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <p>{this.props.display}</p>
      </div>
    );
  }
}


export default ListItem;

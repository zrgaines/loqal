import React from 'react';

class ListItem extends React.Component {

  constructor(props){
    super(props);
  }
  render(){
    return(
      <ul>
        {this.props.display.map(function(listValue) {
          return <li>{listValue}</li>
        })
        }
      </ul>
    );
  }
}


export default ListItem;

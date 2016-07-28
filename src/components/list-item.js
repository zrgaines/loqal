import React from 'react';

class ListItem extends React.Component {

  constructor(props){
    super(props);
  }
  render(){
    return(
      <ul>
        {this.props.display.map(function(listValue) {
          return <div className="landmarkBar"><li>{listValue}</li></div>
        })
        }
      </ul>
    );
  }
}


export default ListItem;

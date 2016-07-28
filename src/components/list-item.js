import React from 'react';


class ListItem extends React.Component {

  constructor(props){
    super(props);

  }

  render(){
    return(
      <div >
        <p>{ this.props.landmark[0] }</p>
        <p>{ this.props.landmark[1] }</p>
        <p>{ this.props.landmark[2] }</p>
        <p>{ this.props.landmark[3] }</p>
        <p>{ this.props.landmark[4] }</p>
        <p>{ this.props.landmark[5] }</p>
        <p>{ this.props.landmark[6] }</p>
        <p>{ this.props.landmark[7] }</p>
        <p>{ this.props.landmark[8] }</p>
        <p>{ this.props.landmark[9] }</p>
      </div>
    );
  }
}


export default ListItem;

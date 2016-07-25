import React from 'react';
import ListItem from './list-item';


class List extends React.Component {

  constructor(props){
    super(props);

  }

  render(){
    return(
      <div>
        THE LIST
        <ListItem />
      </div>
    );
  }
}


export default List;

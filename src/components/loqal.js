import React from 'react';
import Search from './search';
import Map from './map';
import List from './list';


class Loqal extends React.Component {

  constructor(props){
    super(props);

  }

  render(){
    return(
      <div>
        <Search />
        <Map />
        <List />
      </div>
    );
  }
}


export default Loqal;

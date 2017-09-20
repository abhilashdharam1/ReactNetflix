import React from 'react';
import { Button } from 'react-bootstrap';

export default class Item extends React.Component{
  render(){
    return(
      <div className="item" tabIndex="1">
          <img height="100%" src={this.props.item.img}/>
        <Button onClick={()=>{this.props.buttonClick(this.props.item)}} bsStyle="primary" className="button button-primary" data-toggle="tooltip" title={this.props.toolTipDesc}>
          {this.props.buttonName}
        </Button>
      </div>
    );
  }
}

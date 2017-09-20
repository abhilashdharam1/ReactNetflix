import React, { PropTypes } from 'react';
import { Row, Col, Table, Button } from 'react-bootstrap';
import Item from './Item';
export default class List extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data:[]
    };
  }
  componentWillMount(){
    this.setState({
      data: this.props.data
    });
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      data: nextProps.data
    })
  }
  render(){
    return(
      <Row style={{backgroundColor:this.props.backgroundColor}}>
        <Col lg={12} md={12} sm={12}>
          <label htmlFor="tops" className="header">{this.props.header}</label>
          <Table id="tops">
							<tr>
                {
                  this.state.data.length?this.state.data.map((d,i)=>{
                    return(
                      <td key={i}>
                        <Item item={d} buttonClick={this.props.onClick} buttonName={this.props.button} toolTipDesc={this.props.tooltip}/>
        							</td>
                    )
                  }):<div className="empty">{this.props.message}</div>
                }
              </tr>
						</Table>
        </Col>
      </Row>
    );
  }
}

List.propTypes = {
  header: PropTypes.string.isRequired,
  data: PropTypes.array,
  button: PropTypes.string,
  onClick: PropTypes.func,
  message: PropTypes.string,
  tooltip: PropTypes.string
}

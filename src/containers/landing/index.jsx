import React from 'react';

import { Select } from '@chakra-ui/react';

import RenderContent from '../renderContent';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.transformIncomingProps();
  }

  transformIncomingProps = props => {
    const state = {};

    state['selectedUser'] = '';

    return state;
  };

  updateState = (key, value) => {
    this.setState({
      [key]: value
    });
  };

  handleSelectChange = (e) => {
    const selectedVal = e.target.value;

    this.updateState('selectedUser', selectedVal);
  }

  render(){
    const { content } = this.props;
    const keysFromContent = Object.keys(content);

    return (
      <>
        <Select placeholder='Select a person' onChange={this.handleSelectChange}>
          {
            keysFromContent.map((obj) => {
              return (
                <option key={obj} value={obj}>{obj}</option>
              )
            })
          }
        </Select> 
        <RenderContent selectedUser={this.state.selectedUser} content={content}/>
      </>
    )
  }
}

export default LandingPage;
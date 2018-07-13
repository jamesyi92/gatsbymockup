import React, { Component } from 'react';
import Rodal from 'rodal';
import styled from 'styled-components'

import 'rodal/lib/rodal.css';

export class Modal extends Component {

  constructor(props) {
      super(props);
      this.state = { visible: false };
  }

  show() {
      this.setState({ visible: true });
  }

  hide() {
      this.setState({ visible: false });
  }

  render() {
    const DarkButton = styled.button`
      &.btn{
        border-radius: 100px;
        background-color: #322c36;
        border-color: #322c36;
        color: #fff;
        padding: 8px 16px;
        font-size: 14px;
      }
    `

    return (
      <React.Fragment>
          <DarkButton className="btn btn-md" onClick={this.show.bind(this)}>Show Modal</DarkButton>

          <Rodal showCloseButton={false} visible={this.state.visible} onClose={this.hide.bind(this)}>
              <div>Content</div>
          </Rodal>
      </React.Fragment>
    );
  }
}

export default Modal
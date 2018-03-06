import React, { Component } from 'react';
import { Carousel, Image } from 'grommet';
import SandboxComponent from './SandboxComponent';

export default class extends Component {
  state = {}

  render() {
    return (
      <SandboxComponent>
        <Carousel play={5000}>
          <Image src='//v2.grommet.io/assets/Wilderpeople_Ricky.jpg' />
          <Image src='//v2.grommet.io/assets/IMG_4245.jpg' />
          <Image src='//v2.grommet.io/assets/IMG_4210.jpg' />
        </Carousel>
      </SandboxComponent>
    );
  }
}

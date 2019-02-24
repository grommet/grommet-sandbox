import React, { Component } from "react";
import { grommet, TextArea, Grommet } from "grommet";
import { deepMerge } from "grommet/utils";
import SandboxComponent from "./SandboxComponent";

export default class extends Component {
  state = { text: "" };

  render() {
    const { text } = this.state;

    const customTheme = deepMerge(grommet, {
      textArea: {
        extend: () => `
        font-size: 40px;
        color: red;
        `
      }
    });
    return (
      <SandboxComponent>
        <Grommet theme={customTheme}>
          <TextArea
            value={text}
            onChange={event => this.setState({ text: event.target.value })}
          />
        </Grommet>
      </SandboxComponent>
    );
  }
}

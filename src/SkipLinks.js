import React, { Component } from "react";
import { Box, Anchor, SkipLink, Heading, Text } from "grommet";
import SandboxComponent from "./SandboxComponent";

const courses = [
    'C++',
    'Java',
    'JavaScript',
    'SQL',
    'C#',
    'Python',
    'JSX',
    'CSS',
    'TypeScript',
    'HTML5',
  ];

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      href: window.location.origin,
    };
  }
  render() {
    const { href } = this.state;
    return (
      <SandboxComponent>
        <Anchor margin="medium" target="_tab" href={`${href}/skiplinks`}>
          Open this in new tab to experience skiplinks
        </Anchor>
        <SkipLink id="C5" target="_self" label="Skip to chapter-5" />
        {courses.map((course, index) => (
        <Box id={`C${index + 1}`} key={course} align="center">
          <Heading>Chapter {index + 1}</Heading>
          <Text>This chapter explains all about {course}</Text>
        </Box>
      ))}
      </SandboxComponent>
    );
  }
}
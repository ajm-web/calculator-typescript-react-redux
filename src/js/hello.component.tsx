import * as React from 'react';

export interface HelloProps {
    content: String
}

export default class HelloComponent extends React.Component<HelloProps, {}> {
  constructor(props: HelloProps) {
    super(props)
  }
  render() {
    return <div>{this.props.content}</div>
  }
}

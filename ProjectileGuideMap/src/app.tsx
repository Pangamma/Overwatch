import React from 'react';
import './app.scss';

type AppComponentProps = {
}

interface AppComponentState {
}

export class App extends React.PureComponent<AppComponentProps, AppComponentState> {

  constructor(props: AppComponentProps) {
    super(props);
    this.state = {};
  }

  static displayName = "App";

  public async componentDidMount(): Promise<void> {
  }

  public render(): React.ReactNode {
      return this.props.children;
  }
}
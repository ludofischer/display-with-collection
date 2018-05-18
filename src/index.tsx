import * as React from 'react';
import { Component } from 'react';
import { ReactNode } from 'react';
import { RenderArgs, RenderType, State, Props } from './types';

export default class WithListOfSomething<N> extends Component<
  Props<N>,
  State<N>
> {
  constructor(props: Props<N>) {
    super(props);
    this.removeNotification = this.removeNotification.bind(this);
    this.addNotification = this.addNotification.bind(this);
    this.state = { notifications: new Map<number, N>(), currentIndex: 0 };
  }

  removeNotification(index: number) {
    this.setState(prevState => {
      prevState.notifications.delete(index);
      return { notifications: prevState.notifications };
    });
  }

  addNotification(notification: N) {
    this.setState(prevState => {
      prevState.notifications.set(prevState.currentIndex, notification);
      return {
        notifications: prevState.notifications,
        currentIndex: prevState.currentIndex + 1
      };
    });
  }

  render() {
    return (
      <div>
        {this.props.render({
          notifications: Array.from(this.state.notifications.values()),
          addNotification: this.addNotification,
          removeNotification: this.removeNotification
        })}
      </div>
    );
  }
}

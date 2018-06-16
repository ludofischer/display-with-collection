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
    this.removeItem = this.removeItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.state = { items: new Map<number, N>(), currentIndex: 0 };
  }

  removeItem(index: number) {
    this.setState(prevState => {
      prevState.items.delete(index);
      return { items: prevState.items };
    });
  }

  addItem(item: N) {
    this.setState(prevState => {
      prevState.items.set(prevState.currentIndex, item);
      return {
        items: prevState.items,
        currentIndex: prevState.currentIndex + 1
      };
    });
  }

  render() {
    return (
      <div>
        {this.props.children({
          items: Array.from(this.state.items.values()),
          addItem: this.addItem,
          removeItem: this.removeItem
        })}
      </div>
    );
  }
}

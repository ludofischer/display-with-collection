import { ReactNode } from 'react';

export type State<T> = { notifications: Map<number, T>, currentIndex: number };
export type RenderArgs<T> = {
  notifications: Array<T>;
  addNotification: (notification: T) => void;
  removeNotification: (index: number) => void;
};
export type RenderType<T> = (args: RenderArgs<T>) => ReactNode;
export type Props<T> = { render: RenderType<T> };

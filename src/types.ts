import { ReactNode } from 'react';

export type State<T> = { items: Map<number, T>; currentIndex: number };
export type RenderArgs<T> = {
  items: Array<T>;
  addItem: (item: T) => void;
  removeItem: (index: number) => void;
};
export type RenderType<T> = (args: RenderArgs<T>) => ReactNode;
export type Props<T> = { children: RenderType<T> };

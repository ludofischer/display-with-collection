import React from 'react';
import { render, Simulate } from 'react-testing-library';
import 'dom-testing-library/extend-expect';
import ListOfSomething from '../index.tsx';

describe('Displaying items', () => {
  const addLabel = 'Add';
  const removeLabel = 'Remove';
  const message = 'Hello';
  const composite = (
    <ListOfSomething<{ message: string }>
      render={({ items, addItem, removeItem }) => (
        <div>
          {items.map(item => <p key={item.message}>{item.message}</p>)}
          <button onClick={() => addItem({ message })}>{addLabel}</button>
          <button onClick={() => removeItem(0)}>{removeLabel}</button>
        </div>
      )}
    />
  );

  it('adds an item', () => {
    const utils = render(composite);
    const button = utils.getByText(addLabel);
    Simulate.click(button);
    expect(utils.getByText(message)).toBeInTheDOM();
  });

  it('removes an item', () => {
    const utils = render(composite);
    const addButton = utils.getByText(addLabel);
    const removeButton = utils.getByText(removeLabel);
    Simulate.click(addButton);
    Simulate.click(removeButton);
    expect(utils.queryByText(message)).toBeNull();
  });
});

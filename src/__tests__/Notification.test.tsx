import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';
import ListOfSomething from '../index';

describe('Displaying items', () => {
  const addLabel = 'Add';
  const removeLabel = 'Remove';
  const message = 'Hello';
  const composite = (
    <ListOfSomething<{ message: string }>
      children={({ items, addItem, removeItem }) => (
        <div>
          {items.map(item => (
            <p key={item.message}>{item.message}</p>
          ))}
          <button onClick={() => addItem({ message })}>{addLabel}</button>
          <button onClick={() => removeItem(0)}>{removeLabel}</button>
        </div>
      )}
    />
  );

  afterEach(cleanup);

  it('adds an item', () => {
    const utils = render(composite);
    const button = utils.getByText(addLabel);
    fireEvent.click(button);
    expect(utils.getByText(message)).toBeInTheDocument();
  });

  it('removes an item', () => {
    const utils = render(composite);
    const addButton = utils.getByText(addLabel);
    const removeButton = utils.getByText(removeLabel);
    fireEvent.click(addButton);
    fireEvent.click(removeButton);
    expect(utils.queryByText(message)).toBeNull();
  });
});

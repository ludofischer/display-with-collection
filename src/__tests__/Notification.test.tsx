import React from 'react';
import { render, Simulate } from 'react-testing-library';
import 'dom-testing-library/extend-expect';
import ListOfSomething from '../index.tsx';

describe('Displaying notifications', () => {
  const addLabel = 'Add';
  const removeLabel = 'Remove';
  const message = 'Hello';
  const composite = (
          <ListOfSomething<{ message: string}>
      render={({ notifications, addNotification, removeNotification }) => (
        <div>
          {notifications.map(notification => (
            <p key={notification.message}>{notification.message}</p>
          ))}
          <button onClick={() => addNotification({ message })}>
            {addLabel}
          </button>
              <button onClick={() => removeNotification(0)}>{removeLabel}</button>
        </div>
      )}
    />
  );

  it('adds a notification', () => {
    const utils = render(composite);
    const button = utils.getByText(addLabel);
    Simulate.click(button);
    expect(utils.getByText(message)).toBeInTheDOM();
  });

  it('removes a notification', () => {
    const utils = render(composite);
    const addButton = utils.getByText(addLabel);
    const removeButton = utils.getByText(removeLabel);
    Simulate.click(addButton);
    Simulate.click(removeButton);
    expect(utils.queryByText(message)).toBeNull();
  });
});

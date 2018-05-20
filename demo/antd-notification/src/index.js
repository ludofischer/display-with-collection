import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/lib/date-picker/style/css';
import { Alert, Button, Layout } from 'antd';
import WithCollection from '@ludovicofischer/display-with-collection';

function AlertDisplay() {
  return (
    <WithCollection
      render={({ items, addItem, removeItem }) => (
        <React.Fragment>
          {items.map((item, index) => (
            <Alert message={item.message} key={index} closable />
          ))}
          <Button onClick={() => addItem({ message: 'Clicked!' })}>
            Add alert
          </Button>
        </React.Fragment>
      )}
    />
  );
}

ReactDOM.render(
  <div>
    <Layout.Content>
      <AlertDisplay />
    </Layout.Content>
  </div>,
  document.getElementById('app')
);

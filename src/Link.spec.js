import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from './Link';

const LinkWrapper = props => <a {...props} />;

it('has a href attribute when rendering', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Link href="#" LinkWrapper={LinkWrapper}>
      Link text here
    </Link>,
    div
  );

  expect(div.querySelector('a[href="#"]')).not.toBeNull();
  expect(div.textContent).toEqual('Link text here');

  ReactDOM.unmountComponentAtNode(div);
})

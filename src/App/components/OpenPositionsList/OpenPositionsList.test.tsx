/* eslint-disable import/no-extraneous-dependencies */

import { shallow } from 'enzyme';
import classes from 'identity-obj-proxy';
import * as React from 'react';

import OpenPositionsList from './OpenPositionsList';

it('matches snapshot', () => {
  const wrapper = shallow(
    <OpenPositionsList
      classes={classes}
      handleSorterKeyChange={() => undefined}
      handleSorterOrderChange={() => undefined}
      sorterKey="companyName"
      sorterOrder="asc"
      stockPositions={[]}
    />,
  );

  expect(wrapper).toMatchSnapshot();
});

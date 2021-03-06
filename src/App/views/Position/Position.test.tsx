/* eslint-disable import/no-extraneous-dependencies */

import { shallow } from 'enzyme';
import classes from 'identity-obj-proxy';
import * as React from 'react';

import Position from './Position';

it('matches snapshot', () => {
  const wrapper = shallow(
    <Position
      classes={classes}
      handleCloseClick={() => undefined}
      handleDeleteClick={() => undefined}
      handleUpdateClick={() => undefined}
      handleWantToDelete={() => undefined}
      positionLoading={false}
      stockPosition={{
        amount: 1,
        closeCommission: null,
        closeDate: null,
        closePL: null,
        closePLAnnualPercent: null,
        closePLPercent: null,
        closePrice: null,
        closeSum: null,
        companyName: 'Apple, Inc.',
        dailyPL: null,
        dailyPLPercent: null,
        id: 'id',
        marketPL: null,
        marketPLAnnualPercent: null,
        marketPLPercent: null,
        marketPrice: null,
        marketSum: null,
        openCommission: 1,
        openDate: '2019-07-01',
        openPrice: 100,
        openSum: 101,
        quote: null,
        quoteProgress: false,
        symbol: 'AAPL',
      }}
      vibrantPalette={null}
      wantToDelete={false}
    />,
  );

  expect(wrapper).toMatchSnapshot();
});

it('matches snapshot when loading', () => {
  const wrapper = shallow(
    <Position
      classes={classes}
      handleCloseClick={() => undefined}
      handleDeleteClick={() => undefined}
      handleUpdateClick={() => undefined}
      handleWantToDelete={() => undefined}
      positionLoading
      stockPosition={null}
      vibrantPalette={null}
      wantToDelete={false}
    />,
  );

  expect(wrapper).toMatchSnapshot();
});

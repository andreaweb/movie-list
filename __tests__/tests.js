import React from 'react'
import ReactDOM from 'react-dom'
import { mount } from 'enzyme';
import Rating from '../src/components/Rating'

test('Rating shows correct number of hollow stars', () => {
  const wrapper = mount(
    <Rating rating={10} />
  );
  const hollowStar = wrapper.find('.hollow-star')
  expect(hollowStar).toHaveLength(0);
});

test('Rating shows correct number of filled stars', () => {
  const wrapper = mount(
    <Rating rating={10} />
  );
  const filledStar = wrapper.find('.filled-star')
  expect(filledStar).toHaveLength(5);
});
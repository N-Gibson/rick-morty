import React from 'react';
import { Body } from '../Body/body';
import { shallow } from 'enzyme';
import { mapStateToProps } from './body';

describe('Body', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Body episodes={[{name: 'ABC\'s of Beth', episode: 'S3E6', air_date:'12/12/12', id: 13}]} characters={[{name: 'Morty', status: 'Alive, kind of', species: 'Human', gender: 'Male', image: 'url', episodes: ['a bunch'], location: 'Earth', origin: 'Earth C-147', id: 1}]} locations={[{name: 'Earth C-147', dimension: 'Milky Way', type: 'Planet', id: 100}]} />)
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe('mapStateToProps', () => {
  const mockState = {
    episodes: [],
    characters: [],
    locations: []
  }

  const expected = {
    episodes: [],
    characters: [],
    locations: []
  }

  it('should have state', () => {
    const mappedProps = mapStateToProps(mockState);

    expect(mappedProps).toEqual(expected);
  });
});
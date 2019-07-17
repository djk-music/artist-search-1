import React from 'react';
import renderer from 'react-test-renderer';
import Search  from './Search';
import { shallow } from 'enzyme';

jest.mock('../../services/artistsAndWorks.js');

describe('Search', () => {
  it('matches a snapshot', () => {
    const tree = renderer.create(
      <Search />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
<<<<<<< HEAD
=======

  it('tests buttons', () => {
    const onClick = jest.fn();
    onClick();
    onClick();
    const wrapper = shallow(<Search onClick={onClick} />);
    wrapper.find('button').at(0).simulate('click');
    expect(onClick).toHaveBeenCalledTimes(2);
  });
>>>>>>> a0ce8066dd5d2b3ff2ba9ada953587c86eabe87b
});

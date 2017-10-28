import React from 'react';
import { shallow } from 'enzyme';
import MyComponent from './MyComponent';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe("MyComponent", () => {
  it("should render correctly", () => {
    const component = shallow(<MyComponent />);
  });
});

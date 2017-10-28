import React from 'react';
import { shallow } from 'enzyme';

describe("MyComponent", () => {
  it("should render correctly", () => {
    const component = shallow(<MyComponent />);
  });
});

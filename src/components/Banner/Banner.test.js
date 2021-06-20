import React from 'react';
import { shallow } from 'enzyme';
import Banner from './Banner';

describe('MyComponent', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<Banner />);
        expect(component).toMatchSnapshot();
    });
});
import React from 'react';
import { shallow } from 'enzyme';
import ContactIcons from './ContactIcons';

import dummyData from '../TestData/testData.json'

describe('MyComponent', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<ContactIcons data={dummyData} />);
        expect(component).toMatchSnapshot();
    });
});

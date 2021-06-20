import React from 'react';
import { shallow } from 'enzyme';
import Skills from './Skills';

import dummyData from '../TestData/testData.json'

describe('MyComponent', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<Skills dbData={dummyData} />);
        expect(component).toMatchSnapshot();
    });
});
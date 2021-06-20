import React from 'react';
import { shallow } from 'enzyme';
import Certifications from './Certifications';

import dummyData from '../TestData/testData.json'

describe('MyComponent', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<Certifications dbData={dummyData} />);
        expect(component).toMatchSnapshot();
    });
});

import React from 'react';
import { shallow } from 'enzyme';
import Summary from './Summary';

import dummyData from '../TestData/testData.json'

describe('MyComponent', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<Summary dbData={dummyData} />);
        expect(component).toMatchSnapshot();
    });
});
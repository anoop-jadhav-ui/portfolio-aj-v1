import React from 'react';
import { shallow } from 'enzyme';
import Education from './Education';

import dummyData from '../TestData/testData.json'

describe('MyComponent', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<Education dbData={dummyData} />);
        expect(component).toMatchSnapshot();
    });
});
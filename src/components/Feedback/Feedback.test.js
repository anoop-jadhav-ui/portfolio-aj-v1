import React from 'react';
import { shallow } from 'enzyme';
import { Feedback } from './Feedback';

import dummyData from '../TestData/testData.json'

describe('MyComponent', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<Feedback dbData={dummyData} />);
        expect(component).toMatchSnapshot();
    });
});
import React from 'react';
import { shallow } from 'enzyme';
import Projects from './Projects';

import dummyData from '../TestData/testData.json'

describe('MyComponent', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<Projects dbData={dummyData} />);
        expect(component).toMatchSnapshot();
    });
});
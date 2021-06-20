import React from 'react';
import { shallow } from 'enzyme';
import { LeftPane } from './LeftPane';

import dummyData from '../TestData/testData.json'

describe('MyComponent', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<LeftPane dbData={dummyData} />);
        expect(component).toMatchSnapshot();
    });
});
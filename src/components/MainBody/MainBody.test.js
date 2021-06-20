import React from 'react';
import { shallow } from 'enzyme';
import MainBody from './MainBody';

import dummyData from '../TestData/testData.json'

describe('MyComponent', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<MainBody dbData={dummyData} />);
        expect(component).toMatchSnapshot();
    });
});
import React from 'react';
import { shallow } from 'enzyme';
import Hobbies from './Hobbies';

import dummyData from '../TestData/testData.json'

describe('MyComponent', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<Hobbies dbData={dummyData} />);
        expect(component).toMatchSnapshot();
    });
});
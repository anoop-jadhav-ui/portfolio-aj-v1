import React from 'react';
import { shallow } from 'enzyme';
import WorkExperience from './WorkExperience';

import dummyData from '../TestData/testData.json'

describe('MyComponent', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<WorkExperience dbData={dummyData} />);
        expect(component).toMatchSnapshot();
    });
});
import React from 'react';
import { shallow } from 'enzyme';
import ProjectCard from './ProjectCard';

import dummyData from '../TestData/testData.json'

describe('MyComponent', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<ProjectCard data={dummyData.projects[0]} />);
        expect(component).toMatchSnapshot();
    });
});

import React from 'react';
import { shallow } from 'enzyme';
import ToggleButton from './ToggleButton';

describe('MyComponent', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<ToggleButton />);
        expect(component).toMatchSnapshot();
    });
});
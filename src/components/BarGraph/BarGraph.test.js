import React from 'react';
import { shallow } from 'enzyme';
import BarGraph from './BarGraph';

describe('MyComponent', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<BarGraph />);
        expect(component).toMatchSnapshot();
    });
});

import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';

import dummyData from '../TestData/testData.json'

describe('MyComponent', () => {
    it('should render correctly in "debug" mode', () => {
        let props = {
            dbData: dummyData,
            leftPaneData: [
                {
                    class: "summary",
                    headerPos: 0,
                    id: "summary",
                    key: 0,
                    label: "Summary"
                }
            ],
            showLoader: false,
            toggleLoader: jest.fn(),
            fetchData: jest.fn()
        }
        const component = shallow(<App {...props} />);
        expect(component).toMatchSnapshot();
    });
});
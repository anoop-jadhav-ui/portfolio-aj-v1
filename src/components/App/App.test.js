
import { shallow } from 'enzyme';
import App from './App';


describe('<App />', () => {
  it("renders <App /> Component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Anoop Jadhav"));
  })

})

import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import Store from './components/Store/Store'
import { Provider } from 'react-redux'

ReactDOM.render(<Provider store={Store}><App /></Provider>, document.getElementById('root'));
serviceWorker.unregister();
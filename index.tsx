import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';

import App from 'App';
import {store} from 'ducks';

const body = document.getElementById('root') as HTMLDivElement;
const container = ReactDOM.createRoot(body);

container.render(
  <Provider store={store}>
    <App />
  </Provider>
);

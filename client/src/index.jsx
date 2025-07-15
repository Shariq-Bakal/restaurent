import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from "react-router-dom";
import { store } from './app/store.js';
import { Provider } from 'react-redux'


const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

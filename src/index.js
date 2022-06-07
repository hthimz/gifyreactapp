import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from "./redux/configureStore";
import ThemeContext,{themes} from './utils/theme-context';
import axios from 'axios';

const root = ReactDOM.createRoot(document.getElementById('root'));
axios.interceptors.request.use(request=>{
  request.params={...request.params,api_key:process.env.REACT_APP_GIFY_KEY};
  return request;
});
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <ThemeContext.Provider value={themes.dark}>
    <App />
    </ThemeContext.Provider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

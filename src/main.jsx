import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';

import common_en from './translations/en/common.json';
import common_es from './translations/es/common.json';

i18n.init({
  interpolation: { escapeValue: false },
  lng: 'en',
  resources: {
    en: {
      common: common_en,
    },
    es: {
      common: common_es,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <I18nextProvider i18n={i18n}>
    <App />
  </I18nextProvider>,
)

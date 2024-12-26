import 'i18next';

// import all namespaces (for the default language, only)
import {defaultNS, resources} from './index';

declare module 'i18next' {
  // Extend CustomTypeOptions
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: (typeof resources)['en'];
    // other
  }
}

declare module 'i18next' {
  interface CustomTypeOptions {
    returnNull: false;
  }
}

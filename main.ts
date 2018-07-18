import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './src/module';

// TODO talk about it

// import { CONFIG } from './configs/system/main';

// if (CONFIG.environment === 'PRODUCTION') {
//   enableProdMode();
// }

// enableProdMode();


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

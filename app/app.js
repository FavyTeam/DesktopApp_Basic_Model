'use strict';

import { Component } from 'angular2/core';
import { bootstrap } from 'angular2/platform/browser';

@Component({
    selector: 'myapp',
    template: '<h1>We build new version of desktop application</h1>'
})

export class AppComponent {
  constructor() {

  }
}

bootstrap(AppComponent);

import { Component } from '@angular/core';

import { ApiService } from './shared';

// import '../style/app.scss';
import '../style/app.styl';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.pug',
    styleUrls: ['./app.component.styl'],
})
export class AppComponent {
    url = 'https://github.com/preboot/angular2-webpack';
    title: string;

    constructor(private api: ApiService) {
        this.title = this.api.title;
    }
}

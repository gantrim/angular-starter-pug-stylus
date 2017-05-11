import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-about',
    templateUrl: './about.component.pug',
    styleUrls: ['./about.component.styl']
})
export class AboutComponent implements OnInit {

    constructor() {
        // Do stuff
    }

    ngOnInit() {
        console.log('Hello About');
    }

}

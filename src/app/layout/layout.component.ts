import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
    public window: any;
    collapedSideBar: boolean;

    constructor() {}

    ngOnInit() {
        this.window = window.scroll(0, 0);
    }

    receiveCollapsed($event) {
        this.collapedSideBar = $event;
    }
}

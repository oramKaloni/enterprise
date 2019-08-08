import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-maps',
    templateUrl: './maps.component.html',
})
export class MapsComponent implements OnInit {
    constructor() { }
    ngOnInit() {

        $(function() {
            $('#world-map-gdp').vectorMap({
              map: 'world_mill',
              series: {
                regions: [{
                  values: gdpData,
                  scale: ['#C8EEFF', '#0071A4'],
                  normalizeFunction: 'polynomial'
                }]
              },
              onRegionTipShow: function(e, el, code) {
                el.html(el.html() + ' (GDP - ' + gdpData[code] + ')');
              }
            });
          });

    }
}

import { Component, OnInit } from '@angular/core';

declare const AmCharts: any;
declare var $: any;

import '../../../../assets/charts/amchart/amcharts.js';
import '../../../../assets/charts/amchart/gauge.js';
import '../../../../assets/charts/amchart/serial.js';
import '../../../../assets/charts/amchart/light.js';
import '../../../../assets/charts/amchart/pie.min.js';
import '../../../../assets/charts/amchart/ammap.min.js';
import '../../../../assets/charts/amchart/usaLow.js';
import '../../../../assets/charts/amchart/radar.js';
import '../../../../assets/charts/amchart/worldLow.js';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      const latlong = {};
      latlong['AU'] = {
        'latitude': -27,
        'longitude': 133
      };
      latlong['BR'] = {
        'latitude': -10,
        'longitude': -55
      };
      latlong['BW'] = {
        'latitude': -22,
        'longitude': 24
      };
      latlong['IN'] = {
        'latitude': 20,
        'longitude': 77
      };
      latlong['KE'] = {
        'latitude': 1,
        'longitude': 38
      };
      latlong['MX'] = {
        'latitude': 23,
        'longitude': -102
      };
      latlong['MY'] = {
        'latitude': 2.5,
        'longitude': 112.5
      };
      latlong['NI'] = {
        'latitude': 13,
        'longitude': -85
      };
      latlong['NZ'] = {
        'latitude': -41,
        'longitude': 174
      };
      latlong['PH'] = {
        'latitude': 13,
        'longitude': 122
      };
      latlong['PL'] = {
        'latitude': 52,
        'longitude': 20
      };
      latlong['RU'] = {
        'latitude': 60,
        'longitude': 100
      };
      latlong['TH'] = {
        'latitude': 15,
        'longitude': 100
      };
      latlong['ZA'] = {
        'latitude': -29,
        'longitude': 24
      };

      const mapData = [
        {
        'code': 'MX',
        'name': 'Mexico',
        'value': 114793341,
        'color': '#a389d4'
        },
        {
          'code': 'BR',
          'name': 'Brazil',
          'value': 196655014,
          'color': '#1de9b6'
        },
        {
          'code': 'PL',
          'name': 'Poland',
          'value': 38298949,
          'color': '#f44236'
        },
        {
          'code': 'KE',
          'name': 'Kenya',
          'value': 41609728,
          'color': '#1dc4e9'
        },
        {
          'code': 'ZA',
          'name': 'South Africa',
          'value': 50459978,
          'color': '#f4c22b'
        },
        {
          'code': 'RU',
          'name': 'Russia',
          'value': 142835555,
          'color': '#f4c22b'
        },
        {
          'code': 'IN',
          'name': 'India',
          'value': 241491960,
          'color': '#1de9b6'
        },
        {
          'code': 'PH',
          'name': 'Philippines',
          'value': 94852030,
          'color': '#7f2f2f'
        },
        {
          'code': 'AU',
          'name': 'Australia',
          'value': 22605732,
          'color': '#1dc4e9'
        },
        {
          'code': 'TH',
          'name': 'Thailand',
          'value': 69518555,
          'color': '#f44236'
        },
        {
          'code': 'BW',
          'name': 'Botswana',
          'value': 2030738,
          'color': '#04a9f5'
        },
        {
          'code': 'MY',
          'name': 'Malaysia',
          'value': 28859154,
          'color': '#A389D4'
        },
        {
          'code': 'NZ',
          'name': 'New Zealand',
          'value': 4414509,
          'color': '#7f2f2f'
        },
        {
          'code': 'NI',
          'name': 'Nicaragua',
          'value': 5869859,
          'color': '#A389D4'
        }
      ];

      const minBulletSize = 3;
      const maxBulletSize = 70;
      let min = Infinity;
      let max = -Infinity;
      let i;
      let value;
      for (i = 0; i < mapData.length; i++) {
        value = mapData[i].value;
        if (value < min) {
          min = value;
        }
        if (value > max) {
          max = value;
        }
      }

      const maxSquare = maxBulletSize * maxBulletSize * 2 * Math.PI;
      const minSquare = minBulletSize * minBulletSize * 2 * Math.PI;

      const images = [];
      for (i = 0; i < mapData.length; i++) {
        const dataItem = mapData[i];
        value = dataItem.value;

        let square = (value - min) / (max - min) * (maxSquare - minSquare) + minSquare;
        if (square < minSquare) {
          square = minSquare;
        }
        const size = Math.sqrt(square / (Math.PI * 8));
        const id = dataItem.code;

        images.push({
          'type': 'circle',
          'theme': 'light',
          'width': size,
          'height': size,
          'color': dataItem.color,
          'longitude': latlong[id].longitude,
          'latitude': latlong[id].latitude,
          'title': dataItem.name + '</br> [ ' + value + ' ]',
          'value': value
        });
      }
      const map = AmCharts.makeChart('world-low', {
        'type': 'map',
        'projection': 'eckert6',

        'dataProvider': {
          'map': 'worldLow',
          'images': images
        },
        'export': {
          'enabled': true
        }
      });

      const chartDatac = [{
        'day': 'Mon',
        'value': 60
      }, {
        'day': 'Tue',
        'value': 45
      }, {
        'day': 'Wed',
        'value': 70
      }, {
        'day': 'Thu',
        'value': 55
      }, {
        'day': 'Fri',
        'value': 70
      }, {
        'day': 'Sat',
        'value': 55
      }, {
        'day': 'Sun',
        'value': 70
      }];
      const chartc = AmCharts.makeChart('widget-line-chart', {
        'type': 'serial',
        'addClassNames': true,
        'defs': {
          'filter': [{
            'x': '-50%',
            'y': '-50%',
            'width': '200%',
            'height': '200%',
            'id': 'blur',
            'feGaussianBlur': {
              'in': 'SourceGraphic',
              'stdDeviation': '30'
            }
          },
            {
              'id': 'shadow',
              'x': '-10%',
              'y': '-10%',
              'width': '120%',
              'height': '120%',
              'feOffset': {
                'result': 'offOut',
                'in': 'SourceAlpha',
                'dx': '0',
                'dy': '20'
              },
              'feGaussianBlur': {
                'result': 'blurOut',
                'in': 'offOut',
                'stdDeviation': '10'
              },
              'feColorMatrix': {
                'result': 'blurOut',
                'type': 'matrix',
                'values': '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 .2 0'
              },
              'feBlend': {
                'in': 'SourceGraphic',
                'in2': 'blurOut',
                'mode': 'normal'
              }
            }
          ]
        },
        'fontSize': 15,
        'dataProvider': chartDatac,
        'autoMarginOffset': 0,
        'marginRight': 0,
        'categoryField': 'day',
        'categoryAxis': {
          'color': '#fff',
          'gridAlpha': 0,
          'axisAlpha': 0,
          'lineAlpha': 0,
          'offset': -20,
          'inside': true,
        },
        'valueAxes': [{
          'fontSize': 0,
          'inside': true,
          'gridAlpha': 0,
          'axisAlpha': 0,
          'lineAlpha': 0,
          'minimum': 0,
          'maximum': 100,
        }],
        'chartCursor': {
          'valueLineEnabled': false,
          'valueLineBalloonEnabled': false,
          'cursorAlpha': 0,
          'zoomable': false,
          'valueZoomable': false,
          'cursorColor': '#fff',
          'categoryBalloonColor': '#51b4e6',
          'valueLineAlpha': 0
        },
        'graphs': [{
          'id': 'g1',
          'type': 'line',
          'valueField': 'value',
          'lineColor': '#ffffff',
          'lineAlpha': 1,
          'lineThickness': 3,
          'fillAlphas': 0,
          'showBalloon': true,
          'balloon': {
            'drop': true,
            'adjustBorderColor': false,
            'color': '#ffffff',
            'fillAlphas': 0.2,
            'bullet': 'round',
            'bulletBorderAlpha': 1,
            'bulletSize': 5,
            'hideBulletsCount': 50,
            'lineThickness': 2,
            'useLineColorForBulletBorder': true,
            'valueField': 'value',
            'balloonText': '<span style="font-size:18px;">[[value]]</span>'
          }
        }],
      });

    }, 500);
  }

}

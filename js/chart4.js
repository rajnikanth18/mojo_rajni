$("#chartdiv4 .amChartsLegend").append("<span class='svgpos1'>Spend</span><span class='svgpos2'>Applies</span>");
var chart = AmCharts.makeChart("chartdiv4", {
  "type": "serial",
  "dataDateFormat": "YYYY-MM-DD",
  "precision": 2,

  "valueAxes": [{
    "id": "v1",
    "position": "left",
    "autoGridCount": true,
    "axisColor":"#666",
    "maximum":9000,
    "minimum":0,
    "tickLength":0,
    "labelFunction": function(value) {
      return "$" + Math.round(value);
    }
  }, {
    "id": "v2",
    "gridAlpha": 0,
    "position": "right",
    "axisColor":"#c02929",
    "maximum":225,
    "minimum":0,
    "tickLength":0,
    "autoGridCount": true
  }],
  "graphs": [{
    "id": "g3",
    "valueAxis": "v1",
    "lineColor": "#a4a4a4",
    "fillColors": "#dedede",
    "fillAlphas": 1,
    "type": "column",
    "title":"Spend1",
    "valueField": "spend2",
    "clustered": false,
    "columnWidth": 0.5,
  },{
    "id": "g4",
    "valueAxis": "v1",
    "lineColor": "#a4a4a4",
    "fillColors": "#92d2fe",
    "fillAlphas": 1,
    "type": "column",
    "title":"Spend2",
    "valueField": "spend1",
    "clustered": false,
    "columnWidth": 0.25,
  },  {
    "id": "g1",
    "valueAxis": "v2",
    "bullet": "round",
    "bulletBorderAlpha": 1,
    "bulletBorderColor": "#57a4f8",
    "bulletColor": "#91d3ff",
    "bulletSize": 8,
    "hideBulletsCount": 50,
    "lineThickness": 2,
    "lineColor": "#d86766",
    "type": "line",
    "useLineColorForBulletBorder": false,
    "valueField": "applies1",
    "title":"Applies1"
  }, {
    "id": "g2",
    "valueAxis": "v2",
    "bullet": "round",
    "bulletBorderAlpha": 1,
    "bulletBorderColor": "#acacac",
    "bulletColor": "#dfdfdf",
    "bulletSize": 8,
    "hideBulletsCount": 50,
    "lineThickness": 2,
    "lineColor": "#d86766",
    "type": "line",
    "useLineColorForBulletBorder": false,
    "valueField": "applies2",
    "title":"Applies2"
  }],
  "chartScrollbar": {
    "graph": "g1",
    "oppositeAxis": false,
    "offset": 30,
    "scrollbarHeight": 50,
    "backgroundAlpha": 0,
    "selectedBackgroundAlpha": 0.1,
    "selectedBackgroundColor": "#888888",
    "graphFillAlpha": 0,
    "graphLineAlpha": 0.5,
    "selectedGraphFillAlpha": 0,
    "selectedGraphLineAlpha": 1,
    "autoGridCount": true,
    "color": "#AAAAAA"
  },
  "chartCursor": {
    "pan": true,
    "valueLineEnabled": true,
    "valueLineBalloonEnabled": true,
    "cursorAlpha": 0,
    "valueLineAlpha": 0.2
  },
  "categoryField": "date",
  "categoryAxis": {
    "parseDates": true,
    "dashLength": 1,
    "tickLength": 0,
    "minorGridEnabled": true
  },
  "legend": {
    "useGraphSettings": true,
    "position": "top",
    "align":"left",
    "markerSize": 8,
  },
  "balloon": {
    "borderThickness": 1,
    "shadowAlpha": 0
  },
  "export": {
   "enabled": false
  },
  "dataProvider": [{
    "date": "2016-12-21",
    "applies1": 51,
    "applies2": 74
  },{
    "date": "2016-12-22",
    "applies1": 55,
    "applies2": 80,
    "spend1": 2800,
    "spend2": 4500
  }, {
    "date": "2016-12-23",
    "applies1": 37,
    "applies2": 78,
    "spend1": 3300,
    "spend2": 4800
  }, {
    "date": "2016-12-24",
    "applies1": 58,
    "applies2": 88,
    "spend1": 3100,
    "spend2": 5000
  }, {
    "date": "2016-12-25",
    "applies1": 47,
    "applies2": 84,
    "spend1": 2900,
    "spend2": 4900
  }, {
    "date": "2016-12-26",
    "applies1": 29,
    "applies2": 100,
    "spend1": 3300,
    "spend2": 5900
  }, {
    "date": "2016-12-27",
    "applies1": 28,
    "applies2": 85,
    "spend1": 3800,
    "spend2": 6500
  }, {
    "date": "2016-12-28",
    "applies1": 37,
    "applies2": 92,
    "spend1": 4100,
    "spend2": 7000
  }, {
    "date": "2016-12-29",
    "applies1": 20,
    "applies2": 90,
    "spend1": 3100,
    "spend2": 5000
  }, {
    "date": "2016-12-30",
    "applies1": 20,
    "applies2": 91,
    "spend1": 3300,
    "spend2": 4800
  }, {
    "date": "2016-12-31",
    "applies1": 22,
    "applies2": 120,
    "spend1": 2900,
    "spend2": 4800
  }, {
    "date": "2017-01-01",
    "applies1": 30,
    "applies2": 92,
    "spend1": 3400,
    "spend2": 5900
  }, {
    "date": "2017-01-02",
    "applies1": 60,
    "applies2": 87,
    "spend1": 3600,
    "spend2": 6400
  }, {
    "date": "2017-01-03",
    "applies1": 69,
    "applies2": 88,
    "spend1": 4500,
    "spend2": 7500
  }, {
    "date": "2017-01-04",
    "applies1": 100,
    "applies2": 87,
    "spend1": 3200,
    "spend2": 5000
  }, {
    "date": "2017-01-05",
    "applies1": 71,
    "applies2": 85,
    "spend1": 3400,
    "spend2": 4800
  },{
    "date": "2017-01-06",
    "applies1": 84,
    "applies2": 75,
    "spend1": 2900,
    "spend2": 4700
  }, {
    "date": "2017-01-07",
    "applies1": 75,
    "applies2": 78,
    "spend1": 3500,
    "spend2": 4800
  }, {
    "date": "2017-01-08",
    "applies1": 70,
    "applies2": 88,
    "spend1": 3200,
    "spend2": 5000
  }, {
    "date": "2017-01-09",
    "applies1": 90,
    "applies2": 89,
    "spend1": 2900,
    "spend2": 4800
  }, {
    "date": "2017-01-10",
    "applies1": 142,
    "applies2": 89,
    "spend1": 2900,
    "spend2": 4700
  }, {
    "date": "2017-01-11",
    "applies1": 151,
    "applies2": 85,
    "spend1": 3300,
    "spend2": 4800
  }, {
    "date": "2017-01-12",
    "applies1": 160,
    "applies2": 92,
    "spend1": 3100,
    "spend2": 5000
  }, {
    "date": "2017-01-13",
    "applies1": 117,
    "applies2": 90,
    "spend1": 2900,
    "spend2": 4800
  }, {
    "date": "2017-01-14",
    "applies1": 117,
    "applies2": 91,
    "spend1": 3300,
    "spend2": 5900
  }, {
    "date": "2017-01-15",
    "applies1": 133,
    "applies2": 84,
    "spend1": 3600,
    "spend2": 6500
  }, {
    "date": "2017-01-16",
    "applies1": 125,
    "applies2": 92,
    "spend1": 4300,
    "spend2": 7200
  }, {
    "date": "2017-01-17",
    "applies1": 136,
    "applies2": 87,
    "spend1": 3200,
    "spend2": 5000
  }, {
    "date": "2017-01-18",
    "applies1": 153,
    "applies2": 88,
    "spend1": 3300,
    "spend2": 4800
  }, {
    "date": "2017-01-19",
    "applies1": 190,
    "applies2": 87,
    "spend1": 2900,
    "spend2": 4800
  }, {
    "date": "2017-01-20",
    "applies1": 181,
    "applies2": 85,
    "spend1": 3300,
    "spend2": 5900
  },{
    "date": "2017-01-21",
    "applies1": 185,
    "applies2": 75,
    "spend1": 3500,
    "spend2": 6400
  }, {
    "date": "2017-01-22",
    "applies1": 210,
    "applies2": 78,
    "spend1": 4900,
    "spend2": 7900
  }, {
    "date": "2017-01-23",
    "applies1": 192,
    "applies2": 88,
    "spend1": 3100,
    "spend2": 5000
  }, {
    "date": "2017-01-24",
    "applies1": 190,
    "applies2": 124,
    "spend1": 3300,
    "spend2": 4800
  }, {
    "date": "2017-01-25",
    "applies1": 170,
    "applies2": 89,
    "spend1": 2900,
    "spend2": 4700
  }, {
    "date": "2017-01-26",
    "applies1": 210,
    "applies2": 85,
    "spend1": 3300,
    "spend2": 4800
  }, {
    "date": "2017-01-27",
    "applies1": 188,
    "applies2": 92,
    "spend1": 3200,
    "spend2": 5000
  }, {
    "date": "2017-01-28",
    "applies1": 185,
    "applies2": 90,
    "spend1": 2900,
    "spend2": 4800
  }, {
    "date": "2017-01-29",
    "applies1": 187,
    "applies2": 125,
    "spend1": 3500,
    "spend2": 5200
  }, {
    "date": "2017-01-30",
    "applies1": 175,
    "applies2": 125
  }]
});
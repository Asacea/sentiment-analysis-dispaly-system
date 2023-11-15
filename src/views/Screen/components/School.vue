<template>
    <div class="container">
      <div class="left">
        <div class="l1 outer">
          <dv-border-box12 :dur="5" style="text-align: center;">
            <div class="inner" >
                <h3>本校热词</h3>
                <div id="chart-l-1" style="height: 100%;"></div>
            </div>
          </dv-border-box12>
        </div>
        <div class="l2 outer">
          <dv-border-box12>
            <div class="inner">
              <div class="inner1" id="chart-l-2"></div>
              <div class="inner2" id="chart-l-3"></div>
            </div>
          </dv-border-box12>
        </div>
      </div>
      <div class="mid">
        <div class="m1 outer">
          <dv-border-box12>
            <div class="inner" style="text-align: center;">
              <h3>路径传播</h3>
              <div id="chart-m-1" style="width:30%;height:30%; overflow: hidden;"></div>
            </div>
          </dv-border-box12>
        </div>
        <div class="m2 outer">
          <dv-border-box12>
            <div class="inner1" style="text-align: center; color: aliceblue;">
              <h3 >本月热门舆情</h3>
              <div><span style="color:green">【正向】</span>电子科技大学。。。。</div>
              <div><span style="color:green">【正向】</span>电子科技大学。。。。</div>
              <div><span style="color:green">【正向】</span>电子科技大学。。。。</div>
              <div><span style="color:green">【正向】</span>电子科技大学。。。。</div>
              <div><span style="color: orange;">【中性】</span>电子科技大学。。。。</div>
              <div><span style="color: orange;">【中性】</span>电子科技大学。。。。</div>
              <div><span style="color: orange;">【中性】</span>电子科技大学。。。。</div>
              <!-- <div><span style="color: red;">【负向】</span>电子科技大学。。。。</div> -->
              <div><span style="color: red;">【负向】</span>电子科技大学。。。。</div>
              <div><span style="color: red;">【负向】</span>电子科技大学。。。。</div>
              <div><span style="color:green">【正向】</span>电子科技大学。。。。</div>
              <div><span style="color:green">【正向】</span>电子科技大学。。。。</div>
              <div><span style="color:green">【正向】</span>电子科技大学。。。。</div>

            </div>
          </dv-border-box12>
          <dv-border-box12>
            <div class="inner2" id="chart-m-2" style="height: 100%;"></div>
          </dv-border-box12>
        </div>
      </div>
      <div class="right">
        <div class="r1 outer">
          <dv-border-box12>
            <div class="inner">
                <div style="text-align: center;"><h3>校内用户画像</h3></div>

                <div class="inner1">
                    <div class="inner11" id="chart-r-1"></div>
                    <div class="inner12" id="chart-r-2"></div>
                </div>
                <div class="inner2">
                    <div class="inner21" id="chart-r-3"></div>
                    <div class="inner22" id="chart-r-4"></div>
                </div>
            </div>
          </dv-border-box12>
        </div>
        <div class="r2 outer">
          <dv-border-box12 :dur="5" :reverse="true">
            <div class="inner" >
              <!-- <h3 style="">热门信息转发路径</h3> -->
              <div class="chart-r-2-i" id="chart-r-5" style="height: 100%;">
              </div>
            </div>
          </dv-border-box12>
        </div>
      </div>
    </div>
</template>
<script setup>
import { useRoute, onBeforeRouteUpdate } from "vue-router";
import { ref, onMounted, reactive, onBeforeUnmount } from "vue";
import * as echarts from "echarts";
import "echarts-wordcloud";
import "echarts/map/js/china.js";
import 'echarts/extension/bmap/bmap';
// 引入百度地图的 JavaScript API
// import BMap from 'bmap-jsapi';
import useschoolStore from '@/stores/schoolStore.js'
const schoolStore = useschoolStore()
const route = useRoute();
const screenId = ref(5);
onBeforeRouteUpdate(() => {
  screenId.value = route.params.id;
  console.log(screenId.value);
  console.log('11111aaaa')
  //screenId用来传数据
});

let myChart1;
// 本校热词
const createChartl1 = async ()=>{
    let dom = document.getElementById('chart-l-1');
    myChart1 = echarts.init(dom, 'dark', {
      renderer: 'canvas',
      useDirtyRect: false
    });
    // const chartl1Data = await schoolStore.getleft1()
    const data = {
    "nodes": [
        {
            "color": "#4f19c7",
            "label": "jquery",
            "attributes": {},
            "y": -404.26147,
            "x": -739.36383,
            "id": "jquery",
            "size": 4.7252817
        },
        {
            "color": "#c71969",
            "label": "backbone",
            "attributes": {},
            "y": -862.7517,
            "x": -134.2215,
            "id": "backbone",
            "size": 6.1554675
        },
        {
            "color": "#c71969",
            "label": "underscore",
            "attributes": {},
            "y": -734.4221,
            "x": -75.53079,
            "id": "underscore",
            "size": 100
        },
        {
            "color": "#c71969",
            "label": "faye",
            "attributes": {},
            "y": 624.50604,
            "x": -818.97516,
            "id": "faye",
            "size": 0.67816025
        },
        {
            "color": "#c71919",
            "label": "socket.io",
            "attributes": {},
            "y": 120.37976,
            "x": -710.59204,
            "id": "socket.io",
            "size": 19.818306
        },
        {
            "color": "#c71969",
            "label": "requirejs",
            "attributes": {},
            "y": -612.5541,
            "x": 71.52897,
            "id": "requirejs",
            "size": 4.0862627
        },
        {
            "color": "#c71969",
            "label": "amdefine",
            "attributes": {},
            "y": -556.3107,
            "x": 1202.1166,
            "id": "amdefine",
            "size": 2.3822114
        },
        {
            "color": "#1984c7",
            "label": "mongoose",
            "attributes": {},
            "y": 378.15536,
            "x": -1150.2018,
            "id": "mongoose",
            "size": 10.81118
        },
        {
            "color": "#c76919",
            "label": "underscore.deferred",
            "attributes": {},
            "y": 477.03778,
            "x": -127.03764,
            "id": "underscore.deferred",
            "size": 0.40429485
        },
        {
            "color": "#8419c7",
            "label": "cheerio",
            "attributes": {},
            "y": -404.62427,
            "x": -338.03128,
            "id": "cheerio",
            "size": 8.163814
        },
        {
            "color": "#c76919",
            "label": "lodash",
            "attributes": {},
            "y": -380.16626,
            "x": 118.30771,
            "id": "lodash",
            "size": 18.935852
        },
        {
            "color": "#c71969",
            "label": "faye-websocket",
            "attributes": {},
            "y": 649.6795,
            "x": -697.4635,
            "id": "faye-websocket",
            "size": 1.0128845
        },
        {
            "color": "#c71969",
            "label": "dateformat",
            "attributes": {},
            "y": -531.28235,
            "x": 381.10724,
            "id": "dateformat",
            "size": 3.3863845
        },
        {
            "color": "#c79f19",
            "label": "mkdirp",
            "attributes": {},
            "y": -224.0287,
            "x": 317.77667,
            "id": "mkdirp",
            "size": 23.713282
        },
        {
            "color": "#c71919",
            "label": "express",
            "attributes": {},
            "y": -230.14833,
            "x": -644.2716,
            "id": "express",
            "size": 49.608772
        },
        {
            "color": "#c71919",
            "label": "connect",
            "attributes": {},
            "y": 294.88266,
            "x": -933.4234,
            "id": "connect",
            "size": 19.574871
        },
        {
            "color": "#c71919",
            "label": "consolidate",
            "attributes": {},
            "y": 495.22098,
            "x": -101.796974,
            "id": "consolidate",
            "size": 3.0212305
        },
        {
            "color": "#c78419",
            "label": "hogan.js",
            "attributes": {},
            "y": 79.99539,
            "x": 930.74255,
            "id": "hogan.js",
            "size": 3.2646663
        },
        {
            "color": "#c719b9",
            "label": "node-uuid",
            "attributes": {},
            "y": 815.4766,
            "x": -378.0424,
            "id": "node-uuid",
            "size": 13.488974
        },
        {
            "color": "#1984c7",
            "label": "async",
            "attributes": {},
            "y": 41.25936,
            "x": 157.57562,
            "id": "async",
            "size": 73.161194
        },
        {
            "color": "#c719b9",
            "label": "redis",
            "attributes": {},
            "y": 56.938953,
            "x": -895.56586,
            "id": "redis",
            "size": 17.475237
        },
        {
            "color": "#199fc7",
            "label": "backoff",
            "attributes": {},
            "y": 810.54626,
            "x": -275.69714,
            "id": "backoff",
            "size": 0.58687174
        },
        {
            "color": "#9f19c7",
            "label": "bytes",
            "attributes": {},
            "y": 380.12103,
            "x": -1005.2705,
            "id": "bytes",
            "size": 0.8607372
        },
        {
            "color": "#1984c7",
            "label": "temp",
            "attributes": {},
            "y": 144.45488,
            "x": 1057.7959,
            "id": "temp",
            "size": 4.0558333
        },
        {
            "color": "#69c719",
            "label": "mustache",
            "attributes": {},
            "y": -554.3333,
            "x": -554.2029,
            "id": "mustache",
            "size": 3.7819674
        },
        {
            "color": "#8419c7",
            "label": "request",
            "attributes": {},
            "y": 241.89249,
            "x": -147.57906,
            "id": "request",
            "size": 64.54965
        },
        {
            "color": "#c71969",
            "label": "underscore.string",
            "attributes": {},
            "y": -528.7333,
            "x": 58.392773,
            "id": "underscore.string",
            "size": 7.311788
        },
        {
            "color": "#c71969",
            "label": "jquery-browserify",
            "attributes": {},
            "y": 385.31375,
            "x": -231.44426,
            "id": "jquery-browserify",
            "size": 0.83030766
        },
        {
            "color": "#8419c7",
            "label": "event-stream",
            "attributes": {},
            "y": 858.8598,
            "x": 313.5104,
            "id": "event-stream",
            "size": 3.0212305
        },
        {
            "color": "#19c719",
            "label": "log4js",
            "attributes": {},
            "y": 350.19534,
            "x": 7.309183,
            "id": "log4js",
            "size": 3.4776726
        },
        {
            "color": "#19c719",
            "label": "optimist",
            "attributes": {},
            "y": 171.80579,
            "x": 599.53815,
            "id": "optimist",
            "size": 48.6046
        },
        {
            "color": "#1919c7",
            "label": "mocha",
            "attributes": {},
            "y": -178.11076,
            "x": -393.3754,
            "id": "mocha",
            "size": 7.889948
        },
        {
            "color": "#1984c7",
            "label": "should",
            "attributes": {},
            "y": -198.63869,
            "x": -334.43466,
            "id": "should",
            "size": 4.7252817
        },
        {
            "color": "#c79f19",
            "label": "semver",
            "attributes": {},
            "y": 375.80014,
            "x": 414.43912,
            "id": "semver",
            "size": 8.711545
        },
        {
            "color": "#69c719",
            "label": "q",
            "attributes": {},
            "y": -389.02567,
            "x": -423.78125,
            "id": "q",
            "size": 12.54566
        },
        {
            "color": "#c74f19",
            "label": "node-fs",
            "attributes": {},
            "y": -94.528114,
            "x": -319.42093,
            "id": "node-fs",
            "size": 1.225891
        },
        {
            "color": "#19c7b9",
            "label": "colorize",
            "attributes": {},
            "y": -432.71243,
            "x": 37.15866,
            "id": "colorize",
            "size": 0.55644226
        },
        {
            "color": "#c76919",
            "label": "github",
            "attributes": {},
            "y": 244.62839,
            "x": -383.83453,
            "id": "github",
            "size": 1.6519039
        },
        {
            "color": "#19c719",
            "label": "prompt",
            "attributes": {},
            "y": 819.16583,
            "x": 748.4038,
            "id": "prompt",
            "size": 4.1471214
        },
        {
            "color": "#19c719",
            "label": "colors",
            "attributes": {},
            "y": -265.6326,
            "x": 694.03375,
            "id": "colors",
            "size": 33.359425
        },
        {
            "color": "#19c7b9",
            "label": "commander",
            "attributes": {},
            "y": -682.1726,
            "x": -479.44443,
            "id": "commander",
            "size": 43.21858
        },
        {
            "color": "#9fc719",
            "label": "validator",
            "attributes": {},
            "y": -429.05365,
            "x": -668.0554,
            "id": "validator",
            "size": 3.6602497
        },
        {
            "color": "#c7b919",
            "label": "grunt",
            "attributes": {},
            "y": -710.3381,
            "x": 683.8534,
            "id": "grunt",
            "size": 9.959153
        },
        {
            "color": "#c7b919",
            "label": "grunt-contrib-clean",
            "attributes": {},
            "y": -386.1587,
            "x": -292.83875,
            "id": "grunt-contrib-clean",
            "size": 1.0128845
        },
        {
            "color": "#c7b919",
            "label": "grunt-contrib-concat",
            "attributes": {},
            "y": 224.41283,
            "x": 99.38902,
            "id": "grunt-contrib-concat",
            "size": 0.76944876
        },
        {
            "color": "#c7b919",
            "label": "grunt-contrib-less",
            "attributes": {},
            "y": -611.3146,
            "x": -215.58498,
            "id": "grunt-contrib-less",
            "size": 0.6173013
        },
        {
            "color": "#c7b919",
            "label": "grunt-contrib-jshint",
            "attributes": {},
            "y": -938.3397,
            "x": 548.61926,
            "id": "grunt-contrib-jshint",
            "size": 1.3171794
        },
        {
            "color": "#c7b919",
            "label": "grunt-contrib-uglify",
            "attributes": {},
            "y": -871.8892,
            "x": 160.96982,
            "id": "grunt-contrib-uglify",
            "size": 1.1346025
        },
        {
            "color": "#c7b919",
            "label": "grunt-contrib-watch",
            "attributes": {},
            "y": 80.96627,
            "x": -616.9189,
            "id": "grunt-contrib-watch",
            "size": 0.8607372
        },
        {
            "color": "#19c719",
            "label": "http-proxy",
            "attributes": {},
            "y": 418.763,
            "x": 711.7106,
            "id": "http-proxy",
            "size": 4.6339936
        },
        {
            "color": "#b9c719",
            "label": "mime",
            "attributes": {},
            "y": 34.348167,
            "x": -284.14108,
            "id": "mime",
            "size": 14.858301
        },
        {
            "color": "#c78419",
            "label": "ycssmin",
            "attributes": {},
            "y": -392.55402,
            "x": -199.6149,
            "id": "ycssmin",
            "size": 0.4651538
        },
        {
            "color": "#3419c7",
            "label": "mongodb",
            "attributes": {},
            "y": 522.375,
            "x": -1089.2416,
            "id": "mongodb",
            "size": 11.237192
        },
        {
            "color": "#19b9c7",
            "label": "ini",
            "attributes": {},
            "y": 357.40076,
            "x": 1076.3447,
            "id": "ini",
            "size": 1.5301858
        },
        {
            "color": "#c79f19",
            "label": "slide",
            "attributes": {},
            "y": -272.38953,
            "x": 928.9824,
            "id": "slide",
            "size": 0.40429485
        },
        {
            "color": "#c79f19",
            "label": "abbrev",
            "attributes": {},
            "y": -185.45026,
            "x": 1187.2019,
            "id": "abbrev",
            "size": 0.43472436
        },
        {
            "color": "#c79f19",
            "label": "graceful-fs",
            "attributes": {},
            "y": -400.4116,
            "x": 864.7834,
            "id": "graceful-fs",
            "size": 1.8649102
        },
        {
            "color": "#c79f19",
            "label": "minimatch",
            "attributes": {},
            "y": -332.82092,
            "x": 923.4708,
            "id": "minimatch",
            "size": 4.6339936
        },
        {
            "color": "#c79f19",
            "label": "nopt",
            "attributes": {},
            "y": 0.9246719,
            "x": 648.4921,
            "id": "nopt",
            "size": 5.303442
        },
        {
            "color": "#c79f19",
            "label": "rimraf",
            "attributes": {},
            "y": -169.53479,
            "x": 842.5285,
            "id": "rimraf",
            "size": 7.159641
        },
        {
            "color": "#c79f19",
            "label": "which",
            "attributes": {},
            "y": -237.25739,
            "x": 1191.029,
            "id": "which",
            "size": 1.8649102
        },
        {
            "color": "#c79f19",
            "label": "tar",
            "attributes": {},
            "y": -160.8614,
            "x": 572.6111,
            "id": "tar",
            "size": 3.2646663
        },
        {
            "color": "#c79f19",
            "label": "fstream",
            "attributes": {},
            "y": -86.683586,
            "x": 522.8266,
            "id": "fstream",
            "size": 2.5343587
        },
        {
            "color": "#c79f19",
            "label": "inherits",
            "attributes": {},
            "y": 289.38367,
            "x": 639.7362,
            "id": "inherits",
            "size": 3.4472432
        },
        {
            "color": "#c79f19",
            "label": "read",
            "attributes": {},
            "y": 376.2344,
            "x": 537.65076,
            "id": "read",
            "size": 1.4997563
        },
        {
            "color": "#c719b9",
            "label": "lru-cache",
            "attributes": {},
            "y": 63.76733,
            "x": 758.7636,
            "id": "lru-cache",
            "size": 2.1996343
        },
        {
            "color": "#c79f19",
            "label": "node-gyp",
            "attributes": {},
            "y": -206.755,
            "x": 941.12946,
            "id": "node-gyp",
            "size": 1.165032
        },
        {
            "color": "#c79f19",
            "label": "fstream-npm",
            "attributes": {},
            "y": 172.07289,
            "x": 792.2891,
            "id": "fstream-npm",
            "size": 0.52601284
        },
        {
            "color": "#c79f19",
            "label": "archy",
            "attributes": {},
            "y": -15.182732,
            "x": 1288.449,
            "id": "archy",
            "size": 0.67816025
        },
        {
            "color": "#c79f19",
            "label": "npmlog",
            "attributes": {},
            "y": -713.69055,
            "x": 856.64276,
            "id": "npmlog",
            "size": 1.4084679
        },
        {
            "color": "#c79f19",
            "label": "ansi",
            "attributes": {},
            "y": -722.70416,
            "x": 996.9021,
            "id": "ansi",
            "size": 1.165032
        },
        {
            "color": "#c79f19",
            "label": "npm-registry-client",
            "attributes": {},
            "y": -163.23782,
            "x": 770.89215,
            "id": "npm-registry-client",
            "size": 0.70858973
        },
        {
            "color": "#c79f19",
            "label": "read-package-json",
            "attributes": {},
            "y": -328.63486,
            "x": 835.7924,
            "id": "read-package-json",
            "size": 0.6173013
        },
        {
            "color": "#c79f19",
            "label": "glob",
            "attributes": {},
            "y": -542.05096,
            "x": 502.02698,
            "id": "glob",
            "size": 14.88873
        },
        {
            "color": "#c79f19",
            "label": "osenv",
            "attributes": {},
            "y": 83.11953,
            "x": 1170.4095,
            "id": "osenv",
            "size": 0.67816025
        },
        {
            "color": "#c76919",
            "label": "retry",
            "attributes": {},
            "y": -149.41582,
            "x": 1088.8419,
            "id": "retry",
            "size": 0.55644226
        },
        {
            "color": "#34c719",
            "label": "once",
            "attributes": {},
            "y": 632.73914,
            "x": 692.4719,
            "id": "once",
            "size": 0.92159617
        },
        {
            "color": "#c79f19",
            "label": "npmconf",
            "attributes": {},
            "y": 263.6715,
            "x": 880.9455,
            "id": "npmconf",
            "size": 0.70858973
        },
        {
            "color": "#c79f19",
            "label": "opener",
            "attributes": {},
            "y": 30.311459,
            "x": 1306.2058,
            "id": "opener",
            "size": 0.43472436
        },
        {
            "color": "#3419c7",
            "label": "append",
            "attributes": {},
            "y": -216.35048,
            "x": 23.50861,
            "id": "append",
            "size": 0.4651538
        },
        {
            "color": "#3419c7",
            "label": "clone",
            "attributes": {},
            "y": 52.33028,
            "x": -407.7309,
            "id": "clone",
            "size": 2.4430702
        },
        {
            "color": "#c71919",
            "label": "ejs",
            "attributes": {},
            "y": 264.84995,
            "x": -421.52237,
            "id": "ejs",
            "size": 11.298051
        },
        {
            "color": "#9f19c7",
            "label": "debug",
            "attributes": {},
            "y": -75.5553,
            "x": -880.5015,
            "id": "debug",
            "size": 15.923333
        },
        {
            "color": "#9f19c7",
            "label": "out",
            "attributes": {},
            "y": -141.5042,
            "x": -27.64139,
            "id": "out",
            "size": 0.43472436
        },
        {
            "color": "#1919c7",
            "label": "when",
            "attributes": {},
            "y": -798.01276,
            "x": -874.1786,
            "id": "when",
            "size": 3.8123972
        },
        {
            "color": "#c78419",
            "label": "coffee-script",
            "attributes": {},
            "y": -915.89026,
            "x": 81.49971,
            "id": "coffee-script",
            "size": 44.131462
        },
        {
            "color": "#c79f19",
            "label": "adm-zip",
            "attributes": {},
            "y": 198.17334,
            "x": 893.567,
            "id": "adm-zip",
            "size": 1.3780384
        },
        {
            "color": "#c7b919",
            "label": "findup-sync",
            "attributes": {},
            "y": -535.91614,
            "x": 345.53296,
            "id": "findup-sync",
            "size": 0.6173013
        },
        {
            "color": "#c78419",
            "label": "node-minify",
            "attributes": {},
            "y": -772.7816,
            "x": 284.06558,
            "id": "node-minify",
            "size": 0.76944876
        },
        {
            "color": "#19c719",
            "label": "watch",
            "attributes": {},
            "y": 794.0542,
            "x": 1113.2292,
            "id": "watch",
            "size": 3.7211087
        },
        {
            "color": "#19c784",
            "label": "bal-util",
            "attributes": {},
            "y": 630.7962,
            "x": 1637.5715,
            "id": "bal-util",
            "size": 1.0128845
        },
        {
            "color": "#19c784",
            "label": "extendr",
            "attributes": {},
            "y": 674.9556,
            "x": 1661.8947,
            "id": "extendr",
            "size": 0.4651538
        },
        {
            "color": "#19c784",
            "label": "taskgroup",
            "attributes": {},
            "y": 557.3904,
            "x": 1473.007,
            "id": "taskgroup",
            "size": 0.67816025
        },
        {
            "color": "#19c784",
            "label": "typechecker",
            "attributes": {},
            "y": 655.7608,
            "x": 1672.5186,
            "id": "typechecker",
            "size": 0.4651538
        },
        {
            "color": "#c7199f",
            "label": "underscorem",
            "attributes": {},
            "y": -865.8074,
            "x": -106.96772,
            "id": "underscorem",
            "size": 0.6173013
        },
        {
            "color": "#c719b9",
            "label": "hubot",
            "attributes": {},
            "y": -683.4332,
            "x": -280.204,
            "id": "hubot",
            "size": 1.165032
        },
        {
            "color": "#1969c7",
            "label": "ndarray-ops",
            "attributes": {},
            "y": -1321.741,
            "x": 518.3953,
            "id": "ndarray-ops",
            "size": 0.58687174
        },
        {
            "color": "#1969c7",
            "label": "ndarray",
            "attributes": {},
            "y": -1302.119,
            "x": 501.15656,
            "id": "ndarray",
            "size": 1.1041731
        },
        {
            "color": "#1969c7",
            "label": "typedarray-pool",
            "attributes": {},
            "y": -1032.3728,
            "x": 964.9717,
            "id": "typedarray-pool",
            "size": 0.6173013
        },
        {
            "color": "#c71919",
            "label": "jade",
            "attributes": {},
            "y": -449.40155,
            "x": -173.24167,
            "id": "jade",
            "size": 20.031315
        },
        {
            "color": "#b9c719",
            "label": "nodemailer",
            "attributes": {},
            "y": -531.05963,
            "x": 847.43915,
            "id": "nodemailer",
            "size": 3.873256
        },
        {
            "color": "#9fc719",
            "label": "pkginfo",
            "attributes": {},
            "y": 1029.6494,
            "x": 657.2629,
            "id": "pkginfo",
            "size": 8.498538
        },
        {
            "color": "#c78419",
            "label": "eco",
            "attributes": {},
            "y": -986.8328,
            "x": 61.016094,
            "id": "eco",
            "size": 2.230064
        },
        {
            "color": "#19c7b9",
            "label": "github-flavored-markdown",
            "attributes": {},
            "y": -805.08057,
            "x": -594.8061,
            "id": "github-flavored-markdown",
            "size": 0.92159617
        },
        {
            "color": "#c79f19",
            "label": "filed",
            "attributes": {},
            "y": 123.003525,
            "x": -254.39879,
            "id": "filed",
            "size": 1.3780384
        },
        {
            "color": "#19c7b9",
            "label": "wrench",
            "attributes": {},
            "y": -524.69977,
            "x": -186.77402,
            "id": "wrench",
            "size": 8.559398
        },
        {
            "color": "#c71984",
            "label": "flatiron",
            "attributes": {},
            "y": 816.91064,
            "x": 876.8348,
            "id": "flatiron",
            "size": 1.9561987
        },
        {
            "color": "#19b9c7",
            "label": "winston",
            "attributes": {},
            "y": 695.1258,
            "x": 881.2038,
            "id": "winston",
            "size": 11.845781
        },
        {
            "color": "#c71919",
            "label": "coffeekup",
            "attributes": {},
            "y": -987.40234,
            "x": 85.66932,
            "id": "coffeekup",
            "size": 0.55644226
        },
        {
            "color": "#c78419",
            "label": "stylus",
            "attributes": {},
            "y": -620.4443,
            "x": -586.76886,
            "id": "stylus",
            "size": 10.020013
        },
        {
            "color": "#8419c7",
            "label": "querystring",
            "attributes": {},
            "y": 1011.7739,
            "x": 758.26154,
            "id": "querystring",
            "size": 1.9257691
        },
        {
            "color": "#8419c7",
            "label": "xml2json",
            "attributes": {},
            "y": 806.3456,
            "x": -601.0259,
            "id": "xml2json",
            "size": 1.6214744
        },
        {
            "color": "#1984c7",
            "label": "nano",
            "attributes": {},
            "y": -75.38197,
            "x": -114.47825,
            "id": "nano",
            "size": 1.5910448
        },
        {
            "color": "#c78419",
            "label": "less",
            "attributes": {},
            "y": -358.01407,
            "x": -128.87897,
            "id": "less",
            "size": 9.928724
        },
        {
            "color": "#c78419",
            "label": "uglify-js",
            "attributes": {},
            "y": -699.5852,
            "x": 177.18362,
            "id": "uglify-js",
            "size": 22.252666
        },
        {
            "color": "#c78419",
            "label": "clean-css",
            "attributes": {},
            "y": -807.94244,
            "x": -442.73334,
            "id": "clean-css",
            "size": 3.7819674
        },
        {
            "color": "#19c719",
            "label": "filesize",
            "attributes": {},
            "y": -56.161583,
            "x": -210.30255,
            "id": "filesize",
            "size": 0.52601284
        },
        {
            "color": "#c71984",
            "label": "strftime",
            "attributes": {},
            "y": 209.59007,
            "x": -0.24881881,
            "id": "strftime",
            "size": 0.70858973
        },
        {
            "color": "#4f19c7",
            "label": "canvas",
            "attributes": {},
            "y": 463.22067,
            "x": -290.9267,
            "id": "canvas",
            "size": 3.1429486
        },
        {
            "color": "#b9c719",
            "label": "common",
            "attributes": {},
            "y": 500.33102,
            "x": -227.09238,
            "id": "common",
            "size": 0.83030766
        },
        {
            "color": "#19b9c7",
            "label": "structr",
            "attributes": {},
            "y": -1252.3774,
            "x": 318.85583,
            "id": "structr",
            "size": 1.4997563
        },
        {
            "color": "#1934c7",
            "label": "simple-mime",
            "attributes": {},
            "y": -174.76685,
            "x": 7.712948,
            "id": "simple-mime",
            "size": 0.40429485
        },
        {
            "color": "#1934c7",
            "label": "haml",
            "attributes": {},
            "y": 221.30989,
            "x": 174.83754,
            "id": "haml",
            "size": 0.55644226
        },
        {
            "color": "#19b9c7",
            "label": "step",
            "attributes": {},
            "y": -1171.119,
            "x": 261.83853,
            "id": "step",
            "size": 4.2688394
        },
        {
            "color": "#1934c7",
            "label": "datetime",
            "attributes": {},
            "y": 419.69788,
            "x": 791.56323,
            "id": "datetime",
            "size": 0.4955833
        },
        {
            "color": "#c71969",
            "label": "inflection",
            "attributes": {},
            "y": -550.88916,
            "x": 1271.2019,
            "id": "inflection",
            "size": 1.3476089
        },
        {
            "color": "#1934c7",
            "label": "vows",
            "attributes": {},
            "y": 398.0463,
            "x": 791.03455,
            "id": "vows",
            "size": 3.751538
        },
        {
            "color": "#c78419",
            "label": "docco",
            "attributes": {},
            "y": -878.3072,
            "x": -420.23013,
            "id": "docco",
            "size": 1.0737435
        },
        {
            "color": "#34c719",
            "label": "readable-stream",
            "attributes": {},
            "y": 492.42526,
            "x": -531.76953,
            "id": "readable-stream",
            "size": 3.873256
        },
        {
            "color": "#8419c7",
            "label": "sax",
            "attributes": {},
            "y": 610.6721,
            "x": -534.7558,
            "id": "sax",
            "size": 2.7169356
        },
        {
            "color": "#8419c7",
            "label": "xml2js",
            "attributes": {},
            "y": 210.87439,
            "x": -510.32123,
            "id": "xml2js",
            "size": 8.894122
        },
        {
            "color": "#8419c7",
            "label": "libxmljs",
            "attributes": {},
            "y": 92.88487,
            "x": -1068.4481,
            "id": "libxmljs",
            "size": 1.7431923
        },
        {
            "color": "#c7b919",
            "label": "handlebars",
            "attributes": {},
            "y": -423.4632,
            "x": 590.7474,
            "id": "handlebars",
            "size": 8.285532
        },
        {
            "color": "#1969c7",
            "label": "numeric",
            "attributes": {},
            "y": -247.50432,
            "x": -210.03926,
            "id": "numeric",
            "size": 0.58687174
        },
        {
            "color": "#c71969",
            "label": "tap",
            "attributes": {},
            "y": -312.4931,
            "x": 551.4122,
            "id": "tap",
            "size": 1.4693269
        },
        {
            "color": "#69c719",
            "label": "boo",
            "attributes": {},
            "y": -200.40657,
            "x": 75.31598,
            "id": "boo",
            "size": 0.58687174
        },
        {
            "color": "#19c7b9",
            "label": "walk",
            "attributes": {},
            "y": -584.2039,
            "x": 383.56738,
            "id": "walk",
            "size": 2.3517818
        },
        {
            "color": "#8419c7",
            "label": "errs",
            "attributes": {},
            "y": 45.422947,
            "x": -102.39036,
            "id": "errs",
            "size": 0.6173013
        },
        {
            "color": "#199fc7",
            "label": "through",
            "attributes": {},
            "y": 649.42224,
            "x": 320.47504,
            "id": "through",
            "size": 10.14173
        },
        {
            "color": "#199fc7",
            "label": "duplexer",
            "attributes": {},
            "y": 940.3869,
            "x": 251.87953,
            "id": "duplexer",
            "size": 1.3476089
        },
        {
            "color": "#199fc7",
            "label": "shell-quote",
            "attributes": {},
            "y": 850.67114,
            "x": 118.35625,
            "id": "shell-quote",
            "size": 0.52601284
        },
        {
            "color": "#199fc7",
            "label": "split",
            "attributes": {},
            "y": 750.0239,
            "x": 348.1923,
            "id": "split",
            "size": 1.1346025
        },
        {
            "color": "#3419c7",
            "label": "csv",
            "attributes": {},
            "y": 509.271,
            "x": -160.78777,
            "id": "csv",
            "size": 1.7127627
        },
        {
            "color": "#c719b9",
            "label": "memcached",
            "attributes": {},
            "y": 1149.197,
            "x": -234.76114,
            "id": "memcached",
            "size": 1.0128845
        },
        {
            "color": "#c78419",
            "label": "express-resource",
            "attributes": {},
            "y": -175.72437,
            "x": -1060.0989,
            "id": "express-resource",
            "size": 0.7998782
        },
        {
            "color": "#c71919",
            "label": "connect-assets",
            "attributes": {},
            "y": -554.7191,
            "x": -72.89341,
            "id": "connect-assets",
            "size": 0.7998782
        },
        {
            "color": "#1984c7",
            "label": "knox",
            "attributes": {},
            "y": -5.803794,
            "x": -617.46643,
            "id": "knox",
            "size": 3.112519
        },
        {
            "color": "#b9c719",
            "label": "aws-sdk",
            "attributes": {},
            "y": 359.47635,
            "x": -628.1506,
            "id": "aws-sdk",
            "size": 1.4693269
        },
        {
            "color": "#19c7b9",
            "label": "fs-extra",
            "attributes": {},
            "y": -203.57794,
            "x": 428.15845,
            "id": "fs-extra",
            "size": 4.2079806
        },
        {
            "color": "#c71969",
            "label": "awssum",
            "attributes": {},
            "y": -279.23215,
            "x": -325.59766,
            "id": "awssum",
            "size": 0.83030766
        },
        {
            "color": "#84c719",
            "label": "walker",
            "attributes": {},
            "y": -165.20312,
            "x": -280.2626,
            "id": "walker",
            "size": 0.7390192
        },
        {
            "color": "#84c719",
            "label": "batchflow",
            "attributes": {},
            "y": 405.85773,
            "x": -213.34535,
            "id": "batchflow",
            "size": 0.43472436
        },
        {
            "color": "#84c719",
            "label": "path-extra",
            "attributes": {},
            "y": 310.982,
            "x": -367.00104,
            "id": "path-extra",
            "size": 0.43472436
        },
        {
            "color": "#1984c7",
            "label": "cradle",
            "attributes": {},
            "y": 356.7393,
            "x": -42.904198,
            "id": "cradle",
            "size": 2.1996343
        },
        {
            "color": "#194fc7",
            "label": "cli-color",
            "attributes": {},
            "y": -1213.5996,
            "x": 135.87648,
            "id": "cli-color",
            "size": 4.4514165
        },
        {
            "color": "#c719b9",
            "label": "hoek",
            "attributes": {},
            "y": 357.1927,
            "x": 298.65424,
            "id": "hoek",
            "size": 0.8911666
        },
        {
            "color": "#c78419",
            "label": "csso",
            "attributes": {},
            "y": -265.18994,
            "x": 159.92708,
            "id": "csso",
            "size": 0.8607372
        },
        {
            "color": "#c78419",
            "label": "html-minifier",
            "attributes": {},
            "y": 347.3478,
            "x": 106.32629,
            "id": "html-minifier",
            "size": 1.1346025
        },
        {
            "color": "#19b9c7",
            "label": "hashish",
            "attributes": {},
            "y": -983.94257,
            "x": 691.4775,
            "id": "hashish",
            "size": 1.3780384
        },
        {
            "color": "#34c719",
            "label": "htmlparser2",
            "attributes": {},
            "y": 32.03244,
            "x": -571.7144,
            "id": "htmlparser2",
            "size": 1.3780384
        },
        {
            "color": "#c78419",
            "label": "node-zip",
            "attributes": {},
            "y": 322.0001,
            "x": 25.3843,
            "id": "node-zip",
            "size": 0.7390192
        },
        {
            "color": "#9f19c7",
            "label": "batch",
            "attributes": {},
            "y": -315.33505,
            "x": -502.78232,
            "id": "batch",
            "size": 1.8953397
        },
        {
            "color": "#1969c7",
            "label": "emitter-component",
            "attributes": {},
            "y": 217.5223,
            "x": -994.7767,
            "id": "emitter-component",
            "size": 1.3171794
        },
        {
            "color": "#19c7b9",
            "label": "netmask",
            "attributes": {},
            "y": -974.2597,
            "x": 39.66092,
            "id": "netmask",
            "size": 0.43472436
        },
        {
            "color": "#c78419",
            "label": "pkgcloud",
            "attributes": {},
            "y": 435.87173,
            "x": 112.212494,
            "id": "pkgcloud",
            "size": 0.83030766
        },
        {
            "color": "#c76919",
            "label": "eventemitter2",
            "attributes": {},
            "y": 383.04288,
            "x": 1152.9218,
            "id": "eventemitter2",
            "size": 4.3905573
        },
        {
            "color": "#c7194f",
            "label": "lingo",
            "attributes": {},
            "y": -344.86972,
            "x": -1027.0432,
            "id": "lingo",
            "size": 1.165032
        },
        {
            "color": "#b9c719",
            "label": "mailparser",
            "attributes": {},
            "y": 74.95499,
            "x": -381.3953,
            "id": "mailparser",
            "size": 0.7998782
        },
        {
            "color": "#1984c7",
            "label": "moment",
            "attributes": {},
            "y": -792.2076,
            "x": -998.14185,
            "id": "moment",
            "size": 12.180507
        },
        {
            "color": "#8419c7",
            "label": "iconv",
            "attributes": {},
            "y": 92.13313,
            "x": -414.8885,
            "id": "iconv",
            "size": 1.5910448
        },
        {
            "color": "#c719b9",
            "label": "websocket",
            "attributes": {},
            "y": -280.031,
            "x": -68.44273,
            "id": "websocket",
            "size": 1.8344806
        },
        {
            "color": "#c79f19",
            "label": "portfinder",
            "attributes": {},
            "y": -113.6123,
            "x": 371.73843,
            "id": "portfinder",
            "size": 0.92159617
        },
        {
            "color": "#c71919",
            "label": "node-markdown",
            "attributes": {},
            "y": -332.64737,
            "x": 434.20547,
            "id": "node-markdown",
            "size": 1.6823332
        },
        {
            "color": "#c79f19",
            "label": "forever-monitor",
            "attributes": {},
            "y": 626.0845,
            "x": 984.5066,
            "id": "forever-monitor",
            "size": 1.1041731
        },
        {
            "color": "#c7194f",
            "label": "mysql",
            "attributes": {},
            "y": 526.6606,
            "x": -133.69568,
            "id": "mysql",
            "size": 4.8165703
        },
        {
            "color": "#9fc719",
            "label": "passport",
            "attributes": {},
            "y": 1162.1132,
            "x": 529.5607,
            "id": "passport",
            "size": 4.1471214
        },
        {
            "color": "#c78419",
            "label": "jshint",
            "attributes": {},
            "y": -839.91656,
            "x": 533.37573,
            "id": "jshint",
            "size": 3.0212305
        },
        {
            "color": "#c78419",
            "label": "nib",
            "attributes": {},
            "y": -691.36115,
            "x": -655.49725,
            "id": "nib",
            "size": 3.9341152
        },
        {
            "color": "#4f19c7",
            "label": "cssom",
            "attributes": {},
            "y": -490.82297,
            "x": -805.296,
            "id": "cssom",
            "size": 0.95202565
        },
        {
            "color": "#c7b919",
            "label": "grunt-lib-contrib",
            "attributes": {},
            "y": -830.87317,
            "x": -221.20235,
            "id": "grunt-lib-contrib",
            "size": 1.8040513
        }
    ]
}

    myChart1.showLoading();
    // const graph = chartl1Data

    // graph.nodes.forEach(function (node){
    //     show: node.symbolSize>25
    // })

    const option = {
        // title: {
        //   text: 'NPM Dependencies'
        // },
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        series: [
          {
            type: 'graph',
            layout: 'none',
            // progressiveThreshold: 700,
            data: data.nodes.map(function (node) {
              return {
                x: node.x,
                y: node.y,
                id: node.id,
                name: node.label,
                symbolSize: node.size,
                itemStyle: {
                  color: node.color
                }
              };
            }),
            // edges: json.edges.map(function (edge) {
            //   return {
            //     source: edge.sourceID,
            //     target: edge.targetID
            //   };
            // }),
            emphasis: {
              focus: 'adjacency',
              label: {
                position: 'right',
                show: true
              }
            },
            roam: true,
            lineStyle: {
              width: 0.5,
              curveness: 0.3,
              opacity: 0.7
            }
          }
        ],
        backgroundColor: 'transparent'
    }

    myChart1.hideLoading();
    myChart1.setOption(option,true)

    if (option && typeof option === 'object') {
      myChart1.setOption(option);
    }
}


// 传播路径
const createChartm1 = async ()=>{
  var dom = document.getElementById('chart-m-1');
    var myChart = echarts.init(dom, null, {
      renderer: 'canvas',
      useDirtyRect: false
    });


    // $.get(ROOT_PATH + '/data/asset/data/lines-bus.json', function (data) {
      let hStep = 300 / (data.length - 1);
      let busLines = [].concat.apply([],
        data.map(function (busLine, idx) {
          let prevPt = [];
          let points = [];
          for (let i = 0; i < busLine.length; i += 2) {
            let pt = [busLine[i], busLine[i + 1]];
            if (i > 0) {
              pt = [prevPt[0] + pt[0], prevPt[1] + pt[1]];
            }
            prevPt = pt;
            points.push([pt[0] / 1e4, pt[1] / 1e4]);
          }
          return {
            coords: points,
            lineStyle: {
              normal: {
                color: echarts.color.modifyHSL('#5A94DF', Math.round(hStep * idx))
              }
          }
      };
    })
    );


  const option =  {
      bmap: {
        center: [116.46, 39.92],
        zoom: 10,
        roam: true,
        mapStyle: {
          styleJson: [
            {
              featureType: 'water',
              elementType: 'all',
              stylers: {
                color: '#031628'
              }
            },
            {
              featureType: 'land',
              elementType: 'geometry',
              stylers: {
                color: '#000102'
              }
            },
            {
              featureType: 'highway',
              elementType: 'all',
              stylers: {
                visibility: 'off'
              }
            },
            {
              featureType: 'arterial',
              elementType: 'geometry.fill',
              stylers: {
                color: '#000000'
              }
            },
            {
              featureType: 'arterial',
              elementType: 'geometry.stroke',
              stylers: {
                color: '#0b3d51'
              }
            },
            {
              featureType: 'local',
              elementType: 'geometry',
              stylers: {
                color: '#000000'
              }
            },
            {
              featureType: 'railway',
              elementType: 'geometry.fill',
              stylers: {
                color: '#000000'
              }
            },
            {
              featureType: 'railway',
              elementType: 'geometry.stroke',
              stylers: {
                color: '#08304b'
              }
            },
            {
              featureType: 'subway',
              elementType: 'geometry',
              stylers: {
                lightness: -70
              }
            },
            {
              featureType: 'building',
              elementType: 'geometry.fill',
              stylers: {
                color: '#000000'
              }
            },
            {
              featureType: 'all',
              elementType: 'labels.text.fill',
              stylers: {
                color: '#857f7f'
              }
            },
            {
              featureType: 'all',
              elementType: 'labels.text.stroke',
              stylers: {
                color: '#000000'
              }
            },
            {
              featureType: 'building',
              elementType: 'geometry',
              stylers: {
                color: '#022338'
              }
            },
            {
              featureType: 'green',
              elementType: 'geometry',
              stylers: {
                color: '#062032'
              }
            },
            {
              featureType: 'boundary',
              elementType: 'all',
              stylers: {
                color: '#465b6c'
              }
            },
            {
              featureType: 'manmade',
              elementType: 'all',
              stylers: {
                color: '#022338'
              }
            },
            {
              featureType: 'label',
              elementType: 'all',
              stylers: {
                visibility: 'off'
              }
            }
          ]
        }
      },
      series: [
        {
          type: 'lines',
          coordinateSystem: 'bmap',
          polyline: true,
          data: busLines,
          silent: true,
          lineStyle: {
            // color: '#c23531',
            // color: 'rgb(200, 35, 45)',
            opacity: 0.2,
            width: 1
          },
          progressiveThreshold: 500,
          progressive: 200
        },
        {
          type: 'lines',
          coordinateSystem: 'bmap',
          polyline: true,
          data: busLines,
          lineStyle: {
            width: 0
          },
          effect: {
            constantSpeed: 20,
            show: true,
            trailLength: 0.1,
            symbolSize: 1.5
          },
          zlevel: 1
        }
      ],
      mapStyle:{
        // backgroundColor: 'transparent'
        backgroundColor: 'rgba(0, 0, 0, 0)'
      }


    }
  myChart.setOption(option);

// });

    if (option && typeof option === 'object') {
      myChart.setOption(option);
    }
}

// 校内情感
const createChartl21 = async ()=>{
  var dom1 = document.getElementById('chart-l-2');
  var myChart1 = echarts.init(dom1, 'dark', {
      renderer: 'canvas',
      useDirtyRect: false
    });
    let option = {
        title: {
            text: '本校情感占比',
            // subtext: 'Fake Data',
            left: 'center',
            textStyle: {
              color: "#1FACED",
            },
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            // orient: 'horizontal',
            top: 'bottom',
            data:['积极','消极','中立'],
            itemGap: 6
        },
        series: [
            {
              name: 'Access From',
              type: 'pie',
              radius: '50%',
              label: {
                show: false
              },

              data: [
                { value: 1048, name: '积极' },
                { value: 735, name: '消极' },
                { value: 580, name: '中立' },
              ],
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              },
              
            }
        ],
       
        backgroundColor: 'transparent'
        
    };
    if (option && typeof option === 'object') {
      myChart1.setOption(option);
    }
}

// 校外情感
const createChartl22 = async ()=>{
  var dom2 = document.getElementById('chart-l-3');
  var myChart2 = echarts.init(dom2, 'dark', {
      renderer: 'canvas',
      useDirtyRect: false
    });
    let option = {
        title: {
            text: '外校情感占比',
            left: 'center',
            textStyle: {
              color: "#1FACED",
            },
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            // orient: 'horizontal',
            top: 'bottom',
            data:['积极','消极','中立'],
            itemGap: 6
        },
        series: [
            {
              name: 'Access From',
              type: 'pie',
              radius: '50%',
              label: {
                show: false
              },
              itemStyle: {
                // 设置颜色
                color: function(params) {
                  // 自定义颜色，可以根据实际需求修改
                  var colorList = ['#FF6347', '#87CEEB', '#32CD32'];
                  return colorList[params.dataIndex];
                }
              },
              data: [
                { value: 1048, name: '积极' },
                { value: 735, name: '消极' },
                { value: 580, name: '中立' },
              ],
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              },
              // barWidth: '55%' // 调整柱子的宽度

              
            }
        ],
        grid: {
          top: 20, // 设置整个图表区域的上边距
          bottom: 20 // 设置整个图表区域的下边距
        },
        backgroundColor: 'transparent'
        
    };
    if (option && typeof option === 'object') {
      myChart2.setOption(option);
    }
}

// 本校情感占比
const createChartr11 = async ()=>{
  var dom3 = document.getElementById('chart-r-1');
  var myChart3 = echarts.init(dom3, 'dark', {
      renderer: 'canvas',
      useDirtyRect: false
    });
    let option = {
        title: {
            text: '校内外占比',
            top: 'bottom',
            left: 'center',
            textStyle: {
              color: "white",
            },
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            // orient: 'horizontal',
            top: 'top',
            data:['校外','校内'],
            itemGap: 6
        },
        series: [
            {
              name: 'Access From',
              type: 'pie',
              radius: '50%',
              label: {
                show: false
              },
              itemStyle: {
                // 设置颜色
                color: function(params) {
                  // 自定义颜色，可以根据实际需求修改
                  var colorList = ['#FF6347', '#87CEEB', '#32CD32'];
                  return colorList[params.dataIndex];
                }
              },
              data: [
                { value: 1048, name: '校外' },
                { value: 735, name: '校内' },
              ],
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              },
              
            }
        ],
        grid: {
          top: 20, // 设置整个图表区域的上边距
          bottom: 20 // 设置整个图表区域的下边距
        },
        backgroundColor: 'transparent'
        
    };
    if (option && typeof option === 'object') {
      myChart3.setOption(option);
    }
}

// 校内外用户画像
const createChartr5 = async ()=>{

    var dom3 = document.getElementById('chart-r-5')
    // var dom4 = document.getElementById('chart-r-1')
    var myChart3 = echarts.init(dom3, 'dark', {
      renderer: 'canvas',
      useDirtyRect: false
    });
    var option;

    option = {
        title: {
            // text: 'Referer of a Website',
            text:'校外用户画像',
            // subtext: 'Fake Data',
            left: 'center',
            textStyle: {
              color: "#1FACED",
            },
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: 'right'
        },
        series: [
            {
              name: 'Access From',
              type: 'pie',
              radius: '50%',
              data: [
                { value: 1048, name: '中小学生' },
                { value: 735, name: '大学生' },
                { value: 580, name: '教师' },
                { value: 680, name: '其他' },
              ],
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
        ],
        grid: {
          top: 20, // 设置整个图表区域的上边距
          bottom: 20 // 设置整个图表区域的下边距
        },
        backgroundColor: 'transparent'
        
    };

    if (option && typeof option === 'object') {
      myChart3.setOption(option);
      // myChart4.setOption(option);
    }


}


// 情感走向
const createChartm22 = async () =>{
    const data1 = {
        title: "情感走向",
        value: [
            { name: "积极值", data: [100, 140, 230, 100, 120, 146] },
        ],
    };

    const option = {
        title: {
          text: "情感走向",
          left:'center',
          top:'15',
          textStyle: {
            color: "#1FACED",
          },
        },

        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985",
            },
          },
        },
        legend: {
          data:data1.value.map((i)=>i.name),
          top:40
        },
        // grid: {
        //   left: "3%",
        //   right: "4%",
        //   bottom: "3%",
        //   height: "80%",
        //   containLabel: true,
        // },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: ["1月", "2月", "3月", "4月", "5月", "6月"],
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [{
            data: [100, 140, 230, 100, 120, 146],
            type: 'line',
        }],
        series: function () {
          let serie = [];
          data1.value.map((item) => {
            let data = {
              name: item.name,
              type: "line",
              areaStyle: {
                opacity: 0.3,
              },
              data:item.data,
            };
            serie.push(data);
          });
          return serie;
        }(),
        grid: {
                    // left: "3%",
                    // right: "4%",
                    bottom: "3%",
                    with: "80",
                    height: "70%",  // Adjust this value to make the chart smaller
                    containLabel: true,
                },
        backgroundColor: "rgba(0,0,0,0)",
    };
    // console.log('111')
    let dom = document.getElementById('chart-m-2')
    let chart = echarts.init(dom,"dark");
    console.log(dom)
    chart.setOption(option);
    chart.hideLoading();

}


// 关注度阶段比例
const createChartr12 = async () => {
  var chartDom = document.getElementById('chart-r-2');
  var myChart = echarts.init(chartDom);
  var option;

  option = {
    title: {
      text: '阶段比例',
      // subtext: 'Fake Data',
      top:'bottom',
      left: 'center',
      textStyle: {
        color: "white",
      },
    },
    xAxis: {
      type: 'category',
      data: ['大一', '大二', '大三', '大四', '研究生'],
      axisLabel: {fontSize: 10}
    },
    yAxis: {
      type: 'value',
      axisLabel: {fontSize: 9},
      // boundaryGap:[0,'-40%']
    },
    series: [
      {
        data: [120, 200, 150, 80, 70],
        type: 'bar',
        barWidth: '55%' // 调整柱子的宽度
      }
    ],
    grid:{
      height:90,
      top:20,
      bottom:5,
    },
  };

option && myChart.setOption(option);
}

// 用户来源
const createChartr13 = async()=>{
  var chartDom = document.getElementById('chart-r-3');
  var myChart = echarts.init(chartDom);
  var option;

  const labelRight = {
    position: 'right'
  };
  option = {
    title: {
      text: '用户来源',
      top: 'bottom',
      left:'center',
      textStyle: {
        color: "white",
      },
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      top: 50,
      bottom: 30,
      right: 20
    },
    xAxis: {
      type: 'value',
      position: 'top',
      splitLine: {
        lineStyle: {
          type: 'dashed'
        }
      }
    },
    yAxis: {
      type: 'category',
      axisLine: { show: false },
      axisLabel: { show: false },
      axisTick: { show: false },
      splitLine: { show: false },
      data: [
        '清水河畔',
        '贴吧',
        'B站',
        '知乎',
        '微博'
      ]
    },
    series: [
      {
        name: 'Cost',
        type: 'bar',
        stack: 'Total',
        label: {
          show: true,
          formatter: '{b}'
        },
        data: [
          50,
          44,
          80,
          57,
          18
        ]
      }
    ]
  };

  option && myChart.setOption(option);
}

// 男女占比
const createChartr14 = async()=>{
    let dom = document.getElementById('chart-r-4');
    let myChart = echarts.init(dom, 'dark', {
      renderer: 'canvas',
      useDirtyRect: false
    });    
    let option;

    option = {
      title: {
        text: '用户来源',
        top: 'bottom',
        left:'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '5%',
        left: 'center'
      },
      series: [
        {
          name: '评论人数',
          type: 'pie',
          radius: ['30%', '60%'],
          avoidLabelOverlap: false,
          label: {
          show: false,
          position: 'center'
          },
          emphasis: {
          label: {
            show: true,
            fontSize: 20,
            fontWeight: 'bold'
          }
          },
          labelLine: {
          show: false
          },
          data: [
          { value: 1048, name: '男' },
          { value: 735, name: '女' },
          ]
        }
      ],
      backgroundColor: 'transparent'
    };

    if (option && typeof option === 'object') {
      myChart.setOption(option);
    }
}


onMounted(() => {
    // createChartl1()
    // createChartm1()
    createChartl21()
    createChartl22()
    createChartm22()
    createChartr11()
    createChartr12()
    createChartr13()
    createChartr14()
    createChartr5()

});
</script>
<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
}
h3{
  color:#1FACED;
  // margin-left:86px
}
.container {
  position: fixed;
  bottom: 0;
  height: 90%;
  width: 100%;
  //background-color: #fff;
  display: flex;
  .left {
    flex: 1;
    display: flex;
    flex-direction: column;
    .l1 {
      flex: 1;
    }
    .l2 {
      flex: 1;
      .inner{
        display:flex;
        .inner1{
            flex:1
        } 
        .inner2{
            flex:1
        }
      }
    }
  }
  .mid {
    flex: 1;
    display: flex;
    flex-direction: column;
    .m1 {
      flex: 1;
    }
    .m2 {
      flex: 1;
      display:flex;
      .inner1{
        flex:1
      }
      .inner2{
        flex:1
      }

    }
  } 
  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    position: relative;
    top: 3px;
    .r1 {
      flex: 2;
      .inner{
        display: flex;
        flex-direction: column;
        .inner1{
            flex:1;
            display: flex;
            .inner11{
                flex: 1;
            }
            .inner12{
                flex: 1;
            }

        }
        .inner2{
            flex:1;
            display: flex;
            .inner21{
                flex: 1;
            }
            .inner22{
                flex: 1;
            }

        }
      }
    }
    .r2 {
      flex: 1;
    }
  }
}
a .outer {
  margin: 3px;
}
.inner {
  position: relative;
  top: 5%;
  // left: 2%;
  width: 96%;
  height: 90%;
}

.dv-border-svg-container {
  z-index: 999;
}
</style>

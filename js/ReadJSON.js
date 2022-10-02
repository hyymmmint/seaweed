/*读取本地数据集（json文件）存入全局变量*/

let data = {}       // 原数据
let pie_data = []
let img_url = 'images/photos/position1.jpg'

$(function () {
    for(i=0; i<10; i++)
    {
        var url_dataset = "./json/test_visualization.json"
        var request = new XMLHttpRequest();
        request.open("get", url_dataset);/*设置请求方法与路径*/
        request.send(null);/*不发送数据到服务器*/
        request.onload = function () {/*XHR对象获取到返回信息后执行*/
            if (request.status == 200) {/*返回状态为200，即为数据获取成功*/
                data = JSON.parse(request.responseText);
                let map_data = data["map_data"]
                pie_data = data["pie_data"]
                console.log(map_data)
                console.log(pie_data)
                map(map_data);
                pie(pie_data[0]);
            }
        }
    }
})

// {"map_data": [{"name": "position1", "value": [118.02254362922588, 24.618885189498908, "position1", "14:30", 300, "xxx"]}, {"name": "position2", "value": [118.23540528729264, 24.47672678669536, "position2", "14:30", 300, "xxx"]}, {"name": "position3", "value": [118.26827980604585, 24.02756456450333, "position3", "14:30", 300, "xxx"]}, {"name": "position4", "value": [118.32291916786248, 24.442600137774733, "position4", "14:30", 300, "xxx"]}, {"name": "position5", "value": [118.35446788866666, 24.540369861660363, "position5", "14:30", 300, "xxx"]}, {"name": "position6", "value": [118.12106461994325, 24.555265425201352, "position6", "14:30", 300, "xxx"]}, {"name": "position7", "value": [118.30381002625359, 24.592739375964147, "position7", "14:30", 300, "xxx"]}, {"name": "position8", "value": [118.08334325803418, 24.689030601970124, "position8", "14:30", 300, "xxx"]}, {"name": "position9", "value": [118.21542769015018, 24.121626642199306, "position9", "14:30", 300, "xxx"]}, {"name": "position10", "value": [118.16967994677606, 24.795171270052393, "position10", "14:30", 300, "xxx"]}], "pie_data": [[57.186961780472544, 37.3276959398404, 3.211447313783622, 2.2738949659034313], [33.802278765963, 16.647644982111593, 47.88235690166081, 1.6677193502645977], [41.33568052976325, 47.97243247107102, 2.9397245535384995, 7.752162445627225], [39.286401185027565, 20.477289301549376, 5.755163264107157, 34.4811462493159], [20.92293323716329, 24.19636342239229, 36.810255542624965, 18.070447797819448], [18.792003813067893, 33.0244687004219, 41.81302827181115, 6.370499214699059], [40.778883936411795, 0.19077478518322774, 3.8417756026838883, 55.18856567572109], [33.81495068890478, 41.563505910591374, 4.89106526619185, 19.730478134311987], [1.5934831766706625, 50.75989867993031, 0.45137771499159046, 47.19524042840744], [49.15504261095913, 48.27284057086064, 1.0039127231549707, 1.5682040950252634]]}

var Main = {
    methods: {
      test() {
          this.srcList = []
          this.srcList.push(img_url)
      }
    },
    data() {
        return {
            url: 'images/photos/position1.jpg',
            srcList: [
                'images/photos/position1.jpg'
            ]
        }
    }
}
var Ctor = Vue.extend(Main)
new Ctor().$mount('#img')
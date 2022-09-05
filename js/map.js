function map(map_data){
    // let resData = []
    // // 经度，纬度，地点名称，采集时间，照片量，状态
    // resData.push({
    //     name: "position1",
    //     value: [118.13,24.54,"position1","12:30",300,"xxx"]
    // })
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('map_1'));
    
    option = {
        bmap: {
            center: [118.14363, 24.55285],
            zoom: 12,
            roam: true,
            mapStyle: {
                styleJson: [{
                    'featureType': 'water',
                    'elementType': 'all',
                    'stylers': {
                        'color': '#d1d1d1'
                    }
                }, {
                    'featureType': 'land',
                    'elementType': 'all',
                    'stylers': {
                        'color': '#f3f3f3'
                    }
                }, {
                    'featureType': 'railway',
                    'elementType': 'all',
                    'stylers': {
                        'visibility': 'off'
                    }
                }, {
                    'featureType': 'highway',
                    'elementType': 'all',
                    'stylers': {
                        'color': '#fdfdfd'
                    }
                }, {
                    'featureType': 'highway',
                    'elementType': 'labels',
                    'stylers': {
                        'visibility': 'off'
                    }
                }, {
                    'featureType': 'arterial',
                    'elementType': 'geometry',
                    'stylers': {
                        'color': '#fefefe'
                    }
                }, {
                    'featureType': 'arterial',
                    'elementType': 'geometry.fill',
                    'stylers': {
                        'color': '#fefefe'
                    }
                }, {
                    'featureType': 'poi',
                    'elementType': 'all',
                    'stylers': {
                        'visibility': 'off'
                    }
                }, {
                    'featureType': 'green',
                    'elementType': 'all',
                    'stylers': {
                        'visibility': 'off'
                    }
                }, {
                    'featureType': 'subway',
                    'elementType': 'all',
                    'stylers': {
                        'visibility': 'off'
                    }
                }, {
                    'featureType': 'manmade',
                    'elementType': 'all',
                    'stylers': {
                        'color': '#d1d1d1'
                    }
                }, {
                    'featureType': 'local',
                    'elementType': 'all',
                    'stylers': {
                        'color': '#d1d1d1'
                    }
                }, {
                    'featureType': 'arterial',
                    'elementType': 'labels',
                    'stylers': {
                        'visibility': 'off'
                    }
                }, {
                    'featureType': 'boundary',
                    'elementType': 'all',
                    'stylers': {
                        'color': '#fefefe'
                    }
                }, {
                    'featureType': 'building',
                    'elementType': 'all',
                    'stylers': {
                        'color': '#d1d1d1'
                    }
                }, {
                    'featureType': 'label',
                    'elementType': 'labels.text.fill',
                    'stylers': {
                        'color': '#999999'
                    }
                }]
            }
        },
        series : [
            {
                name: 'Points',
                type: 'scatter',
                coordinateSystem: 'bmap',
                data: map_data,
                symbolSize: 15,
                itemStyle: {
                    color: '#f58220'
                },
                label: {
                    formatter: '{@[2]}',
                    position: 'right',
                    show: true
                },
                emphasis: {
                    label: {
                        show: false
                    }
                }
            }
        ]
    };

    myChart.setOption(option);
    window.addEventListener("resize",function(){
        myChart.resize();
    });

    // 处理点击事件
    myChart.on('click', function (params) {
        // 修改barbox内容
        document.getElementById('uv_name').innerText = params.data.name;
        document.getElementById('time').innerText = params.data.value[3].toString();
        document.getElementById('position').innerText = params.data.value[0].toString() + "°N," + params.data.value[1].toString() + "°E";

        // 修改选中点浮藻浓度
        pie(pie_data[params.dataIndex])

        // 显示选中点图片变化
        document.getElementById('img_name').innerText = params.data.name + "图片";
        document.getElementById('img').style.backgroundImage= `url(${"images/photos/" + params.name + ".jpg"})`;

        //修改选中点详细信息
        document.getElementById('img_num').innerText = "照片量：" + params.data.value[4].toString();
        document.getElementById('status').innerText = "赤潮预警状态：" + params.data.value[5].toString();
    });

}

function pie(pie_data){
    let myChart = echarts.init(document.getElementById('seaweed'));
    let color_list = ['#61a0a8', '#FF8C00', '#20B2AA','#ffc20e','#4169E1','#afb4db', '#c4ccd3'];

    option = {
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            textStyle: {
                color: 'rgba(255,255,255,.5)'
            }
        },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: '50%',
                data: [
                    { value: pie_data[0], name: 'xx藻1'},
                    { value: pie_data[1], name: 'xx藻2'},
                    { value: pie_data[2], name: 'xx藻3' },
                    { value: pie_data[3], name: 'xx藻4' },
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    myChart.setOption(option);
}
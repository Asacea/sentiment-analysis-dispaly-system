const express = require('express');
// const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const cors = require('cors')
// app.use(bodyParser.json());
app.use(express.json());
app.use(cors())
const users = [];

// 注册接口
app.post('/register', (req, res) => {
  const {userschool,usertype,username,userpswd,confirmPassword} = req.body;

  // if (!userschool || !usertype || !userpswd || !confirmPassword) {
  //   return res.status(400).json({ message: '所有字段都是必填的' });
  // }

  // if (userpswd !== confirmPassword) {
  //   return res.status(400).json({ message: '密码和确认密码不匹配' });
  // }

  // 假设你保存用户信息到一个数组中
  users.push({userschool,usertype,username,userpswd,confirmPassword});
  // return res

  return res.status(201).json({ message: '注册成功' });
});



// 登录接口
app.post('/login', (req, res) => {
  const { usertype, username, password } = req.body;

  // if (!usertype || !username || !password) {
  //   return res.status(400).json({ message: '所有字段都是必填的' });
  // }

  // 在这里你可以编写代码来验证用户信息
  // 假设你的用户信息存储在users数组中
  // const user = users.find(u => u.usertype === usertype && u.userpswd === password);

  // if (!user) {
  //   return res.status(401).json({ message: '登录失败，用户不存在或密码不正确' });
  // }
  return res.status(200).json({
    message: '登录成功',
    usertype,
    username,
  });

  // return res.status(200).json({ message: '登录成功' });
});

// 各平台相关数据接口
app.get('/platformdata',(req,res)=>{
  const platformdata = [
    {
      number: 11111,
      notes:'收集到来自bilibili的数据'
    },
    {
      number: 11111,
      notes:'收集到来自bilibili的数据'
    },
    {
      number: 11111,
      notes:'收集到来自bilibili的数据'
    },
    {
      number: 11111,
      notes:'收集到来自bilibili的数据'
    },
    {
      number: 11111,
      notes:'收集到来自bilibili的数据'
    },
    {
      number: 11111,
      notes:'收集到来自bilibili的数据'
    }
  ]
  res.json(platformdata)
})


// 浏览量接口
app.get('/views',(req, res)=>{
  const data = [12, 43, 56, 2, 4, 123, 56, 23, 23, 0, 23, 2];
  res.json(data);
  // return res.json({
  //   // message: '请求数据成功',
  //   data
  // });
})

// 访客数据
app.get('/visitrecord', (req, res) => {
  const visitRecords = [
    {
      date: '2023-05-03',
      name: '张伟',
      count: 1,
      school: '电子科技大学',
    },
    {
      date: '2023-05-02',
      name: '张伟',
      count: 1,
      school: '电子科技大学',
    },
    {
      date: '2023-05-04',
      name: '张伟',
      count: 1,
      school: '电子科技大学',
    },
    {
      date: '2023-05-01',
      name: '张伟',
      count: 1,
      school: '电子科技大学',
    },
    {
      date: '2023-05-08',
      name: '张伟',
      count: 1,
      school: '电子科技大学',
    },
    {
      date: '2023-05-06',
      name: '张伟',
      count: 1,
      school: '电子科技大学',
    },
    {
      date: '2023-05-07',
      name: '张伟',
      count: 1,
      school: '电子科技大学',
    },
  ];
  res.json(visitRecords);
});


// 获取管理大屏数据
app.get('/screendata', (req, res) => {
  const screendata = [
    {
      id:1,
      topic: '考研缩招',
      clicks: 178,
      type: '社科',
      value: true,
    },
    {
      id:2,
      clicks: 178,
      topic: '元宇宙',
      type: '科技',
      value: true,
    },
    {
      id:3,
      clicks: 178,
      topic: '虚拟货币',
      type: '科技',
      value: true,
    },
    {
      id:4,
      clicks: 178,
      topic: 'web3.0',
      type: '科技',
      value: true,
    },
    {
      id:5,
      clicks: 178,
      topic: '电子科大',
      type: '学校专属定制',
      value: true,
    }
  ];
  res.json(screendata);
});


// 更改管理大屏数据
app.post('/screenadmin',(req,res)=>{
  const { topic,showSwitch } = req.body;
  return res.status(200).json({ message: '登录成功' });

})


// 科技
app.use('/echarts-data/2', async (req, res) => {
    // 数据
    const data = {
        // 热点话题
        data_tech_topic:{
            text:'20世纪70年代到95年代出现了大量的开放性多人游戏，游戏本身的开放世界形成了元宇宙的早期基础。2003年，游戏《Second Life》发布，它在理念上给大家部分解放了现实世界所面临的窘境，大家在现实世界中不能快速调整自己的身份',
            num_forward:1000,
            num_comment:2000,
            num_like:3000,
            platform:'新华社'
        },
        data_tech_l2:{
            header: ["账号名", "粉丝数", "用户类型", "转发时间", "二次转发"],
            data: [
                { rank: 1, details: ["张三", "300", "普通用户", "2023-9-19", "11"] },
                { rank: 2, details: ["李道勋", "300", "普通用户", "2023-9-19", "2"] },
                { rank: 3, details: ["张三", "300", "普通用户", "2023-9-19", "3"] },
                { rank: 4, details: ["李四", "300", "普通用户", "2023-9-19", "24"] },
                { rank: 5, details: ["张三", "300", "普通用户", "2023-9-19", "5"] },
                { rank: 6, details: ["张三", "300", "普通用户", "2023-9-19", "6"] },
                { rank: 7, details: ["张三", "300", "普通用户", "2023-9-19", "17"] },
                { rank: 8, details: ["王五", "300", "普通用户", "2023-9-19", "8"] },
                { rank: 9, details: ["王五", "300", "普通用户", "2023-9-19", "8"] },
                { rank: 10, details: ["王五", "300", "普通用户", "2023-9-19", "8"] },
            ]
        },
        // 话题情感数据
        data_tech_l3:{
            title:"话题情感分析",
            value:[
                { value: 1048, name: '消极' },
                { value: 735, name: '积极' },
                { value: 580, name: '中立' },
            ]
        },
        // 关键节点数据
        data_tech_m1: {
            title:'关键节点发现',
            data:{
                "nodes": [
                    {
                        "id": "0",
                        "name": "Myriel",
                        "symbolSize": 19.12381,
                        "x": -266.82776,
                        "y": 199.6904,
                        "value": 28.685715,
                        "category": 0
                    },
                    {
                        "id": "1",
                        "name": "Napoleon",
                        "symbolSize": 2.6666666666666665,
                        "x": -418.08344,
                        "y": 346.8853,
                        "value": 4,
                        "category": 0
                    },
                    {
                        "id": "2",
                        "name": "MlleBaptistine",
                        "symbolSize": 6.323809333333333,
                        "x": -212.76357,
                        "y": 145.29176,
                        "value": 9.485714,
                        "category": 1
                    },
                    {
                        "id": "3",
                        "name": "MmeMagloire",
                        "symbolSize": 6.323809333333333,
                        "x": -242.82404,
                        "y": 135.26283,
                        "value": 9.485714,
                        "category": 1
                    },
                    {
                        "id": "4",
                        "name": "CountessDeLo",
                        "symbolSize": 2.6666666666666665,
                        "x": -379.30386,
                        "y": 329.06424,
                        "value": 4,
                        "category": 0
                    },
                    {
                        "id": "5",
                        "name": "Geborand",
                        "symbolSize": 2.6666666666666665,
                        "x": -417.26337,
                        "y": 306.03506,
                        "value": 4,
                        "category": 0
                    },
                    {
                        "id": "6",
                        "name": "Champtercier",
                        "symbolSize": 2.6666666666666665,
                        "x": -332.6012,
                        "y": 385.16974,
                        "value": 4,
                        "category": 0
                    },
                    {
                        "id": "7",
                        "name": "Cravatte",
                        "symbolSize": 2.6666666666666665,
                        "x": -382.69568,
                        "y": 375.09113,
                        "value": 4,
                        "category": 0
                    },
                    {
                        "id": "8",
                        "name": "Count",
                        "symbolSize": 2.6666666666666665,
                        "x": -320.384,
                        "y": 287.17325,
                        "value": 4,
                        "category": 0
                    },
                    {
                        "id": "9",
                        "name": "OldMan",
                        "symbolSize": 2.6666666666666665,
                        "x": -344.39832,
                        "y": 451.16772,
                        "value": 4,
                        "category": 0
                    },
                    {
                        "id": "10",
                        "name": "Labarre",
                        "symbolSize": 2.6666666666666665,
                        "x": -89.34107,
                        "y": 134.56128,
                        "value": 4,
                        "category": 1
                    },
                    {
                        "id": "11",
                        "name": "Valjean",
                        "symbolSize": 26.66666666666667,
                        "x": -87.93029,
                        "y": -6.8120565,
                        "value": 100,
                        "category": 1
                    },
                    {
                        "id": "12",
                        "name": "Marguerite",
                        "symbolSize": 4.495239333333333,
                        "x": -339.77908,
                        "y": -184.69139,
                        "value": 6.742859,
                        "category": 1
                    },
                    {
                        "id": "13",
                        "name": "MmeDeR",
                        "symbolSize": 2.6666666666666665,
                        "x": -194.31313,
                        "y": 178.55301,
                        "value": 4,
                        "category": 1
                    },
                    {
                        "id": "14",
                        "name": "Isabeau",
                        "symbolSize": 2.6666666666666665,
                        "x": -158.05168,
                        "y": 201.99768,
                        "value": 4,
                        "category": 1
                    },
                    {
                        "id": "15",
                        "name": "Gervais",
                        "symbolSize": 2.6666666666666665,
                        "x": -127.701546,
                        "y": 242.55057,
                        "value": 4,
                        "category": 1
                    },
                    {
                        "id": "16",
                        "name": "Tholomyes",
                        "symbolSize": 17.295237333333333,
                        "x": -385.2226,
                        "y": -393.5572,
                        "value": 25.942856,
                        "category": 2
                    },
                    {
                        "id": "17",
                        "name": "Listolier",
                        "symbolSize": 13.638097333333334,
                        "x": -516.55884,
                        "y": -393.98975,
                        "value": 20.457146,
                        "category": 2
                    },
                    {
                        "id": "18",
                        "name": "Fameuil",
                        "symbolSize": 13.638097333333334,
                        "x": -464.79382,
                        "y": -493.57944,
                        "value": 20.457146,
                        "category": 2
                    },
                    {
                        "id": "19",
                        "name": "Blacheville",
                        "symbolSize": 13.638097333333334,
                        "x": -515.1624,
                        "y": -456.9891,
                        "value": 20.457146,
                        "category": 2
                    },
                    {
                        "id": "20",
                        "name": "Favourite",
                        "symbolSize": 13.638097333333334,
                        "x": -408.12122,
                        "y": -464.5048,
                        "value": 20.457146,
                        "category": 2
                    },
                    {
                        "id": "21",
                        "name": "Dahlia",
                        "symbolSize": 13.638097333333334,
                        "x": -456.44113,
                        "y": -425.13303,
                        "value": 20.457146,
                        "category": 2
                    },
                    {
                        "id": "22",
                        "name": "Zephine",
                        "symbolSize": 13.638097333333334,
                        "x": -459.1107,
                        "y": -362.5133,
                        "value": 20.457146,
                        "category": 2
                    },
                    {
                        "id": "23",
                        "name": "Fantine",
                        "symbolSize": 28.266666666666666,
                        "x": -313.42786,
                        "y": -289.44803,
                        "value": 42.4,
                        "category": 2
                    },
                    {
                        "id": "24",
                        "name": "MmeThenardier",
                        "symbolSize": 20.95238266666667,
                        "x": 4.6313396,
                        "y": -273.8517,
                        "value": 31.428574,
                        "category": 7
                    },
                    {
                        "id": "25",
                        "name": "Thenardier",
                        "symbolSize": 30.095235333333335,
                        "x": 82.80825,
                        "y": -203.1144,
                        "value": 45.142853,
                        "category": 7
                    },
                    {
                        "id": "26",
                        "name": "Cosette",
                        "symbolSize": 20.95238266666667,
                        "x": 78.64646,
                        "y": -31.512747,
                        "value": 31.428574,
                        "category": 6
                    },
                    {
                        "id": "27",
                        "name": "Javert",
                        "symbolSize": 31.923806666666668,
                        "x": -81.46074,
                        "y": -204.20204,
                        "value": 47.88571,
                        "category": 7
                    },
                    {
                        "id": "28",
                        "name": "Fauchelevent",
                        "symbolSize": 8.152382000000001,
                        "x": -225.73984,
                        "y": 82.41631,
                        "value": 12.228573,
                        "category": 4
                    },
                    {
                        "id": "29",
                        "name": "Bamatabois",
                        "symbolSize": 15.466666666666667,
                        "x": -385.6842,
                        "y": -20.206686,
                        "value": 23.2,
                        "category": 3
                    },
                    {
                        "id": "30",
                        "name": "Perpetue",
                        "symbolSize": 4.495239333333333,
                        "x": -403.92447,
                        "y": -197.69823,
                        "value": 6.742859,
                        "category": 2
                    },
                    {
                        "id": "31",
                        "name": "Simplice",
                        "symbolSize": 8.152382000000001,
                        "x": -281.4253,
                        "y": -158.45137,
                        "value": 12.228573,
                        "category": 2
                    },
                    {
                        "id": "32",
                        "name": "Scaufflaire",
                        "symbolSize": 2.6666666666666665,
                        "x": -122.41348,
                        "y": 210.37503,
                        "value": 4,
                        "category": 1
                    },
                    {
                        "id": "33",
                        "name": "Woman1",
                        "symbolSize": 4.495239333333333,
                        "x": -234.6001,
                        "y": -113.15067,
                        "value": 6.742859,
                        "category": 1
                    },
                    {
                        "id": "34",
                        "name": "Judge",
                        "symbolSize": 11.809524666666666,
                        "x": -387.84915,
                        "y": 58.7059,
                        "value": 17.714287,
                        "category": 3
                    },
                    {
                        "id": "35",
                        "name": "Champmathieu",
                        "symbolSize": 11.809524666666666,
                        "x": -338.2307,
                        "y": 87.48405,
                        "value": 17.714287,
                        "category": 3
                    },
                    {
                        "id": "36",
                        "name": "Brevet",
                        "symbolSize": 11.809524666666666,
                        "x": -453.26874,
                        "y": 58.94648,
                        "value": 17.714287,
                        "category": 3
                    },
                    {
                        "id": "37",
                        "name": "Chenildieu",
                        "symbolSize": 11.809524666666666,
                        "x": -386.44904,
                        "y": 140.05937,
                        "value": 17.714287,
                        "category": 3
                    },
                    {
                        "id": "38",
                        "name": "Cochepaille",
                        "symbolSize": 11.809524666666666,
                        "x": -446.7876,
                        "y": 123.38005,
                        "value": 17.714287,
                        "category": 3
                    },
                    {
                        "id": "39",
                        "name": "Pontmercy",
                        "symbolSize": 6.323809333333333,
                        "x": 336.49738,
                        "y": -269.55914,
                        "value": 9.485714,
                        "category": 6
                    },
                    {
                        "id": "40",
                        "name": "Boulatruelle",
                        "symbolSize": 2.6666666666666665,
                        "x": 29.187843,
                        "y": -460.13132,
                        "value": 4,
                        "category": 7
                    },
                    {
                        "id": "41",
                        "name": "Eponine",
                        "symbolSize": 20.95238266666667,
                        "x": 238.36697,
                        "y": -210.00926,
                        "value": 31.428574,
                        "category": 7
                    },
                    {
                        "id": "42",
                        "name": "Anzelma",
                        "symbolSize": 6.323809333333333,
                        "x": 189.69513,
                        "y": -346.50662,
                        "value": 9.485714,
                        "category": 7
                    },
                    {
                        "id": "43",
                        "name": "Woman2",
                        "symbolSize": 6.323809333333333,
                        "x": -187.00418,
                        "y": -145.02663,
                        "value": 9.485714,
                        "category": 6
                    },
                    {
                        "id": "44",
                        "name": "MotherInnocent",
                        "symbolSize": 4.495239333333333,
                        "x": -252.99521,
                        "y": 129.87549,
                        "value": 6.742859,
                        "category": 4
                    },
                    {
                        "id": "45",
                        "name": "Gribier",
                        "symbolSize": 2.6666666666666665,
                        "x": -296.07935,
                        "y": 163.11964,
                        "value": 4,
                        "category": 4
                    },
                
                ],
                "links": [
                    {
                        "source": "1",
                        "target": "0"
                    },
                    {
                        "source": "2",
                        "target": "0"
                    },
                    {
                        "source": "3",
                        "target": "0"
                    },
                    {
                        "source": "3",
                        "target": "2"
                    },
                    {
                        "source": "4",
                        "target": "0"
                    },
                    {
                        "source": "5",
                        "target": "0"
                    },
                    {
                        "source": "6",
                        "target": "0"
                    },
                    {
                        "source": "7",
                        "target": "0"
                    },
                    {
                        "source": "8",
                        "target": "0"
                    },
                    {
                        "source": "9",
                        "target": "0"
                    },
                    {
                        "source": "11",
                        "target": "0"
                    },
                    {
                        "source": "11",
                        "target": "2"
                    },
                    {
                        "source": "11",
                        "target": "3"
                    },
                    {
                        "source": "11",
                        "target": "10"
                    },
                    {
                        "source": "12",
                        "target": "11"
                    },
                    {
                        "source": "13",
                        "target": "11"
                    },
                    {
                        "source": "14",
                        "target": "11"
                    },
                    {
                        "source": "15",
                        "target": "11"
                    },
                    {
                        "source": "17",
                        "target": "16"
                    },
                    {
                        "source": "18",
                        "target": "16"
                    },
                    {
                        "source": "18",
                        "target": "17"
                    },
                    {
                        "source": "19",
                        "target": "16"
                    },
                    {
                        "source": "19",
                        "target": "17"
                    },
                    {
                        "source": "19",
                        "target": "18"
                    },
                    {
                        "source": "20",
                        "target": "16"
                    },
                    {
                        "source": "20",
                        "target": "17"
                    },
                    {
                        "source": "20",
                        "target": "18"
                    },
                    {
                        "source": "20",
                        "target": "19"
                    },
                    {
                        "source": "21",
                        "target": "16"
                    },
                    {
                        "source": "21",
                        "target": "17"
                    },
                    {
                        "source": "21",
                        "target": "18"
                    },
                    {
                        "source": "21",
                        "target": "19"
                    },
                    {
                        "source": "21",
                        "target": "20"
                    },
                    {
                        "source": "22",
                        "target": "16"
                    },
                    {
                        "source": "22",
                        "target": "17"
                    },
                    {
                        "source": "22",
                        "target": "18"
                    },
                    {
                        "source": "22",
                        "target": "19"
                    },
                    {
                        "source": "22",
                        "target": "20"
                    },
                    {
                        "source": "22",
                        "target": "21"
                    },
                    {
                        "source": "23",
                        "target": "11"
                    },
                    {
                        "source": "23",
                        "target": "12"
                    },
                    {
                        "source": "23",
                        "target": "16"
                    },
                    {
                        "source": "23",
                        "target": "17"
                    },
                    {
                        "source": "23",
                        "target": "18"
                    },
                    {
                        "source": "23",
                        "target": "19"
                    },
                    {
                        "source": "23",
                        "target": "20"
                    },
                    {
                        "source": "23",
                        "target": "21"
                    },
                    {
                        "source": "23",
                        "target": "22"
                    },
                    {
                        "source": "24",
                        "target": "11"
                    },
                    {
                        "source": "24",
                        "target": "23"
                    },
                    {
                        "source": "25",
                        "target": "11"
                    },
                    {
                        "source": "25",
                        "target": "23"
                    },
                    {
                        "source": "25",
                        "target": "24"
                    },
                    {
                        "source": "26",
                        "target": "11"
                    },
                    {
                        "source": "26",
                        "target": "16"
                    },
                    {
                        "source": "26",
                        "target": "24"
                    },
                    {
                        "source": "26",
                        "target": "25"
                    },
                    {
                        "source": "27",
                        "target": "11"
                    },
                    {
                        "source": "27",
                        "target": "23"
                    },
                    {
                        "source": "27",
                        "target": "24"
                    },
                    {
                        "source": "27",
                        "target": "25"
                    },
                    {
                        "source": "27",
                        "target": "26"
                    },
                    {
                        "source": "28",
                        "target": "11"
                    },
                    {
                        "source": "28",
                        "target": "27"
                    },
                    {
                        "source": "29",
                        "target": "11"
                    },
                    {
                        "source": "29",
                        "target": "23"
                    },
                    {
                        "source": "29",
                        "target": "27"
                    },
                    {
                        "source": "30",
                        "target": "23"
                    },
                    {
                        "source": "31",
                        "target": "11"
                    },
                    {
                        "source": "31",
                        "target": "23"
                    },
                    {
                        "source": "31",
                        "target": "27"
                    },
                    {
                        "source": "31",
                        "target": "30"
                    },
                    {
                        "source": "32",
                        "target": "11"
                    },
                    {
                        "source": "33",
                        "target": "11"
                    },
                    {
                        "source": "33",
                        "target": "27"
                    },
                    {
                        "source": "34",
                        "target": "11"
                    },
                    {
                        "source": "34",
                        "target": "29"
                    },
                    {
                        "source": "35",
                        "target": "11"
                    },
                    {
                        "source": "35",
                        "target": "29"
                    },
                    {
                        "source": "35",
                        "target": "34"
                    },
                    {
                        "source": "36",
                        "target": "11"
                    },
                    {
                        "source": "36",
                        "target": "29"
                    },
                    {
                        "source": "36",
                        "target": "34"
                    },
                    {
                        "source": "36",
                        "target": "35"
                    },
                    {
                        "source": "37",
                        "target": "11"
                    },
                    {
                        "source": "37",
                        "target": "29"
                    },
                    {
                        "source": "37",
                        "target": "34"
                    },
                    {
                        "source": "37",
                        "target": "35"
                    },
                    {
                        "source": "37",
                        "target": "36"
                    },
                    {
                        "source": "38",
                        "target": "11"
                    },
                    {
                        "source": "38",
                        "target": "29"
                    },
                    {
                        "source": "38",
                        "target": "34"
                    },
                    {
                        "source": "38",
                        "target": "35"
                    },
                    {
                        "source": "38",
                        "target": "36"
                    },
                    {
                        "source": "38",
                        "target": "37"
                    },
                    {
                        "source": "39",
                        "target": "25"
                    },
                    {
                        "source": "40",
                        "target": "25"
                    },
                    {
                        "source": "41",
                        "target": "24"
                    },
                    {
                        "source": "41",
                        "target": "25"
                    },
                    {
                        "source": "42",
                        "target": "24"
                    },
                    {
                        "source": "42",
                        "target": "25"
                    },
                    {
                        "source": "42",
                        "target": "41"
                    },
                    {
                        "source": "43",
                        "target": "11"
                    },
                    {
                        "source": "43",
                        "target": "26"
                    },
                    {
                        "source": "43",
                        "target": "27"
                    },
                    {
                        "source": "44",
                        "target": "11"
                    },          
                ],
                "categories": [
                    {
                        "name": "A"
                    },
                    {
                        "name": "B"
                    },
                    {
                        "name": "C"
                    },
                    {
                        "name": "D"
                    },
                    {
                        "name": "E"
                    },
                    {
                        "name": "F"
                    },
                    {
                        "name": "G"
                    },
                    {
                        "name": "H"
                    }
                ]
            },
            
        },
        // 情感话题热度趋势
        data_tech_m2: {
            title:"热度话题变化趋势",
            name:'转发量',
            value:[
                {name:'一月',data:150},
                {name:'二月',data:280},
                {name:'三月',data:220},
                {name:'四月',data:215},
                {name:'五月',data:135},
                {name:'六月',data:140},
                {name:'七月',data:260},

            ]
        },
        // 用户年龄趋势图数据
        data_tech_r11:{
            title:'用户年龄',
            value:[
                {name: "<15", data: 120},
                {name: "15-18", data: 200},
                {name: "18-30", data: 150},
                {name: "30-45", data: 80},
                {name: ">45", data: 70},
            ]
        },

        // 用户类别数据
        data_tech_r12:{
            title: '用户类别',
            value:[
                {
                  value: [4200, 3000, 20000, 35000, 50000],
                  name: '知乎'
                },
                {
                  value: [5000, 14000, 28000, 26000, 42000, 21000],
                  name: '贴吧'
                },
                {
                  value: [3000, 1000, 21000, 2600, 42300, 2200],
                  name: '微博'
                },
                {
                  value: [5030, 4000, 18000, 20000, 12000, 31000],
                  name: '清水河畔'
                },
                {
                  value: [3000, 4000, 18000, 29000, 40000, 23000],
                  name: 'B站'
                }
            ],
            indicator:[
                { name: '个体认证', max: 6500 },
                { name: '达人', max: 16000 },
                { name: '普通用户', max: 30000 },
                { name: '大V', max: 38000 },
                { name: '公号', max: 52000 },
            ]
        },

        // 用户性别
        data_tech_r13:{
            title: '用户性别',
            data: [
                { value: 1048, name: '男' },
                { value: 735, name: '女' },
            ]
        },

        // 用户分布来源
        data_tech_r2:{
            title:'用户分布来源',
            data: [
                { name: '北京', value: 17 },
                { name: '天津', value: 12 },
                { name: '上海', value: 15 },
                { name: '重庆', value: 15 },
                { name: '河北', value: 15 },
                { name: '河南', value: 15 },
                { name: '云南', value: 5 },
                { name: '辽宁', value: 15 },
                { name: '黑龙江', value: 15 },
                { name: '湖南', value: 2 },
                { name: '安徽', value: 15 },
                { name: '山东', value: 15 },
                { name: '新疆', value: 3 },
                { name: '江苏', value: 3 },
                { name: '浙江', value: 9 },
                { name: '江西', value: 15 },
                { name: '湖北', value: 4 },
                { name: '广西', value: 4 },
                { name: '甘肃', value: 10 },
                { name: '山西', value: 15 },
                { name: '内蒙古', value: 15 },
                { name: '陕西', value: 9 },
                { name: '吉林', value: 8 },
                { name: '福建', value: 9 },
                { name: '贵州', value: 9 },
                { name: '广东', value: 8 },
                { name: '青海', value: 3 },
                { name: '西藏', value: 9 },
                { name: '四川', value: 0 },
                { name: '宁夏', value: 15 },
                { name: '海南', value: 7 },
                { name: '台湾', value: 4 },
                { name: '香港', value: 4 },
                { name: '澳门', value: 3 }
            ]
        }

    }

    res.json(data)
});

// 学校
app.use('/school',async(req,res)=>{
  const data = {
    // 热门舆情数据
    data_opinion:
        [
            {mood:'正向',text:"电子科技大学好好好"},
            {mood:'负向',text:"电子科技大学坏坏坏"},
            {mood:'正向',text:"电子科技大学好好好"},
            {mood:'正向',text:"电子科技大学好好好"},
            {mood:'中性',text:"电子科技大学1111"},
            {mood:'正向',text:"电子科技大学好好好"},
            {mood:'正向',text:"电子科技大学好好好"},
            {mood:'中性',text:"电子科技大学1111"},
            {mood:'负向',text:"电子科技大学坏坏坏"},
            {mood:'中性',text:"电子科技大学1111"},
            {mood:'正向',text:"电子科技大学好好好"},
            {mood:'中性',text:"电子科技大学1111"},
            {mood:'负向',text:"电子科技大学坏坏坏"},
        ]
    ,
    // 本校热词数据
    data_school_l1:{
        title:"本校热词",
        nodes: [
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
    },

    // 校内情感数据
    data_school_l21:{
        title:'本校情感占比',
        value:[
            { value: 1048, name: '积极' },
            { value: 735, name: '消极' },
            { value: 580, name: '中立' },
        ]
    },

    // 校外情感数据
    data_school_l22:{
        title:'外校情感占比',
        value:[
            { value: 148, name: '积极' },
            { value: 635, name: '消极' },
            { value: 520, name: '中立' },
        ]
    },

    // 情感走向
    data_school_m22:{
        title:"情感走向",
        name:"积极值",
        value:[
            {value:100,name:'1月'},
            {value:140,name:'2月'},
            {value:230,name:'3月'},
            {value:100,name:'4月'},
            {value:120,name:'5月'},
            {value:150,name:'6月'},
        ]
    },

    // 校内外占比
    data_school_r11:{
        title:'校内外占比',
        name:'评论人数',
        value:[
            { value: 1048, name: '校外' },
            { value: 735, name: '校内' },
        ]
    },

    // 关注度阶段比例
    data_school_r12:{
        title:"阶段比例",
        value:[
            {name:'大一',data:120},
            {name:'大二',data:200},
            {name:'大三',data:150},
            {name:'大四',data:80},
            {name:'研究生',data:70},
        ]
    },

    // 用户来源
    data_school_r13:{
        title:"用户来源",
        value:[
            {name:"清水河畔",data:50},
            {name:"贴吧",data:44},
            {name:"B站",data:80},
            {name:"知乎",data:57},
            {name:"微博",data:18},
        ]
    },

    // 男女比例
    data_school_r14:{
        title:"男女比例",
        name:"评论人数",
        value:[
            { value: 1048, name: '男' },
            { value: 735, name: '女' },
        ]
    },

    // 校内外用户画像
    data_school_r2:{
        title:"校外用户画像",
        value:[
            { value: 1048, name: '中小学生' },
            { value: 735, name: '大学生' },
            { value: 580, name: '教师' },
            { value: 680, name: '其他' },
        ]
    }


  }
  res.json(data)
})

app.get('/echarts-data/1',(req,res)=>{
    const data={
        hotList : [
            { name: "知乎", rank: 2 },
            { name: "微博", rank: 1 },
            { name: "bilibili", rank: 3 },
            { name: "贴吧", rank: 4 },
            { name: "清水河畔", rank: 5 },
          ],
        l1_data : {
            title: "考研学校热度排行榜",
            value: [
              { name: "武汉大学", data: 120 },
              { name: "北京大学", data: 200 },
              { name: "清华大学", data: 150 },
              { name: "上海交大", data: 80 },
              { name: "复旦大学", data: 70 },
              { name: "人民大学", data: 40 },
              { name: "哈工大", data: 20 },
            ],
          },
        wordCloud_data:{
            title:"考研缩招话题词云",
            value:[
                  { name: "考研", value: 999 },
                  { name: "考研缩招", value: 476 },
                  { name: "国家线", value: 406 },
                  { name: "高考化", value: 376 },
                  { name: "反向考研", value: 326 },
                  { name: "报名人数", value: 570 },
                  { name: "专硕热", value: 221 },
                  { name: "卷", value: 299 },
                  { name: "研究生", value: 142 },
                  { name: "报名", value: 106 },
                  { name: "上岸", value: 56 },
                  { name: "计算机", value: 23 },
                  { name: "肖秀荣", value: 52 },
                  { name: "公务员", value: 14 },
                  { name: "留学", value: 43 },
                  { name: "保研", value: 114 },
                  { name: "工作", value: 88 },
                  { name: "英语", value: 314 },
                  { name: "专硕", value: 214 },
                  { name: "学硕", value: 414 },
                  { name: "华五", value: 324 },
                  { name: "985", value: 374 },
                  { name: "复试", value: 374 },
                  { name: "调剂", value: 274 },
                  { name: "吗喽", value: 16 },
                  { name: "吗喽", value: 16 },
                  { name: "吗喽", value: 26 },
                  { name: "吗喽", value: 11 },
                  { name: "吗喽", value: 87 },
                  { name: "吗喽", value: 27 },
                  { name: "吗喽", value: 65 },
                  { name: "吗喽", value: 87 },
                  { name: "吗喽", value: 87 },
                  { name: "吗喽", value: 17 },
                ]
          },
        m2_data:{
            title:"考研缩招关键词变化趋势",
            value: [
              { name: "考研", data: [100, 140, 230, 100, 120, 146] },
              { name: "考研缩招", data: [150, 100, 200, 140, 100, 87] },
              { name: "反向考研", data: [190, 212, 181, 202, 218, 197] },
            ]
          },
        hotMap:{
            title:"考研缩招话题热度分布地图",
            value:[
            { name: "北京", value: 1254 },
            { name: "天津", value: 1 },
            { name: "上海", value: 4390 },
            { name: "重庆", value: 1 },
            { name: "河北", value: 1 },
            { name: "河南", value: 1 },
            { name: "云南", value: 1 },
            { name: "辽宁", value: 1 },
            { name: "黑龙江", value: 1 },
            { name: "湖南", value: 1 },
            { name: "安徽", value: 1 },
            { name: "山东", value: 2450 },
            { name: "新疆", value: 1150 },
            { name: "江苏", value: 1 },
            { name: "浙江", value: 1 },
            { name: "江西", value: 1 },
            { name: "湖北", value: 1 },
            { name: "广西", value: 1 },
            { name: "甘肃", value: 1 },
            { name: "山西", value: 1 },
            { name: "内蒙古", value: 1 },
            { name: "陕西", value: 1 },
            { name: "吉林", value: 1 },
            { name: "福建", value: 1 },
            { name: "贵州", value: 1 },
            { name: "广东", value: 3990 },
            { name: "青海", value: 1 },
            { name: "西藏", value: 1 },
            { name: "四川", value: 3990 },
            { name: "宁夏", value: 1 },
            { name: "海南", value: 1 },
            { name: "台湾", value: 1 },
            { name: "香港", value: 1 },
            { name: "澳门", value: 1 },
          ]
          },
        r1_data:{
            title: "本校考研缩招热门词条",
            value: [
              { name: "电子科大", data: 100 },
              { name: "考研缩招", data: 140 },
              { name: "考研", data: 230 },
              { name: "录取人数", data: 100 },
              { name: "学习", data: 130 },
            ],
          },
        hotRT :[
            {
              text: "告诉大家一个不太幸运等消息，由于不可抗力原因校区被迫改建，今年部分专业可能会缩招。",
              path: "新浪微博7-15 11:03来自华东政达大学超话",
              rank: 1,
            },
            {
              text: "告诉大家一个不太幸运等消息，由于不可抗力原因校区被迫改建，今年部分专业可能会缩招。",
              path: "新浪微博7-1622:34转发自iPhone 12",
              rank: 2,
            },
            {
              text: "最近很多学校内部都发布了今年考研的政策改革，包括换书，扩招，缩招等，二战被迫换学校真难受",
              path: "新浪微博8-31 12:49来自Redmi 9A",
              rank: 3,
            },
            {
              text: "最近很多学校内部都发布了今年考研的政策改革，包括换书，扩招，缩招等，二战被迫换学校真难受",
              path: "新浪微博9-0116:41转发自OPPO",
              rank: 4,
            },
            {
              text: "其实缩招才是趋势，考研不能向高考看，培养一位合格的研究生成本太高了",
              path: "Bilibili 3-5",
              rank: 5,
            },
            {
              text: "其实缩招才是趋势，考研不能向高考看，培养一位合格的研究生成本太高了",
              path: "Bilibili 3-7转发自iPhone 14",
              rank: 6,
            },
          ]
    }
    res.json(data)
})
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

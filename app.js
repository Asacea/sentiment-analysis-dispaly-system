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
      detail:'2022年考研报名人数457万，按照合理的预测，2023年考研人数极有可能突破500万。值得注意的是，在教育部最新公布的统计公报中，2021年我国高考本科招生人数为444.6万人，与2022年考研报名人数总体大致相当。若此时考研缩招，无疑意味着考研难度的再次升级。'
    },
    {
      id:2,
      clicks: 178,
      topic: '元宇宙',
      type: '科技',
      value: true,
      detail:'2022年考研报名人数457万，按照合理的预测，2023年考研人数极有可能突破500万。值得注意的是，在教育部最新公布的统计公报中，2021年我国高考本科招生人数为444.6万人，与2022年考研报名人数总体大致相当。若此时考研缩招，无疑意味着考研难度的再次升级。'
    },
    {
      id:3,
      clicks: 178,
      topic: 'web3.0',
      type: '科技',
      value: true,
      detail:'2022年考研报名人数457万，按照合理的预测，2023年考研人数极有可能突破500万。值得注意的是，在教育部最新公布的统计公报中，2021年我国高考本科招生人数为444.6万人，与2022年考研报名人数总体大致相当。若此时考研缩招，无疑意味着考研难度的再次升级。'
    },
    {
      id:4,
      clicks: 178,
      topic: '电子科大',
      type: '学校专属定制',
      value: true,
      detail:'2022年考研报名人数457万，按照合理的预测，2023年考研人数极有可能突破500万。值得注意的是，在教育部最新公布的统计公报中，2021年我国高考本科招生人数为444.6万人，与2022年考研报名人数总体大致相当。若此时考研缩招，无疑意味着考研难度的再次升级。'
    }
  ];
  res.json(screendata);
});


// 更改管理大屏数据
app.post('/screenadmin',(req,res)=>{
  const { id,showSwitch } = req.body;
  //这里存储数据，要同步修改上面的screendata
  return res.status(200).json({ message: '登录成功',data:id });

})


// 元宇宙数据
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

// Web3数据
app.use('/echarts-data/3', async (req, res) => {
    // 数据
    const data={
        l1_chart_data:{
            title:"关键推手",
            info:[
                {
                    name:"关注度",
                    data: [100, 130, 235, 150, 110, 80, 143, 120, 140, 100, 130, 90],
                },
                {
                    name: "讨论度",
                    data: [50, 100, 200, 140, 80, 60, 143, 170, 160, 70, 192, 70],
                },
            ],
            events:[
                {month:'3月',detail:'林俊杰买房被骗'},
                {month:'8月',detail:'林俊杰买房被骗'}
            ]
        },
        l2_chart_data:{
            title:"用户对抗网络模型",
            data:{
                femaleData:[
                [161.2, 51.6], [167.5, 59.0], [159.5, 49.2], [157.0, 63.0], [155.8, 53.6],
                [170.0, 59.0], [159.1, 47.6], [166.0, 69.8], [176.2, 66.8], [160.2, 75.2],
                [172.5, 55.2], [170.9, 54.2], [172.9, 62.5], [153.4, 42.0], [160.0, 50.0],
                [147.2, 49.8], [168.2, 49.2], [175.0, 73.2], [157.0, 47.8], [167.6, 68.8],
                [159.5, 50.6], [175.0, 82.5], [166.8, 57.2], [176.5, 87.8], [170.2, 72.8],
                [174.0, 54.5], [173.0, 59.8], [179.9, 67.3], [170.5, 67.8], [160.0, 47.0],
                [154.4, 46.2], [162.0, 55.0], [176.5, 83.0], [160.0, 54.4], [152.0, 45.8],
                [162.1, 53.6], [170.0, 73.2], [160.2, 52.1], [161.3, 67.9], [166.4, 56.6],
                [168.9, 62.3], [163.8, 58.5], [167.6, 54.5], [160.0, 50.2], [161.3, 60.3],
                [167.6, 58.3], [165.1, 56.2], [160.0, 50.2], [170.0, 72.9], [157.5, 59.8],
                [167.6, 61.0], [160.7, 69.1], [163.2, 55.9], [152.4, 46.5], [157.5, 54.3],
                [168.3, 54.8], [180.3, 60.7], [165.5, 60.0], [165.0, 62.0], [164.5, 60.3],
                [156.0, 52.7], [160.0, 74.3], [163.0, 62.0], [165.7, 73.1], [161.0, 80.0],
                [162.0, 54.7], [166.0, 53.2], [174.0, 75.7], [172.7, 61.1], [167.6, 55.7],
                [151.1, 48.7], [164.5, 52.3], [163.5, 50.0], [152.0, 59.3], [169.0, 62.5],
                [164.0, 55.7], [161.2, 54.8], [155.0, 45.9], [170.0, 70.6], [176.2, 67.2],
                [170.0, 69.4], [162.5, 58.2], [170.3, 64.8], [164.1, 71.6], [169.5, 52.8],
                [163.2, 59.8], [154.5, 49.0], [159.8, 50.0], [173.2, 69.2], [170.0, 55.9],
                [161.4, 63.4], [169.0, 58.2], [166.2, 58.6], [159.4, 45.7], [162.5, 52.2],
                [159.0, 48.6], [162.8, 57.8], [159.0, 55.6], [179.8, 66.8], [162.9, 59.4],
                [161.0, 53.6], [151.1, 73.2], [168.2, 53.4], [168.9, 69.0], [173.2, 58.4],
                [171.8, 56.2], [178.0, 70.6], [164.3, 59.8], [163.0, 72.0], [168.5, 65.2],
                [166.8, 56.6], [172.7, 105.2], [163.5, 51.8], [169.4, 63.4], [167.8, 59.0],
                [159.5, 47.6], [167.6, 63.0], [161.2, 55.2], [160.0, 45.0], [163.2, 54.0],
                [162.2, 50.2], [161.3, 60.2], [149.5, 44.8], [157.5, 58.8], [163.2, 56.4],
                [172.7, 62.0], [155.0, 49.2], [156.5, 67.2], [164.0, 53.8], [160.9, 54.4],
                [162.8, 58.0], [167.0, 59.8], [160.0, 54.8], [160.0, 43.2], [168.9, 60.5],
                [158.2, 46.4], [156.0, 64.4], [160.0, 48.8], [167.1, 62.2], [158.0, 55.5],
                [167.6, 57.8], [156.0, 54.6], [162.1, 59.2], [173.4, 52.7], [159.8, 53.2],
                [170.5, 64.5], [159.2, 51.8], [157.5, 56.0], [161.3, 63.6], [162.6, 63.2],
                [160.0, 59.5], [168.9, 56.8], [165.1, 64.1], [162.6, 50.0], [165.1, 72.3],
                [166.4, 55.0], [160.0, 55.9], [152.4, 60.4], [170.2, 69.1], [162.6, 84.5],
                [170.2, 55.9], [158.8, 55.5], [172.7, 69.5], [167.6, 76.4], [162.6, 61.4],
                [167.6, 65.9], [156.2, 58.6], [175.2, 66.8], [172.1, 56.6], [162.6, 58.6],
                [160.0, 55.9], [165.1, 59.1], [182.9, 81.8], [166.4, 70.7], [165.1, 56.8],
                [177.8, 60.0], [165.1, 58.2], [175.3, 72.7], [154.9, 54.1], [158.8, 49.1],
                [172.7, 75.9], [168.9, 55.0], [161.3, 57.3], [167.6, 55.0], [165.1, 65.5],
                [175.3, 65.5], [157.5, 48.6], [163.8, 58.6], [167.6, 63.6], [165.1, 55.2],
                [165.1, 62.7], [168.9, 56.6], [162.6, 53.9], [164.5, 63.2], [176.5, 73.6],
                [168.9, 62.0], [175.3, 63.6], [159.4, 53.2], [160.0, 53.4], [170.2, 55.0],
                [162.6, 70.5], [167.6, 54.5], [162.6, 54.5], [160.7, 55.9], [160.0, 59.0],
                [157.5, 63.6], [162.6, 54.5], [152.4, 47.3], [170.2, 67.7], [165.1, 80.9],
                [172.7, 70.5], [165.1, 60.9], [170.2, 63.6], [170.2, 54.5], [170.2, 59.1],
                [161.3, 70.5], [167.6, 52.7], [167.6, 62.7], [165.1, 86.3], [162.6, 66.4],
                [152.4, 67.3], [168.9, 63.0], [170.2, 73.6], [175.2, 62.3], [175.2, 57.7],
                [160.0, 55.4], [165.1, 104.1], [174.0, 55.5], [170.2, 77.3], [160.0, 80.5],
                [167.6, 64.5], [167.6, 72.3], [167.6, 61.4], [154.9, 58.2], [162.6, 81.8],
                [175.3, 63.6], [171.4, 53.4], [157.5, 54.5], [165.1, 53.6], [160.0, 60.0],
                [174.0, 73.6], [162.6, 61.4], [174.0, 55.5], [162.6, 63.6], [161.3, 60.9],
                [156.2, 60.0], [149.9, 46.8], [169.5, 57.3], [160.0, 64.1], [175.3, 63.6],
                [169.5, 67.3], [160.0, 75.5], [172.7, 68.2], [162.6, 61.4], [157.5, 76.8],
                [176.5, 71.8], [164.4, 55.5], [160.7, 48.6], [174.0, 66.4], [163.8, 67.3]
                ],
                maleDeta:[
                    [174.0, 65.6], [175.3, 71.8], [193.5, 80.7], [186.5, 72.6], [187.2, 78.8],
                [181.5, 74.8], [184.0, 86.4], [184.5, 78.4], [175.0, 62.0], [184.0, 81.6],
                [180.0, 76.6], [177.8, 83.6], [192.0, 90.0], [176.0, 74.6], [174.0, 71.0],
                [184.0, 79.6], [192.7, 93.8], [171.5, 70.0], [173.0, 72.4], [176.0, 85.9],
                [176.0, 78.8], [180.5, 77.8], [176.0, 86.4], [173.5, 81.8],
                [178.0, 89.6], [180.3, 82.8], [180.3, 76.4], [164.5, 63.2], [173.0, 60.9],
                [183.5, 74.8], [188.0, 72.4], [189.2, 84.1], [172.8, 69.1],
                [170.0, 59.5], [182.0, 67.2], [170.0, 61.3], [177.8, 68.6], [184.2, 80.1],
                [186.7, 87.8], [171.4, 84.7], [172.7, 73.4], [175.3, 72.1], [180.3, 82.6],
                [182.9, 88.7], [188.0, 84.1], [177.2, 94.1], [172.1, 74.9], [167.0, 59.1],
                [169.5, 75.6], [174.0, 86.2], [172.7, 75.3], [182.2, 87.1], [164.1, 55.2],
                [171.5, 61.4], [184.2, 76.8], [174.0, 86.8], [174.0, 72.2],
                [177.0, 71.6], [186.0, 84.8], [167.0, 68.2], [171.8, 66.1], [182.0, 72.0],
                [167.0, 64.6], [177.8, 74.8], [164.5, 70.0], [192.0, 101.6], [175.5, 63.2],
                [171.2, 79.1], [181.6, 78.9], [167.4, 67.7], [181.1, 66.0], [177.0, 68.2],
                [174.5, 63.9], [177.5, 72.0], [170.5, 56.8], [182.4, 74.5], [197.1, 90.9],
                [180.1, 93.0], [175.5, 80.9], [180.6, 72.7], [184.4, 68.0], [175.5, 70.9],
                [180.6, 72.5], [177.0, 72.5], [177.1, 83.4], [181.6, 75.5], [176.5, 73.0],
                [175.0, 70.2], [174.0, 73.4], [165.1, 70.5], [177.0, 68.9], [192.0, 102.3],
                [176.5, 68.4], [169.4, 65.9], [182.1, 75.7], [179.8, 84.5], [175.3, 87.7],
                [184.9, 86.4], [177.3, 73.2], [167.4, 53.9], [178.1, 72.0], [168.9, 55.5],
                [157.2, 58.4], [180.3, 83.2], [170.2, 72.7], [177.8, 64.1], [172.7, 72.3],
                [165.1, 65.0], [186.7, 86.4], [165.1, 65.0], [174.0, 88.6], [175.3, 84.1],
                [185.4, 66.8], [177.8, 75.5], [180.3, 93.2], [180.3, 82.7], [177.8, 58.0],
                [177.8, 79.5], [177.8, 78.6], [177.8, 71.8], [177.8, 116.4], [163.8, 72.2],
                [188.0, 83.6], [198.1, 85.5], [175.3, 90.9], [166.4, 85.9], [190.5, 89.1],
                [166.4, 75.0], [177.8, 77.7], [179.7, 86.4], [172.7, 90.9], [190.5, 73.6],
                [185.4, 76.4], [168.9, 69.1], [167.6, 84.5], [175.3, 64.5], [170.2, 69.1],
                [190.5, 108.6], [177.8, 86.4], [190.5, 80.9], [177.8, 87.7], [184.2, 94.5],
                [176.5, 80.2], [177.8, 72.0], [180.3, 71.4], [171.4, 72.7], [172.7, 84.1],
                [172.7, 76.8], [177.8, 63.6], [177.8, 80.9], [182.9, 80.9], [170.2, 85.5],
                [167.6, 68.6], [175.3, 67.7], [165.1, 66.4], [185.4, 102.3], [181.6, 70.5],
                [172.7, 95.9], [190.5, 84.1], [179.1, 87.3], [175.3, 71.8], [170.2, 65.9],
                [193.0, 95.9], [171.4, 91.4], [177.8, 81.8], [177.8, 96.8], [167.6, 69.1],
                [167.6, 82.7], [180.3, 75.5], [182.9, 79.5], [176.5, 73.6], [186.7, 91.8],
                [188.0, 84.1], [188.0, 85.9], [177.8, 81.8], [174.0, 82.5], [177.8, 80.5],
                [171.4, 70.0], [185.4, 81.8], [185.4, 84.1], [188.0, 90.5], [188.0, 91.4],
                [182.9, 89.1], [176.5, 85.0], [175.3, 69.1], [175.3, 73.6], [188.0, 80.5],
                [188.0, 82.7], [175.3, 86.4], [170.5, 67.7], [179.1, 92.7], [177.8, 93.6],
                [175.3, 70.9], [182.9, 75.0], [170.8, 93.2], [188.0, 93.2], [180.3, 77.7],
                [177.8, 61.4], [185.4, 94.1], [168.9, 75.0], [185.4, 83.6], [180.3, 85.5],
                [174.0, 73.9], [167.6, 66.8], [182.9, 87.3], [180.3, 88.6],
                [167.6, 75.5], [186.7, 101.4], [175.3, 91.1], [175.3, 67.3], [175.9, 77.7],
                [175.3, 81.8], [179.1, 75.5], [181.6, 84.5], [177.8, 76.6], [182.9, 85.0],
                [177.8, 102.5], [184.2, 77.3], [179.1, 71.8], [176.5, 87.9], [188.0, 94.3],
                [174.0, 70.9], [167.6, 64.5], [170.2, 77.3], [167.6, 72.3], [188.0, 87.3],
                [174.0, 80.0], [176.5, 82.3], [180.3, 73.6], [167.6, 74.1], [188.0, 85.9],
                [180.3, 73.2], [167.6, 76.3], [183.0, 65.9], [183.0, 90.9], [179.1, 89.1],
                [170.2, 62.3], [177.8, 82.7], [179.1, 79.1], [190.5, 98.2], [177.8, 84.1],
                [180.3, 83.2], [180.3, 83.2]
                ]
            }
        },
        m_chart_data:{
            title:'用户对抗网络模型',
            data:{
                type: "force",
                categories: [
                    {
                        name: "HTMLElement",
                        keyword: {},
                        base: "HTMLElement",
                        detail:'林俊杰买房'
                    },
                    {
                        name: "WebGL",
                        keyword: {},
                        base: "WebGLRenderingContext",
                        detail:'林俊杰卖房'
                    },
                    {
                        name: "SVG",
                        keyword: {},
                        base: "SVGElement",
                        detail:'林俊杰炒房'
                    },
                    {
                        name: "CSS",
                        keyword: {},
                        base: "CSSRule",
                        detail:'林俊杰被骗'
                    },
                    {
                        name: "Other",
                        keyword: {},
                        detail:'林俊杰痛改前非'
                    }
                ],
                nodes: [
                    {
                        name: "AnalyserNode",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "AudioNode",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "Uint8Array",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "Float32Array",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "ArrayBuffer",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "ArrayBufferView",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "Attr",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "Node",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "Element",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "AudioBuffer",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "AudioBufferCallback",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "AudioBufferSourceNode",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "AudioSourceNode",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "AudioGain",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "AudioParam",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "AudioContext",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "AudioDestinationNode",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "AudioListener",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "BiquadFilterNode",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "ChannelMergerNode",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "ChannelSplitterNode",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "ConvolverNode",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "DelayNode",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "DynamicsCompressorNode",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "GainNode",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "MediaElementAudioSourceNode",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "MediaStreamAudioDestinationNode",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "MediaStreamAudioSourceNode",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "OscillatorNode",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "PannerNode",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "ScriptProcessorNode",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "WaveShaperNode",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "WaveTable",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "CanvasRenderingContext",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "HTMLCanvasElement",
                        value: 1,
                        category: 0
                    },
                    {
                        name: "CanvasRenderingContext2D",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "ImageData",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "CanvasGradient",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "CanvasPattern",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "HTMLImageElement",
                        value: 1,
                        category: 0
                    },
                    {
                        name: "HTMLVideoElement",
                        value: 1,
                        category: 0
                    },
                    {
                        name: "TextMetrics",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "CDATASection",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "Text",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "CharacterData",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "ClientRectList",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "ClientRect",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "Clipboard",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "FileList",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "DataTransferItemList",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "Comment",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "Console",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "MemoryInfo",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "Crypto",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "CSSCharsetRule",
                        value: 1,
                        category: 3
                    },
                    {
                        name: "CSSRule",
                        value: 3,
                        category: 3
                    },
                    {
                        name: "CSSFontFaceRule",
                        value: 1,
                        category: 3
                    },
                    {
                        name: "CSSStyleDeclaration",
                        value: 1,
                        category: 3
                    },
                    {
                        name: "CSSImportRule",
                        value: 1,
                        category: 3
                    },
                    {
                        name: "MediaList",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "CSSStyleSheet",
                        value: 1,
                        category: 3
                    },
                    {
                        name: "CSSMediaRule",
                        value: 1,
                        category: 3
                    },
                    {
                        name: "CSSRuleList",
                        value: 1,
                        category: 3
                    },
                    {
                        name: "CSSPageRule",
                        value: 1,
                        category: 3
                    },
                    {
                        name: "CSSPrimitiveValue",
                        value: 1,
                        category: 3
                    },
                    {
                        name: "CSSValue",
                        value: 1,
                        category: 3
                    },
                    {
                        name: "Counter",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "RGBColor",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "Rect",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "CSSStyleRule",
                        value: 1,
                        category: 3
                    },
                    {
                        name: "StyleSheet",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "CSSUnknownRule",
                        value: 1,
                        category: 3
                    },
                    {
                        name: "CSSValueList",
                        value: 1,
                        category: 3
                    },
                    {
                        name: "Database",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "SQLTransactionCallback",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "DatabaseCallback",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "DatabaseSync",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "SQLTransactionSyncCallback",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "DataTransferItem",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "StringCallback",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "Entry",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "File",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "DataView",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "DedicatedWorkerContext",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "WorkerContext",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "DirectoryEntry",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "DirectoryReader",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "VoidCallback",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "DirectoryEntrySync",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "EntrySync",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "DirectoryReaderSync",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "FileEntrySync",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "EntriesCallback",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "EntryArraySync",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "DocumentFragment",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "NodeList",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "DocumentType",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "NamedNodeMap",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "DOMFileSystem",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "DOMFileSystemSync",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "DOMImplementation",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "HTMLDocument",
                        value: 1,
                        category: 0
                    },
                    {
                        name: "DOMMimeType",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "DOMPlugin",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "DOMMimeTypeArray",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "DOMPluginArray",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "DOMSelection",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "Range",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "DOMSettableTokenList",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "DOMTokenList",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "DOMStringMap",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "ShadowRoot",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "Entity",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "EntityReference",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "EntryArray",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "MetadataCallback",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "EntryCallback",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "Metadata",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "ErrorCallback",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "FileError",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "FileCallback",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "FileEntry",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "FileWriterCallback",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "FileWriterSync",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "FileReader",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "FileReaderSync",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "FileSystemCallback",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "FileWriter",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "Float64Array",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "GamepadList",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "Gamepad",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "Geolocation",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "PositionCallback",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "Geoposition",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "Coordinates",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "HTMLAllCollection",
                        value: 1,
                        category: 0
                    },
                    {
                        name: "HTMLAnchorElement",
                        value: 1,
                        category: 0
                    },
                    {
                        name: "HTMLElement",
                        value: 3,
                        category: 0
                    },
                    {
                        name: "HTMLAppletElement",
                        value: 1,
                        category: 0
                    },
                    {
                        name: "HTMLAreaElement",
                        value: 1,
                        category: 0
                    },
                    {
                        name: "HTMLAudioElement",
                        value: 1,
                        category: 0
                    },
                    {
                        name: "HTMLMediaElement",
                        value: 1,
                        category: 0
                    },
                    {
                        name: "HTMLBaseElement",
                        value: 1,
                        category: 0
                    },
                    {
                        name: "HTMLBaseFontElement",
                        value: 1,
                        category: 0
                    },
                    {
                        name: "HTMLBodyElement",
                        value: 1,
                        category: 0
                    },
                    {
                        name: "HTMLBRElement",
                        value: 1,
                        category: 0
                    },
                    {
                        name: "HTMLButtonElement",
                        value: 1,
                        category: 0
                    },
                    {
                        name: "HTMLFormElement",
                        value: 1,
                        category: 0
                    },
                    {
                        name: "ValidityState",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "HTMLCollection",
                        value: 1,
                        category: 0
                    },
                    {
                        name: "HTMLContentElement",
                        value: 1,
                        category: 0
                    },
                    {
                        name: "HTMLDataListElement",
                        value: 1,
                        category: 0
                    },
                    {
                        name: "HTMLDetailsElement",
                        value: 1,
                        category: 0
                    },
                    {
                        name: "HTMLDirectoryElement",
                        value: 1,
                        category: 0
                    },
                    {
                        name: "HTMLDivElement",
                        value: 1,
                        category: 0
                    },
                    {
                        name: "HTMLDListElement",
                        value: 1,
                        category: 0
                    },
                    {
                        name: "HTMLEmbedElement",
                        value: 1,
                        category: 0
                    },
                    {
                        name: "SVGDocument",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "HTMLFieldSetElement",
                        value: 1,
                        category: 0
                    },
                    {
                        name: "HTMLFontElement",
                        value: 1,
                        category: 0
                    },
                    {
                        name: "HTMLFormControlsCollection",
                        value: 1,
                        category: 0
                    },
                    {
                        name: "HTMLFrameElement",
                        value: 1,
                        category: 0
                    },
                    {
                        name: "HTMLFrameSetElement",
                        value: 1,
                        category: 0
                    },
                    {
                        name: "HTMLHeadElement",
                        value: 1,
                        category: 0
                    },
                    {
                        name: "HTMLHeadingElement",
                        value: 1,
                        category: 0
                    },
                    {
                        name: "HTMLHRElement",
                        value: 1,
                        category: 0
                    },
                    {
                        name: "HTMLHtmlElement",
                        value: 1,
                        category: 0
                    },
                    {
                        name: "HTMLIFrameElement",
                        value: 1,
                        category: 0
                    },
                    {
                        name: "HTMLInputElement",
                        value: 1,
                        category: 0
                    },
                    {
                        name: "HTMLKeygenElement",
                        value: 1,
                        category: 0
                    },
                    {
                        name: "HTMLLabelElement",
                        value: 1,
                        category: 0
                    },
                    {
                        name: "HTMLLegendElement",
                        value: 1,
                        category: 0
                    },
                    {
                        name: "HTMLLIElement",
                        value: 1,
                        category: 0
                    },
                    {
                        name: "HTMLLinkElement",
                        value: 1,
                        category: 0
                    },
                    {
                        name: "HTMLMapElement",
                        value: 1,
                        category: 0
                    },
                    {
                        name: "HTMLMarqueeElement",
                        value: 1,
                        category: 0
                    },
                    {
                        name: "TimeRanges",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "MediaController",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "MediaError",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "TextTrackList",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "TextTrack",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "HTMLMenuElement",
                        value: 1,
                        category: 0
                    },
                    {
                        name: "HTMLMetaElement",
                        value: 1,
                        category: 0
                    },
                    {
                        name: "HTMLMeterElement",
                        value: 1,
                        category: 0
                    },
                    {
                        name: "HTMLModElement",
                        value: 1,
                        category: 0
                    },
                    {
                        name: "HTMLObjectElement",
                        value: 1,
                        category: 0
                    },
                    {
                        name: "HTMLOListElement",
                        value: 1,
                        category: 0
                    },
                    {
                        name: "HTMLOptGroupElement",
                        value: 1,
                        category: 0
                    },
                    {
                        name: "HTMLOptionElement",
                        value: 1,
                        category: 0
                    },
                    {
                        name: "HTMLOptionsCollection",
                        value: 1,
                        category: 0
                    },
                    {
                        name: "HTMLOutputElement",
                        value: 1,
                        category: 0
                    },
                    {
                        name: "HTMLParagraphElement",
                        value: 1,
                        category: 0
                    },
                    {
                        name: "HTMLParamElement",
                        value: 1,
                        category: 0
                    },
                    {
                        name: "HTMLPreElement",
                        value: 1,
                        category: 0
                    },
                    {
                        name: "HTMLProgressElement",
                        value: 1,
                        category: 0
                    },
                    {
                        name: "HTMLQuoteElement",
                        value: 1,
                        category: 0
                    },
                    {
                        name: "HTMLScriptElement",
                        value: 1,
                        category: 0
                    },
                    {
                        name: "HTMLSelectElement",
                        value: 1,
                        category: 0
                    },
                    {
                        name: "HTMLShadowElement",
                        value: 1,
                        category: 0
                    },
                    {
                        name: "HTMLSourceElement",
                        value: 1,
                        category: 0
                    },
                    {
                        name: "HTMLSpanElement",
                        value: 1,
                        category: 0
                    },
                    {
                        name: "HTMLStyleElement",
                        value: 1,
                        category: 0
                    },
                    {
                        name: "HTMLTableCaptionElement",
                        value: 1,
                        category: 0
                    },
                    {
                        name: "HTMLTableCellElement",
                        value: 1,
                        category: 0
                    },
                    {
                        name: "HTMLTableColElement",
                        value: 1,
                        category: 0
                    },
                    {
                        name: "HTMLTableElement",
                        value: 1,
                        category: 0
                    },
                    {
                        name: "HTMLTableSectionElement",
                        value: 1,
                        category: 0
                    },
                    {
                        name: "HTMLTableRowElement",
                        value: 1,
                        category: 0
                    },
                    {
                        name: "HTMLTextAreaElement",
                        value: 1,
                        category: 0
                    },
                    {
                        name: "HTMLTitleElement",
                        value: 1,
                        category: 0
                    },
                    {
                        name: "HTMLTrackElement",
                        value: 1,
                        category: 0
                    },
                    {
                        name: "HTMLUListElement",
                        value: 1,
                        category: 0
                    },
                    {
                        name: "HTMLUnknownElement",
                        value: 1,
                        category: 0
                    },
                    {
                        name: "IDBCursor",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "IDBAny",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "IDBKey",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "IDBRequest",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "IDBCursorWithValue",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "IDBDatabase",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "DOMStringList",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "IDBObjectStore",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "IDBTransaction",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "IDBFactory",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "IDBVersionChangeRequest",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "IDBOpenDBRequest",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "IDBIndex",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "IDBKeyRange",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "DOMError",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "Int16Array",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "Int32Array",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "Int8Array",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "JavaScriptCallFrame",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "LocalMediaStream",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "MediaStream",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "Location",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "MediaQueryList",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "MediaQueryListListener",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "MediaSource",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "SourceBufferList",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "SourceBuffer",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "MediaStreamTrackList",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "MediaStreamList",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "MediaStreamTrack",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "MessageChannel",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "MessagePort",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "MutationObserver",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "MutationRecord",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "Navigator",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "BatteryManager",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "NavigatorUserMediaErrorCallback",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "NavigatorUserMediaError",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "NavigatorUserMediaSuccessCallback",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "NodeFilter",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "NodeIterator",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "Notation",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "Notification",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "NotificationPermissionCallback",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "NotificationCenter",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "OESVertexArrayObject",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "WebGLVertexArrayObjectOES",
                        value: 1,
                        category: 1
                    },
                    {
                        name: "Performance",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "PerformanceNavigation",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "PerformanceTiming",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "PositionErrorCallback",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "PositionError",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "ProcessingInstruction",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "RadioNodeList",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "RTCDataChannel",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "RTCPeerConnection",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "RTCSessionDescription",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "RTCIceCandidate",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "RTCSessionDescriptionCallback",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "RTCStatsCallback",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "RTCStatsResponse",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "RTCStatsReport",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "RTCStatsElement",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "ScriptProfile",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "ScriptProfileNode",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "SharedWorker",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "AbstractWorker",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "SharedWorkerContext",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "SpeechGrammarList",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "SpeechGrammar",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "SpeechInputResultList",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "SpeechInputResult",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "SpeechRecognition",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "SpeechRecognitionResult",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "SpeechRecognitionAlternative",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "SpeechRecognitionResultList",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "SQLResultSet",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "SQLResultSetRowList",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "SQLStatementCallback",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "SQLTransaction",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "SQLStatementErrorCallback",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "SQLTransactionErrorCallback",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "SQLError",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "SQLTransactionSync",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "StorageInfo",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "StorageInfoUsageCallback",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "StorageInfoQuotaCallback",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "StorageInfoErrorCallback",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "DOMCoreException",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "StyleSheetList",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "SVGAElement",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGTransformable",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGAnimatedString",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGAltGlyphDefElement",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGElement",
                        value: 3,
                        category: 2
                    },
                    {
                        name: "SVGAltGlyphElement",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGURIReference",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGAltGlyphItemElement",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGAnimateColorElement",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGAnimationElement",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGAnimatedAngle",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGAngle",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGAnimatedLength",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGLength",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGAnimatedLengthList",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGLengthList",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGAnimatedNumberList",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGNumberList",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGAnimatedPreserveAspectRatio",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGPreserveAspectRatio",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGAnimatedRect",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGRect",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGAnimatedTransformList",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGTransformList",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGAnimateElement",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGAnimateMotionElement",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGAnimateTransformElement",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "ElementTimeControl",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "SVGCircleElement",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGClipPathElement",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGAnimatedEnumeration",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGColor",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGComponentTransferFunctionElement",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGAnimatedNumber",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGCursorElement",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGExternalResourcesRequired",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGDefsElement",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGDescElement",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGStylable",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGSVGElement",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGElementInstance",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "EventTarget",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "SVGElementInstanceList",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGUseElement",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGEllipseElement",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGAnimatedBoolean",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGFEBlendElement",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGFilterPrimitiveStandardAttributes",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGFEColorMatrixElement",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGFEComponentTransferElement",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGFECompositeElement",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGFEConvolveMatrixElement",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGAnimatedInteger",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGFEDiffuseLightingElement",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGFEDisplacementMapElement",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGFEDistantLightElement",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGFEDropShadowElement",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGFEFloodElement",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGFEFuncAElement",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGFEFuncBElement",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGFEFuncGElement",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGFEFuncRElement",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGFEGaussianBlurElement",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGFEImageElement",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGFEMergeElement",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGFEMergeNodeElement",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGFEMorphologyElement",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGFEOffsetElement",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGFEPointLightElement",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGFESpecularLightingElement",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGFESpotLightElement",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGFETileElement",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGFETurbulenceElement",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGFilterElement",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGFitToViewBox",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGFontElement",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGFontFaceElement",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGFontFaceFormatElement",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGFontFaceNameElement",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGFontFaceSrcElement",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGFontFaceUriElement",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGForeignObjectElement",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGGElement",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGGlyphElement",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGGlyphRefElement",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGGradientElement",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGHKernElement",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGImageElement",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGLinearGradientElement",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGLineElement",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGLocatable",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGMatrix",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGMarkerElement",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGMaskElement",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGMetadataElement",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGMissingGlyphElement",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGMPathElement",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGNumber",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGPaint",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGPathElement",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGPathSegList",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGPathSegArcAbs",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGPathSegArcRel",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGPathSegClosePath",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGPathSegCurvetoCubicAbs",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGPathSegCurvetoCubicRel",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGPathSegCurvetoCubicSmoothAbs",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGPathSegCurvetoCubicSmoothRel",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGPathSegCurvetoQuadraticAbs",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGPathSegCurvetoQuadraticRel",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGPathSegCurvetoQuadraticSmoothAbs",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGPathSegCurvetoQuadraticSmoothRel",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGPathSegLinetoAbs",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGPathSegLinetoHorizontalAbs",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGPathSegLinetoHorizontalRel",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGPathSegLinetoRel",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGPathSegLinetoVerticalAbs",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGPathSegLinetoVerticalRel",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGPathSegMovetoAbs",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGPathSegMovetoRel",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGPoint",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGPathSeg",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGPatternElement",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGPointList",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGPolygonElement",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGPolylineElement",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGRadialGradientElement",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGRectElement",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGScriptElement",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGSetElement",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGStopElement",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGStyleElement",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGLangSpace",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGZoomAndPan",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGViewSpec",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGTransform",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGSwitchElement",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGSymbolElement",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGTests",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGStringList",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGTextContentElement",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGTextElement",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGTextPathElement",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGTextPositioningElement",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGTitleElement",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGTRefElement",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGTSpanElement",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGViewElement",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "SVGVKernElement",
                        value: 1,
                        category: 2
                    },
                    {
                        name: "TextTrackCueList",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "TextTrackCue",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "Touch",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "TouchList",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "TreeWalker",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "Uint16Array",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "Uint32Array",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "Uint8ClampedArray",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "WebGLRenderingContext",
                        value: 3,
                        category: 1
                    },
                    {
                        name: "WebGLProgram",
                        value: 1,
                        category: 1
                    },
                    {
                        name: "WebGLBuffer",
                        value: 1,
                        category: 1
                    },
                    {
                        name: "WebGLFramebuffer",
                        value: 1,
                        category: 1
                    },
                    {
                        name: "WebGLRenderbuffer",
                        value: 1,
                        category: 1
                    },
                    {
                        name: "WebGLTexture",
                        value: 1,
                        category: 1
                    },
                    {
                        name: "WebGLShader",
                        value: 1,
                        category: 1
                    },
                    {
                        name: "WebGLActiveInfo",
                        value: 1,
                        category: 1
                    },
                    {
                        name: "WebGLContextAttributes",
                        value: 1,
                        category: 1
                    },
                    {
                        name: "WebGLShaderPrecisionFormat",
                        value: 1,
                        category: 1
                    },
                    {
                        name: "WebGLUniformLocation",
                        value: 1,
                        category: 1
                    },
                    {
                        name: "WebKitAnimationList",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "WebKitAnimation",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "WebKitCSSFilterValue",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "WebKitCSSKeyframeRule",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "WebKitCSSKeyframesRule",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "WebKitCSSMatrix",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "WebKitCSSMixFunctionValue",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "WebKitCSSTransformValue",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "WebKitNamedFlow",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "WebSocket",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "Worker",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "WorkerLocation",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "WorkerNavigator",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "XMLHttpRequest",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "XMLHttpRequestUpload",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "DOMFormData",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "XPathEvaluator",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "XPathExpression",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "XPathNSResolver",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "XPathResult",
                        value: 1,
                        category: 4
                    },
                    {
                        name: "XSLTProcessor",
                        value: 1,
                        category: 4
                    }
                ],
                links: [
                    {
                        source: 0,
                        target: 1
                    },
                    {
                        source: 0,
                        target: 2
                    },
                    {
                        source: 0,
                        target: 3
                    },
                    {
                        source: 4,
                        target: 4
                    },
                    {
                        source: 5,
                        target: 4
                    },
                    {
                        source: 6,
                        target: 7
                    },
                    {
                        source: 6,
                        target: 8
                    },
                    {
                        source: 9,
                        target: 3
                    },
                    {
                        source: 10,
                        target: 9
                    },
                    {
                        source: 11,
                        target: 12
                    },
                    {
                        source: 11,
                        target: 9
                    },
                    {
                        source: 11,
                        target: 13
                    },
                    {
                        source: 11,
                        target: 14
                    },
                    {
                        source: 15,
                        target: 16
                    },
                    {
                        source: 15,
                        target: 17
                    },
                    {
                        source: 15,
                        target: 0
                    },
                    {
                        source: 15,
                        target: 18
                    },
                    {
                        source: 15,
                        target: 9
                    },
                    {
                        source: 15,
                        target: 11
                    },
                    {
                        source: 15,
                        target: 19
                    },
                    {
                        source: 15,
                        target: 20
                    },
                    {
                        source: 15,
                        target: 21
                    },
                    {
                        source: 15,
                        target: 22
                    },
                    {
                        source: 15,
                        target: 23
                    },
                    {
                        source: 15,
                        target: 24
                    },
                    {
                        source: 15,
                        target: 25
                    },
                    {
                        source: 15,
                        target: 26
                    },
                    {
                        source: 15,
                        target: 27
                    },
                    {
                        source: 15,
                        target: 28
                    },
                    {
                        source: 15,
                        target: 29
                    },
                    {
                        source: 15,
                        target: 30
                    },
                    {
                        source: 15,
                        target: 31
                    },
                    {
                        source: 15,
                        target: 32
                    },
                    {
                        source: 15,
                        target: 4
                    },
                    {
                        source: 16,
                        target: 1
                    },
                    {
                        source: 13,
                        target: 14
                    },
                    {
                        source: 1,
                        target: 15
                    },
                    {
                        source: 1,
                        target: 1
                    },
                    {
                        source: 1,
                        target: 14
                    },
                    {
                        source: 14,
                        target: 3
                    },
                    {
                        source: 12,
                        target: 1
                    },
                    {
                        source: 18,
                        target: 1
                    },
                    {
                        source: 18,
                        target: 14
                    },
                    {
                        source: 18,
                        target: 3
                    },
                    {
                        source: 33,
                        target: 34
                    },
                    {
                        source: 35,
                        target: 33
                    },
                    {
                        source: 35,
                        target: 36
                    },
                    {
                        source: 35,
                        target: 37
                    },
                    {
                        source: 35,
                        target: 38
                    },
                    {
                        source: 35,
                        target: 39
                    },
                    {
                        source: 35,
                        target: 34
                    },
                    {
                        source: 35,
                        target: 40
                    },
                    {
                        source: 35,
                        target: 41
                    },
                    {
                        source: 42,
                        target: 43
                    },
                    {
                        source: 19,
                        target: 1
                    },
                    {
                        source: 20,
                        target: 1
                    },
                    {
                        source: 44,
                        target: 7
                    },
                    {
                        source: 45,
                        target: 46
                    },
                    {
                        source: 47,
                        target: 48
                    },
                    {
                        source: 47,
                        target: 49
                    },
                    {
                        source: 47,
                        target: 39
                    },
                    {
                        source: 50,
                        target: 44
                    },
                    {
                        source: 51,
                        target: 52
                    },
                    {
                        source: 21,
                        target: 1
                    },
                    {
                        source: 21,
                        target: 9
                    },
                    {
                        source: 53,
                        target: 5
                    },
                    {
                        source: 54,
                        target: 55
                    },
                    {
                        source: 56,
                        target: 55
                    },
                    {
                        source: 56,
                        target: 57
                    },
                    {
                        source: 58,
                        target: 55
                    },
                    {
                        source: 58,
                        target: 59
                    },
                    {
                        source: 58,
                        target: 60
                    },
                    {
                        source: 61,
                        target: 55
                    },
                    {
                        source: 61,
                        target: 62
                    },
                    {
                        source: 61,
                        target: 59
                    },
                    {
                        source: 63,
                        target: 55
                    },
                    {
                        source: 63,
                        target: 57
                    },
                    {
                        source: 64,
                        target: 65
                    },
                    {
                        source: 64,
                        target: 66
                    },
                    {
                        source: 64,
                        target: 67
                    },
                    {
                        source: 64,
                        target: 68
                    },
                    {
                        source: 55,
                        target: 55
                    },
                    {
                        source: 55,
                        target: 60
                    },
                    {
                        source: 62,
                        target: 55
                    },
                    {
                        source: 57,
                        target: 55
                    },
                    {
                        source: 57,
                        target: 65
                    },
                    {
                        source: 69,
                        target: 55
                    },
                    {
                        source: 69,
                        target: 57
                    },
                    {
                        source: 60,
                        target: 70
                    },
                    {
                        source: 60,
                        target: 62
                    },
                    {
                        source: 60,
                        target: 55
                    },
                    {
                        source: 71,
                        target: 55
                    },
                    {
                        source: 72,
                        target: 65
                    },
                    {
                        source: 73,
                        target: 74
                    },
                    {
                        source: 75,
                        target: 73
                    },
                    {
                        source: 75,
                        target: 76
                    },
                    {
                        source: 76,
                        target: 77
                    },
                    {
                        source: 78,
                        target: 79
                    },
                    {
                        source: 78,
                        target: 80
                    },
                    {
                        source: 49,
                        target: 81
                    },
                    {
                        source: 49,
                        target: 78
                    },
                    {
                        source: 82,
                        target: 5
                    },
                    {
                        source: 83,
                        target: 84
                    },
                    {
                        source: 22,
                        target: 1
                    },
                    {
                        source: 22,
                        target: 14
                    },
                    {
                        source: 85,
                        target: 80
                    },
                    {
                        source: 85,
                        target: 86
                    },
                    {
                        source: 85,
                        target: 87
                    },
                    {
                        source: 88,
                        target: 89
                    },
                    {
                        source: 88,
                        target: 90
                    },
                    {
                        source: 88,
                        target: 88
                    },
                    {
                        source: 88,
                        target: 91
                    },
                    {
                        source: 86,
                        target: 92
                    },
                    {
                        source: 90,
                        target: 93
                    },
                    {
                        source: 94,
                        target: 7
                    },
                    {
                        source: 94,
                        target: 8
                    },
                    {
                        source: 94,
                        target: 95
                    },
                    {
                        source: 96,
                        target: 7
                    },
                    {
                        source: 96,
                        target: 97
                    },
                    {
                        source: 98,
                        target: 85
                    },
                    {
                        source: 99,
                        target: 88
                    },
                    {
                        source: 100,
                        target: 60
                    },
                    {
                        source: 100,
                        target: 96
                    },
                    {
                        source: 100,
                        target: 101
                    },
                    {
                        source: 102,
                        target: 103
                    },
                    {
                        source: 104,
                        target: 102
                    },
                    {
                        source: 103,
                        target: 102
                    },
                    {
                        source: 105,
                        target: 103
                    },
                    {
                        source: 106,
                        target: 7
                    },
                    {
                        source: 106,
                        target: 107
                    },
                    {
                        source: 108,
                        target: 109
                    },
                    {
                        source: 23,
                        target: 1
                    },
                    {
                        source: 23,
                        target: 14
                    },
                    {
                        source: 8,
                        target: 7
                    },
                    {
                        source: 8,
                        target: 109
                    },
                    {
                        source: 8,
                        target: 110
                    },
                    {
                        source: 8,
                        target: 8
                    },
                    {
                        source: 8,
                        target: 57
                    },
                    {
                        source: 8,
                        target: 6
                    },
                    {
                        source: 8,
                        target: 46
                    },
                    {
                        source: 8,
                        target: 45
                    },
                    {
                        source: 8,
                        target: 95
                    },
                    {
                        source: 8,
                        target: 111
                    },
                    {
                        source: 112,
                        target: 7
                    },
                    {
                        source: 113,
                        target: 7
                    },
                    {
                        source: 92,
                        target: 114
                    },
                    {
                        source: 80,
                        target: 98
                    },
                    {
                        source: 80,
                        target: 85
                    },
                    {
                        source: 80,
                        target: 115
                    },
                    {
                        source: 80,
                        target: 116
                    },
                    {
                        source: 80,
                        target: 87
                    },
                    {
                        source: 114,
                        target: 80
                    },
                    {
                        source: 93,
                        target: 89
                    },
                    {
                        source: 116,
                        target: 80
                    },
                    {
                        source: 89,
                        target: 99
                    },
                    {
                        source: 89,
                        target: 89
                    },
                    {
                        source: 89,
                        target: 117
                    },
                    {
                        source: 89,
                        target: 88
                    },
                    {
                        source: 118,
                        target: 119
                    },
                    {
                        source: 120,
                        target: 81
                    },
                    {
                        source: 121,
                        target: 80
                    },
                    {
                        source: 121,
                        target: 122
                    },
                    {
                        source: 121,
                        target: 120
                    },
                    {
                        source: 91,
                        target: 89
                    },
                    {
                        source: 91,
                        target: 123
                    },
                    {
                        source: 91,
                        target: 81
                    },
                    {
                        source: 48,
                        target: 81
                    },
                    {
                        source: 124,
                        target: 119
                    },
                    {
                        source: 125,
                        target: 4
                    },
                    {
                        source: 126,
                        target: 98
                    },
                    {
                        source: 127,
                        target: 119
                    },
                    {
                        source: 122,
                        target: 127
                    },
                    {
                        source: 3,
                        target: 5
                    },
                    {
                        source: 3,
                        target: 3
                    },
                    {
                        source: 128,
                        target: 5
                    },
                    {
                        source: 128,
                        target: 128
                    },
                    {
                        source: 24,
                        target: 1
                    },
                    {
                        source: 24,
                        target: 13
                    },
                    {
                        source: 129,
                        target: 130
                    },
                    {
                        source: 131,
                        target: 132
                    },
                    {
                        source: 133,
                        target: 134
                    },
                    {
                        source: 135,
                        target: 7
                    },
                    {
                        source: 135,
                        target: 95
                    },
                    {
                        source: 136,
                        target: 137
                    },
                    {
                        source: 138,
                        target: 137
                    },
                    {
                        source: 139,
                        target: 137
                    },
                    {
                        source: 140,
                        target: 141
                    },
                    {
                        source: 142,
                        target: 137
                    },
                    {
                        source: 143,
                        target: 137
                    },
                    {
                        source: 144,
                        target: 137
                    },
                    {
                        source: 145,
                        target: 137
                    },
                    {
                        source: 146,
                        target: 137
                    },
                    {
                        source: 146,
                        target: 147
                    },
                    {
                        source: 146,
                        target: 95
                    },
                    {
                        source: 146,
                        target: 148
                    },
                    {
                        source: 34,
                        target: 137
                    },
                    {
                        source: 149,
                        target: 7
                    },
                    {
                        source: 150,
                        target: 137
                    },
                    {
                        source: 150,
                        target: 95
                    },
                    {
                        source: 151,
                        target: 137
                    },
                    {
                        source: 151,
                        target: 149
                    },
                    {
                        source: 152,
                        target: 137
                    },
                    {
                        source: 153,
                        target: 137
                    },
                    {
                        source: 154,
                        target: 137
                    },
                    {
                        source: 155,
                        target: 137
                    },
                    {
                        source: 101,
                        target: 8
                    },
                    {
                        source: 101,
                        target: 135
                    },
                    {
                        source: 101,
                        target: 149
                    },
                    {
                        source: 137,
                        target: 8
                    },
                    {
                        source: 137,
                        target: 149
                    },
                    {
                        source: 156,
                        target: 137
                    },
                    {
                        source: 156,
                        target: 157
                    },
                    {
                        source: 158,
                        target: 137
                    },
                    {
                        source: 158,
                        target: 149
                    },
                    {
                        source: 158,
                        target: 147
                    },
                    {
                        source: 158,
                        target: 148
                    },
                    {
                        source: 159,
                        target: 137
                    },
                    {
                        source: 160,
                        target: 149
                    },
                    {
                        source: 160,
                        target: 7
                    },
                    {
                        source: 147,
                        target: 137
                    },
                    {
                        source: 147,
                        target: 149
                    },
                    {
                        source: 161,
                        target: 137
                    },
                    {
                        source: 161,
                        target: 157
                    },
                    {
                        source: 162,
                        target: 137
                    },
                    {
                        source: 163,
                        target: 137
                    },
                    {
                        source: 164,
                        target: 137
                    },
                    {
                        source: 165,
                        target: 137
                    },
                    {
                        source: 166,
                        target: 137
                    },
                    {
                        source: 167,
                        target: 137
                    },
                    {
                        source: 167,
                        target: 157
                    },
                    {
                        source: 39,
                        target: 137
                    },
                    {
                        source: 168,
                        target: 137
                    },
                    {
                        source: 168,
                        target: 48
                    },
                    {
                        source: 168,
                        target: 147
                    },
                    {
                        source: 168,
                        target: 95
                    },
                    {
                        source: 168,
                        target: 148
                    },
                    {
                        source: 168,
                        target: 114
                    },
                    {
                        source: 169,
                        target: 137
                    },
                    {
                        source: 169,
                        target: 147
                    },
                    {
                        source: 169,
                        target: 95
                    },
                    {
                        source: 169,
                        target: 148
                    },
                    {
                        source: 170,
                        target: 137
                    },
                    {
                        source: 170,
                        target: 147
                    },
                    {
                        source: 171,
                        target: 137
                    },
                    {
                        source: 171,
                        target: 147
                    },
                    {
                        source: 172,
                        target: 137
                    },
                    {
                        source: 173,
                        target: 137
                    },
                    {
                        source: 173,
                        target: 70
                    },
                    {
                        source: 173,
                        target: 108
                    },
                    {
                        source: 174,
                        target: 137
                    },
                    {
                        source: 174,
                        target: 149
                    },
                    {
                        source: 175,
                        target: 137
                    },
                    {
                        source: 141,
                        target: 137
                    },
                    {
                        source: 141,
                        target: 176
                    },
                    {
                        source: 141,
                        target: 177
                    },
                    {
                        source: 141,
                        target: 178
                    },
                    {
                        source: 141,
                        target: 179
                    },
                    {
                        source: 141,
                        target: 180
                    },
                    {
                        source: 181,
                        target: 137
                    },
                    {
                        source: 182,
                        target: 137
                    },
                    {
                        source: 183,
                        target: 137
                    },
                    {
                        source: 183,
                        target: 95
                    },
                    {
                        source: 184,
                        target: 137
                    },
                    {
                        source: 185,
                        target: 137
                    },
                    {
                        source: 185,
                        target: 147
                    },
                    {
                        source: 185,
                        target: 148
                    },
                    {
                        source: 185,
                        target: 157
                    },
                    {
                        source: 186,
                        target: 137
                    },
                    {
                        source: 187,
                        target: 137
                    },
                    {
                        source: 188,
                        target: 137
                    },
                    {
                        source: 188,
                        target: 147
                    },
                    {
                        source: 189,
                        target: 149
                    },
                    {
                        source: 189,
                        target: 188
                    },
                    {
                        source: 189,
                        target: 7
                    },
                    {
                        source: 190,
                        target: 137
                    },
                    {
                        source: 190,
                        target: 147
                    },
                    {
                        source: 190,
                        target: 108
                    },
                    {
                        source: 190,
                        target: 95
                    },
                    {
                        source: 190,
                        target: 148
                    },
                    {
                        source: 191,
                        target: 137
                    },
                    {
                        source: 192,
                        target: 137
                    },
                    {
                        source: 193,
                        target: 137
                    },
                    {
                        source: 194,
                        target: 137
                    },
                    {
                        source: 194,
                        target: 95
                    },
                    {
                        source: 195,
                        target: 137
                    },
                    {
                        source: 196,
                        target: 137
                    },
                    {
                        source: 197,
                        target: 137
                    },
                    {
                        source: 197,
                        target: 147
                    },
                    {
                        source: 197,
                        target: 95
                    },
                    {
                        source: 197,
                        target: 189
                    },
                    {
                        source: 197,
                        target: 149
                    },
                    {
                        source: 197,
                        target: 148
                    },
                    {
                        source: 197,
                        target: 7
                    },
                    {
                        source: 198,
                        target: 137
                    },
                    {
                        source: 199,
                        target: 137
                    },
                    {
                        source: 200,
                        target: 137
                    },
                    {
                        source: 201,
                        target: 137
                    },
                    {
                        source: 201,
                        target: 70
                    },
                    {
                        source: 202,
                        target: 137
                    },
                    {
                        source: 203,
                        target: 137
                    },
                    {
                        source: 204,
                        target: 137
                    },
                    {
                        source: 205,
                        target: 137
                    },
                    {
                        source: 205,
                        target: 202
                    },
                    {
                        source: 205,
                        target: 149
                    },
                    {
                        source: 205,
                        target: 206
                    },
                    {
                        source: 207,
                        target: 137
                    },
                    {
                        source: 207,
                        target: 149
                    },
                    {
                        source: 206,
                        target: 137
                    },
                    {
                        source: 206,
                        target: 149
                    },
                    {
                        source: 208,
                        target: 137
                    },
                    {
                        source: 208,
                        target: 147
                    },
                    {
                        source: 208,
                        target: 95
                    },
                    {
                        source: 208,
                        target: 148
                    },
                    {
                        source: 209,
                        target: 137
                    },
                    {
                        source: 210,
                        target: 137
                    },
                    {
                        source: 210,
                        target: 180
                    },
                    {
                        source: 211,
                        target: 137
                    },
                    {
                        source: 212,
                        target: 137
                    },
                    {
                        source: 40,
                        target: 141
                    },
                    {
                        source: 213,
                        target: 214
                    },
                    {
                        source: 213,
                        target: 215
                    },
                    {
                        source: 213,
                        target: 216
                    },
                    {
                        source: 217,
                        target: 213
                    },
                    {
                        source: 218,
                        target: 219
                    },
                    {
                        source: 218,
                        target: 214
                    },
                    {
                        source: 218,
                        target: 220
                    },
                    {
                        source: 218,
                        target: 221
                    },
                    {
                        source: 222,
                        target: 215
                    },
                    {
                        source: 222,
                        target: 223
                    },
                    {
                        source: 222,
                        target: 224
                    },
                    {
                        source: 222,
                        target: 216
                    },
                    {
                        source: 225,
                        target: 214
                    },
                    {
                        source: 225,
                        target: 220
                    },
                    {
                        source: 225,
                        target: 216
                    },
                    {
                        source: 226,
                        target: 215
                    },
                    {
                        source: 226,
                        target: 226
                    },
                    {
                        source: 220,
                        target: 219
                    },
                    {
                        source: 220,
                        target: 214
                    },
                    {
                        source: 220,
                        target: 221
                    },
                    {
                        source: 220,
                        target: 216
                    },
                    {
                        source: 220,
                        target: 225
                    },
                    {
                        source: 224,
                        target: 216
                    },
                    {
                        source: 216,
                        target: 227
                    },
                    {
                        source: 216,
                        target: 214
                    },
                    {
                        source: 216,
                        target: 221
                    },
                    {
                        source: 221,
                        target: 218
                    },
                    {
                        source: 221,
                        target: 227
                    },
                    {
                        source: 221,
                        target: 220
                    },
                    {
                        source: 223,
                        target: 216
                    },
                    {
                        source: 228,
                        target: 5
                    },
                    {
                        source: 228,
                        target: 228
                    },
                    {
                        source: 229,
                        target: 5
                    },
                    {
                        source: 229,
                        target: 229
                    },
                    {
                        source: 230,
                        target: 5
                    },
                    {
                        source: 230,
                        target: 230
                    },
                    {
                        source: 231,
                        target: 231
                    },
                    {
                        source: 232,
                        target: 233
                    },
                    {
                        source: 234,
                        target: 219
                    },
                    {
                        source: 177,
                        target: 176
                    },
                    {
                        source: 25,
                        target: 12
                    },
                    {
                        source: 25,
                        target: 141
                    },
                    {
                        source: 235,
                        target: 236
                    },
                    {
                        source: 236,
                        target: 235
                    },
                    {
                        source: 237,
                        target: 238
                    },
                    {
                        source: 237,
                        target: 239
                    },
                    {
                        source: 233,
                        target: 240
                    },
                    {
                        source: 26,
                        target: 12
                    },
                    {
                        source: 26,
                        target: 233
                    },
                    {
                        source: 27,
                        target: 12
                    },
                    {
                        source: 27,
                        target: 233
                    },
                    {
                        source: 241,
                        target: 233
                    },
                    {
                        source: 240,
                        target: 242
                    },
                    {
                        source: 243,
                        target: 244
                    },
                    {
                        source: 115,
                        target: 117
                    },
                    {
                        source: 245,
                        target: 7
                    },
                    {
                        source: 246,
                        target: 95
                    },
                    {
                        source: 246,
                        target: 7
                    },
                    {
                        source: 97,
                        target: 7
                    },
                    {
                        source: 247,
                        target: 131
                    },
                    {
                        source: 247,
                        target: 104
                    },
                    {
                        source: 247,
                        target: 105
                    },
                    {
                        source: 247,
                        target: 248
                    },
                    {
                        source: 247,
                        target: 129
                    },
                    {
                        source: 249,
                        target: 250
                    },
                    {
                        source: 251,
                        target: 232
                    },
                    {
                        source: 7,
                        target: 97
                    },
                    {
                        source: 7,
                        target: 95
                    },
                    {
                        source: 7,
                        target: 7
                    },
                    {
                        source: 7,
                        target: 8
                    },
                    {
                        source: 252,
                        target: 7
                    },
                    {
                        source: 253,
                        target: 252
                    },
                    {
                        source: 253,
                        target: 7
                    },
                    {
                        source: 95,
                        target: 7
                    },
                    {
                        source: 254,
                        target: 7
                    },
                    {
                        source: 255,
                        target: 256
                    },
                    {
                        source: 257,
                        target: 255
                    },
                    {
                        source: 257,
                        target: 87
                    },
                    {
                        source: 258,
                        target: 259
                    },
                    {
                        source: 28,
                        target: 12
                    },
                    {
                        source: 28,
                        target: 14
                    },
                    {
                        source: 28,
                        target: 32
                    },
                    {
                        source: 29,
                        target: 1
                    },
                    {
                        source: 260,
                        target: 52
                    },
                    {
                        source: 260,
                        target: 261
                    },
                    {
                        source: 260,
                        target: 262
                    },
                    {
                        source: 132,
                        target: 133
                    },
                    {
                        source: 263,
                        target: 264
                    },
                    {
                        source: 265,
                        target: 7
                    },
                    {
                        source: 265,
                        target: 70
                    },
                    {
                        source: 266,
                        target: 95
                    },
                    {
                        source: 107,
                        target: 7
                    },
                    {
                        source: 107,
                        target: 94
                    },
                    {
                        source: 107,
                        target: 107
                    },
                    {
                        source: 107,
                        target: 46
                    },
                    {
                        source: 107,
                        target: 45
                    },
                    {
                        source: 68,
                        target: 64
                    },
                    {
                        source: 67,
                        target: 64
                    },
                    {
                        source: 267,
                        target: 4
                    },
                    {
                        source: 267,
                        target: 5
                    },
                    {
                        source: 268,
                        target: 269
                    },
                    {
                        source: 268,
                        target: 241
                    },
                    {
                        source: 268,
                        target: 270
                    },
                    {
                        source: 268,
                        target: 233
                    },
                    {
                        source: 268,
                        target: 271
                    },
                    {
                        source: 268,
                        target: 267
                    },
                    {
                        source: 268,
                        target: 272
                    },
                    {
                        source: 271,
                        target: 269
                    },
                    {
                        source: 272,
                        target: 273
                    },
                    {
                        source: 274,
                        target: 275
                    },
                    {
                        source: 30,
                        target: 1
                    },
                    {
                        source: 276,
                        target: 277
                    },
                    {
                        source: 111,
                        target: 94
                    },
                    {
                        source: 111,
                        target: 8
                    },
                    {
                        source: 111,
                        target: 7
                    },
                    {
                        source: 111,
                        target: 95
                    },
                    {
                        source: 111,
                        target: 106
                    },
                    {
                        source: 278,
                        target: 279
                    },
                    {
                        source: 278,
                        target: 244
                    },
                    {
                        source: 280,
                        target: 84
                    },
                    {
                        source: 239,
                        target: 176
                    },
                    {
                        source: 239,
                        target: 2
                    },
                    {
                        source: 238,
                        target: 239
                    },
                    {
                        source: 281,
                        target: 282
                    },
                    {
                        source: 283,
                        target: 284
                    },
                    {
                        source: 285,
                        target: 281
                    },
                    {
                        source: 286,
                        target: 287
                    },
                    {
                        source: 288,
                        target: 286
                    },
                    {
                        source: 289,
                        target: 290
                    },
                    {
                        source: 291,
                        target: 292
                    },
                    {
                        source: 293,
                        target: 292
                    },
                    {
                        source: 74,
                        target: 292
                    },
                    {
                        source: 294,
                        target: 295
                    },
                    {
                        source: 296,
                        target: 289
                    },
                    {
                        source: 77,
                        target: 296
                    },
                    {
                        source: 297,
                        target: 298
                    },
                    {
                        source: 297,
                        target: 299
                    },
                    {
                        source: 300,
                        target: 301
                    },
                    {
                        source: 70,
                        target: 59
                    },
                    {
                        source: 70,
                        target: 7
                    },
                    {
                        source: 70,
                        target: 70
                    },
                    {
                        source: 302,
                        target: 70
                    },
                    {
                        source: 303,
                        target: 304
                    },
                    {
                        source: 303,
                        target: 305
                    },
                    {
                        source: 306,
                        target: 307
                    },
                    {
                        source: 308,
                        target: 309
                    },
                    {
                        source: 310,
                        target: 307
                    },
                    {
                        source: 311,
                        target: 312
                    },
                    {
                        source: 313,
                        target: 314
                    },
                    {
                        source: 315,
                        target: 316
                    },
                    {
                        source: 317,
                        target: 318
                    },
                    {
                        source: 319,
                        target: 320
                    },
                    {
                        source: 321,
                        target: 322
                    },
                    {
                        source: 323,
                        target: 324
                    },
                    {
                        source: 325,
                        target: 326
                    },
                    {
                        source: 327,
                        target: 312
                    },
                    {
                        source: 328,
                        target: 312
                    },
                    {
                        source: 329,
                        target: 312
                    },
                    {
                        source: 312,
                        target: 330
                    },
                    {
                        source: 312,
                        target: 307
                    },
                    {
                        source: 331,
                        target: 304
                    },
                    {
                        source: 331,
                        target: 315
                    },
                    {
                        source: 332,
                        target: 304
                    },
                    {
                        source: 332,
                        target: 333
                    },
                    {
                        source: 334,
                        target: 65
                    },
                    {
                        source: 334,
                        target: 67
                    },
                    {
                        source: 335,
                        target: 307
                    },
                    {
                        source: 335,
                        target: 336
                    },
                    {
                        source: 335,
                        target: 319
                    },
                    {
                        source: 335,
                        target: 333
                    },
                    {
                        source: 337,
                        target: 338
                    },
                    {
                        source: 337,
                        target: 315
                    },
                    {
                        source: 339,
                        target: 304
                    },
                    {
                        source: 340,
                        target: 341
                    },
                    {
                        source: 157,
                        target: 342
                    },
                    {
                        source: 307,
                        target: 8
                    },
                    {
                        source: 307,
                        target: 342
                    },
                    {
                        source: 307,
                        target: 307
                    },
                    {
                        source: 343,
                        target: 344
                    },
                    {
                        source: 343,
                        target: 345
                    },
                    {
                        source: 343,
                        target: 307
                    },
                    {
                        source: 343,
                        target: 346
                    },
                    {
                        source: 343,
                        target: 343
                    },
                    {
                        source: 345,
                        target: 343
                    },
                    {
                        source: 347,
                        target: 304
                    },
                    {
                        source: 347,
                        target: 315
                    },
                    {
                        source: 338,
                        target: 348
                    },
                    {
                        source: 349,
                        target: 350
                    },
                    {
                        source: 349,
                        target: 305
                    },
                    {
                        source: 349,
                        target: 333
                    },
                    {
                        source: 351,
                        target: 350
                    },
                    {
                        source: 351,
                        target: 305
                    },
                    {
                        source: 351,
                        target: 333
                    },
                    {
                        source: 351,
                        target: 319
                    },
                    {
                        source: 352,
                        target: 350
                    },
                    {
                        source: 352,
                        target: 305
                    },
                    {
                        source: 353,
                        target: 350
                    },
                    {
                        source: 353,
                        target: 305
                    },
                    {
                        source: 353,
                        target: 336
                    },
                    {
                        source: 353,
                        target: 333
                    },
                    {
                        source: 354,
                        target: 350
                    },
                    {
                        source: 354,
                        target: 336
                    },
                    {
                        source: 354,
                        target: 333
                    },
                    {
                        source: 354,
                        target: 305
                    },
                    {
                        source: 354,
                        target: 319
                    },
                    {
                        source: 354,
                        target: 355
                    },
                    {
                        source: 354,
                        target: 348
                    },
                    {
                        source: 356,
                        target: 350
                    },
                    {
                        source: 356,
                        target: 336
                    },
                    {
                        source: 356,
                        target: 305
                    },
                    {
                        source: 357,
                        target: 350
                    },
                    {
                        source: 357,
                        target: 305
                    },
                    {
                        source: 357,
                        target: 336
                    },
                    {
                        source: 357,
                        target: 333
                    },
                    {
                        source: 358,
                        target: 307
                    },
                    {
                        source: 358,
                        target: 336
                    },
                    {
                        source: 359,
                        target: 350
                    },
                    {
                        source: 359,
                        target: 336
                    },
                    {
                        source: 359,
                        target: 305
                    },
                    {
                        source: 360,
                        target: 350
                    },
                    {
                        source: 361,
                        target: 335
                    },
                    {
                        source: 362,
                        target: 335
                    },
                    {
                        source: 363,
                        target: 335
                    },
                    {
                        source: 364,
                        target: 335
                    },
                    {
                        source: 365,
                        target: 350
                    },
                    {
                        source: 365,
                        target: 305
                    },
                    {
                        source: 365,
                        target: 336
                    },
                    {
                        source: 366,
                        target: 350
                    },
                    {
                        source: 366,
                        target: 321
                    },
                    {
                        source: 367,
                        target: 350
                    },
                    {
                        source: 368,
                        target: 307
                    },
                    {
                        source: 368,
                        target: 305
                    },
                    {
                        source: 369,
                        target: 350
                    },
                    {
                        source: 369,
                        target: 305
                    },
                    {
                        source: 369,
                        target: 333
                    },
                    {
                        source: 369,
                        target: 336
                    },
                    {
                        source: 370,
                        target: 350
                    },
                    {
                        source: 370,
                        target: 336
                    },
                    {
                        source: 370,
                        target: 305
                    },
                    {
                        source: 371,
                        target: 307
                    },
                    {
                        source: 371,
                        target: 336
                    },
                    {
                        source: 372,
                        target: 350
                    },
                    {
                        source: 372,
                        target: 305
                    },
                    {
                        source: 372,
                        target: 336
                    },
                    {
                        source: 373,
                        target: 307
                    },
                    {
                        source: 373,
                        target: 336
                    },
                    {
                        source: 374,
                        target: 350
                    },
                    {
                        source: 374,
                        target: 305
                    },
                    {
                        source: 375,
                        target: 350
                    },
                    {
                        source: 375,
                        target: 336
                    },
                    {
                        source: 375,
                        target: 355
                    },
                    {
                        source: 375,
                        target: 333
                    },
                    {
                        source: 376,
                        target: 341
                    },
                    {
                        source: 376,
                        target: 355
                    },
                    {
                        source: 376,
                        target: 333
                    },
                    {
                        source: 376,
                        target: 315
                    },
                    {
                        source: 350,
                        target: 341
                    },
                    {
                        source: 350,
                        target: 315
                    },
                    {
                        source: 350,
                        target: 305
                    },
                    {
                        source: 377,
                        target: 321
                    },
                    {
                        source: 377,
                        target: 323
                    },
                    {
                        source: 378,
                        target: 307
                    },
                    {
                        source: 379,
                        target: 307
                    },
                    {
                        source: 380,
                        target: 307
                    },
                    {
                        source: 381,
                        target: 307
                    },
                    {
                        source: 382,
                        target: 307
                    },
                    {
                        source: 383,
                        target: 307
                    },
                    {
                        source: 384,
                        target: 304
                    },
                    {
                        source: 384,
                        target: 315
                    },
                    {
                        source: 385,
                        target: 304
                    },
                    {
                        source: 386,
                        target: 307
                    },
                    {
                        source: 387,
                        target: 341
                    },
                    {
                        source: 388,
                        target: 341
                    },
                    {
                        source: 388,
                        target: 325
                    },
                    {
                        source: 388,
                        target: 333
                    },
                    {
                        source: 389,
                        target: 307
                    },
                    {
                        source: 390,
                        target: 304
                    },
                    {
                        source: 390,
                        target: 315
                    },
                    {
                        source: 390,
                        target: 321
                    },
                    {
                        source: 318,
                        target: 316
                    },
                    {
                        source: 391,
                        target: 388
                    },
                    {
                        source: 391,
                        target: 315
                    },
                    {
                        source: 392,
                        target: 304
                    },
                    {
                        source: 392,
                        target: 315
                    },
                    {
                        source: 393,
                        target: 307
                    },
                    {
                        source: 393,
                        target: 324
                    },
                    {
                        source: 393,
                        target: 394
                    },
                    {
                        source: 395,
                        target: 377
                    },
                    {
                        source: 395,
                        target: 315
                    },
                    {
                        source: 395,
                        target: 333
                    },
                    {
                        source: 395,
                        target: 313
                    },
                    {
                        source: 395,
                        target: 314
                    },
                    {
                        source: 396,
                        target: 341
                    },
                    {
                        source: 396,
                        target: 315
                    },
                    {
                        source: 396,
                        target: 333
                    },
                    {
                        source: 394,
                        target: 394
                    },
                    {
                        source: 397,
                        target: 307
                    },
                    {
                        source: 398,
                        target: 307
                    },
                    {
                        source: 399,
                        target: 338
                    },
                    {
                        source: 320,
                        target: 400
                    },
                    {
                        source: 401,
                        target: 334
                    },
                    {
                        source: 402,
                        target: 304
                    },
                    {
                        source: 402,
                        target: 403
                    },
                    {
                        source: 402,
                        target: 336
                    },
                    {
                        source: 402,
                        target: 404
                    },
                    {
                        source: 402,
                        target: 405
                    },
                    {
                        source: 402,
                        target: 406
                    },
                    {
                        source: 402,
                        target: 407
                    },
                    {
                        source: 402,
                        target: 408
                    },
                    {
                        source: 402,
                        target: 409
                    },
                    {
                        source: 402,
                        target: 410
                    },
                    {
                        source: 402,
                        target: 411
                    },
                    {
                        source: 402,
                        target: 412
                    },
                    {
                        source: 402,
                        target: 413
                    },
                    {
                        source: 402,
                        target: 414
                    },
                    {
                        source: 402,
                        target: 415
                    },
                    {
                        source: 402,
                        target: 416
                    },
                    {
                        source: 402,
                        target: 417
                    },
                    {
                        source: 402,
                        target: 418
                    },
                    {
                        source: 402,
                        target: 419
                    },
                    {
                        source: 402,
                        target: 420
                    },
                    {
                        source: 402,
                        target: 421
                    },
                    {
                        source: 402,
                        target: 422
                    },
                    {
                        source: 402,
                        target: 423
                    },
                    {
                        source: 404,
                        target: 424
                    },
                    {
                        source: 405,
                        target: 424
                    },
                    {
                        source: 406,
                        target: 424
                    },
                    {
                        source: 407,
                        target: 424
                    },
                    {
                        source: 408,
                        target: 424
                    },
                    {
                        source: 409,
                        target: 424
                    },
                    {
                        source: 410,
                        target: 424
                    },
                    {
                        source: 411,
                        target: 424
                    },
                    {
                        source: 412,
                        target: 424
                    },
                    {
                        source: 413,
                        target: 424
                    },
                    {
                        source: 414,
                        target: 424
                    },
                    {
                        source: 415,
                        target: 424
                    },
                    {
                        source: 416,
                        target: 424
                    },
                    {
                        source: 417,
                        target: 424
                    },
                    {
                        source: 418,
                        target: 424
                    },
                    {
                        source: 419,
                        target: 424
                    },
                    {
                        source: 420,
                        target: 424
                    },
                    {
                        source: 403,
                        target: 424
                    },
                    {
                        source: 421,
                        target: 424
                    },
                    {
                        source: 422,
                        target: 424
                    },
                    {
                        source: 425,
                        target: 377
                    },
                    {
                        source: 425,
                        target: 315
                    },
                    {
                        source: 425,
                        target: 333
                    },
                    {
                        source: 425,
                        target: 325
                    },
                    {
                        source: 423,
                        target: 423
                    },
                    {
                        source: 426,
                        target: 423
                    },
                    {
                        source: 427,
                        target: 304
                    },
                    {
                        source: 427,
                        target: 426
                    },
                    {
                        source: 428,
                        target: 304
                    },
                    {
                        source: 428,
                        target: 426
                    },
                    {
                        source: 429,
                        target: 388
                    },
                    {
                        source: 429,
                        target: 315
                    },
                    {
                        source: 430,
                        target: 304
                    },
                    {
                        source: 430,
                        target: 315
                    },
                    {
                        source: 431,
                        target: 338
                    },
                    {
                        source: 432,
                        target: 312
                    },
                    {
                        source: 433,
                        target: 341
                    },
                    {
                        source: 433,
                        target: 336
                    },
                    {
                        source: 341,
                        target: 305
                    },
                    {
                        source: 341,
                        target: 57
                    },
                    {
                        source: 341,
                        target: 65
                    },
                    {
                        source: 434,
                        target: 435
                    },
                    {
                        source: 342,
                        target: 436
                    },
                    {
                        source: 342,
                        target: 423
                    },
                    {
                        source: 342,
                        target: 437
                    },
                    {
                        source: 342,
                        target: 315
                    },
                    {
                        source: 342,
                        target: 324
                    },
                    {
                        source: 342,
                        target: 307
                    },
                    {
                        source: 342,
                        target: 314
                    },
                    {
                        source: 342,
                        target: 316
                    },
                    {
                        source: 342,
                        target: 394
                    },
                    {
                        source: 342,
                        target: 400
                    },
                    {
                        source: 342,
                        target: 438
                    },
                    {
                        source: 342,
                        target: 8
                    },
                    {
                        source: 342,
                        target: 95
                    },
                    {
                        source: 439,
                        target: 304
                    },
                    {
                        source: 440,
                        target: 377
                    },
                    {
                        source: 441,
                        target: 442
                    },
                    {
                        source: 443,
                        target: 341
                    },
                    {
                        source: 443,
                        target: 333
                    },
                    {
                        source: 443,
                        target: 315
                    },
                    {
                        source: 443,
                        target: 423
                    },
                    {
                        source: 443,
                        target: 324
                    },
                    {
                        source: 444,
                        target: 304
                    },
                    {
                        source: 445,
                        target: 309
                    },
                    {
                        source: 445,
                        target: 333
                    },
                    {
                        source: 445,
                        target: 315
                    },
                    {
                        source: 446,
                        target: 443
                    },
                    {
                        source: 446,
                        target: 317
                    },
                    {
                        source: 446,
                        target: 319
                    },
                    {
                        source: 447,
                        target: 341
                    },
                    {
                        source: 438,
                        target: 394
                    },
                    {
                        source: 304,
                        target: 393
                    },
                    {
                        source: 304,
                        target: 325
                    },
                    {
                        source: 326,
                        target: 438
                    },
                    {
                        source: 448,
                        target: 309
                    },
                    {
                        source: 449,
                        target: 446
                    },
                    {
                        source: 309,
                        target: 305
                    },
                    {
                        source: 346,
                        target: 304
                    },
                    {
                        source: 346,
                        target: 343
                    },
                    {
                        source: 346,
                        target: 315
                    },
                    {
                        source: 450,
                        target: 436
                    },
                    {
                        source: 450,
                        target: 442
                    },
                    {
                        source: 437,
                        target: 321
                    },
                    {
                        source: 437,
                        target: 326
                    },
                    {
                        source: 437,
                        target: 323
                    },
                    {
                        source: 437,
                        target: 307
                    },
                    {
                        source: 451,
                        target: 307
                    },
                    {
                        source: 43,
                        target: 44
                    },
                    {
                        source: 43,
                        target: 43
                    },
                    {
                        source: 180,
                        target: 452
                    },
                    {
                        source: 180,
                        target: 453
                    },
                    {
                        source: 453,
                        target: 180
                    },
                    {
                        source: 453,
                        target: 94
                    },
                    {
                        source: 452,
                        target: 453
                    },
                    {
                        source: 179,
                        target: 180
                    },
                    {
                        source: 454,
                        target: 344
                    },
                    {
                        source: 455,
                        target: 454
                    },
                    {
                        source: 456,
                        target: 7
                    },
                    {
                        source: 456,
                        target: 252
                    },
                    {
                        source: 457,
                        target: 5
                    },
                    {
                        source: 457,
                        target: 457
                    },
                    {
                        source: 458,
                        target: 5
                    },
                    {
                        source: 458,
                        target: 458
                    },
                    {
                        source: 2,
                        target: 5
                    },
                    {
                        source: 2,
                        target: 2
                    },
                    {
                        source: 459,
                        target: 2
                    },
                    {
                        source: 459,
                        target: 459
                    },
                    {
                        source: 31,
                        target: 1
                    },
                    {
                        source: 31,
                        target: 3
                    },
                    {
                        source: 460,
                        target: 33
                    },
                    {
                        source: 460,
                        target: 461
                    },
                    {
                        source: 460,
                        target: 462
                    },
                    {
                        source: 460,
                        target: 463
                    },
                    {
                        source: 460,
                        target: 464
                    },
                    {
                        source: 460,
                        target: 465
                    },
                    {
                        source: 460,
                        target: 4
                    },
                    {
                        source: 460,
                        target: 5
                    },
                    {
                        source: 460,
                        target: 466
                    },
                    {
                        source: 460,
                        target: 467
                    },
                    {
                        source: 460,
                        target: 468
                    },
                    {
                        source: 460,
                        target: 469
                    },
                    {
                        source: 460,
                        target: 470
                    },
                    {
                        source: 460,
                        target: 36
                    },
                    {
                        source: 460,
                        target: 39
                    },
                    {
                        source: 460,
                        target: 34
                    },
                    {
                        source: 460,
                        target: 40
                    },
                    {
                        source: 460,
                        target: 3
                    },
                    {
                        source: 471,
                        target: 472
                    },
                    {
                        source: 473,
                        target: 72
                    },
                    {
                        source: 474,
                        target: 55
                    },
                    {
                        source: 474,
                        target: 57
                    },
                    {
                        source: 475,
                        target: 55
                    },
                    {
                        source: 475,
                        target: 62
                    },
                    {
                        source: 475,
                        target: 474
                    },
                    {
                        source: 476,
                        target: 476
                    },
                    {
                        source: 477,
                        target: 72
                    },
                    {
                        source: 478,
                        target: 72
                    },
                    {
                        source: 479,
                        target: 95
                    },
                    {
                        source: 480,
                        target: 4
                    },
                    {
                        source: 480,
                        target: 5
                    },
                    {
                        source: 481,
                        target: 279
                    },
                    {
                        source: 84,
                        target: 222
                    },
                    {
                        source: 84,
                        target: 482
                    },
                    {
                        source: 84,
                        target: 483
                    },
                    {
                        source: 84,
                        target: 84
                    },
                    {
                        source: 84,
                        target: 257
                    },
                    {
                        source: 84,
                        target: 73
                    },
                    {
                        source: 84,
                        target: 76
                    },
                    {
                        source: 84,
                        target: 126
                    },
                    {
                        source: 84,
                        target: 99
                    },
                    {
                        source: 84,
                        target: 89
                    },
                    {
                        source: 484,
                        target: 485
                    },
                    {
                        source: 484,
                        target: 4
                    },
                    {
                        source: 484,
                        target: 5
                    },
                    {
                        source: 484,
                        target: 486
                    },
                    {
                        source: 487,
                        target: 488
                    },
                    {
                        source: 487,
                        target: 489
                    },
                    {
                        source: 487,
                        target: 490
                    },
                    {
                        source: 488,
                        target: 490
                    },
                    {
                        source: 490,
                        target: 7
                    },
                    {
                        source: 491,
                        target: 7
                    },
                    {
                        source: 491,
                        target: 94
                    }
                ]
            }
        },
        keyUsers:{
            title:"关键用户详情",
            data:[
                {
                    id:1,
                    publisher:"新华社",
                    fans:"1.11亿",
                    follows:3077,
                    text:"昨日发博17，阅读量100万+，互动数37万"
                },
                {
                    id:2,
                    publisher:"财联社APP",
                    fans:"1.11亿",
                    follows:3077,
                    text:"昨日发博17，阅读量100万+，互动数37万"
                },
                {
                    id:3,
                    publisher:"观察者网",
                    fans:"1.11亿",
                    follows:3077,
                    text:"昨日发博17，阅读量100万+，互动数37万"
                }
            ]
        },
        keyforward:{
            title:"关键转发信息",
            data:[
                {
                    id:1,
                    account:"ZEALER",
                    time:'2021-04-09',
                    sources:'新浪微博',
                    text:"#林俊杰买虚拟地产浮亏91%# 近日，各类虚拟资产相继爆雷，虚拟货币价格暴跌。",
                    likes: 3700   ,
                    reply: 2089,
                    forwards: 3010
                },
                {
                    id:2,
                    account:"新华社",
                    time:'2021-04-09',
                    sources:'新浪微博',
                    text:"#林俊杰买虚拟地产浮亏91%# 近日，各类虚拟资产相继爆雷，虚拟货币价格暴跌。",
                    likes: 3700   ,
                    reply: 2089,
                    forwards: 3010
                }
            ]
        },
        r3_chart_data:{
            title:"用户角色画像",
            data:[
                {
                    source:"微博",
                    data: [
                        [55, 9, 56, 0.46, 18, 6, 1],
                        [25, 11, 21, 0.65, 34, 9, 2],
                        [56, 7, 63, 0.3, 14, 5, 3],
                        [33, 7, 29, 0.33, 16, 6, 4],
                        [42, 24, 44, 0.76, 40, 16, 5],
                        [82, 58, 90, 1.77, 68, 33, 6],
                        [74, 49, 77, 1.46, 48, 27, 7],
                        [78, 55, 80, 1.29, 59, 29, 8],
                        [267, 216, 280, 4.8, 108, 64, 9],
                        [185, 127, 216, 2.52, 61, 27, 10],
                        [39, 19, 38, 0.57, 31, 15, 11],
                        [41, 11, 40, 0.43, 21, 7, 12],
                        [64, 38, 74, 1.04, 46, 22, 13],
                        [108, 79, 120, 1.7, 75, 41, 14],
                        [108, 63, 116, 1.48, 44, 26, 15],
                        [33, 6, 29, 0.34, 13, 5, 16],
                        [94, 66, 110, 1.54, 62, 31, 17],
                        [186, 142, 192, 3.88, 93, 79, 18],
                        [57, 31, 54, 0.96, 32, 14, 19],
                        [22, 8, 17, 0.48, 23, 10, 20],
                        [39, 15, 36, 0.61, 29, 13, 21],
                        [94, 69, 114, 2.08, 73, 39, 22],
                        [99, 73, 110, 2.43, 76, 48, 23],
                        [31, 12, 30, 0.5, 32, 16, 24],
                        [42, 27, 43, 1, 53, 22, 25],
                        [154, 117, 157, 3.05, 92, 58, 26],
                        [234, 185, 230, 4.09, 123, 69, 27],
                        [160, 120, 186, 2.77, 91, 50, 28],
                        [134, 96, 165, 2.76, 83, 41, 29],
                        [52, 24, 60, 1.03, 50, 21, 30],
                        [46, 5, 49, 0.28, 10, 6, 31]
                      ]
                },
                {
                    source:"知乎",
                    data:[
                        [91, 45, 125, 0.82, 34, 23, 1],
                        [65, 27, 78, 0.86, 45, 29, 2],
                        [83, 60, 84, 1.09, 73, 27, 3],
                        [109, 81, 121, 1.28, 68, 51, 4],
                        [106, 77, 114, 1.07, 55, 51, 5],
                        [109, 81, 121, 1.28, 68, 51, 6],
                        [106, 77, 114, 1.07, 55, 51, 7],
                        [89, 65, 78, 0.86, 51, 26, 8],
                        [53, 33, 47, 0.64, 50, 17, 9],
                        [80, 55, 80, 1.01, 75, 24, 10],
                        [117, 81, 124, 1.03, 45, 24, 11],
                        [99, 71, 142, 1.1, 62, 42, 12],
                        [95, 69, 130, 1.28, 74, 50, 13],
                        [116, 87, 131, 1.47, 84, 40, 14],
                        [108, 80, 121, 1.3, 85, 37, 15],
                        [134, 83, 167, 1.16, 57, 43, 16],
                        [79, 43, 107, 1.05, 59, 37, 17],
                        [71, 46, 89, 0.86, 64, 25, 18],
                        [97, 71, 113, 1.17, 88, 31, 19],
                        [84, 57, 91, 0.85, 55, 31, 20],
                        [87, 63, 101, 0.9, 56, 41, 21],
                        [104, 77, 119, 1.09, 73, 48, 22],
                        [87, 62, 100, 1, 72, 28, 23],
                        [168, 128, 172, 1.49, 97, 56, 24],
                        [65, 45, 51, 0.74, 39, 17, 25],
                        [39, 24, 38, 0.61, 47, 17, 26],
                        [39, 24, 39, 0.59, 50, 19, 27],
                        [93, 68, 96, 1.05, 79, 29, 28],
                        [188, 143, 197, 1.66, 99, 51, 29],
                        [174, 131, 174, 1.55, 108, 50, 30],
                        [187, 143, 201, 1.39, 89, 53, 31]
                      ]
                }
            ]
        }
    }

    res.json(data)
});

// 科技第三组数据
app.use('/echarts-data/4', async (req, res) => {
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
app.use('/school/4',async(req,res)=>{
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

    // 校内外话题热度变化
    data_school_m1:{
        title:'校内外话题热度变化',
        value:[
            { name:'校内',data:[1000,1500,2800,3500,3000,2600,2000,1000]},
            { name:'校外',data:[3100,1700,1100,1600,2100,2600,2100,1600]},
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

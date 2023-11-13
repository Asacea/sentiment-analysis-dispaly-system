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
      value: false,
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
// app.use('/echarts-data', async (req, res) => {
//   const data= {
//     "nodes": [
//         {
//             "id": "0",
//             "name": "Myriel",
//             "symbolSize": 19.12381,
//             "x": -266.82776,
//             "y": 299.6904,
//             "value": 28.685715,
//             "category": 0
//         },
//         {
//             "id": "1",
//             "name": "Napoleon",
//             "symbolSize": 2.6666666666666665,
//             "x": -418.08344,
//             "y": 446.8853,
//             "value": 4,
//             "category": 0
//         },
//         {
//             "id": "2",
//             "name": "MlleBaptistine",
//             "symbolSize": 6.323809333333333,
//             "x": -212.76357,
//             "y": 245.29176,
//             "value": 9.485714,
//             "category": 1
//         },
//         {
//             "id": "3",
//             "name": "MmeMagloire",
//             "symbolSize": 6.323809333333333,
//             "x": -242.82404,
//             "y": 235.26283,
//             "value": 9.485714,
//             "category": 1
//         },
//         {
//             "id": "4",
//             "name": "CountessDeLo",
//             "symbolSize": 2.6666666666666665,
//             "x": -379.30386,
//             "y": 429.06424,
//             "value": 4,
//             "category": 0
//         },
//         {
//             "id": "5",
//             "name": "Geborand",
//             "symbolSize": 2.6666666666666665,
//             "x": -417.26337,
//             "y": 406.03506,
//             "value": 4,
//             "category": 0
//         },
//         {
//             "id": "6",
//             "name": "Champtercier",
//             "symbolSize": 2.6666666666666665,
//             "x": -332.6012,
//             "y": 485.16974,
//             "value": 4,
//             "category": 0
//         },
//         {
//             "id": "7",
//             "name": "Cravatte",
//             "symbolSize": 2.6666666666666665,
//             "x": -382.69568,
//             "y": 475.09113,
//             "value": 4,
//             "category": 0
//         },
//         {
//             "id": "8",
//             "name": "Count",
//             "symbolSize": 2.6666666666666665,
//             "x": -320.384,
//             "y": 387.17325,
//             "value": 4,
//             "category": 0
//         },
//         {
//             "id": "9",
//             "name": "OldMan",
//             "symbolSize": 2.6666666666666665,
//             "x": -344.39832,
//             "y": 451.16772,
//             "value": 4,
//             "category": 0
//         },
//         {
//             "id": "10",
//             "name": "Labarre",
//             "symbolSize": 2.6666666666666665,
//             "x": -89.34107,
//             "y": 234.56128,
//             "value": 4,
//             "category": 1
//         }
//     ],
//     "links": [
//         {
//             "source": "1",
//             "target": "0"
//         },
//         {
//             "source": "2",
//             "target": "0"
//         },
//         {
//             "source": "3",
//             "target": "0"
//         },
//         {
//             "source": "3",
//             "target": "2"
//         },
//         {
//             "source": "4",
//             "target": "0"
//         },
//         {
//             "source": "5",
//             "target": "0"
//         },
//         {
//             "source": "6",
//             "target": "0"
//         },
//         {
//             "source": "7",
//             "target": "0"
//         },
//         {
//             "source": "8",
//             "target": "0"
//         },
//         {
//             "source": "9",
//             "target": "0"
//         }
//     ],
//     "categories": [
//         {
//             "name": "A"
//         },
//         {
//             "name": "B"
//         },
//         {
//             "name": "C"
//         },
//         {
//             "name": "D"
//         },
//         {
//             "name": "E"
//         },
//         {
//             "name": "F"
//         },
//         {
//             "name": "G"
//         },
//         {
//             "name": "H"
//         }
//     ]
//   }
//   const data1={
//     "nodes": [
//         {
//             "id": "0",
//             "name": "Myriel",
//             "symbolSize": 19.12381,
//             "x": -266.82776,
//             "y": 199.6904,
//             "value": 28.685715,
//             "category": 0
//         },
//         {
//             "id": "1",
//             "name": "Napoleon",
//             "symbolSize": 2.6666666666666665,
//             "x": -418.08344,
//             "y": 346.8853,
//             "value": 4,
//             "category": 0
//         },
//         {
//             "id": "2",
//             "name": "MlleBaptistine",
//             "symbolSize": 6.323809333333333,
//             "x": -212.76357,
//             "y": 145.29176,
//             "value": 9.485714,
//             "category": 1
//         },
//         {
//             "id": "3",
//             "name": "MmeMagloire",
//             "symbolSize": 6.323809333333333,
//             "x": -242.82404,
//             "y": 135.26283,
//             "value": 9.485714,
//             "category": 1
//         },
//         {
//             "id": "4",
//             "name": "CountessDeLo",
//             "symbolSize": 2.6666666666666665,
//             "x": -379.30386,
//             "y": 329.06424,
//             "value": 4,
//             "category": 0
//         },
//         {
//             "id": "5",
//             "name": "Geborand",
//             "symbolSize": 2.6666666666666665,
//             "x": -417.26337,
//             "y": 306.03506,
//             "value": 4,
//             "category": 0
//         },
//         {
//             "id": "6",
//             "name": "Champtercier",
//             "symbolSize": 2.6666666666666665,
//             "x": -332.6012,
//             "y": 385.16974,
//             "value": 4,
//             "category": 0
//         },
//         {
//             "id": "7",
//             "name": "Cravatte",
//             "symbolSize": 2.6666666666666665,
//             "x": -382.69568,
//             "y": 375.09113,
//             "value": 4,
//             "category": 0
//         },
//         {
//             "id": "8",
//             "name": "Count",
//             "symbolSize": 2.6666666666666665,
//             "x": -320.384,
//             "y": 287.17325,
//             "value": 4,
//             "category": 0
//         },
//         {
//             "id": "9",
//             "name": "OldMan",
//             "symbolSize": 2.6666666666666665,
//             "x": -344.39832,
//             "y": 451.16772,
//             "value": 4,
//             "category": 0
//         },
//         {
//             "id": "10",
//             "name": "Labarre",
//             "symbolSize": 2.6666666666666665,
//             "x": -89.34107,
//             "y": 134.56128,
//             "value": 4,
//             "category": 1
//         },
//         {
//             "id": "11",
//             "name": "Valjean",
//             "symbolSize": 26.66666666666667,
//             "x": -87.93029,
//             "y": -6.8120565,
//             "value": 100,
//             "category": 1
//         },
//         {
//             "id": "12",
//             "name": "Marguerite",
//             "symbolSize": 4.495239333333333,
//             "x": -339.77908,
//             "y": -184.69139,
//             "value": 6.742859,
//             "category": 1
//         },
//         {
//             "id": "13",
//             "name": "MmeDeR",
//             "symbolSize": 2.6666666666666665,
//             "x": -194.31313,
//             "y": 178.55301,
//             "value": 4,
//             "category": 1
//         },
//         {
//             "id": "14",
//             "name": "Isabeau",
//             "symbolSize": 2.6666666666666665,
//             "x": -158.05168,
//             "y": 201.99768,
//             "value": 4,
//             "category": 1
//         },
//         {
//             "id": "15",
//             "name": "Gervais",
//             "symbolSize": 2.6666666666666665,
//             "x": -127.701546,
//             "y": 242.55057,
//             "value": 4,
//             "category": 1
//         },
//         {
//             "id": "16",
//             "name": "Tholomyes",
//             "symbolSize": 17.295237333333333,
//             "x": -385.2226,
//             "y": -393.5572,
//             "value": 25.942856,
//             "category": 2
//         },
//         {
//             "id": "17",
//             "name": "Listolier",
//             "symbolSize": 13.638097333333334,
//             "x": -516.55884,
//             "y": -393.98975,
//             "value": 20.457146,
//             "category": 2
//         },
//         {
//             "id": "18",
//             "name": "Fameuil",
//             "symbolSize": 13.638097333333334,
//             "x": -464.79382,
//             "y": -493.57944,
//             "value": 20.457146,
//             "category": 2
//         },
//         {
//             "id": "19",
//             "name": "Blacheville",
//             "symbolSize": 13.638097333333334,
//             "x": -515.1624,
//             "y": -456.9891,
//             "value": 20.457146,
//             "category": 2
//         },
//         {
//             "id": "20",
//             "name": "Favourite",
//             "symbolSize": 13.638097333333334,
//             "x": -408.12122,
//             "y": -464.5048,
//             "value": 20.457146,
//             "category": 2
//         },
//         {
//             "id": "21",
//             "name": "Dahlia",
//             "symbolSize": 13.638097333333334,
//             "x": -456.44113,
//             "y": -425.13303,
//             "value": 20.457146,
//             "category": 2
//         },
//         {
//             "id": "22",
//             "name": "Zephine",
//             "symbolSize": 13.638097333333334,
//             "x": -459.1107,
//             "y": -362.5133,
//             "value": 20.457146,
//             "category": 2
//         },
//         {
//             "id": "23",
//             "name": "Fantine",
//             "symbolSize": 28.266666666666666,
//             "x": -313.42786,
//             "y": -289.44803,
//             "value": 42.4,
//             "category": 2
//         },
//         {
//             "id": "24",
//             "name": "MmeThenardier",
//             "symbolSize": 20.95238266666667,
//             "x": 4.6313396,
//             "y": -273.8517,
//             "value": 31.428574,
//             "category": 7
//         },
//         {
//             "id": "25",
//             "name": "Thenardier",
//             "symbolSize": 30.095235333333335,
//             "x": 82.80825,
//             "y": -203.1144,
//             "value": 45.142853,
//             "category": 7
//         },
//         {
//             "id": "26",
//             "name": "Cosette",
//             "symbolSize": 20.95238266666667,
//             "x": 78.64646,
//             "y": -31.512747,
//             "value": 31.428574,
//             "category": 6
//         },
//         {
//             "id": "27",
//             "name": "Javert",
//             "symbolSize": 31.923806666666668,
//             "x": -81.46074,
//             "y": -204.20204,
//             "value": 47.88571,
//             "category": 7
//         },
//         {
//             "id": "28",
//             "name": "Fauchelevent",
//             "symbolSize": 8.152382000000001,
//             "x": -225.73984,
//             "y": 82.41631,
//             "value": 12.228573,
//             "category": 4
//         },
//         {
//             "id": "29",
//             "name": "Bamatabois",
//             "symbolSize": 15.466666666666667,
//             "x": -385.6842,
//             "y": -20.206686,
//             "value": 23.2,
//             "category": 3
//         },
//         {
//             "id": "30",
//             "name": "Perpetue",
//             "symbolSize": 4.495239333333333,
//             "x": -403.92447,
//             "y": -197.69823,
//             "value": 6.742859,
//             "category": 2
//         },
//         {
//             "id": "31",
//             "name": "Simplice",
//             "symbolSize": 8.152382000000001,
//             "x": -281.4253,
//             "y": -158.45137,
//             "value": 12.228573,
//             "category": 2
//         },
//         {
//             "id": "32",
//             "name": "Scaufflaire",
//             "symbolSize": 2.6666666666666665,
//             "x": -122.41348,
//             "y": 210.37503,
//             "value": 4,
//             "category": 1
//         },
//         {
//             "id": "33",
//             "name": "Woman1",
//             "symbolSize": 4.495239333333333,
//             "x": -234.6001,
//             "y": -113.15067,
//             "value": 6.742859,
//             "category": 1
//         },
//         {
//             "id": "34",
//             "name": "Judge",
//             "symbolSize": 11.809524666666666,
//             "x": -387.84915,
//             "y": 58.7059,
//             "value": 17.714287,
//             "category": 3
//         },
//         {
//             "id": "35",
//             "name": "Champmathieu",
//             "symbolSize": 11.809524666666666,
//             "x": -338.2307,
//             "y": 87.48405,
//             "value": 17.714287,
//             "category": 3
//         },
//         {
//             "id": "36",
//             "name": "Brevet",
//             "symbolSize": 11.809524666666666,
//             "x": -453.26874,
//             "y": 58.94648,
//             "value": 17.714287,
//             "category": 3
//         },
//         {
//             "id": "37",
//             "name": "Chenildieu",
//             "symbolSize": 11.809524666666666,
//             "x": -386.44904,
//             "y": 140.05937,
//             "value": 17.714287,
//             "category": 3
//         },
//         {
//             "id": "38",
//             "name": "Cochepaille",
//             "symbolSize": 11.809524666666666,
//             "x": -446.7876,
//             "y": 123.38005,
//             "value": 17.714287,
//             "category": 3
//         },
//         {
//             "id": "39",
//             "name": "Pontmercy",
//             "symbolSize": 6.323809333333333,
//             "x": 336.49738,
//             "y": -269.55914,
//             "value": 9.485714,
//             "category": 6
//         },
//         {
//             "id": "40",
//             "name": "Boulatruelle",
//             "symbolSize": 2.6666666666666665,
//             "x": 29.187843,
//             "y": -460.13132,
//             "value": 4,
//             "category": 7
//         },
//         {
//             "id": "41",
//             "name": "Eponine",
//             "symbolSize": 20.95238266666667,
//             "x": 238.36697,
//             "y": -210.00926,
//             "value": 31.428574,
//             "category": 7
//         },
//         {
//             "id": "42",
//             "name": "Anzelma",
//             "symbolSize": 6.323809333333333,
//             "x": 189.69513,
//             "y": -346.50662,
//             "value": 9.485714,
//             "category": 7
//         },
//         {
//             "id": "43",
//             "name": "Woman2",
//             "symbolSize": 6.323809333333333,
//             "x": -187.00418,
//             "y": -145.02663,
//             "value": 9.485714,
//             "category": 6
//         },
//         {
//             "id": "44",
//             "name": "MotherInnocent",
//             "symbolSize": 4.495239333333333,
//             "x": -252.99521,
//             "y": 129.87549,
//             "value": 6.742859,
//             "category": 4
//         },
//         {
//             "id": "45",
//             "name": "Gribier",
//             "symbolSize": 2.6666666666666665,
//             "x": -296.07935,
//             "y": 163.11964,
//             "value": 4,
//             "category": 4
//         },

//     ],
//     "links": [
//         {
//             "source": "1",
//             "target": "0"
//         },
//         {
//             "source": "2",
//             "target": "0"
//         },
//         {
//             "source": "3",
//             "target": "0"
//         },
//         {
//             "source": "3",
//             "target": "2"
//         },
//         {
//             "source": "4",
//             "target": "0"
//         },
//         {
//             "source": "5",
//             "target": "0"
//         },
//         {
//             "source": "6",
//             "target": "0"
//         },
//         {
//             "source": "7",
//             "target": "0"
//         },
//         {
//             "source": "8",
//             "target": "0"
//         },
//         {
//             "source": "9",
//             "target": "0"
//         },
//         {
//             "source": "11",
//             "target": "0"
//         },
//         {
//             "source": "11",
//             "target": "2"
//         },
//         {
//             "source": "11",
//             "target": "3"
//         },
//         {
//             "source": "11",
//             "target": "10"
//         },
//         {
//             "source": "12",
//             "target": "11"
//         },
//         {
//             "source": "13",
//             "target": "11"
//         },
//         {
//             "source": "14",
//             "target": "11"
//         },
//         {
//             "source": "15",
//             "target": "11"
//         },
//         {
//             "source": "17",
//             "target": "16"
//         },
//         {
//             "source": "18",
//             "target": "16"
//         },
//         {
//             "source": "18",
//             "target": "17"
//         },
//         {
//             "source": "19",
//             "target": "16"
//         },
//         {
//             "source": "19",
//             "target": "17"
//         },
//         {
//             "source": "19",
//             "target": "18"
//         },
//         {
//             "source": "20",
//             "target": "16"
//         },
//         {
//             "source": "20",
//             "target": "17"
//         },
//         {
//             "source": "20",
//             "target": "18"
//         },
//         {
//             "source": "20",
//             "target": "19"
//         },
//         {
//             "source": "21",
//             "target": "16"
//         },
//         {
//             "source": "21",
//             "target": "17"
//         },
//         {
//             "source": "21",
//             "target": "18"
//         },
//         {
//             "source": "21",
//             "target": "19"
//         },
//         {
//             "source": "21",
//             "target": "20"
//         },
//         {
//             "source": "22",
//             "target": "16"
//         },
//         {
//             "source": "22",
//             "target": "17"
//         },
//         {
//             "source": "22",
//             "target": "18"
//         },
//         {
//             "source": "22",
//             "target": "19"
//         },
//         {
//             "source": "22",
//             "target": "20"
//         },
//         {
//             "source": "22",
//             "target": "21"
//         },
//         {
//             "source": "23",
//             "target": "11"
//         },
//         {
//             "source": "23",
//             "target": "12"
//         },
//         {
//             "source": "23",
//             "target": "16"
//         },
//         {
//             "source": "23",
//             "target": "17"
//         },
//         {
//             "source": "23",
//             "target": "18"
//         },
//         {
//             "source": "23",
//             "target": "19"
//         },
//         {
//             "source": "23",
//             "target": "20"
//         },
//         {
//             "source": "23",
//             "target": "21"
//         },
//         {
//             "source": "23",
//             "target": "22"
//         },
//         {
//             "source": "24",
//             "target": "11"
//         },
//         {
//             "source": "24",
//             "target": "23"
//         },
//         {
//             "source": "25",
//             "target": "11"
//         },
//         {
//             "source": "25",
//             "target": "23"
//         },
//         {
//             "source": "25",
//             "target": "24"
//         },
//         {
//             "source": "26",
//             "target": "11"
//         },
//         {
//             "source": "26",
//             "target": "16"
//         },
//         {
//             "source": "26",
//             "target": "24"
//         },
//         {
//             "source": "26",
//             "target": "25"
//         },
//         {
//             "source": "27",
//             "target": "11"
//         },
//         {
//             "source": "27",
//             "target": "23"
//         },
//         {
//             "source": "27",
//             "target": "24"
//         },
//         {
//             "source": "27",
//             "target": "25"
//         },
//         {
//             "source": "27",
//             "target": "26"
//         },
//         {
//             "source": "28",
//             "target": "11"
//         },
//         {
//             "source": "28",
//             "target": "27"
//         },
//         {
//             "source": "29",
//             "target": "11"
//         },
//         {
//             "source": "29",
//             "target": "23"
//         },
//         {
//             "source": "29",
//             "target": "27"
//         },
//         {
//             "source": "30",
//             "target": "23"
//         },
//         {
//             "source": "31",
//             "target": "11"
//         },
//         {
//             "source": "31",
//             "target": "23"
//         },
//         {
//             "source": "31",
//             "target": "27"
//         },
//         {
//             "source": "31",
//             "target": "30"
//         },
//         {
//             "source": "32",
//             "target": "11"
//         },
//         {
//             "source": "33",
//             "target": "11"
//         },
//         {
//             "source": "33",
//             "target": "27"
//         },
//         {
//             "source": "34",
//             "target": "11"
//         },
//         {
//             "source": "34",
//             "target": "29"
//         },
//         {
//             "source": "35",
//             "target": "11"
//         },
//         {
//             "source": "35",
//             "target": "29"
//         },
//         {
//             "source": "35",
//             "target": "34"
//         },
//         {
//             "source": "36",
//             "target": "11"
//         },
//         {
//             "source": "36",
//             "target": "29"
//         },
//         {
//             "source": "36",
//             "target": "34"
//         },
//         {
//             "source": "36",
//             "target": "35"
//         },
//         {
//             "source": "37",
//             "target": "11"
//         },
//         {
//             "source": "37",
//             "target": "29"
//         },
//         {
//             "source": "37",
//             "target": "34"
//         },
//         {
//             "source": "37",
//             "target": "35"
//         },
//         {
//             "source": "37",
//             "target": "36"
//         },
//         {
//             "source": "38",
//             "target": "11"
//         },
//         {
//             "source": "38",
//             "target": "29"
//         },
//         {
//             "source": "38",
//             "target": "34"
//         },
//         {
//             "source": "38",
//             "target": "35"
//         },
//         {
//             "source": "38",
//             "target": "36"
//         },
//         {
//             "source": "38",
//             "target": "37"
//         },
//         {
//             "source": "39",
//             "target": "25"
//         },
//         {
//             "source": "40",
//             "target": "25"
//         },
//         {
//             "source": "41",
//             "target": "24"
//         },
//         {
//             "source": "41",
//             "target": "25"
//         },
//         {
//             "source": "42",
//             "target": "24"
//         },
//         {
//             "source": "42",
//             "target": "25"
//         },
//         {
//             "source": "42",
//             "target": "41"
//         },
//         {
//             "source": "43",
//             "target": "11"
//         },
//         {
//             "source": "43",
//             "target": "26"
//         },
//         {
//             "source": "43",
//             "target": "27"
//         },
//         {
//             "source": "44",
//             "target": "11"
//         },
//         // {
//         //     "source": "44",
//         //     "target": "28"
//         // },
//         // {
//         //     "source": "45",
//         //     "target": "28"
//         // },
//         // {
//         //     "source": "47",
//         //     "target": "46"
//         // },
//         // {
//         //     "source": "48",
//         //     "target": "11"
//         // },
//         // {
//         //     "source": "48",
//         //     "target": "25"
//         // },
//         // {
//         //     "source": "48",
//         //     "target": "27"
//         // },
//         // {
//         //     "source": "48",
//         //     "target": "47"
//         // },
//         // {
//         //     "source": "49",
//         //     "target": "11"
//         // },
//         // {
//         //     "source": "49",
//         //     "target": "26"
//         // },
//         // {
//         //     "source": "50",
//         //     "target": "24"
//         // },
//         // {
//         //     "source": "50",
//         //     "target": "49"
//         // },
//         // {
//         //     "source": "51",
//         //     "target": "11"
//         // },
//         // {
//         //     "source": "51",
//         //     "target": "26"
//         // },
//         // {
//         //     "source": "51",
//         //     "target": "49"
//         // },
//         // {
//         //     "source": "52",
//         //     "target": "39"
//         // },
//         // {
//         //     "source": "52",
//         //     "target": "51"
//         // },
//         // {
//         //     "source": "53",
//         //     "target": "51"
//         // },
//         // {
//         //     "source": "54",
//         //     "target": "26"
//         // },
//         // {
//         //     "source": "54",
//         //     "target": "49"
//         // },
//         // {
//         //     "source": "54",
//         //     "target": "51"
//         // },
//         // {
//         //     "source": "55",
//         //     "target": "11"
//         // },
//         // {
//         //     "source": "55",
//         //     "target": "16"
//         // },
//         // {
//         //     "source": "55",
//         //     "target": "25"
//         // },
//         // {
//         //     "source": "55",
//         //     "target": "26"
//         // },

        
//     ],
//     "categories": [
//         {
//             "name": "A"
//         },
//         {
//             "name": "B"
//         },
//         {
//             "name": "C"
//         },
//         {
//             "name": "D"
//         },
//         {
//             "name": "E"
//         },
//         {
//             "name": "F"
//         },
//         {
//             "name": "G"
//         },
//         {
//             "name": "H"
//         },
//     ]
// }
//   res.json(data)
// });

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
            title: "考研缩招关键词变化趋势",
            value: [
              { name: "考研", data: [100, 140, 230, 100, 120, 146] },
              { name: "考研缩招", data: [150, 100, 200, 140, 100, 87] },
              { name: "反向考研", data: [190, 212, 181, 202, 218, 197] },
            ],
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

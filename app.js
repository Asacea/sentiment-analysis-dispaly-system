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

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

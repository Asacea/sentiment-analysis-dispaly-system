# sentiment-analysis-dispaly-system
综合设计 ——网络舆情分析展示与管理系统

**技术栈**：

- vue3
- vite
- vue-router
- echart
- elementplus
- axios
- pinia
- node.js

**基本功能**：

- 对前期网络爬虫、机器学习所得数据进行可视化大屏展示，包含折线图、饼图、轮播表、地图、原点图等。
- 实现用户分角色登录，分为普通用户visitor和管理员admin
- 管理员对大屏进行管理，选择对普通用户展示的范围

**主要组件**：

- 登录注册
- 管理员面板
- 展示大屏

**项目运行**：

1. 配置环境：[下载node.js并配置环境变量](https://blog.csdn.net/qq_42006801/article/details/124830995?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522170028586516800182798640%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=170028586516800182798640&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~top_positive~default-1-124830995-null-null.142^v96^pc_search_result_base6&utm_term=node&spm=1018.2226.3001.4187)

2. 拉取项目：

   ```powershell
   git pull git@github.com:Asacea/sentiment-analysis-dispaly-system.git
   ```

3. 本地运行

   进入项目文件夹后：

   ```powershell
   #下载依赖
   npm install
   #本地运行项目
   npm run dev
   # 后端（粗糙版）
   node app.js
   ```

   然后打开连接就可以看到前端了。

**API文档**

略

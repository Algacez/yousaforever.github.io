var posts=["2023/08/26/3-4data/","2023/04/02/B站视频测试/","2023/06/07/2023高考作文/","2023/03/26/Copilot/","2023/05/27/CUDA/","2023/04/01/GPT-4paper解读/","2023/05/13/DDSP-SVC-3-0/","2023/04/01/GPT1、GPT2原理/","2023/03/12/GPT-3模型/","2023/08/25/Hexo搭建小记/","2023/06/04/GPU参数/","2023/07/13/Python3函数/","2023/08/24/Pages的Hexo博客添加HTTPS支持/","2023/08/06/Lua笔记/","2023/05/01/Python3基础语法/","2023/06/03/Python3列表/","2023/07/13/Python3条件控制/","2023/06/03/Python3数字/","2023/06/03/Python3数据类型转换/","2023/05/01/Typora快速设置文字颜色/","2023/06/03/Python3运算符/","2023/04/09/Word文档转Markdown/","2023/09/03/anzhiyu主题标签/","2023/05/01/lora模型/","2023/02/25/pip换源/","2023/03/11/hexo文章加密/","2023/07/13/python3模块/","2023/07/13/pythonOS/","2023/02/26/python实现OpenAI的API调用/","2023/02/25/python实现最优选科方案/","2023/02/25/python循环结构（第一节）/","2023/07/13/python数据结构/","2023/07/13/python推导式/","2023/07/13/python输入与输出/","2023/09/03/telegram国内注册/","2023/03/26/すずめの戸締まり/","2023/04/09/《云服务在电子游戏领域的应用》/","2023/04/08/作业1/","2023/04/01/中华人民共和国计算机信息网络国际联网管理暂行规定/","2023/08/23/博客重构/","2023/06/03/基本数据类型/","2023/08/10/工业和信息化部关于开展移动互联网应用程序备案工作的通知/","2022/11/05/折枝落梦/","2023/08/24/某动漫游戏3-2服务器搭建/","2023/09/02/某动漫游戏游玩教程/","2023/09/02/服务器维修日记/","2023/06/03/梯度下降算法简介/","2023/05/01/泠鸢Lora模型/","2023/05/07/泠鸢lora模型v2/","2023/04/22/生成式人工智能服务管理办法/","2023/06/08/黄仁勋台大毕典演讲/","2023/09/03/计算机组成原理（转载）/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};
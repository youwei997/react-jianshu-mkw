const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
//app --> application --> web服务的实例

app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); //访问控制允许来源：所有
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  ); //访问控制允许报头 X-Requested-With: xhr请求
  res.header("Access-Control-Allow-Metheds", "PUT, POST, GET, DELETE, OPTIONS"); //访问控制允许方法
  res.header("X-Powered-By", "nodejs"); //自定义头信息，表示服务端用nodejs
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

//创建get接口
app.get("/TodoList", function (req, res) {
  //console.log(req.body); //获取请求参数

  const file = path.join(__dirname, "/TodoList.json"); //文件路径，__dirname为当前运行js文件的目录
  //var file = 'f:\\nodejs\\data\\test.json'; //也可以用这种方式指定路径

  //读取json文件
  fs.readFile(file, "utf-8", function (err, data) {
    if (err) {
      res.send("文件读取失败");
    } else {
      res.send(data);
    }
  });
});

app.listen(3001, () => {
  console.log("服务器启动成功");
});

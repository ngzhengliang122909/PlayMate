# PlayMate 3.1 — 可操作的前端体验版

## 部署到 Render
- Build Command: `npm install`
- Start Command: `npm start`
- Root Directory: 留空（如果你把本项目内容放在仓库根目录）

## 本地运行
```bash
npm install
npm start
```
打开 `http://localhost:3000`。

## 本版本包括
- 显式 `/` 路由和 `/health` 健康检查
- 响应式紫蓝霓虹界面、导航、主题和亮度调节
- 本机房间列表、创建房间、房间聊天演示
- 本机好友列表和私聊演示
- 猜数字、石头剪刀布、反应挑战、趣味问答小游戏
- 使用浏览器 localStorage 保存部分演示数据

## 重要限制
此 ZIP 是可运行的前端演示版，不是完整的线上多人服务。当前没有真实用户注册/密码验证、跨设备数据库、实时消息、WebRTC 语音或多人同步游戏。麦克风按钮不采集音频，也不会连接其他玩家。要上线这些能力，需要接入认证、数据库、WebSocket/实时服务和 WebRTC 音视频基础设施。

## 如果 Render 仍然显示空白
1. 确认 GitHub 仓库根目录直接包含 `package.json`、`server.js`、`index.html`。
2. Render 的 Root Directory 留空（或设为这三个文件所在的目录）。
3. Build Command `npm install`；Start Command `npm start`。
4. 部署后打开 `https://你的域名/health`，应返回 `{"ok":true,"app":"PlayMate","version":"3.1.0"}`。
5. Render Logs 如果有启动错误，请复制错误信息继续排查。

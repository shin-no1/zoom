# Noom

Zoom Clone using NodeJS, WebRTC and Websockets.

### 학습 내용
- nodemon 
  - 서버를 자동으로 재시작하며 개발 생산성을 높여줌
  - 설정 파일(nodemon.json)을 통해 실행 명령, 파일 감시 확장자, 제외할 디렉토리 등을 설정할 수 있다
    ```json
      {
      "watch": ["src"], // 감시할 디렉토리
      "ext": "js,json", // 감시할 파일 확장자
      "ignore": ["node_modules"], // 제외할 디렉토리
      "exec": "babel-node src/server.js"  // 실행 명령
      }
      ```
- babel
  - 최신 JavaScript 문법을 트랜스파일하여 호환성을 보장
  - 구형 브라우저나 Node.js 환경에서도 최신 코드를 실행 가능하도록 변환
  - 개발자 친화적인 문법 사용 가능 (import/export, 화살표 함수 등)
---
- HTTP And WebSocket
  - HTTP (stateless)
    - browser(request) -> server(response) -> server는 유저를 잊음
    - server는 request 받을 때에만 response를 해줌
  - WebSocket (bidirectional)
    - browser(request) -> server(accpet) -> connected(연결되어 있기 때문에 유저를 알고 있음)
    - 이후 request, response 과정이 필요하지 않고 그저 발생함 (server <-> browser)
---
- Socket.IO
  - WebSocket을 구현한 것이 아닌, 별도의 JavaScript 라이브러리
  - 백/프론트 간단하게 연결
    ```javascript
    // server.js
    import SocketIo from 'socket.io'
    const httpServer = http.createServer(app);
    const wsServer = SocketIo(httpServer);
    // app.js
    const socket = io();
    // home.pug
    script(src="/socket.io/socket.io.js")
    ```
  - WebSocket과 달리 String 뿐만 아니라, 다양한 값/여러 값 전달 가능 (Integer, Json, Function...)
  - 원하는 키값 사용 가능 `front: socket.emit("key", ""), back: socket.on("key", "")`
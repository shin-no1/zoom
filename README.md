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
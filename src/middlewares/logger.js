const myLogger = (store) => (next) => (action) => {
  console.log('prev state: \t', store.getState()); //현재 상태 출력

  console.log(action); // 실행 될 액션 출력

  const result = next(action); // 리듀서(혹은 다음 미들웨어)로 액션 전달 => 액션 실행 => 상태 변화

  console.log('next state: \t', store.getState()); //바뀐 상태 출력

  return result;
};

export default myLogger;

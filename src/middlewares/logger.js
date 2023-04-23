const myLogger = (store) => (next) => (action) => {
  console.log("prev state \t", store.getState()); // 액션 발생 전 상태 조회하기

  console.log(action); // 액션을 출력
  const result = next(action); // 다음 미들웨어 (또는 리듀서) 에게 액션을 전달

  // 업데이트 이후의 상태를 조회하기
  console.log("next state \t", store.getState());

  return result; // dispatch(action)의 결과물 반환
};

export default myLogger;

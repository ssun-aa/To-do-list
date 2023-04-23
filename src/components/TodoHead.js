import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const TodoDateBlock = styled.div`
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;
`;

const TasksLeft = styled.div`
  color: #20c997;
  font-size: 18px;
  margin-top: 40px;
  font-weight: bold;
`;

const TodoHead = () => {
  const todos = useSelector((state) => state);
  const undoneTask = todos.filter((todo) => !todo.done).length;

  const date = new Date();

  const today = date.toLocaleString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const weekday = date.toLocaleString("ko-Kr", { weekday: "long" });

  return (
    <TodoDateBlock>
      <h1>{today}</h1>
      <div className="day">{weekday}</div>
      <TasksLeft>
        할일 {undoneTask}/{todos.length}개 남음
      </TasksLeft>
    </TodoDateBlock>
  );
};

export default TodoHead;

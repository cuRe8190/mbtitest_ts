import React from "react";
import { questionData } from "../stores/Question/questionData";

export default function QuestionPage(): React.ReactElement {
  return (
    <div>
      {questionData.map((data) => (
        <div key={data.id}>
          <div>
            #{data.id} {data.title}
          </div>
          <div>{data.answerA}</div>
          <div>{data.answerB}</div>
        </div>
      ))}
    </div>
  );
}

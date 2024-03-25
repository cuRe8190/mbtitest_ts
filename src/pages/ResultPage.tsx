import React from "react";
import { resultData } from "../stores/Result/resultData";

export default function ResultPage(): React.ReactElement {
  return (
    <div>
      {resultData.map((data) => (
        <div key={data.id}>
          <div>{data.name}</div>
          <div>{data.best}</div>
          <div>{data.desc}</div>
          <img
            src={data.image}
            style={{
              width: 200,
              height: 200,
              objectFit: "cover",
              objectPosition: "center 20%",
            }}
          />
        </div>
      ))}
    </div>
  );
}

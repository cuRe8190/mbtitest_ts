import React from "react";
import styled from "styled-components";
import ProgressBar from "react-bootstrap/ProgressBar";
import { questionData } from "../stores/Question/questionData";

interface Props {
  type: string;
  questionNo: number;
}

export default function Header(props: Props) {
  return (
    <>
      {props.type === "progress" ? (
        <ProgressWrapper>
          <ProgressBar
            animated
            now={(props.questionNo / questionData.length) * 100}
            label={`${Math.round((props.questionNo / questionData.length) * 100)}%`}
            style={{ width: "100%", height: 30 }}
          />
        </ProgressWrapper>
      ) : (
        <TitleWrapper>{"Let's find my cat"}</TitleWrapper>
      )}
    </>
  );
}

const ProgressWrapper = styled.h1`
  color: cornflowerblue;
  font-size: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Bagel";
  padding: 20px;
`;

const TitleWrapper = styled.h1`
  color: cornflowerblue;
  font-size: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Bagel";
  padding: 20px;
`;

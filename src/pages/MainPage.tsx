import React from "react";
import styled from "styled-components";
import CatImage from "../assets/kitten.jpg";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { Image } from "react-bootstrap";
import Header from "../components/Header";

export default function MainPage(): React.ReactElement {
  const navigate = useNavigate();
  const handleClickButton = () => {
    navigate("/question");
  };

  return (
    <Wrapper>
      <Header type="" questionNo={0} />
      <ContentsWrapper>
        <Title>나와 맞는 고앵이를 찾아보자!</Title>
        <LogoImage>
          <Image
            roundedCircle
            src={CatImage}
            alt="city"
            style={{
              width: 200,
              height: 200,
              objectFit: "cover",
              objectPosition: "top",
            }}
          />
        </LogoImage>
        <Desc>MBTI를 기반으로 하는 나랑 잘 맞는 도시 찾기!</Desc>
        <Desc>내가 여행을 간다면...?</Desc>
        <Button
          variant="primary"
          onClick={handleClickButton}
          style={{ fontSize: "1rem", marginTop: 20, marginBottom: 20 }}
        >
          테스트 시작하기{" "}
        </Button>
      </ContentsWrapper>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: #c8dfff;
  font-family: "Chosun";
`;

const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  margin-top: 1rem;
  font-size: 1rem;
`;

const LogoImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  height: 200px;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const Desc = styled.div``;

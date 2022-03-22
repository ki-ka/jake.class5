import React from "react";
import styled from "styled-components";
import { SecondalyButton } from "../atoms/button/SecondalyButton";
import { useHistory } from "react-router-dom";

export const Top = () => {
  const history = useHistory();
  const onClickAdmin = () =>
    history.push({ pathname: "/users", state: { inAdmin: true } });
  const onClickGeneral = () =>
    history.push({ pathname: "/users", state: { inAdmin: false } });
  return (
    <SContainer>
      <h2>TOPページです</h2>
      <SecondalyButton onClick={onClickAdmin}>管理者ユーザー</SecondalyButton>
      <br />
      <br />
      <SecondalyButton onClick={onClickGeneral}>一般ユーザー</SecondalyButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;

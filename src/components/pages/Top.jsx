import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { SecondalyButton } from "../atoms/button/SecondalyButton";
import { UserContext } from "../../providers/UserProvider";

export const Top = () => {
  const history = useHistory();
  const { setUserInfo } = useContext(UserContext);

  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true });
    history.push("/users");
  };
  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false });
    history.push("/users");
  };

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

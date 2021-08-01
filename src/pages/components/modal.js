/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
import react, { useState } from "react";

const Modal = ({ setModalVisible }) => {
  return (
    <StyledModalWrapper>
      <StyledModalButton
        css={css`
          font-weight: bold;
          color: red;
        `}
      >
        신고
      </StyledModalButton>
      <StyledModalButton>태그된 계정</StyledModalButton>
      <StyledModalButton>공유 대상...</StyledModalButton>
      <StyledModalButton>링크 복사</StyledModalButton>
      <StyledModalButton>퍼가기</StyledModalButton>
      <StyledModalButton
        css={css`
          border: none;
        `}
        onClick={() => {
          setModalVisible(false);
        }}
      >
        취소
      </StyledModalButton>
    </StyledModalWrapper>
  );
};

export default Modal;

const StyledModalWrapper = styled.div`
  width: 400px;
  border-radius: 13px;
  height: fit-content;
  border: 1px solid rgb(142, 142, 142);
  position: absolute;
  bottom: -450px;
  left: 320px;
  background-color: white;
`;

const StyledModalButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 17px 0;
  border-bottom: 1px solid rgb(142, 142, 142);
`;

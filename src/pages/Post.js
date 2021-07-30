/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
import react, { useState } from "react";
import PostImg from "../assets/images/post1.jpg";
import MyProfileImg from "../assets/images/profile.jpg";
import CommentProfileImg from "../assets/images/comment-profile.jpeg";
import Comment from "../pages/components/comment";

// Icons
import {
  IoHeartOutline,
  IoChatbubbleOutline,
  IoPaperPlaneOutline,
  IoBookmarkOutline,
  IoHeartSharp,
} from "react-icons/io5";

const Post = () => {
  const [day, setDay] = useState(4);
  const [like, setLike] = useState(false);
  const [likeNum, setLikeNum] = useState(3976);

  return (
    <div
      css={css`
        display: flex;
      `}
    >
      <img
        css={css`
          width: 599px;
          height: 524px;
        `}
        src={PostImg}
      />

      <div
        css={css`
          background-color: orange;
        `}
      >
        {/* 상단 프로필 부분 */}
        <div
          css={css`
            display: flex;
            padding: 21px 17px 15px 19px;
            border-bottom: 1px solid black;
          `}
        >
          <StyledProfile src={MyProfileImg} />
          <div>
            <StyledLink>youlakk</StyledLink>
            <div>Chaing Mai, Thailand</div>
          </div>
        </div>
        {/* 프로필 하단 부분 */}
        <div
          css={css`
            padding: 0 27px 11px 17px;
            border-bottom: 1px solid black;
          `}
        >
          <StyledWrapper>
            <StyledProfile src={MyProfileImg} />
            <div>
              <StyledContentWrapper>
                <StyledLink href="#">youlakk</StyledLink>
                <span>
                  태국 파얍대학교 뒷골목에 있던 카페🌽 정말 행복해보인당💛💛💛
                </span>
              </StyledContentWrapper>

              <div
                css={css`
                  margin-bottom: 20px;
                `}
              >
                <StyledLink
                  css={css`
                    color: navy;
                    font-weight: normal;
                    display: inline-block;
                  `}
                  href="#"
                >
                  #고고팬츠3세대
                </StyledLink>
              </div>
              <StyledDate
                onClick={() => {
                  setDay(day + 1);
                }}
              >
                {day}일
              </StyledDate>
            </div>
          </StyledWrapper>
          <Comment
            profileImg={CommentProfileImg}
            userName={"gangyaho____"}
            contents={"좋아요 1등이다!! 처음으롭-!"}
            date={day}
            setDay={setDay}
          />
          <Comment
            profileImg={CommentProfileImg}
            userName={"yeonjuice_2000"}
            contents={"우유 들어간 큐브라떼 먹고 쾌변함"}
            date={day}
            setDay={setDay}
          />
          <Comment
            profileImg={CommentProfileImg}
            userName={"im._boxxa"}
            contents={"저는 복싱을 합니다."}
            date={day}
            setDay={setDay}
          />
        </div>
        <div
          css={css`
            background-color: hotpink;
            display: flex;
            justify-content: space-between;
          `}
        >
          <div>
            {like ? (
              <IoHeartSharp
                onClick={() => {
                  setLike(false);
                  setLikeNum(likeNum - 1);
                }}
                css={IconStyle}
              />
            ) : (
              <IoHeartOutline
                onClick={() => {
                  setLike(true);
                  setLikeNum(likeNum + 1);
                }}
                css={IconStyle}
              />
            )}

            <IoChatbubbleOutline css={IconStyle} />
            <IoPaperPlaneOutline css={IconStyle} />
          </div>
          <div>
            <IoBookmarkOutline css={IconStyle} />
          </div>
        </div>
        <div>좋아요 {likeNum}개</div>
      </div>
    </div>
  );
};

export default Post;

const StyledProfile = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 70%;
  margin-right: 17px;
`;
const StyledDate = styled.div`
  font-size: 16px;
  color: rgb(142, 142, 142);
`;
const StyledLink = styled.a`
  text-decoration: none;
  color: black;
  margin-right: 7px;
  font-weight: bold;
`;
const StyledWrapper = styled.div`
  display: flex;
  margin-top: 24px;
`;
const StyledContentWrapper = styled.div`
  display: flex;
  margin-bottom: 19px;
  align-items: center;
  display: inline;
`;
const IconStyle = css`
  width: 24px;
  height: 24px;
`;

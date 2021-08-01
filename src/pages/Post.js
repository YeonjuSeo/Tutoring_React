/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
import react, { useState } from "react";
import PostImg from "../assets/images/post1.jpg";
import MyProfileImg from "../assets/images/profile.jpg";
import CommentProfileImg from "../assets/images/comment-profile.jpeg";
import Comment from "../pages/components/comment";
import Modal from "../pages/components/modal";

// Icons
import {
  IoHeartOutline,
  IoChatbubbleOutline,
  IoPaperPlaneOutline,
  IoBookmarkOutline,
  IoHeartSharp,
  IoEllipsisHorizontalSharp,
} from "react-icons/io5";
import { AiOutlineSmile } from "react-icons/ai";

const Post = () => {
  const [day, setDay] = useState(4);
  const [like, setLike] = useState(false);
  const [likeNum, setLikeNum] = useState(3976);
  const [reply, setReply] = useState();
  const [isModalVisible, setModalVisible] = useState(false);

  const today = new Date();
  const [month, date] = [today.getMonth() + 1, today.getDate()]; //배열 할당

  const handleSubmit = (e) => {
    setReply(e.target.value);
  };

  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
      `}
    >
      <div
        css={css`
          display: flex;
          position: relative;
          width: fit-content;
          justify-content: center;
        `}
      >
        <img
          css={css`
            width: 599px;
            height: 654px;
          `}
          src={PostImg}
        />

        <div
          css={css`
            width: 33%;
          `}
        >
          {/* 상단 프로필 부분 */}
          <StyledProfileWrapper>
            <div
              css={css`
                display: flex;
              `}
            >
              <StyledProfile src={MyProfileImg} />
              <div>
                <StyledLink>youlakk</StyledLink>
                <div>Chiang Mai, Thailand</div>
              </div>
            </div>
            <IoEllipsisHorizontalSharp
              onClick={() => {
                setModalVisible(true);
              }}
            />
          </StyledProfileWrapper>
          {/* 프로필 하단 부분 */}
          <div
            css={css`
              padding: 0 27px 11px 17px;
              border-bottom: 1px solid rgb(142, 142, 142);
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
              contents={"우유 들어간 큐브라떼 먹고 유당불내증인 거 알게됨"}
              date={day}
              setDay={setDay}
            />
            <Comment
              profileImg={CommentProfileImg}
              userName={"im._boxxa"}
              contents={"저는 큐브라떼를 마시고 복싱을 합니다."}
              date={day}
              setDay={setDay}
            />
          </div>
          <div
            css={css`
              padding: 15px 17px;
              // background-color: yellowgreen;
              border-bottom: 1px solid rgb(142, 142, 142);
            `}
          >
            <div
              css={css`
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
            <div
              css={css`
                font-weight: bold;
                margin-top: 13px;
                margin-bottom: 13px;
              `}
            >
              좋아요 {likeNum}개
            </div>
            <StyledDate fontSize={10}>
              {month}월 {date}일
            </StyledDate>
          </div>
          <div
            css={css`
              padding: 17px 15px;
              display: flex;
              align-items: center;
            `}
          >
            <AiOutlineSmile css={IconStyle} />
            <StyledInput
              type="text"
              value={reply}
              placeholder="게시하기..."
              onChange={handleSubmit}
            />
            <StyledSubmitButton type="submit" disabled={reply === ""}>
              게시
            </StyledSubmitButton>
            {reply}
          </div>
        </div>
        {isModalVisible && <Modal setModalVisible={setModalVisible} />}
      </div>
    </div>
  );
};

export default Post;

const StyledProfileWrapper = styled.div`
  display: flex;
  padding: 21px 17px 15px 19px;
  border-bottom: 1px solid rgb(142, 142, 142);
  justify-content: space-between;
  align-items: center;
`;

const StyledProfile = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 70%;
  margin-right: 17px;
`;
const StyledDate = styled.div`
  color: rgb(142, 142, 142);
  font-size: ${(props) => props.fontSize || 16}px;
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
const StyledInput = styled.input`
  border: none;
  margin-left: 17px;
  width: 70%;
  font-size: 20px;
`;

const StyledSubmitButton = styled.button`
  border: none;
  background: white;
  color: skyblue;
  font-weight: bold;
  font-size: 20px;
`;

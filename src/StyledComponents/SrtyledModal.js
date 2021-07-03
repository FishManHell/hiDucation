import styled, {css} from "styled-components";

export const WrapperModal = styled.div`
  cursor: pointer;
  position: fixed;
  overflow: auto;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  background: rgba(52, 54, 66, 0.9);
  z-index: 60;
  left: 0;

  ${props => props.openModal && css`
    height: 100%;
    display: flex;
  `}

  ${props => props.closeModal && css`
    height: 0;
    display: none;
  `}
`

export const ModalBlock = styled.div`
  width: ${props => props.width};
  max-width: 100%;
  background: linear-gradient(to top, #006363, #4F2982, #06266F);
  margin: 5% auto auto auto;
  padding: 15px;
  border-radius: 15px;
`
export const BlockHeaderModal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #FFCF40;
  padding-bottom: 10px;
`

export const WelcomeBeck = styled.div`
    font-weight: 600;
    font-size: ${props => props.font_size};
    color: ${props => props.color};
`

export const CloseModal = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: #000000;
  font-size: 1.8rem;
  &:hover {
    transform: scale(1.6);
    transition: all 0.4s;
  }
`

export const BlockSectionModal = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
    flex-direction: ${props => props.flex_direction};
`

export const BlockLeftModal = styled.div`
    width: 50%;
`
export const BlockRightModal = styled.div`
    width: 50%;
    position: relative;
`

export const BlockError = styled.div`
  width: ${props => props.width};
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  bottom: ${props => props.bottom};
  right: ${props => props.right};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(215, 102, 102, 0.9);
  height: 33px;
  z-index: 2;
  font-size: 0.8125rem;
  border-radius: 0.25em;
  pointer-events: none;
  
`
export const ErrorTextModalForm = styled.span`
  color: #000000;
  font-weight: 600;
  font-size: ${props => props.font_size};
  padding: 10px;

  &:before {
    content: '';
    position: absolute;
    left: 22px;
    bottom: 100%;
    height: 0;
    width: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid rgba(215, 102, 102, 0.9);
  }
  
`

export const BlockInput = styled.div`
  display: flex;
  flex-direction: column;
  width: ${props => props.width};
  margin-left: ${props => props.margin_left};
`

export const Input = styled.input`
  height: 40px;
  width: ${props => props.width};
  border-radius: 10px;
  outline: none;
  margin: ${props => props.margin};
  &::placeholder {
    font-size: 0.9rem;
    font-weight: 500;
    padding-left: 5px;
  }
`

export const BlockButtonLogin = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: ${props => props.margin};
`

export const ButtonLoginRegistration = styled.button`
    width: 50%;
    height: 40px;
    cursor: pointer;
    background-color: transparent;
    border-radius: 17px;
    font-size: 1.4rem;
    font-weight: 600;
    font-family: 'Noto Sans JP', sans-serif;
`

export const LabelInput = styled.label`
  font-size: 1rem;
  font-family: 'Noto Sans JP', sans-serif;
  width: ${props => props.width};
  margin: ${props => props.margin};
  text-align: ${props => props.text_align};
  color: #FF7400;
  font-weight: 600;
`

export const ForgetPassword = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  font-size: 0.8rem;
  color:#6C773A;
  text-align: left;
  font-weight: 600;
  
  &:hover {
    color: #25365A;
    transition: all 0.4s;
  }
`

export const OrParagraph = styled.p`
  text-align: center;
  font-weight: 600;
  font-size: 1.6rem;
  color: #838996;
  margin-top: 10px;
`

export const SectionSocialModal = styled.div`
  width: 60%;
  margin: 0 auto;
`

export const SocialButtonBlock = styled.div`
  width: 100%;
  height: 35px;
  margin: 10px 0;
  border-radius: 17px;
  border: 2px solid #838996;
  -webkit-box-shadow: 0 0 4px #838996;
  -moz-box-shadow: 0 0 4px #838996;
  box-shadow: 0 0 4px #838996;
`

export const SocialButton = styled.button`
  display: flex;
  align-items: center;
  width: inherit;
  height: inherit;
  background-color: transparent;
  cursor: pointer;
  border: none;
`

export const SocialButtonSpanImgText = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${props => props.font_size};
    margin-right: ${props => props.margin};
    width: ${props => props.width};
    height: ${props => props.height};
    font-weight: 600;
`

export const BlockSignUpButton = styled.div`
    text-align: center;
`

export const SpanSignUpButton = styled.span`
    font-size: 0.9rem;
`

export const ButtonSignUp = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: #318CE7;
  margin-left: 5px;
  
  &:hover {
    transform: scale(1.1);
    transition: all 0.4s;
  }
`

export const WindowPasswordMatch = styled.p`
    margin: 10px 0 20px 0;
    text-align: center;
    color: #EB4C42;
    font-weight: 600;
  
  
`
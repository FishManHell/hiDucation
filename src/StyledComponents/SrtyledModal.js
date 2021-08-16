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

export const BlockLeftModal = styled.div`
  width: 50%;
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

export const LabelInput = styled.label`
  font-size: 1rem;
  font-family: 'Noto Sans JP', sans-serif;
  width: ${props => props.width};
  margin: ${props => props.margin};
  text-align: ${props => props.text_align};
  color: #FF7400;
  font-weight: 600;
`

export const BlockFormRegLog = styled.div`
  max-width: ${props => props.width};
  background: #ffffff;
  position: relative;
  width: 90%;
  border-radius: 0.50em;
  transition-duration: 0.3s;
  -webkit-transition-property: -webkit-transform;

  ${props => props.active && css`
    margin: 4% auto auto auto;
  `}

  ${props => props.not_active && css`
    margin: 2% auto auto auto;
  `}
`

export const Switcher = styled.div`
  width: 100%;
`

export const SignInSignUp = styled.button`
  width: 50%;
  border: none;
  background: #d2d8d8;
  height: 70px;

  &:first-child {
    border-top-left-radius: 0.50em;
  }

  &:last-child {
    border-top-right-radius: 0.50em;
  }

  ${props => props.active && css`
    background: #ffffff;
  `}

  ${props => props.not_active && css`
    background: #d2d8d8;
  `}
`

export const BlockCloseModal = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0.5em 1em 0 0;
`

export const Form = styled.form`
  display: ${props => props.display};
  justify-content: space-between;
`
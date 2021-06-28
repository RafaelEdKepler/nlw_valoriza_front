import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const Container = styled.div`
  width: ${px2vw(519)};
  height: ${px2vw(451)};
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LogoContainer = styled.div`
  height: ${px2vw(100)};
`;

export const Logo = styled.img`
  width: ${px2vw(70)};
  height: ${px2vw(70)};
  margin-bottom: ${px2vw(30)};
`;

export const FieldContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const Label = styled.label`
  color: var(--black);
  font-size: 1rem;
  width: ${px2vw(84)};
  margin: ${px2vw(5)} ${px2vw(10)} 0 0;
`;

export const Field = styled.input`
  width: ${px2vw(255)};
  height: ${px2vw(25)};
  margin-bottom: ${px2vw(10)};
`;

export const SmallText = styled.small`
  font-size: 0.75rem;
  margin: ${px2vw(10)} 0 ${px2vw(40)};
`;

export const Btn = styled.button`
  background: var(--blue);
  width: ${px2vw(216)};
  height: ${px2vw(58)};
  padding-top: ${px2vw(15)};
  border-style: none;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white);

  &:hover {
    cursor: pointer;
    box-shadow: ${px2vw(3)} ${px2vw(3)} ${px2vw(3)} ${px2vw(3)};
  }
`;
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  /* flex-direction: column; */
  margin: 100px  0 0 100px;
`;

export const HeaderFrom = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FromText = styled.h2`
  font-size: 30px;
  margin-bottom: 30px;
`;

export const Box1 = styled.div`
  width: 270px;
  height: 60px;
  border-radius: 10px;
  border: 1px solid blue;
  padding: 15px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Select = styled.select`
  border: none;
  outline: none;
  font-size: 17px;
  background-color: transparent;
  font-weight: bold;
  width: 75px;
`;

export const InputBox1 = styled.input`
  width: 70px;
  height: 20px;
  border: none;
  outline: none;
  border: 1px solid #dce0dd;
`;



export const Equal = styled.div`
  font-size: 50px;
  margin: 90px 30px 0 30px;
  font-weight: 100;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 30px;
`;

export const HeaderTo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ToText = styled.h2`
  font-size: 30px;
  margin-bottom: 30px;
`;

export const Box2 = styled.div`
  width: 270px;
  height: 60px;
  border-radius: 10px;
  border: 1px solid blue;
  padding: 15px 0 15px 15px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 20px;
`;

export const InputBox2 = styled.input`
  width: 100px;
  height: 30px;
  border: none;
  outline: none;
  font-size: 18px;
  color: #000;
  background-color: transparent;
`;

export const HrPlus = styled.button`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  color: white;
  background-color: #38e065;
  border: none;
  outline: none;
  border-radius: 50%;
  margin-left: 20px;
  cursor: pointer;
`;

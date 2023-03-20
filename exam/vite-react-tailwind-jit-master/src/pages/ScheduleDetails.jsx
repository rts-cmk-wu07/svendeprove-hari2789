import React from 'react'
import styled from 'styled-components'

const ScheduleDetails = () => {
  return (
    <BaggrundRootRootRootRootRoot>
      <ViewTitel>Junior Fitness Dan...</ViewTitel>
      <Text1>Mathilde Petersen</Text1>
      <Text2>Jørgen Jørgensen</Text2>
      <Text1>Marie Keldsen</Text1>
    </BaggrundRootRootRootRootRoot>
  )
}

const Text1 = styled.div`
  color: #ffffff;
  font-size: 18px;
  font-family: Ubuntu;
  box-sizing: border-box;
`;
const BaggrundRootRootRootRootRoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 32px 32px 662px 32px;
  box-sizing: border-box;
  background-color: #5d2e53;
`;
const ViewTitel = styled.div`
  margin: 0px 0px 23px 0px;
  color: #e9e9e9;
  font-size: 36px;
  font-family: Ubuntu;
  box-sizing: border-box;
`;
const Text2 = styled.div`
  margin: 0px 0px 2px 0px;
  color: #ffffff;
  font-size: 18px;
  font-family: Ubuntu;
  box-sizing: border-box;
`;

export default ScheduleDetails
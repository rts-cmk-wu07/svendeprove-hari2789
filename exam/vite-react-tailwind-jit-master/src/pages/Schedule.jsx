import React from 'react'
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';


const Schedule = () => {
    const navigate = useNavigate();
    return (
        <KalenderDefaultRootRootRoot>
            <Baggrund>
                <ViewTitel>Kalender</ViewTitel>
            
                    <WhiteRectangle onClick={() => navigate(`/ScheduleDetails`)}>
                        <Text1>Junior Fitness D...</Text1>
                        <Text2>Mandag 15:45</Text2>
                    </WhiteRectangle>
                

            
                    <WhiteRectangle1>
                        <Text1>Junior Fitness D...</Text1>
                        <Text2>Mandag 15:45</Text2>
                    </WhiteRectangle1>
                
            
                    <WhiteRectangle1>
                        <Text1>Junior Fitness D...</Text1>
                        <Text2>Mandag 15:45</Text2>
                    </WhiteRectangle1>
                

            </Baggrund>
        </KalenderDefaultRootRootRoot>
    )
}
const Text1 = styled.div`
  align-self: stretch;
  font-size: 36px;
  font-family: Ubuntu;
  box-sizing: border-box;
`;
const Text2 = styled.div`
  font-size: 18px;
  font-family: Ubuntu;
  box-sizing: border-box;
`;
const WhiteRectangle1 = styled.div`
  width: 98.61%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 19px 34px 26px 34px;
  border-radius: 11px;
  box-sizing: border-box;
  background-color: #e9e9e9;
`;
const KalenderDefaultRootRootRoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-sizing: border-box;
  background-color: #ffffff;
  overflow: hidden;
`;
const Baggrund = styled.div`
  width: 100%;
  gap: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 32px 25px 339px 25px;
  box-sizing: border-box;
  background-color: #5d2e53;
`;
const ViewTitel = styled.div`
  margin: 0px 0px 0px 7px;
  color: #e9e9e9;
  font-size: 36px;
  font-family: Ubuntu;
  box-sizing: border-box;
`;
const WhiteRectangle = styled.div`
  width: 98.61%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-end;
  align-items: flex-start;
  margin: 0px 2px 0px 0px;
  padding: 19px 34px 26px 34px;
  border-radius: 11px;
  box-sizing: border-box;
  background-color: #e9e9e9;
`;
export default Schedule
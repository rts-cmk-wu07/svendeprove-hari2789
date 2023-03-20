import React from 'react'
import { useState, useEffect } from 'react'
import styled from "styled-components";
import styles, { layout } from '../style'
import { useNavigate } from 'react-router-dom';

const API = "http://localhost:4000/api/v1/activities"


const Search = () => {
    const navigate = useNavigate();
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        fetch(API)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setActivities(data);
            });

    }, []);
    return (
        <div>
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <div className="grid grid-cols-2 gap-4">
                        <div >
                            <h2 className={styles.heading2}>Søg</h2>
                            <RectangleRootRoot>
                                <Image1 src={`https://file.rendit.io/n/YVgqMcxKHPB0xBGJftCp.svg`} />
                                <Image2 src={`https://file.rendit.io/n/8jeh5RaMZPBU0tqtExrv.svg`} />
                            </RectangleRootRoot>
                            <ul className="list-none flex flex-col justify-end items-left flex-1">
                                {activities.map((activity, index) => {
                                    return (

                                        <li key={activity.id}
                                            className={`font-Roboto font-normal  text-[18px] mr-2 text-secondary`}
                                        >
                                            <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] w-[356px] display-card">
                                                <div className="flex flex-row">

                                                    <WisteriaRectangle>
                                                        <img src={activity.asset.url} alt={activity.description} onClick={() => navigate(`/ActivityDetails/${activity.id}`)} className="w-[400px] h-[max] bg-cover" />
                                                        <div>{activity.name}</div>
                                                        <div>{activity.minAge}-{activity.maxAge} år</div>
                                                    </WisteriaRectangle>
                                                </div>
                                            </div>

                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const WisteriaRectangle = styled.div`
  width: 100%;
  gap: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 23px 25px 26px 25px;
  border-radius: 0px 39px;
  box-sizing: border-box;
  background-color: rgba(225, 161, 233, 0.8);
`;
const RectangleRootRoot = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 28.6px 16px 15px 16px;
  box-sizing: border-box;
  background-color: rgba(196, 196, 196, 0.3);
`;
const Image1 = styled.img`
  width: 4.49%;
  min-width: 0px;
  height: 16px;
  min-height: 0px;
  left: 322px;
  top: 15px;
  position: absolute;
  box-sizing: border-box;
`;
const Image2 = styled.img`
  width: 1.34%;
  min-width: 0px;
  max-width: 100%;
  min-height: 0px;
  position: relative;
  align-self: flex-end;
  box-sizing: border-box;
`

export default Search
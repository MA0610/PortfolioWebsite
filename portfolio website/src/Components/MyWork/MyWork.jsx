import React from 'react';
import './MyWork.css';
import arrow_icon from '../../assets/arrow_icon.svg';
import { Link } from 'react-router-dom'; 
import mywork_data from '../../assets/mywork_data'

const MyWork = () => {


  return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <h1>My previous work</h1>
      </div>

      <div className="mywork-container " >
        {mywork_data.map((work,index)=>{
            return <img key={work.index} src={work.w_img} alt="" />
        })}
      </div>

      <div className="mywork-showmore">
        <Link to="/projects">
          <p>Show More</p>
          <img src={arrow_icon} alt="Arrow Icon" />
        </Link>
      </div>
    </div>
  );
};

export default MyWork;

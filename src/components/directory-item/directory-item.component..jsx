import React from 'react';
// import { withRouter } from 'react-router-dom';
import './directory-item.styles.scss';

// history & match come from react-router-dom and is accessible due to withRouter wrapper
const DirectoryItem = ({ category }) => {
  const { title, imageUrl, size, history, linkUrl, match } = category;

  return (
    <div
      className={`${size} directory-container`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className='background-image'
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className='directory-body-ccontainer'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  );
};

export default DirectoryItem; 
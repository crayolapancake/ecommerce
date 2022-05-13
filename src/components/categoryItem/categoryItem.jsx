import React from 'react';
// import { withRouter } from 'react-router-dom';
import './categoryItem.styles.scss';

// history & match come from react-router-dom and is accessible due to withRouter wrapper
const CategoryItem = ({ category }) => {
  const { title, imageUrl, size, history, linkUrl, match } = category;

  return (
    <div
      className={`${size} category-container`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className='background-image'
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className='category-body-ccontainer'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  );
};

// export default withRouter(CategoryItem); 
export default CategoryItem; 
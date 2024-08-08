import React from 'react';

const FilterGroup = ({ onRatingClick, minRating, ratings }) => {
  return (
    <ul className="align_center movie_filter">
      {ratings?.map((rate) => (
        <li
          className={
            minRating === rate
              ? 'movie_filter_item active'
              : 'movie_filter_item'
          }
          key={rate}
          onClick={() => onRatingClick(rate)}
        >
          {rate === 0 ? 'All' : `+${rate} Star`}
        </li>
      ))}
    </ul>
  );
};

export default FilterGroup;

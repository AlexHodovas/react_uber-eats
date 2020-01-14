import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { RestaurantCard } from '../RestaurantCard/RestaurantCard';
import './RestaurantsListPage.scss';

const DEFAULT_ETA_RANGE = '20 - 30 min';

export const RestaurantsListPage = (
  { restaurantsData, loadRestaurants }
) => {
  useEffect(() => {
    loadRestaurants();
  }, [loadRestaurants]);

  return (
    <div className="restaurants-list">
      {
        restaurantsData.map((restaurant) => {
          const {
            uuid,
            title,
            heroImageUrl,
            categories,
            etaRange,
          } = restaurant;

          return (
            <RestaurantCard
              key={uuid}
              uuid={uuid}
              title={title}
              imageUrl={heroImageUrl}
              categories={categories}
              etaRange={etaRange ? etaRange.errorMessage : DEFAULT_ETA_RANGE}
            />
          );
        })
      }
      ;
    </div>
  );
};

RestaurantsListPage.propTypes = {
  restaurantsData: PropTypes.arrayOf(PropTypes.shape({})),
  loadRestaurants: PropTypes.func.isRequired,
};

RestaurantsListPage.defaultProps = {
  restaurantsData: [],
};
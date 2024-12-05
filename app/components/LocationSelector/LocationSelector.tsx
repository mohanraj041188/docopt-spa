import { useState } from 'react';
import { LocationIcon } from '../icons';
import './LocationSelector.scss'

const LocationSelector = ({ suggestions }) => {
  const [showLocations, setLocations] = useState(false);
  const handleShowLocations = (handler: false | Boolean) => {
    setLocations(handler);
  };
  const focusSearchInput = () => {
    const doc = document;
    if (typeof doc !== 'undefined') {
      if (doc) {
        doc.querySelector('.search__input--input')?.focus()
      }
    }
  }
  
  return (
    <section className="locality-wrapper">
      <div className="search__input locality-wrapper__searchbox_wrapper">
        <span className="locality-wrapper__searchbox_icon"><LocationIcon className="icon-ic_location"/></span>
        <input className="locality-wrapper__searchbox" placeholder="Search location" onFocus={() => handleShowLocations(true)} onBlur={() => handleShowLocations(false)} />
        {showLocations ? (<>
          <div className="suggestion-list">
            <div className="suggestion-list_group">
              <div className="suggestion-list_group-item">
                <span className="suggestion-list_group-item__content">
                  <div className="suggestion-list_group-item__text">Use my location</div>
                </span>
              </div>
              <div className="suggestion-list_group-item">
                <span className="suggestion-list_group-item__content" onClick={focusSearchInput}>
                  <div className="suggestion-list_group-item__text">Search in entire Chennai</div>
                </span>
              </div>
            </div>
            <div className="suggestion-group">
              <div className="suggestion-group_item">
                <div className="suggestion-group_item__media">
                  <LocationIcon className="suggestion-group_item__media_icon"/>
                </div>
                <span className="suggestion-group_item__content" onClick={() => selectOption(item)}>
                  <div className="suggestion-group_item__content__title">Anna Nagar</div>
                  <div className="suggestion-group_item__content_text">chennai</div>
                </span>
              </div>
            </div>
          </div>
        </>) : (<></>)}
      </div>
    </section>
  );
}

export default LocationSelector
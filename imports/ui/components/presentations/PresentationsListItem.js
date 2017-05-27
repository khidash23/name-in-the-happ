import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { Session } from 'meteor/session';
import { createContainer } from 'meteor/react-meteor-data';

export const PresentationsListItem = (props) => {
  const className = props.presentation.selected ? 'item item--selected' : 'item';
  return (
    <div className={className} onClick={() => {
      props.Session.set('selectedPresentationId', props.presentation._id);
    }}>
      <h5 className="item__title">{ props.presentation.title || 'Untitled Presentation' }</h5>
      <p className="item__subtitle">{ moment(props.presentation.updatedAt).format('M/DD/YYYY') }</p>
    </div>
  );
};

PresentationsListItem.propTypes = {
  presentation: PropTypes.object.isRequired,
  Session: PropTypes.object.isRequired,
};

export default createContainer(() => {
  return { Session };
}, PresentationsListItem);

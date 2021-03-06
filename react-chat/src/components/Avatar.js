import React from 'react';
import PropTypes from 'prop-types';
import MUIAvatar from 'material-ui/Avatar';
import getColor from '../utils/ColorFrom';
import titleInitials from '../utils/TitleInitials';

const Avatar = ({ colorFrom, children, ...rest }) => (
  <MUIAvatar style={{ backgroundColor: getColor(colorFrom) }} {...rest}>
    {titleInitials(children)}
  </MUIAvatar>
);
Avatar.propTypes = {
  colorFrom: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default Avatar;

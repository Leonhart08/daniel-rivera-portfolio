import PropTypes from 'prop-types';

export const Chip = ({ label }) => <div className='chip'> { label } </div>

Chip.propTypes = {
  label: PropTypes.string
};

import PropTypes from 'prop-types';

export const Box = ({ children }) => {
  return (
    <div className='box'>
      {children}
    </div>
  )
}

Box.propTypes = {
  children: PropTypes.element
};

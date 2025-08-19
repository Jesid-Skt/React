import PropTypes from 'prop-types';


export const FirstApp = ({title, name, power}) => {

  return (  
    <>
      <h1>{title}</h1>
      <p>{name}</p>
      <p>{power}</p> 
    </>
  )
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  power: PropTypes.number,
}

FirstApp.defaultProps = {
  title: 'No hay titulo',
  name: 'es un secreto',
  power: 0,
}

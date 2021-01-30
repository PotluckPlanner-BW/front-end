import React, { useContext, useEffect } from 'react';
//import { CSSTransition, TransitionGroup } from 'react-transition-group';

// Context
// import PlantContext from '../../context/plant/plantContext';
// import AuthContext from '../../context/auth/authContext';

// Components
import PotluckCard from './PotluckCard';
import PotluckForm from './PotluckForm';
import styled from 'styled-components'

import { connect } from 'react-redux'

const PlantList = (props) => {
//   const plantContext = useContext(PlantContext);
//   const authContext = useContext(AuthContext);

//   const { plants, getPlants, loading } = plantContext;
//   const { user } = authContext;

//   useEffect(() => {
//     getPlants(user.userId);
//     // eslint-disable-next-line
//   }, []);

  return (
    <DisplayWrapper>
      <PotluckForm/>
      <div className='card-display'>
        <h2>List of Potlucks</h2>
        { !props.state.potlucks ? (
          <h2>Plants are loading...</h2>
        ) : (  
         props.state.potlucks.map( item => {
            return (
              <PotluckCard item={item}/>
            )})
        )}
      </div>
    </DisplayWrapper>
  );
};

const mapStateToProps = (state) => {
   return { state }
}

export default connect(mapStateToProps, {})(PlantList);

const DisplayWrapper = styled.div`
   display:flex;

   // **styles for <PotluckForm/> with the component file
   
   .form-display{
      width:50%;
   }

   .card-display{
      width:50%;
   }
`;
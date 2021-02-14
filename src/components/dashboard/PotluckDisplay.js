import React, { useContext, useEffect } from 'react';
import breakpoint from '../../breakpoint';
//import { CSSTransition, TransitionGroup } from 'react-transition-group';

// Context
// import PlantContext from '../../context/plant/plantContext';
// import AuthContext from '../../context/auth/authContext';

// Components
import PotluckCard from './PotluckCard';
import PotluckForm from './PotluckForm';
import styled from 'styled-components';
import { connect } from 'react-redux'
import Footer from '../Footer';

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
    <div>

    
    <DisplayWrapper>
      
      <PotluckForm/>
      <div className='card-display'>
        
        <h2>My Potlucks</h2>
        { !props.state.potlucks ? (
          <h2>Potlucks are loading...</h2>
        ) : (  
         props.state.potlucks.map( item => {
            return (
              <PotluckCard 
                key={item.id}
                item={item}/>
            )})
        )}
      </div>
    </DisplayWrapper>
    <Footer/>
    </div>
  );
};

const mapStateToProps = (state) => {
   return { state }
}

export default connect(mapStateToProps, {})(PlantList);

const DisplayWrapper = styled.div`
   // **styles for <PotluckForm/> with the component file

   
   .form-display{
   }

   .card-display{
     background-color: #F4F3F3;
     padding: 50px 0;
   }

    @media only screen and ${breakpoint.device.tablet} {
        //background-color: yellow;


    }

    @media only screen and ${breakpoint.device.desktop} {
        //background-color: red;
       display: flex;

    }
    
`;

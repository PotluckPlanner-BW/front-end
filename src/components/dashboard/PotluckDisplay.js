import React, { useEffect } from 'react';
import { getPotlucks } from '../../actions/index'
//import { CSSTransition, TransitionGroup } from 'react-transition-group';

// Components
import PotluckCard from './PotluckCard';
import PotluckForm from './PotluckForm';
import styled from 'styled-components'

import { connect } from 'react-redux'

const PotluckDisplay = (props) => {

   useEffect( () => {
      props.getPotlucks()
   },[])

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
              <PotluckCard 
                key={item.id}
                item={item}/>
            )})
        )}
      </div>
    </DisplayWrapper>
  );
};

const mapStateToProps = (state) => {
   return { state }
}

export default connect(mapStateToProps, {getPotlucks})(PotluckDisplay);

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
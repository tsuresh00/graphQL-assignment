import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import AddCarForm from '../Components/AddCarForm';
import AddPersonForm from '../Components/AddPersonForm';
import DetailCar from '../Components/DetailCar';
import RecordList from '../Components/RecordList';
import { GET_PERSON_CARS } from '../Gqlqueries/gqlqueries';


function DetailPage({person}) {
    const { personId } = useParams();

    // Get the person and cars
    const { loading, error, data } = useQuery(GET_PERSON_CARS, {
        variables: { id: personId },
        fetchPolicy: 'cache-and-network',
    });
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;


  return (
<div>
    <h2 className='mainheading'>PEOPLE AND THEIR CARS</h2>
    <div className='devider'></div>

    
  

    
    <DetailCar data={data}/>
</div>
  )

}

export default DetailPage
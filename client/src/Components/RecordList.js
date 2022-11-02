import { useEffect, useState } from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { v4 as uuidv4 } from 'uuid'
import { ADD_CAR, GET_CARS, GET_PERSON } from '../Gqlqueries/gqlqueries'
import PersonList from './PersonList';
import CarList from './CarList';
import { Link } from 'react-router-dom';
import PersonListItem from './PersonListItem';




function RecordList() {

    const [editMode, setEditMode] = useState(false);

        // Get the people
        const { loading, error, data } = useQuery(GET_PERSON, {
            fetchPolicy: 'cache-and-network'
            });
        if (loading) return 'Loading...';
        if (error) return `Error! ${error.message}`;



  return (

    <>
    {
        data.people.map(person => (

//             <div className='recordcard' key={person.id}>
          
//           <div className='recheading'>
//             <h4 className='m0'>{person.firstName} {person.lastName}</h4>
//             <button>Edit</button>
//         </div>

        
        

// <CarList cars={data.cars} personId={person.id} iseditmode={setEditMode}/>
      

// <div className='p10'>
// <Link to={`/pesrson/${person.id}`}>Learn More</Link>
// </div>

//          </div>

<PersonListItem cars={data.cars} person={person}/>


         ))
         }  
    
    </>

  )

}

export default RecordList
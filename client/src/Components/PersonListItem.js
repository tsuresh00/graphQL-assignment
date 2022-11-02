import { useEffect, useState } from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { v4 as uuidv4 } from 'uuid'
import { ADD_CAR, GET_CARS, GET_PERSON } from '../Gqlqueries/gqlqueries'
import UpdateCarForm from './UpdateCarForm';
import UpdatePersonForm from './UpdatePersonForm';
import { Link } from 'react-router-dom';
import CarList from './CarList';
import { EditOutlined } from '@ant-design/icons';
import DeletePersonBtn from './DeletePersonBtn';




function PersonListItem({person,cars}) {

    const [editMode, setEditMode] = useState(false);

   

  return (

    <div className='recordcard' key={person.id}>
          
    <div className='recheading'>
      <h4 className='m0'>{person.firstName} {person.lastName}</h4>
      {/* <button onClick={()=>setEditMode(!editMode)}>Edit</button> */}
      <div>
      <EditOutlined onClick={()=>setEditMode(!editMode)} style={{marginRight:10}} /> 
      <DeletePersonBtn id={person.id}/>
     
      </div>
      
  </div>

  {editMode?<UpdatePersonForm person={person} setEditMode={setEditMode}/> :null }

  
  

<CarList cars={cars} personId={person.id} iseditmode={setEditMode}/>


<div className='p10'>
<Link to={`/pesrson/${person.id}`}>Learn More</Link>
</div>

   </div>

                
                      
    
  
  
  )

}

export default PersonListItem
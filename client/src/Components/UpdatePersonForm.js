import { useEffect, useState } from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { v4 as uuidv4 } from 'uuid'
import { ADD_CAR, GET_CARS, GET_PERSON, UPDATE_CAR, UPDATE_PERSON } from '../Gqlqueries/gqlqueries'





function UpdatePersonForm({person,setEditMode}) {


    const [firstName, setFName] = useState(person.firstName);
    const [lastName, setLName] = useState(person.lastName);
    const [id,setId] = useState(person.id);
    const [updatePerson] = useMutation(UPDATE_PERSON);



 
const update_personz = () => {
    
    updatePerson({
        variables: { id, firstName, lastName },
    })

    setEditMode(false);
   setFName("");
    setLName("");
}

  return (
    <div className='addpersondiv'>

<label className='m10'>Enter First Name: 
        <input
        className='ml5 inpt'
          type="text" 
          value={firstName}
          onChange={(e) => setFName(e.target.value)}
        />
      </label>

      <label className='m10'>Enter Last Name: 
        <input
         className='ml5 inpt'
          type="text" 
          value={lastName}
          onChange={(e) => setLName(e.target.value)}
        />
      </label>

    <button className='m10 addbtn' onClick={()=>update_personz()}>Update Person</button>
    <button className='m10 addbtn' onClick={()=>setEditMode(false)}>Cancel</button>
  </div>
  )

}

export default UpdatePersonForm
import { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import { v4 as uuidv4 } from 'uuid'
import { ADD_PERSON, GET_PERSON } from '../Gqlqueries/gqlqueries';


function AddPersonForm() {
  const [firstName, setFName] = useState("");
  const [lastName, setLName] = useState("");
  const [id,setId] = useState(uuidv4());
  const [addPerson] = useMutation(ADD_PERSON);




  const add_person = () => {

    addPerson({
        variables: { id, firstName, lastName },
        update: (proxy, { data: { addPerson } }) => {
            const data = proxy.readQuery({ query: GET_PERSON });
            proxy.writeQuery({
                query: GET_PERSON,
                data: {
                    ...data,
                    people: [...data.people, addPerson]
                } 
            });
        }
    })

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

      <button className='m10 addbtn' onClick={()=>add_person()}>Add Person</button>
    </div>
  )

}

export default AddPersonForm
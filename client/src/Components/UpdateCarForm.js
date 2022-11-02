import { useEffect, useState } from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { v4 as uuidv4 } from 'uuid'
import { ADD_CAR, GET_CARS, GET_PERSON, UPDATE_CAR } from '../Gqlqueries/gqlqueries'





function UpdateCarForm({car,setEditMode}) {


const [updateCar] = useMutation(UPDATE_CAR);
const [id,setId] = useState(car.id);
const [year, setYear] = useState(car.year);
const [model, setModel] = useState(car.model);
const [price, setPrice] = useState(car.price);
const [make, setMake] = useState(car.make);
const [personId, setPersonId] = useState(car.personId);


      // Get all people from the database.
      const { loading, error, data } = useQuery(GET_PERSON, {
        fetchPolicy: 'cache-and-network'
        });
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    // Submit the form.
    const update_carz = () => {
      
        updateCar({
            variables: { id, year, make, model, price, personId },
        })
       
        setEditMode(false);
    }


  return (
    <div className='addpersondiv'>

<label className='m10'>Year: 
      <input
      className='ml5 inpt'
      placeholder='Year'
        type="number" 
        min={1950} max={2022}
        value={year}
        onChange={(e) => setYear(parseInt(e.target.value))}
      />
    </label>

    <label className='m10'>Make: 
      <input
      className='ml5 inpt'
      placeholder='Make'
        type="text" 
        value={make}
        onChange={(e) => setMake(e.target.value)}
      />
    </label>

    <label className='m10'>Model: 
      <input
      className='ml5 inpt'
      placeholder='Model'
        type="text" 
        value={model}
        onChange={(e) => setModel(e.target.value)}
      />
    </label>

    <label className='m10'>Price: 
      <input
      className='ml5 inpt'
      placeholder='$'
        type="number" 
        value={price}
        onChange={(e) => setPrice(parseFloat(e.target.value))}
      />
    </label>
       
    <label className='m10'>Person: 
    <select className='ml5 inpt'  value={personId}   onChange={(e) => setPersonId(e.target.value)}>
    {data.people.map(person => (
                            <option key={person.id} value={person.id}>{person.firstName} {person.lastName}</option>
                        ))}
    </select>
   
    </label>

    <button className='m10 addbtn' onClick={()=>update_carz()}>Update Car</button>
    <button className='m10 addbtn' onClick={()=>setEditMode(false)}>Cancel</button>
  </div>
  )

}

export default UpdateCarForm
import { useEffect, useState } from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { v4 as uuidv4 } from 'uuid'
import { ADD_CAR, GET_CARS, GET_PERSON } from '../Gqlqueries/gqlqueries'




function AddCarForm() {

const [id, setId] = useState(uuidv4());
const [createCar] = useMutation(ADD_CAR);
const [year, setYear] = useState(0);
const [model, setModel] = useState("");
const [price, setPrice] = useState(0);
const [make, setMake] = useState("");
const [personId, setPersonId] = useState("");


      // Get all people from the database.
      const { loading, error, data } = useQuery(GET_PERSON, {
        fetchPolicy: 'cache-and-network'
        });
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    // Submit the form.
    const add_carz = () => {
       
        createCar({
            variables: { id, year, make, model, price, personId },
            update: (proxy, { data: { createCar } }) => {
                const data = proxy.readQuery({ query: GET_CARS });
                proxy.writeQuery({
                    query: GET_CARS,
                    data: {
                        ...data,
                        cars: [...data.cars, createCar]
                    }
                });
            }
        })
        
        setId(uuidv4());
        setYear(0);
        setModel("");
        setPrice(0);
        setMake("");
        setPersonId("");
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



    <button className='m10 addbtn' onClick={()=>add_carz()}>Add Car</button>
  </div>
  )

}

export default AddCarForm
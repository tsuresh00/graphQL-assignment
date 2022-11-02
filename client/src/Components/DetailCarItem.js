import { useEffect, useState } from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { v4 as uuidv4 } from 'uuid'
import { ADD_CAR, GET_CARS, GET_PERSON } from '../Gqlqueries/gqlqueries'
import UpdateCarForm from './UpdateCarForm';




function DetailCarItem({car}) {

    const [editMode, setEditMode] = useState(false);

   

  return (

                 <div className='carcard' key={car.id}>



                          
                           <table>
                            
                            <td style={{width:"20%"}}>
                                {car.year}
                            </td>
                
                            <td style={{width:"40%"}}>
                                {car.make}
                            </td>
                
                            <td style={{width:"20%"}}>
                                {car.price}
                            </td>
                           
                           </table>
                        </div>
                      
    
  
  
  )

}

export default DetailCarItem
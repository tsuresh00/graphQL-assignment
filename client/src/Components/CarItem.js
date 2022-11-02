import { useEffect, useState } from 'react'
import { useMutation, useQuery } from '@apollo/client';
import { EditOutlined } from '@ant-design/icons';
import { v4 as uuidv4 } from 'uuid'
import { ADD_CAR, GET_CARS, GET_PERSON } from '../Gqlqueries/gqlqueries'
import UpdateCarForm from './UpdateCarForm';
import DeleteCarBtn from './DeleteCarbtn';




function CarItem({car}) {

    const [editMode, setEditMode] = useState(false);

   

  return (

                 <div className='carcard' key={car.id}>

{editMode?<UpdateCarForm car={car} setEditMode={setEditMode}/> :null }

                          
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
                            <td>
                                {/* <button onClick={()=>setEditMode(!editMode)}></button> */}
                                <EditOutlined onClick={()=>setEditMode(!editMode)} />
                                
                            </td>
                
                            <td>
                               <DeleteCarBtn id={car.id}/>
                            </td>
                           </table>
                        </div>
                      
    
  
  
  )

}

export default CarItem
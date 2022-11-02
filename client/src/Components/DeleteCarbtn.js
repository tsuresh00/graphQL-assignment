import { useMutation } from '@apollo/client'
import { filter } from 'lodash'
import { DeleteOutlined } from '@ant-design/icons'
import { DELETE_CAR, GET_CARS } from '../Gqlqueries/gqlqueries';


const DeleteCarBtn = ({ id }) => {

    const [deleteCar] = useMutation(DELETE_CAR, {
        update(cache, { data: { deleteCar } }) {
            const { cars } = cache.readQuery({ query: GET_CARS });
            cache.writeQuery({
                query: GET_CARS,
                data: {
                    cars: filter(cars, car => car.id !== deleteCar.id)
                }
            });
        }
    });

    const handleDelete = () => {
        let result = window.confirm('Are you sure you want to delete this car?');
        if (result) {
            deleteCar({ variables: { id } });
        }
    };

    return (

        <DeleteOutlined key='delete' onClick={handleDelete} style={{ color: 'red' }} />
    )
}
export default DeleteCarBtn;
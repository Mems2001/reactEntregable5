
import { useForm } from 'react-hook-form'
import { useDispatch , useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setTrainerName } from '../store/slices/trainer.slice'

const Home = ( {setName} ) => {

    // const trainer = useSelector(state => state.trainerSlice)

    // const dispatch = useDispatch()

    const navigate = useNavigate()

    const defaultTrainer = {
        trainerName: ''
    }

    const { register , handleSubmit , reset } = useForm()

    const submit = data => {
        
        
        if (data.trainerName.length !== 0) {
            console.log(data)
            setName(data.trainerName.trim())
        // dispatch(setTrainerName(data.trainerName.trim()))
        navigate('/pokedex')
        }
        reset(defaultTrainer)
    }

    // console.log(trainer)

  return (
    <div className='homeContainer'>

        <div className='homeGreeting'>
            <h1 className='homeTitle'>Hello trainer!</h1>
            <img className='trainerImg' src='img/trainer.png' />
        </div>

        <form onSubmit={handleSubmit(submit)} >
            <label htmlFor='name'><b>Give me your name to start!</b></label>
            <div>
                <input type='text' id='name' {...register('trainerName')} />
                <button id='inputNameBtn'>Ok</button>
            </div>
        </form>
    </div>
  )
}

export default Home
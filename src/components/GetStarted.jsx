
import styles from '../style'
import { arrowUp } from '../assets'

const getStarted = () =>  (
  <a href='https://youtu.be/dQw4w9WgXcQ' target="_blank">
    <div className={`${styles.flexCenter} w-[120px] h-[120px] rounded-full bg-blue-gradient p-[2px] cursor-pointer hover:w-[150px] hover:h-[150px] ease-in duration-500`}>
    <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className='font-poppins font-medium text-[18px] leading-[23px]'> 
          <span className='text-gradient mr-2'>Get</span>
          
          </p>
          <img src={arrowUp} className='w-[23px] h-[23px] object-contain'/>
        </div>
        <p className='font-poppins font-medium text-[18px] leading-[23px]'> 
          <span className='text-gradient'>Started</span>
          
          </p>
    </div>

    </div>
    </a>
  )


export default getStarted
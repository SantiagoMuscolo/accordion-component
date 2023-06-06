import shadowPlatform from '../assets/bg-pattern-desktop.svg';
import illustrationBox from '../assets/illustration-box-desktop.svg';
import girl from '../assets/illustration-woman-online-desktop.svg';
import './image.css'


export const Image = () => {
    return (
        <div className='image'>
            <img className='shadowPlatform' src={shadowPlatform} alt="" />
            <img className='girl' src={girl} alt="" />
            <img className='illustrationBox' src={illustrationBox} alt="" />
        </div>
    )
}

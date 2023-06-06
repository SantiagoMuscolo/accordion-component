import { useState } from 'react';
import arrow from '../../assets/icon-arrow-down.svg';
import '../accordion.css';

interface QuestionObject {
    question:string;
    answer:string;
}

interface StructureProps{
    t: QuestionObject
}

export const Structure:React.FC<StructureProps> = ({t}) => {
const [show, setShow] = useState<Boolean>(false);



    return (
        <>
                        <div className="contenedor__content">
                            <div className="question">
                                <button onClick={() => setShow(!show)}>
                                    <span>{t.question}</span>
                                    {show && <img src={arrow} alt="" />}
                                    {!show && <img src={arrow} alt="" />}
                                </button>
                            </div>
                            <div className="answer">
                                {show && <p>{t.answer}</p>}
                            </div>
                        </div>
                    </>
    )
}

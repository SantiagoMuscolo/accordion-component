import { useEffect, useState } from "react";
import { questionsFetch } from '../hooks/mockFetch';
import { Structure } from "./components/StructureAccordion";

import './accordion.css';


export const Accordion = () => {
    const [questions, setQuestions] = useState<Array<QuestionObject>>([])
    

    interface QuestionObject {
        question: string;
        answer: string;
    }

    useEffect(() => {
        setQuestions(questionsFetch);
    }, [])

    return (
        <div>
            {questions && questions.map(t => {
                return (
                    <Structure t={t}/>
                )
            })}
        </div>
    )
}

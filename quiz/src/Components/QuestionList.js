import ListOfQuestions from "../QuestionsFolder/answers.json";
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import './QuestionList.css';

/** This component fetches the data from the json file and displays a question */
const QuestionList = () => {
    const [problemNumber, setProblemNumber] = useState(0);
    const [wrong, setWrong] = useState(false);
    const [start, setStart] = useState(false);
    const [finished, setFinished] = useState(false);

    //getting a list of questions and then picking a random one
    const stringifieddata = JSON.stringify(ListOfQuestions)
    const data = JSON.parse(stringifieddata)

    //getting parameter from url to determine what test needs to be fetched
    const { test } = useParams()
    const questions = data[test]

    
    /** Checking the correctness of the answer given. If the answer given is wrong, the user gets feedback and can't move
     * on to the next question until they give a correct answer. This function also checks whether the user has reached the
     * end of the quiz.
     */
    const checkAnswer = (answer) => {
        if (answer === questions[problemNumber].CorrectAnswer) {
            console.log("Correct!");
            setWrong(false);

            if (problemNumber + 1 !== 10)
                setProblemNumber(problemNumber + 1);
            else
                setFinished(true);
        
        }

        else {
            console.log("Incorrect!");
            setWrong(true);
        }
    }
    
    return (
        <div className = "container-fluid">
            {!start && 
                <section>
                    <p>
                    You will be asked a series of question on this chapter's material. If you give an incorrect answer, you
                    will not be able to move on to the next question until you get it right. Are you ready to start?
                    </p>
                    <button className="btn btn-primary" onClick = {() => setStart(true)}> Start </button>
                </section>}


            {finished && <section> You're done! </section>}
            {start && !finished && <><h1 style={{ color: "blue" }}> {questions[problemNumber].Question} </h1><section className="answer_list">
                <button className="btn btn-primary m-1"
                    onClick={() => checkAnswer(questions[problemNumber].Answers[0])}>
                    {questions[problemNumber].Answers[0]}
                </button>

                <button className="btn btn-primary m-1"
                    onClick={() => checkAnswer(questions[problemNumber].Answers[1])}>
                    {questions[problemNumber].Answers[1]}
                </button>

                <button className="btn btn-primary m-1"
                    onClick={() => checkAnswer(questions[problemNumber].Answers[2])}>
                    {questions[problemNumber].Answers[2]}
                </button>

                <button className="btn btn-primary m-1"
                    onClick={() => checkAnswer(questions[problemNumber].Answers[3])}>
                    {questions[problemNumber].Answers[3]}
                </button>
            </section></> }
            
            {wrong && 
                <section className="wrong_answer">  <h1>Incorrect Answer!</h1> </section>}
            
        </div>
    )
    
}

export default QuestionList;
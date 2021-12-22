import { useState } from "react";

const Faq = ({ faq }) => {
    const [showAns, setShowAns] = useState(false)

    const showAnsHandler = () => {
        setShowAns(!showAns)
    }

    return (
        <div className="faq">
            <div className="faq-ques" onClick={showAnsHandler}>
                <h1>{faq.ques}</h1>
                <p style={{ fontSize: '4rem' }}>{showAns ? 'x' : '+'}</p>
            </div>
            {showAns ? <h1 className="faq-ans">{faq.ans}</h1> : ''}
        </div>
    )
}
export default Faq;

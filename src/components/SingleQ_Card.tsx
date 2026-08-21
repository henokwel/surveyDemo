import Radio from "./Checkbox"


export const SingleQ_Card = () => {

    return (
        <div className='question_card'>
            <div className='question_container'>
                <p>If you were free to dfsdfchoose, would you move away from your current residential area?</p>
            </div>

            <div className="option_container">

                <div className='inputDiv'>
                    {/* <input
                        type='radio'
                        id="one"
                        name="one"
                        value="one" /> */}
                    {/* <Radio
                        id="one"
                        name="one"
                        value="one" /> */}

                    <Radio
                        aria-label="Often"
                        name="frequency"
                        value="often"
                    // checked={answer === "often"}
                    // onChange={(event) => setAnswer(event.target.value)}
                    />
                    <label className='mobile_label' for="one">No</label>
                </div>

                <div className='inputDiv'>
                    <Radio />

                    {/* <input
                        type='radio'
                        id="one"
                        name="one"
                        value="one" /> */}
                    <label className='mobile_label' for="one">Yes, mainly due to insecurity, crime, and disturbances of the peace</label>
                </div>

                <div className='inputDiv'>

                    <input
                        type='radio'
                        id="one"
                        name="one"
                        value="one" />
                    <label className='mobile_label' for="one">Yes, mainly due to other reasons</label>
                </div>

                <div className='inputDiv'>
                    <input
                        type='radio'
                        id="one"
                        name="one"
                        value="one"
                    />
                    <label className='mobile_label' for="one">Don't know</label>
                </div>
            </div>
        </div>
    )
}
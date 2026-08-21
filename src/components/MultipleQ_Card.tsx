import Radio from "./Checkbox"



export const MultipleQ_Card = () => {
    return (
        <div className='question_card'>

            {/* <h1>Hello world</h1> */}
            <div className='question_container'>
                <h3>Worries about being the victim of crime</h3>
                <p>During the last 12 months, has it occurred...</p>
            </div>

            <div className="option_container multi_option">
                <div className="multi_option_lables">

                    {/* <div className='inputDiv'> */}
                    {/* <input
                            type='radio'
                            id="one"
                            name="one"
                            value="one" /> */}
                    <p className='option_label' >Yes, very often</p>
                    {/* </div> */}
                    {/* <div className='inputDiv'> */}

                    <p className='option_label'>Yes, quite often</p>
                    {/* </div> */}

                    {/* <div className='inputDiv'> */}

                    {/* <input
                            type='radio'
                            id="one"
                            name="one"
                            value="one" /> */}
                    <p className='option_label'>Yes, but only rarley
                        often</p>
                    {/* </div> */}

                    {/* <div className='inputDiv'> */}
                    {/* <input
                            type='radio'
                            id="one"
                            name="one"
                            value="one"
                        /> */}
                    <p className='option_label'  >No, has  not happend</p>
                    {/* </div> */}
                    {/* <div className='inputDiv'> */}
                    {/* <input
                            type='radio'
                            id="one"
                            name="one"
                            value="one"
                        /> */}
                    <p className='option_label'  >Don’t know</p>
                    {/* </div> */}

                </div>
            </div>


            <div className="choices_container">

                <div className="choice_item" id="345">
                    <div className="choice_label">
                        <label className='mobile_label' for="one">att du oroat dig för att din bil, mc, moped eller cykel ska utsättas för stöld eller skadegörelse om den är parkerad i omradet där du bor?</label>
                    </div>

                    <div className="choice_input">

                        <div className="inputDiv">
                            <Radio
                                name="frequency"
                                value="often"
                                // checked={answer === "often"}
                                // onChange={(event) => setAnswer(event.target.value)}
                                aria-label="Often"
                            />
                            <label className='mobile_label multi_label' for="one">LKDLKf, very often</label>
                        </div>
                        <div className="inputDiv">
                            <Radio
                                name="frequency"
                                value="often"
                                // checked={answer === "often"}
                                // onChange={(event) => setAnswer(event.target.value)}
                                aria-label="Often"
                            />
                            <label className='mobile_label multi_label' for="one">LKDLKf, very often</label>
                        </div>
                        <div className="inputDiv">
                            <Radio
                                name="frequency"
                                value="often"
                                // checked={answer === "often"}
                                // onChange={(event) => setAnswer(event.target.value)}
                                aria-label="Often"
                            />
                            <label className='mobile_label multi_label' for="one">LKDLKf, very often</label>
                        </div>
                        <div className="inputDiv">
                            <Radio
                                name="frequency"
                                value="often"
                                // checked={answer === "often"}
                                // onChange={(event) => setAnswer(event.target.value)}
                                aria-label="Often"
                            />
                            <label className='mobile_label multi_label' for="one">LKDLKf, very often</label>
                        </div>
                        <div className="inputDiv">
                            <Radio
                                name="frequency"
                                value="often"
                                // checked={answer === "often"}
                                // onChange={(event) => setAnswer(event.target.value)}
                                aria-label="Often"
                            />
                            <label className='mobile_label multi_label' for="one">LKDLKf, very often</label>
                        </div>

                    </div>
                </div>

                <div className="choice_item" id="345">
                    <div className="choice_label">
                        <label className='mobile_label' for="one">att du oroat dig för att din bil, mc, moped eller cykel ska utsättas för stöld eller skadegörelse om den är parkerad i omradet där du bor?</label>
                    </div>

                    <div className="choice_input">

                        <div className="inputDiv">
                            <Radio
                                name="frequency"
                                value="often"
                                // checked={answer === "often"}
                                // onChange={(event) => setAnswer(event.target.value)}
                                aria-label="Often"
                            />
                            <label className='mobile_label multi_label' for="one">LKDLKf, very often</label>
                        </div>
                        <div className="inputDiv">
                            <Radio
                                name="frequency"
                                value="often"
                                // checked={answer === "often"}
                                // onChange={(event) => setAnswer(event.target.value)}
                                aria-label="Often"
                            />
                            <label className='mobile_label multi_label' for="one">LKDLKf, very often</label>
                        </div>
                        <div className="inputDiv">
                            <Radio
                                name="frequency"
                                value="often"
                                // checked={answer === "often"}
                                // onChange={(event) => setAnswer(event.target.value)}
                                aria-label="Often"
                            />
                            <label className='mobile_label multi_label' for="one">LKDLKf, very often</label>
                        </div>
                        <div className="inputDiv">
                            <Radio
                                name="frequency"
                                value="often"
                                // checked={answer === "often"}
                                // onChange={(event) => setAnswer(event.target.value)}
                                aria-label="Often"
                            />
                            <label className='mobile_label multi_label' for="one">LKDLKf, very often</label>
                        </div>
                        <div className="inputDiv">
                            <Radio
                                name="frequency"
                                value="often"
                                // checked={answer === "often"}
                                // onChange={(event) => setAnswer(event.target.value)}
                                aria-label="Often"
                            />
                            <label className='mobile_label multi_label' for="one">LKDLKf, very often</label>
                        </div>

                    </div>
                </div>

                <div className="choice_item" id="345">
                    <div className="choice_label">
                        <label className='mobile_label' for="one">att du oroat dig för att din bil, mc, moped eller cykel ska utsättas för stöld eller skadegörelse om den är parkerad i omradet där du bor?</label>
                    </div>

                    <div className="choice_input">

                        <div className="inputDiv">
                            <Radio
                                name="frequency"
                                value="often"
                                // checked={answer === "often"}
                                // onChange={(event) => setAnswer(event.target.value)}
                                aria-label="Often"
                            />
                            <label className='mobile_label multi_label' for="one">LKDLKf, very often</label>
                        </div>
                        <div className="inputDiv">
                            <Radio
                                name="frequency"
                                value="often"
                                // checked={answer === "often"}
                                // onChange={(event) => setAnswer(event.target.value)}
                                aria-label="Often"
                            />
                            <label className='mobile_label multi_label' for="one">LKDLKf, very often</label>
                        </div>
                        <div className="inputDiv">
                            <Radio
                                name="frequency"
                                value="often"
                                // checked={answer === "often"}
                                // onChange={(event) => setAnswer(event.target.value)}
                                aria-label="Often"
                            />
                            <label className='mobile_label multi_label' for="one">LKDLKf, very often</label>
                        </div>
                        <div className="inputDiv">
                            <Radio
                                name="frequency"
                                value="often"
                                // checked={answer === "often"}
                                // onChange={(event) => setAnswer(event.target.value)}
                                aria-label="Often"
                            />
                            <label className='mobile_label multi_label' for="one">LKDLKf, very often</label>
                        </div>
                        <div className="inputDiv">
                            <Radio
                                name="frequency"
                                value="often"
                                // checked={answer === "often"}
                                // onChange={(event) => setAnswer(event.target.value)}
                                aria-label="Often"
                            />
                            <label className='mobile_label multi_label' for="one">LKDLKf, very often</label>
                        </div>

                    </div>
                </div>
                <div className="choice_item" id="345">
                    <div className="choice_label">
                        <label className='mobile_label' for="one">att du oroat dig för att din bil, mc, moped eller cykel ska utsättas för stöld eller skadegörelse om den är parkerad i omradet där du bor?</label>
                    </div>

                    <div className="choice_input">

                        <div className="inputDiv">
                            <Radio
                                name="frequency"
                                value="often"
                                // checked={answer === "often"}
                                // onChange={(event) => setAnswer(event.target.value)}
                                aria-label="Often"
                            />
                            <label className='mobile_label multi_label' for="one">LKDLKf, very often</label>
                        </div>
                        <div className="inputDiv">
                            <Radio
                                name="frequency"
                                value="often"
                                // checked={answer === "often"}
                                // onChange={(event) => setAnswer(event.target.value)}
                                aria-label="Often"
                            />
                            <label className='mobile_label multi_label' for="one">LKDLKf, very often</label>
                        </div>
                        <div className="inputDiv">
                            <Radio
                                name="frequency"
                                value="often"
                                // checked={answer === "often"}
                                // onChange={(event) => setAnswer(event.target.value)}
                                aria-label="Often"
                            />
                            <label className='mobile_label multi_label' for="one">LKDLKf, very often</label>
                        </div>
                        <div className="inputDiv">
                            <Radio
                                name="frequency"
                                value="often"
                                // checked={answer === "often"}
                                // onChange={(event) => setAnswer(event.target.value)}
                                aria-label="Often"
                            />
                            <label className='mobile_label multi_label' for="one">LKDLKf, very often</label>
                        </div>
                        <div className="inputDiv">
                            <Radio
                                name="frequency"
                                value="often"
                                // checked={answer === "often"}
                                // onChange={(event) => setAnswer(event.target.value)}
                                aria-label="Often"
                            />
                            <label className='mobile_label multi_label' for="one">LKDLKf, very often</label>
                        </div>

                    </div>
                </div>
                <div className="choice_item" id="345">
                    <div className="choice_label">
                        <label className='mobile_label' for="one">att du oroat dig för att din bil, mc, moped eller cykel ska utsättas för stöld eller skadegörelse om den är parkerad i omradet där du bor?</label>
                    </div>

                    <div className="choice_input">

                        <div className="inputDiv">
                            <Radio
                                name="frequency"
                                value="often"
                                // checked={answer === "often"}
                                // onChange={(event) => setAnswer(event.target.value)}
                                aria-label="Often"
                            />
                            <label className='mobile_label multi_label' for="one">LKDLKf, very often</label>
                        </div>
                        <div className="inputDiv">
                            <Radio
                                name="frequency"
                                value="often"
                                // checked={answer === "often"}
                                // onChange={(event) => setAnswer(event.target.value)}
                                aria-label="Often"
                            />
                            <label className='mobile_label multi_label' for="one">LKDLKf, very often</label>
                        </div>
                        <div className="inputDiv">
                            <Radio
                                name="frequency"
                                value="often"
                                // checked={answer === "often"}
                                // onChange={(event) => setAnswer(event.target.value)}
                                aria-label="Often"
                            />
                            <label className='mobile_label multi_label' for="one">LKDLKf, very often</label>
                        </div>
                        <div className="inputDiv">
                            <Radio
                                name="frequency"
                                value="often"
                                // checked={answer === "often"}
                                // onChange={(event) => setAnswer(event.target.value)}
                                aria-label="Often"
                            />
                            <label className='mobile_label multi_label' for="one">LKDLKf, very often</label>
                        </div>
                        <div className="inputDiv">
                            <Radio
                                name="frequency"
                                value="often"
                                // checked={answer === "often"}
                                // onChange={(event) => setAnswer(event.target.value)}
                                aria-label="Often"
                            />
                            <label className='mobile_label multi_label' for="one">LKDLKf, very often</label>
                        </div>

                    </div>
                </div>
                <div className="choice_item" id="345">
                    <div className="choice_label">
                        <label className='mobile_label' for="one">att du oroat dig för att din bil, mc, moped eller cykel ska utsättas för stöld eller skadegörelse om den är parkerad i omradet där du bor?</label>
                    </div>

                    <div className="choice_input">

                        <div className="inputDiv">
                            <Radio
                                name="frequency"
                                value="often"
                                // checked={answer === "often"}
                                // onChange={(event) => setAnswer(event.target.value)}
                                aria-label="Often"
                            />
                            <label className='mobile_label multi_label' for="one">LKDLKf, very often</label>
                        </div>
                        <div className="inputDiv">
                            <Radio
                                name="frequency"
                                value="often"
                                // checked={answer === "often"}
                                // onChange={(event) => setAnswer(event.target.value)}
                                aria-label="Often"
                            />
                            <label className='mobile_label multi_label' for="one">LKDLKf, very often</label>
                        </div>
                        <div className="inputDiv">
                            <Radio
                                name="frequency"
                                value="often"
                                // checked={answer === "often"}
                                // onChange={(event) => setAnswer(event.target.value)}
                                aria-label="Often"
                            />
                            <label className='mobile_label multi_label' for="one">LKDLKf, very often</label>
                        </div>
                        <div className="inputDiv">
                            <Radio
                                name="frequency"
                                value="often"
                                // checked={answer === "often"}
                                // onChange={(event) => setAnswer(event.target.value)}
                                aria-label="Often"
                            />
                            <label className='mobile_label multi_label' for="one">LKDLKf, very often</label>
                        </div>
                        <div className="inputDiv">
                            <Radio
                                name="frequency"
                                value="often"
                                // checked={answer === "often"}
                                // onChange={(event) => setAnswer(event.target.value)}
                                aria-label="Often"
                            />
                            <label className='mobile_label multi_label' for="one">LKDLKf, very often</label>
                        </div>

                    </div>
                </div>
                <div className="choice_item" id="345">
                    <div className="choice_label">
                        <label className='mobile_label' for="one">att du oroat dig för att din bil, mc, moped eller cykel ska utsättas för stöld eller skadegörelse om den är parkerad i omradet där du bor?</label>
                    </div>

                    <div className="choice_input">

                        <div className="inputDiv">
                            <Radio
                                name="frequency"
                                value="often"
                                // checked={answer === "often"}
                                // onChange={(event) => setAnswer(event.target.value)}
                                aria-label="Often"
                            />
                            <label className='mobile_label multi_label' for="one">LKDLKf, very often</label>
                        </div>
                        <div className="inputDiv">
                            <Radio
                                name="frequency"
                                value="often"
                                // checked={answer === "often"}
                                // onChange={(event) => setAnswer(event.target.value)}
                                aria-label="Often"
                            />
                            <label className='mobile_label multi_label' for="one">LKDLKf, very often</label>
                        </div>
                        <div className="inputDiv">
                            <Radio
                                name="frequency"
                                value="often"
                                // checked={answer === "often"}
                                // onChange={(event) => setAnswer(event.target.value)}
                                aria-label="Often"
                            />
                            <label className='mobile_label multi_label' for="one">LKDLKf, very often</label>
                        </div>
                        <div className="inputDiv">
                            <Radio
                                name="frequency"
                                value="often"
                                // checked={answer === "often"}
                                // onChange={(event) => setAnswer(event.target.value)}
                                aria-label="Often"
                            />
                            <label className='mobile_label multi_label' for="one">LKDLKf, very often</label>
                        </div>
                        <div className="inputDiv">
                            <Radio
                                name="frequency"
                                value="often"
                                // checked={answer === "often"}
                                // onChange={(event) => setAnswer(event.target.value)}
                                aria-label="Often"
                            />
                            <label className='mobile_label multi_label' for="one">LKDLKf, very often</label>
                        </div>

                    </div>
                </div>
                <div className="choice_item" id="345">
                    <div className="choice_label">
                        <label className='mobile_label' for="one">att du oroat dig för att din bil, mc, moped eller cykel ska utsättas för stöld eller skadegörelse om den är parkerad i omradet där du bor?</label>
                    </div>

                    <div className="choice_input">

                        <div className="inputDiv">
                            <Radio
                                name="frequency"
                                value="often"
                                // checked={answer === "often"}
                                // onChange={(event) => setAnswer(event.target.value)}
                                aria-label="Often"
                            />
                            <label className='mobile_label multi_label' for="one">LKDLKf, very often</label>
                        </div>
                        <div className="inputDiv">
                            <Radio
                                name="frequency"
                                value="often"
                                // checked={answer === "often"}
                                // onChange={(event) => setAnswer(event.target.value)}
                                aria-label="Often"
                            />
                            <label className='mobile_label multi_label' for="one">LKDLKf, very often</label>
                        </div>
                        <div className="inputDiv">
                            <Radio
                                name="frequency"
                                value="often"
                                // checked={answer === "often"}
                                // onChange={(event) => setAnswer(event.target.value)}
                                aria-label="Often"
                            />
                            <label className='mobile_label multi_label' for="one">LKDLKf, very often</label>
                        </div>
                        <div className="inputDiv">
                            <Radio
                                name="frequency"
                                value="often"
                                // checked={answer === "often"}
                                // onChange={(event) => setAnswer(event.target.value)}
                                aria-label="Often"
                            />
                            <label className='mobile_label multi_label' for="one">LKDLKf, very often</label>
                        </div>
                        <div className="inputDiv">
                            <Radio
                                name="frequency"
                                value="often"
                                // checked={answer === "often"}
                                // onChange={(event) => setAnswer(event.target.value)}
                                aria-label="Often"
                            />
                            <label className='mobile_label multi_label' for="one">LKDLKf, very often</label>
                        </div>

                    </div>
                </div>
                <div className="choice_item" id="345">
                    <div className="choice_label">
                        <label className='mobile_label' for="one">att du oroat dig för att din bil, mc, moped eller cykel ska utsättas för stöld eller skadegörelse om den är parkerad i omradet där du bor?</label>
                    </div>

                    <div className="choice_input">

                        <div className="inputDiv">
                            <Radio
                                name="frequency"
                                value="often"
                                // checked={answer === "often"}
                                // onChange={(event) => setAnswer(event.target.value)}
                                aria-label="Often"
                            />
                            <label className='mobile_label multi_label' for="one">LKDLKf, very often</label>
                        </div>
                        <div className="inputDiv">
                            <Radio
                                name="frequency"
                                value="often"
                                // checked={answer === "often"}
                                // onChange={(event) => setAnswer(event.target.value)}
                                aria-label="Often"
                            />
                            <label className='mobile_label multi_label' for="one">LKDLKf, very often</label>
                        </div>
                        <div className="inputDiv">
                            <Radio
                                name="frequency"
                                value="often"
                                // checked={answer === "often"}
                                // onChange={(event) => setAnswer(event.target.value)}
                                aria-label="Often"
                            />
                            <label className='mobile_label multi_label' for="one">LKDLKf, very often</label>
                        </div>
                        <div className="inputDiv">
                            <Radio
                                name="frequency"
                                value="often"
                                // checked={answer === "often"}
                                // onChange={(event) => setAnswer(event.target.value)}
                                aria-label="Often"
                            />
                            <label className='mobile_label multi_label' for="one">LKDLKf, very often</label>
                        </div>
                        <div className="inputDiv">
                            <Radio
                                name="frequency"
                                value="often"
                                // checked={answer === "often"}
                                // onChange={(event) => setAnswer(event.target.value)}
                                aria-label="Often"
                            />
                            <label className='mobile_label multi_label' for="one">LKDLKf, very often</label>
                        </div>

                    </div>
                </div>
                <div className="choice_item" id="345">
                    <div className="choice_label">
                        <label className='mobile_label' for="one">att du oroat dig för att din bil, mc, moped eller cykel ska utsättas för stöld eller skadegörelse om den är parkerad i omradet där du bor?</label>
                    </div>

                    <div className="choice_input">

                        <div className="inputDiv">
                            <Radio
                                name="frequency"
                                value="often"
                                // checked={answer === "often"}
                                // onChange={(event) => setAnswer(event.target.value)}
                                aria-label="Often"
                            />
                            <label className='mobile_label multi_label' for="one">LKDLKf, very often</label>
                        </div>
                        <div className="inputDiv">
                            <Radio
                                name="frequency"
                                value="often"
                                // checked={answer === "often"}
                                // onChange={(event) => setAnswer(event.target.value)}
                                aria-label="Often"
                            />
                            <label className='mobile_label multi_label' for="one">LKDLKf, very often</label>
                        </div>
                        <div className="inputDiv">
                            <Radio
                                name="frequency"
                                value="often"
                                // checked={answer === "often"}
                                // onChange={(event) => setAnswer(event.target.value)}
                                aria-label="Often"
                            />
                            <label className='mobile_label multi_label' for="one">LKDLKf, very often</label>
                        </div>
                        <div className="inputDiv">
                            <Radio
                                name="frequency"
                                value="often"
                                // checked={answer === "often"}
                                // onChange={(event) => setAnswer(event.target.value)}
                                aria-label="Often"
                            />
                            <label className='mobile_label multi_label' for="one">LKDLKf, very often</label>
                        </div>
                        <div className="inputDiv">
                            <Radio
                                name="frequency"
                                value="often"
                                // checked={answer === "often"}
                                // onChange={(event) => setAnswer(event.target.value)}
                                aria-label="Often"
                            />
                            <label className='mobile_label multi_label' for="one">LKDLKf, very often</label>
                        </div>

                    </div>
                </div>

            </div>






        </div>
    )
}
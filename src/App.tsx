import { useState } from 'react'
import './App.css'
import { SingleQ_Card } from './components/singleQ_Card'
import { MultipleQ_Card } from './components/MultipleQ_Card'

function App() {


  return (
    <div className='app'>
      <div className="container">
        {/* <SingleQ_Card /> */}
        <MultipleQ_Card />
        {/* <div className='question_card'>. zx
          <div className='question_container'>
            <p>If you were free to choose, would you move away from your current residential area?</p>
          </div>

          <div className="option_container">

            <div className='inputDiv'>
              <input
                type='radio'
                id="one"
                name="one"
                value="one" />
              <label className='mobile_label' for="one">No</label>
            </div>

            <div className='inputDiv'>
              <input
                type='radio'
                id="one"
                name="one"
                value="one" />
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
                value="one" />
              <label className='mobile_label' for="one">Don't know</label>
            </div>
          </div>
        </div> */}
        {/* 
        <div className='question_card'>
          <div className='question_container'>
            <p>If you were free to choose, would you move away from your current residential area?</p>
          </div>

          <div className="option_container">

            <div className='inputDiv'>
              <input
                type='radio'
                id="one"
                name="one"
                value="one" />
              <label className='mobile_label' for="one">No</label>
            </div>

            <div className='inputDiv'>
              <input
                type='radio'
                id="one"
                name="one"
                value="one" />
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
                value="one" />
              <label className='mobile_label' for="one">Don't know</label>
            </div>
          </div>
        </div>

        <div className='question_card'>
          <div className='question_container'>
            <p>If you were free to choose, would you move away from your current residential area?</p>
          </div>

          <div className="option_container">

            <div className='inputDiv'>
              <input
                type='radio'
                id="one"
                name="one"
                value="one" />
              <label className='mobile_label' for="one">No</label>
            </div>

            <div className='inputDiv'>
              <input
                type='radio'
                id="one"
                name="one"
                value="one" />
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
                value="one" />
              <label className='mobile_label' for="one">Don't know</label>
            </div>
          </div>
        </div>

        <div className='question_card'>
          <div className='question_container'>
            <p>If you were free to choose, would you move away from your current residential area?</p>
          </div>

          <div className="option_container">

            <div className='inputDiv'>
              <input
                type='radio'
                id="one"
                name="one"
                value="one" />
              <label className='mobile_label' for="one">No</label>
            </div>

            <div className='inputDiv'>
              <input
                type='radio'
                id="one"
                name="one"
                value="one" />
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
                value="one" />
              <label className='mobile_label' for="one">Don't know</label>
            </div>
          </div>
        </div>

        <div className='question_card'>
          <div className='question_container'>
            <p>If you were free to choose, would you move away from your current residential area?</p>
          </div>

          <div className="option_container">

            <div className='inputDiv'>
              <input
                type='radio'
                id="one"
                name="one"
                value="one" />
              <label className='mobile_label' for="one">No</label>
            </div>

            <div className='inputDiv'>
              <input
                type='radio'
                id="one"
                name="one"
                value="one" />
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
                value="one" />
              <label className='mobile_label' for="one">Don't know</label>
            </div>
          </div>
        </div>

        <div className='question_card'>
          <div className='question_container'>
            <p>If you were free to choose, would you move away from your current residential area?</p>
          </div>

          <div className="option_container">

            <div className='inputDiv'>
              <input
                type='radio'
                id="one"
                name="one"
                value="one" />
              <label className='mobile_label' for="one">No</label>
            </div>

            <div className='inputDiv'>
              <input
                type='radio'
                id="one"
                name="one"
                value="one" />
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
                value="one" />
              <label className='mobile_label' for="one">Don't know</label>
            </div>
          </div>
        </div> */}

      </div>
      <div className='pagination_container'>
        <button>Back</button>
        <button>Next</button>
      </div>

    </div>
  )
}

export default App

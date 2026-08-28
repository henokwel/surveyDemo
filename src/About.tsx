import '../src/App.css'
import SurveyPreviewCard from './components/BetterUI_2'
export const About = () => {

    return (
         <div className='app'>
              <div className="container">
                {/* <MultipleQ_Card /> */}
                {/* <SingleQ_Card /> */}
               <SurveyPreviewCard />
        
              </div>
              <div className='pagination_container'>
                <button>Back</button>
                <button>Next</button>
              </div>
        
            </div>
    )
}
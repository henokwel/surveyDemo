
import '../src/App.css'
import { SingleQ_Card } from './components/singleQ_Card'

export const About = () => {

    return (
         <div className='app'>
              <div className="container">
                {/* <MultipleQ_Card /> */}
                <SingleQ_Card />
               
        
              </div>
              <div className='pagination_container'>
                <button>Back</button>
                <button>Next</button>
              </div>
        
            </div>
    )
}
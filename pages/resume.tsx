import Bar from "../Components/Bar"
import { languages, tools } from "../data"

const resume = () =>{
    return(
        <div className='p-6 py-2' >
        {/* education */}
          
          <div className="grid gap-6 md:grid-cols-2">
              <div>
                  <h5 className="my-3 text-2xl font-bold">Educaion</h5>
                    <div>
                        <h5 className='my-2 text-xl font-bold'>Technical Computer Enginering</h5>
                        <p className="font-semibold"> Academy of Technology (2020-2024)</p>
                        <p className='my-3'> I am an Active Student and a year of studying at university technology, </p>
                    </div>
              </div>
              <div>
                  <h5 className="my-3 text-2xl font-bold">Exprience</h5>
                    <div>
                        <h5 className='my-2 text-xl font-bold'>Software Engineer</h5>
                        <p className="font-semibold"> Student of Technology (2020-2024)</p>
                        <p className='my-3'>My Hoby this my job</p>
                    </div>
              </div>
          </div>
        
        {/* languange */}
        <div className="grid gap-6 md:grid-cols-2">
        <div>
            <h5 className="my-3 text-2xl font-bold">languages & Frameworks</h5>
            <div className="my-2">
                {
                    languages.map(languages =>(
                    <Bar data={languages} key={languages.name}/>))
                }
            </div>
        </div>
        <div>
            <h5 className="my-3 text-2xl font-bold">Tools & Software</h5>
            <div className="my-2">
                {
                    tools.map(tools =>(
                    <Bar data={tools} key={tools.name}/>))
                }
            </div>
        </div>


        </div>
        </div>
        
    )
}
export default resume
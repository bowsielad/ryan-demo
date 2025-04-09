import { Link } from "react-router-dom";
import "../css/custom.css";


export default function Home() {
  return (
    <section>
      <article>
           <div className="widget-space">
             <h2>Testing Area</h2>
             <p>Select any feature to test!</p>
             <p>Fake door testing is slightly different from the typical A/B tests but can also be considered a subset of it. The difference is that you’re not comparing two variations - you just want to test a new feature before rolling it out.</p>
     
             <br />
             <Link to="/womenshealthassessment" >womens health assessments <span>&#8594;</span></Link>
     
             <br />
             <br />
             <Link to="/lifestylehabits" >lifestyle habits <span>&#8594;</span></Link>

             <br />
             <br />
             <Link to="/dailyreflections" >daily reflections <span>&#8594;</span></Link>
     
             <br />
             <br />
             <Link to="/dashboard" >my day dashboard <span>&#8594;</span></Link>
     
             <br />
             <br />

             
           </div>
    </article>
    </section>
  )
}

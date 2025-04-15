import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/custom.css";


export default function Home() {
  const [message, setMessage] = useState("");

  const baseUrl = "https://ryan-demo-1.onrender.com";
  const localUrl = "http://localhost:5177";

  useEffect(() => {
    const fetchWelcome = async () => {
      try {
        const response = await fetch(`${baseUrl}/api/home/welcome`);
        const text = await response.text(); // Because it's a plain string, not JSON
        setMessage(text);
      } catch (error) {
        console.error("Error fetching welcome message:", error);
      }
    };

    fetchWelcome();
  }, []);


  return (
    <section>
      <article>
           <div className="widget-space">
             <h2>Testing Area</h2>
             <p><strong>A/B testing</strong></p>
             <p>In A/B tests, two items or variations are compared to one another to see which performs better.</p>
             <p><strong>Fake door testing</strong></p>
             <p>Fake door testing is slightly different from the typical A/B tests but can also be considered a subset of it. The difference is that you’re not comparing two variations - you just want to test a new feature before rolling it out.</p>
             <p>Select any feature to test!</p>
             <br />
             <Link to="/womenshealthassessment" >womens health assessments <span className="font-link">&#8594;</span></Link>
     
             <br />
             <br />
             <Link to="/dashboard" >my day dashboard <span className="font-link">&#8594;</span></Link>
     
             <br />
             <br />
             <Link to="/mentalhealthresults" >mental health results <span className="font-link">&#8594;</span></Link>
     
             <br />
             <br />
             <p style={{ fontSize: "12px"}}>{message}</p>

             
           </div>
    </article>
    </section>
  )
}

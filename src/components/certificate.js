import "../styles/certificate.css";

import nptel from "../assets/nptel1.jpg";
import uiuxBit from "../assets/uiuxbit.jpg";
import figmaAruvi from "../assets/uiuxaru.jpg";
import greenIdea from "../assets/greenidea.jpg";
import aiWorkshop from "../assets/svhecai.jpg";
import internship from "../assets/intership.jpg";
import era from "../assets/era.jpg";
import aibus from "../assets/hpaibus.jpg";

function Certificates() {
  return (
    <section id="certificates" className="certificates">
      <h2>Certificates</h2>

      <ul>
        <li>
          <a href={nptel} target="_blank" rel="noreferrer">
            🏆 NPTEL – Enhancing Soft Skills & Personality
          </a>
        </li>

        <li>
          <a href={uiuxBit} target="_blank" rel="noreferrer">
            🏆 UI/UX Workshop – BIT V-Prayukti’25
          </a>
        </li>

        <li>
          <a href={figmaAruvi} target="_blank" rel="noreferrer">
            🏆 UI/UX Figma – Aruvili Workshop
          </a>
        </li>

        <li>
          <a href={greenIdea} target="_blank" rel="noreferrer">
            🏆 Green Idea Project – Velammal Institute
          </a>
        </li>

        <li>
          <a href={aiWorkshop} target="_blank" rel="noreferrer">
            🏆 AI Workshop – SVHT Engineering College
          </a>
        </li>
    
         <li>
          <a href={internship} target="_blank" rel="noreferrer">
            🏆 Web Development – INTERN IN CADIBAL.ORG
          </a>
        </li>

           <li>
          <a href={era} target="_blank" rel="noreferrer">
            🏆 HP powered – Critical Thinking in the AI Era 
          </a>
        </li>

          <li>
          <a href={aibus} target="_blank" rel="noreferrer">
            🏆 HP powered – AI For Business Professionals 
          </a>
    </li>
    
      </ul>
    </section>
  );
}

export default Certificates;
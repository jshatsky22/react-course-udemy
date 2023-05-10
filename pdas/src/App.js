import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";
import "bulma/css/bulma.css";

console.log(AlexaImage);
console.log(SiriImage);

function App() {
  return (
    <div>
      <section className="hero is-primary ">
        <div className="hero-body">
          <p className="title">Personal Digital Idiots</p>
        </div>
      </section>

      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-3">
              <ProfileCard
                title="Alexa"
                handle="@alexa99"
                image={AlexaImage}
                description="Alexa is Amazon's personal digital idiot"
              />
            </div>
            <div className="column is-3">
              <ProfileCard
                title="Cortana"
                handle="@cortana32"
                image={CortanaImage}
                description="Cortana is Microsoft's personal digital idiot"
              />
            </div>
            <div className="column is-3">
              <ProfileCard
                title="Siri"
                handle="@siri22"
                image={SiriImage}
                description="Siri is Apple's's personal digital idiot"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

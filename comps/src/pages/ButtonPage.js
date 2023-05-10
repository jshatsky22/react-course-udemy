import Button from "../components/Button";
import { GoBell, GoBeaker, GoDatabase, GoClock } from "react-icons/go";

const handleClick = () => {};

function ButtonPage() {
  return (
    <div>
      <div>
        <Button primary outline className="mb-5" onClick={handleClick}>
          <GoBell />
          Configure Notification
        </Button>
      </div>
      <div>
        <Button secondary rounded>
          <GoBeaker />
          Make a Potion
        </Button>
      </div>
      <div>
        <Button success outline>
          <GoDatabase />
          Spin up a DB
        </Button>
      </div>
      <div>
        <Button warning rounded>
          <GoClock />
          Set a Timer
        </Button>
      </div>
      <div>
        <Button danger>
          <GoDatabase />
          Spin up another DB
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;

import { faHouse } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <p className="p-4 pt-2 text-red-700">
      Click on the Vite and React logos to learn more
      <FontAwesomeIcon icon={faHouse} />
    </p>
  );
}

export default App;

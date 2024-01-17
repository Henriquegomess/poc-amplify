import { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import "./App.css";

function App() {
  const [showIframe, setShowIframe] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowIframe(true);
    }, 1500);
  }, []);

  return (
    <>
      <h1>PoC Quicksight</h1>
      {showIframe ? (
        <iframe
          width="100%"
          height="720"
          src="https://us-east-1.quicksight.aws.amazon.com/sn/embed/share/accounts/572874686978/dashboards/46818581-4454-4553-9b7b-2790eb9d73ab?directory_alias=henriquegomes"
        />
      ) : (
        <ReactLoading
          type={"bubbles"}
          color={"#D91F05"}
          height={"20%"}
          width={"20%"}
        />
      )}
    </>
  );
}

export default App;

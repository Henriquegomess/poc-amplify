import "./App.css";
import HeroLayout1 from "./ui-components/HeroLayout1";

function App() {

  return (
    <>
      {/* <Authenticator>
        {({ signOut, user }) => (
          <main>
            <h1>Olá {user?.username}</h1>
            <button onClick={signOut}>Sair</button>
          </main>
        )}
      </Authenticator> */}

      <iframe
        width="960"
        height="720"
        src="https://us-east-1.quicksight.aws.amazon.com/sn/embed/share/accounts/572874686978/dashboards/46818581-4454-4553-9b7b-2790eb9d73ab?directory_alias=henriquegomes"
      />

      <HeroLayout1 />
    </>
  );
}

export default App;

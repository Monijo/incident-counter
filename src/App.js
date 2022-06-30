import './App.css';
import {CharacterList} from "./components/CharacterList";
import {endpoint} from "./endpoint";
import useFetch from "./hooks/useFetch";
import Search from "./components/Search";

const formatData = (response) => response?.characters || []


function App() {
   const [characters,dispatch, loading, error] = useFetch(endpoint + "/characters", formatData)


  return (
    <div className="App">
        <header><h1>Star Wars Characters </h1></header>
        <Search dispatch={dispatch}/>
        <main>
          <section>
              {loading ? (
                  <p>loading...</p>
              ) : (
                  <CharacterList characters={characters}/>
              )}
              {error  && <p>{error.message}</p>}
          </section>
        </main>

    </div>
  );
}

export default App;

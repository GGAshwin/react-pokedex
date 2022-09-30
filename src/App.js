import React from "react"
import './App.css';
import Card from './conponents/Card'


function App() {
  const [pokedata, setPokedata] = React.useState("")
  const [message, setMessage] = React.useState({
    name: "",
    img: "",
    id: ""
  })

  React.useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${message}`
    fetch(url)
      .then((response) => response.json())
      .then((data) => {

        console.log(data.id)

        setPokedata({
          name: data.name,
          img: data.sprites ? data.sprites.other.dream_world.front_default : "default",
          id: data.id
        })
      })
  }, [message])
  const handleChange = event => {
    event.preventDefault();
    setMessage(event.target.value);
  };
  function submit() {
    const url = `https://pokeapi.co/api/v2/pokemon/${message}`
    fetch(url)
      .then((response) => response.json())
      .then((data) => {

        console.log(data.id)

        setPokedata({
          name: data.name,
          img: data.sprites.other.dream_world.front_default,
          id: data.id
        })
      })
  }
  return (
    <>
      <div className="card">
        <div className="search__bar">
          <input type="text" onChange={handleChange} />
          <button id="search" onClick={submit}><i className="fa-solid fa-magnifying-glass"></i></button>
        </div>
        <Card key={pokedata.name} data={pokedata.name} pokeImg={pokedata.img} index={pokedata.id} />
      </div>
    </>
  );
}

export default App;

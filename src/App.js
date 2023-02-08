/* litra: pulloa * 0,33
grams: litraa*8*4.5
palaminen: paino/10
grams(left): grams - (palaminen * aika)

mies: grams/(paino*0.7)
nainen: grams/(paino*0.6)*/

import logo from './logo.svg';
import './App.css';
import React , {useState} from 'react'

function App() {

  const [paino, setPaino] = useState(0)
  const [pullot, setPullot] = useState(1)
  const [suku, setSuku] = useState("male")
  const [time, setTime] = useState(1)
  const [result, setResult] = useState(0)

  function laske(e) {
    e.preventDefault();

    const litra = pullot * 0.33
    const grams = litra * 8 * 4.5
    const palaminen = paino / 10
    const gramsLeft = grams - (palaminen * time)
    let result = 0


    if (suku === "male") {
      result = gramsLeft / (paino * 0.7)
    }
    
    else {
      result = gramsLeft / (paino * 0.6)
    }

    if (result < 0) {
        result = 0
    }

    setResult(result.toFixed(1))

  }

  return (
    <form onSubmit={laske}>
    <h1>Alkometri</h1>
    <div>
      <label>Weight</label>
      <input type="number" name="paino" step="1"  onChange={e => setPaino(e.target.value)}/>
    </div>
    <div>
      <label>Bottles</label>
      <select name="bottles" id="pullot" onChange={e => setPullot(e.target.value)}>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      </select>  
    </div>
    <div>
      <label>Time</label>
      <select name="time" id="aika" onChange={e => setTime(e.target.value)}>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      </select>
    </div>
    <div>
      <label>Gender</label>
      <input type="radio" name="gender" id="male" value="male" onChange={e => setSuku("male")} defaultChecked />
      <label>Male</label>
      <input type="radio" name="gender" id="female" onChange={e => setSuku("female")}/>
      <label>Female</label>
    </div>
    <output>{result}</output>
    <button>paina</button>
    </form>
  );
}

export default App;
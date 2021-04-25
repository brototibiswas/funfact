import './App.css';
// import {universe} from './facts';

const fact = <h3>Hello</h3>
const wrapper_body = <div className="fact_body"></div>
// const fact_img;

function App() {
  return (
    <div className="App bg">
      <h1>Astronomy Funfacts</h1>
      <div className="fact_main">
        {/* {fact_img} */}
        {wrapper_body}
        <div className="fact_text">
            <p>{fact}</p>
          </div>
      </div>
    </div>
  );
}

export default App;

import './app.css';
import { data } from './data';
import { SankeyChart } from './sankey-chart';

export function App() {
  return (
    <div className="app">
      <SankeyChart data={data} />
    </div>
  );
}

export default App;

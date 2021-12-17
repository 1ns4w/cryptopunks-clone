import './styles/css/App.css'; // stylesheet for CSS styles
import Header from './components/Header';
import PunkList from './components/PunkList';
import Main from './components/Main';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [punkListData, setPunkListData] = useState([])

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0x2B9A4acAdC21990e50B0AB4c056eFad5A2DbE6E9&order_direction=asc') // returns array of nfts info
      setPunkListData(openseaData.data.assets)
    }
    return getMyNfts()
  }, [])

  return (
      <div className="app">
        <Header />
        <Main />
        <PunkList punkListData={punkListData}/>
      </div>
  );
}

export default App;
import logo from './logo.svg';
import './App.css';
import TabNavBar from './components/tab_nav_bar/tab_nav_bar'
import TabView from './components/tab_view/tab_view'
import { useState } from 'react';

function App() {

  const [tabs, setTabs] = useState([
    {id: 1,
    content: 'tab1 context'},
    {id: 2,
    content: 'tab2 context'},
    {id: 3,
    content: 'tab3 context'},
    {id: 4,
    content: 'tab4 context'}
  ])

  const [tab, setTab] = useState(1)

  const tabClick = (tab_id) => {
    setTab(tab_id)
    
  }
  console.log('tab: ', tab)



  return (
    <div className="App">
      <TabNavBar tabs={tabs} tabClick={tabClick}/>
      <TabView tabs={tabs} current_tab={tab}/>
    </div>
  );
}

export default App;

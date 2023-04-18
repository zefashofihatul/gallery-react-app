import Tab from './Tab';
import { useState } from 'react';

export default function MainTabs({ setQuery }) {
  const [tabsData, setTabsData] = useState([
    {
      name: 'Beaches',
      active: false,
    },
    {
      name: 'Mountains',
      active: false,
    },
    {
      name: 'Birds',
      active: false,
    },
    {
      name: 'Foods',
      active: false,
    },
  ]);

  function handleTabsClick(data, tabData) {
    setTabsData(
      tabsData.map((value, index) => {
        return {
          name: value.name,
          active: data === index ? true : false,
        };
      })
    );
    setQuery(tabData.name);
  }

  return (
    <div className="main-tabs" style={mainTabStyle}>
      {tabsData.map((tab, index) => (
        <Tab
          active={tab.active}
          key={index}
          onClick={(e) => handleTabsClick(index, tab)}
        >
          {tab.name}
        </Tab>
      ))}
    </div>
  );
}

const mainTabStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '16px',
  marginTop: '56px',
  marginBottom: '32px',
};

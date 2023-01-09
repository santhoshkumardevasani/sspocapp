import * as React from 'react';
import PayoutsPage from './components/PayoutsPage';
import TabComponent from './components/TabComponent';
export default function App() {
  return (
    <div style={{ padding: 30 }}>
      <h1>Payouts Overview</h1>
      <PayoutsPage />
      <TabComponent />
    </div>
  );
}
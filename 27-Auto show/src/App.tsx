import React from 'react';
import { ghostRiderAutoShowEvent } from './data/event';
import { EventPage } from './pages/EventPage';

export const App: React.FC = () => {
  return <EventPage event={ghostRiderAutoShowEvent} />;
};

export default App;

import { useState } from 'react';
import { Incident } from './types';
import IncidentList from './components/IncidentList';
import FilterSortControls from './components/FilterSortControls';
import IncidentForm from './components/IncidentForm';
import './App.css';

const initialIncidents: Incident[] = [
  {
    id: 1,
    title: 'Biased Recommendation Algorithm',
    description: 'Algorithm consistently favored certain demographics...',
    severity: 'Medium',
    reported_at: '2025-03-15T10:00:00Z',
  },
  {
    id: 2,
    title: 'LLM Hallucination in Critical Info',
    description: 'LLM provided incorrect safety procedure information...',
    severity: 'High',
    reported_at: '2025-04-01T14:30:00Z',
  },
  {
    id: 3,
    title: 'Minor Data Leak via Chatbot',
    description: 'Chatbot inadvertently exposed non-sensitive user metadata...',
    severity: 'Low',
    reported_at: '2025-03-20T09:15:00Z',
  },
];

function App() {
  const [incidents, setIncidents] = useState<Incident[]>(initialIncidents);
  const [filter, setFilter] = useState<string>('All');
  const [sort, setSort] = useState<string>('Newest');

  const handleFilterChange = (filter: string) => {
    setFilter(filter);
  };

  const handleSortChange = (sort: string) => {
    setSort(sort);
  };

  const addIncident = (newIncident: Incident) => {
    setIncidents((prevIncidents) => [...prevIncidents, newIncident]);
  };

  const filteredIncidents = incidents.filter((incident) => {
    return filter === 'All' || incident.severity === filter;
  });

  const sortedIncidents = filteredIncidents.sort((a, b) => {
    if (sort === 'Newest') {
      return new Date(b.reported_at).getTime() - new Date(a.reported_at).getTime();
    }
    return new Date(a.reported_at).getTime() - new Date(b.reported_at).getTime();
  });

  return (
    <>
    <div className='heading'>
     <h1> AI Safety Incident Dashboard</h1>


      <FilterSortControls
        onFilterChange={handleFilterChange}
        onSortChange={handleSortChange}
      />

      <IncidentList incidents={sortedIncidents} />

      <IncidentForm onAddIncident={addIncident} />

    </div>
    </>
  );
}

export default App;

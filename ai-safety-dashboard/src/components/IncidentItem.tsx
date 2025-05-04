import { useState } from 'react';
import { Incident } from '../types';
import '../App.css';

interface IncidentItemProps {
  incident: Incident;
}

const IncidentItem: React.FC<IncidentItemProps> = ({ incident }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleDetails = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <div className="incident-item">
      <div className="incident-item-header">
        <div>
          <h3>{incident.title}</h3>
          <p>
            <strong>Severity:</strong> {incident.severity} |{' '}
            <strong>Reported:</strong> {new Date(incident.reported_at).toLocaleDateString()}
          </p>
        </div>
        <button onClick={toggleDetails}>
          {expanded ? 'Hide Details' : 'View Details'}
        </button>
      </div>

      {expanded && (
        <div className="incident-details">
          <p>{incident.description}</p>
        </div>
      )}
    </div>
  );
};

export default IncidentItem;

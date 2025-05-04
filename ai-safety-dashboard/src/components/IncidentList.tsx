import IncidentItem from './IncidentItem';
import { Incident } from '../types';
import '../App.css';

interface IncidentListProps {
  incidents: Incident[];
}

const IncidentList: React.FC<IncidentListProps> = ({ incidents }) => {
  return (
    <div className='incident-list'>
      {incidents.map((incident) => (
        <IncidentItem key={incident.id} incident={incident} />
      ))}
    </div>
  );
};

export default IncidentList;

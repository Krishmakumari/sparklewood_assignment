import React from 'react';
import '../App.css';

interface FilterSortControlsProps {
  onFilterChange: (filter: string) => void;
  onSortChange: (sort: string) => void;
}

const FilterSortControls: React.FC<FilterSortControlsProps> = ({
  onFilterChange,
  onSortChange,
}) => {
  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange(event.target.value);
  };


  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onSortChange(event.target.value);
  };

  return (
    <div className="filter-sort-controls">
      <div>
        <label htmlFor="filter">Filter by Severity: </label>
        <select id="filter" onChange={handleFilterChange}>
          <option value="All">All</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>

      <div>
        <label htmlFor="sort">Sort by Date: </label>
        <select id="sort" onChange={handleSortChange}>
          <option value="Newest">Newest First</option>
          <option value="Oldest">Oldest First</option>
        </select>
      </div>
    </div>
  );
};

export default FilterSortControls;

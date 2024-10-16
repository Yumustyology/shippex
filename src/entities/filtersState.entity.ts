import { entity } from 'simpler-state';

export const filterState = entity<string[]>([]);

export const toggleFilter = (filter: string) => {
  filterState.set((prevFilters) => {
    if (prevFilters.includes(filter)) {
      return prevFilters.filter((item) => item !== filter);
    }
    return [...prevFilters, filter];
  });
};

export const clearFilters = () => {
  filterState.set([]);
};

import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"; // import your filter state
import { useEntity } from "simpler-state";
import {
  filterState,
  toggleFilter,
  clearFilters,
} from "../../entities/filtersState.entity";

interface FilterBottomSheetProps {
  onFilterChange: (selectedFilters: string[]) => void;
  close: () => void;
}

const FilterBottomSheet: React.FC<FilterBottomSheetProps> = ({
  onFilterChange,
  close,
}) => {
  const selectedFilters = useEntity(filterState);

  const filters = [
    "Received",
    "Putaway",
    "Delivered",
    "Canceled",
    "Rejected",
    "Lost",
    "On Hold",
  ];

  const handleFilterToggle = (filter: string) => {
    toggleFilter(filter);
    onFilterChange(filterState.get());
  };

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottomWidth: 1,
          borderBottomColor: "#EAE7F2",
          paddingHorizontal: 24,
          paddingBottom: 10,
        }}
      >
        <TouchableOpacity onPress={close}>
          <Text style={styles.blueText}>Cancel</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Filters</Text>
        <TouchableOpacity onPress={close}>
          <Text style={styles.blueText}>Done</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <Text style={styles.title2}>SHIPMENT STATUS</Text>
        <View style={styles.filterList}>
          {filters.map((filter) => (
            <TouchableOpacity
              key={filter}
              style={[
                styles.filterButton,
                selectedFilters.includes(filter) && styles.filterButtonSelected,
              ]}
              onPress={() => handleFilterToggle(filter)}
            >
              <Text
                style={[
                  styles.filterButtonText,
                  selectedFilters.includes(filter) &&
                    styles.filterButtonTextSelected,
                ]}
              >
                {filter}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity
          style={styles.clearButton}
          onPress={() => {
            clearFilters();
            onFilterChange([]);
          }}
        >
          <Text style={styles.clearButtonText}>Clear</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 18, fontWeight: "bold", marginBottom: 0 },
  title2: {
    fontSize: 13,
    fontWeight: "500",
    marginBottom: 12,
    color: "#58536E",
  },
  blueText: { fontSize: 16, fontWeight: "500", color: "#2F50C1" },
  filterList: { flexDirection: "row", flexWrap: "wrap" },
  filterButton: {
    borderColor: "transparent",
    backgroundColor: "#F4F2F8",
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
    marginBottom: 10,
    paddingHorizontal: 14,
  },
  filterButtonSelected: { borderColor: "#4561DB" },
  filterButtonText: { color: "#58536E" },
  filterButtonTextSelected: { color: "#6E91EC" },
  clearButton: {
    marginTop: 20,
    backgroundColor: "#ff4d4f",
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: "center",
  },
  clearButtonText: { color: "#fff", fontWeight: "bold" },
});

export default FilterBottomSheet;

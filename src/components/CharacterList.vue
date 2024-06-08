<template>
  <div>
    <!-- Фильтры -->
    <div class="filters">
      <input
        v-model="filters.name"
        class="filter-input"
        placeholder="Name"
      >
      <select
        v-model="filters.status"
        class="filter-select"
      >
        <option value="">
          All
        </option>
        <option value="alive">
          Alive
        </option>
        <option value="dead">
          Dead
        </option>
        <option value="unknown">
          Unknown
        </option>
      </select>
      <button
        class="filter-button"
        @click="applyFilters"
      >
        Apply
      </button>
    </div>

    <!-- Список персонажей -->
    <div class="character-list">
      <Card
        v-for="character in characters"
        :key="character.id"
        :character="character"
      />
    </div>

    <!-- Пагинация -->
    <div class="pagination">
      <button
        class="pagination-button"
        :disabled="currentPage === 1"
        @click="changePage(currentPage - 1)"
      >
        Previous
      </button>
      <span>
        Page {{ currentPage }} of {{ totalPages }}
      </span>
      <button
        class="pagination-button"
        :disabled="currentPage === totalPages"
        @click="changePage(currentPage + 1)"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Card from "./Card.vue";

export default {
  name: "CharacterList",
  components: {
    Card,
  },
  data() {
    return {
      characters: [],
      currentPage: 1,
      totalPages: 1,
      filters: {
        name: "",
        status: "",
      },
    };
  },
  mounted() {
    this.fetchCharacters();
  },
  methods: {
    async fetchCharacters() {
      const params = {
        page: this.currentPage,
        name: this.filters.name,
        status: this.filters.status,
      };

      try {
        const response = await axios.get("https://rickandmortyapi.com/api/character", { params });
        this.characters = response.data.results;
        this.totalPages = response.data.info.pages;
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    },
    changePage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
        this.fetchCharacters();
      }
    },
    applyFilters() {
      this.currentPage = 1;
      this.fetchCharacters();
    },
  },
};
</script>

<style scoped>
.filters {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}
.filter-input,
.filter-select {
  margin: 0 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: box-shadow 0.3s ease;
}
.filter-input:focus,
.filter-select:focus {
  box-shadow: 0 0 5px rgba(81, 203, 238, 1);
  border-color: rgba(81, 203, 238, 1);
}
.filter-button {
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.filter-button:hover {
  background-color: #45a049;
}
.character-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.pagination-button {
  margin: 0 10px;
  padding: 10px 20px;
  background-color: #008cba;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.pagination-button:disabled {
  background-color: #b0c4de;
  cursor: not-allowed;
}
.pagination-button:not(:disabled):hover {
  background-color: #007bb5;
}
</style>
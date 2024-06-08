<template>
  <div id="app">
    <CharacterList />
  </div>
</template>

<script>
import CharacterList from "./components/CharacterList.vue";

export default {
  name: "App",
  components: {
    CharacterList
  }
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
  background: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
  margin: 0;
  padding: 0;
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}
</style>
vue --version
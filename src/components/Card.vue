<template>
  <div class="character-card animate__animated animate__fadeInUp">
    <img
      :src="character.image"
      :alt="'Image of ' + character.name"
    >
    <h2>{{ character.name }}</h2>
    <p>Status: {{ character.status }}</p>
    <p>Species: {{ character.species }}</p>
    <p>Gender: {{ character.gender }}</p>
    <p>Origin: {{ character.origin.name }}</p>
  </div>
</template>

<script>
export default {
  name: "CharacterCard",
  props: {
    character: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.character-card {
  background-color: #fff;
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.character-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
.character-card img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 10px;
}
.character-card h2 {
  font-size: 1.5em;
  margin: 10px 0;
}
.character-card p {
  font-size: 1em;
  color: #555;
  margin: 5px 0;
}
</style>
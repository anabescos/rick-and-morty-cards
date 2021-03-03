const getDataFromApi = () => {
  return fetch("https://rickandmortyapi.com/api/character/")
    .then((response) => response.json())
    .then((data) => {
      return data.results.map((character) => {
        return {
          id: character.id,
          image: character.image,
          name: character.name,
          species: character.species,
          gender: character.gender,
          origin: character.origin.name,
          status: character.status,
        };
      });
    });
};
export default getDataFromApi;

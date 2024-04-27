const BASEURL = "https://fsa-puppy-bowl.herokuapp.com/api/2109-UNF-HY-WEB-PT";

export async function fetchPlayers() {
  try {
    const response = await fetch(`${BASEURL}/players`);
    const result = await response.json();
    console.log(result);
    if (result.success) {
      return result.data.players;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function createPlayer() {}

export async function deletePlayer() {}

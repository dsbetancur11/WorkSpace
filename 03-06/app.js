// Taller: Consumo de la API de Rick and Morty con JavaScript
// API base: https://rickandmortyapi.com/api/character

async function obtenerPersonaje(id) {
  try {
    const url = `https://rickandmortyapi.com/api/character/${id}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error al obtener personaje: ${response.status}`);
    }

    const personaje = await response.json();
    console.log("Personaje por ID:", personaje);
    return personaje;
  } catch (error) {
    console.error("Error en obtenerPersonaje:", error);
  }
}

async function obtenerPersonajes() {
  try {
    const url = "https://rickandmortyapi.com/api/character";
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error al obtener personajes: ${response.status}`);
    }

    const datos = await response.json();
    console.log("Todos los personajes:", datos);
    return datos;
  } catch (error) {
    console.error("Error en obtenerPersonajes:", error);
  }
}

async function soloNombres() {
  try {
    const datos = await obtenerPersonajes();
    if (!datos || !datos.results) {
      throw new Error("No se pudieron obtener los resultados de personajes.");
    }

    const nombres = datos.results.map((personaje) => personaje.name);
    console.log("Nombres de personajes:", nombres);
    return nombres;
  } catch (error) {
    console.error("Error en soloNombres:", error);
  }
}

async function obtenerPagina(numeroPagina) {
  try {
    const url = `https://rickandmortyapi.com/api/character?page=${numeroPagina}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error al obtener página ${numeroPagina}: ${response.status}`);
    }

    const datos = await response.json();
    console.log(`Personajes de la página ${numeroPagina}:`, datos);
    return datos;
  } catch (error) {
    console.error("Error en obtenerPagina:", error);
  }
}

// Ejecuciones de ejemplo
obtenerPersonaje(1);
obtenerPersonajes();
soloNombres();
obtenerPagina(2);

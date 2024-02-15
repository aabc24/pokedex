export async function ajax(propos) {
  try {
    const { url, callback } = propos;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }
    const data = await response.json();

    if (data.results) {
      const results = data.results;
      callback(results);
    } else {
      callback(data);
    }
  } catch (error) {
    const message = error.message || "Ocurrió un error";
    console.log(`Error: ${message}`);
  }
}

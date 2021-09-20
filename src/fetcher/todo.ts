export async function getTodos() {
  const ret = await fetch("https://jsonplaceholder.typicode.com/todos");
  return ret.json();
}

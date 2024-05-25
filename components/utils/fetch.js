export async function FetchGet(params) {
  const EXPO_PUBLIC_API_KEY = "IzbYhIAZuZFbxpTQgB0atvPZNe8s02lxLzXVzCXs";
  const response = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${EXPO_PUBLIC_API_KEY}${
      params?.length > 0 ? params : ""
    }`
  );
  const data = await response.json();

  return data;
}

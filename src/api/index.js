import links from './links';

export const fetchRequest = async (id = 0) => {
  const response = await fetch(
    `${links.services}${id ? `/${id}` : ""}`
  );
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
};

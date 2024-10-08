import { data } from "../../../common/data/data";

export const getProjects = async () => {
  const response = await fetch(`${data.githubAPI}`);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
};

import { data } from "../../../common/data/data";
import { Project } from "../../../core/types";

export const fetchProjects = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const response = await fetch(`${data.githubAPI}`);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return (await response.json()) as Project[];
};

import { Project } from "@/types/common";
import { readFileSync } from "fs";
import { join } from "path";

const loadProjects = (): Project[] => {
  const servicesPath = join(process.cwd(), "src/data/projects.json");
  return JSON.parse(readFileSync(servicesPath, "utf-8"));
};

export default loadProjects;

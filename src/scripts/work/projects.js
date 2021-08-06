import { deleteProject, getProjects } from "./dataAccess.js";

const mainContainer = document.querySelector("#container");

mainContainer.addEventListener("click", (click) => {
  if (click.target.id.startsWith("project--")) {
    const [, projectId] = click.target.id.split("--");
    deleteProject(parseInt(projectId));
  }
});

export const Projects = () => {
  const projects = getProjects(); // grab the local state of the projects data

  let html = `
        <ul class = "projectClass">
            ${projects
              .map(
                (project) => `
                <li class="projectClass_bullet">
                    <input type="radio" value=project--${project.id} name="project"> 
                    ${project.title}
                    ${project.date}
                    ${project.external_Libraries_Tools_Technology}
                    ${project.description}  
                    <button class="project__delete"
                            id="project--${project.id}"
                            style="margin: 1rem 0 2rem 2rem;
                            padding: 0.5rem;
                            background-color: #0d023f;
                            color: lightgoldenrodyellow;
                            font-size: 1rem;">
                        Delete
                    </button>
                </li>`
              )
              .join("")}
        </ul>`;

  return html;
};

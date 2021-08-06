const applicationState = {
    projects: [],
  };
  
  export const getProjects = () => {
    return [...applicationState.projects];
  };
  
  const API = "http://localhost:8088";
  
  export const fetchProjects = () => {
    return fetch(`${API}/projects`)
      .then((response) => response.json())
      .then((serviceProjects) => {
        // Store the external state in application state
        applicationState.projects = serviceProjects;
      });
  };

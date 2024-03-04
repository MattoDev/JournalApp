export const getEnvironments = () => {
  //Cargar
  import.meta.env;

  return {
    ...import.meta.env,
  };
};

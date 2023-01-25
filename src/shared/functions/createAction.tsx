export const createAction = (actionName: String) => {
  return {
    type: actionName,
    get: (payload?: any) => {
      return {
        type: actionName,
        payload,
      };
    },
  };
};

export const createAction = (actionName: String) => {
  return {
    type: actionName,
    get: (payload: any) => {
      type: actionName,
      payload;
    },
  };
};

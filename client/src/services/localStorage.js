export const loadState = () => {
   try {
      const serializedState = localStorage.getItem("state");
      if (serializedState === null) {
         return undefined;
      }
      return JSON.parse(serializedState);
   } catch (error) {
      console.error({
         message: "The state could not be loaded from local storage, returning undefined.",
         error
      });
      return undefined;
   }
};

export const saveState = state => {
   try {
      const serializedState = JSON.stringify(state);
      console.log(serializedState);
      localStorage.setItem("state", serializedState);
   } catch (error) {
      console.error({
         message: "An error occurred saving the state to local storage.",
         error
      });
   }
};

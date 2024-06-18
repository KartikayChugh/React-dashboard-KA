import create from "zustand";
// We import persisit that stores in our local storage
import {persist} from "zustand/middleware";

let appStore = (set) => ({
    /* Then we created 2 things dopen and updatOpen, the updateOpen will manage the state of dopen and make it 
    true or false so that our drawer can be opened or closed. */
    dopen: true,
    updateOpen: (dopen) => set((state) => ({dopen: dopen})),
});

/* The persisit that is stored in our local storage in the form of JS is called/named my_app_store */
appStore = persist (appStore, {name: "my_app_store"});

// Then we are exporting thsi at last :
export const useAppStore = create(appStore);


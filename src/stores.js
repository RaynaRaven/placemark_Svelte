import {writable} from "svelte/store";

export const user = writable({
    email: "",
    token: "",
});

export const categoryIdStore = writable( {
    categoryId: "",
});

export const locationStore = writable(
    {
        locationId: "",
        locationName: "",
    }
)
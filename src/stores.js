import {writable} from "svelte/store";

export const user = writable({
    email: "",
    token: "",
    _id: ""
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
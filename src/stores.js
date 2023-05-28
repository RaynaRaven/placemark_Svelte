import {writable} from "svelte/store";

export const user = writable({
    _id: "",
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

export const latestLocation= writable(null);
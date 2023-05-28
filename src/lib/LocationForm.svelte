<script>
    // @ts-nocheck
    import { onMount, afterUpdate } from "svelte";
    import { placemarkService } from "../services/placemark-service.js";

    let categoryList = [];
    let selectedCategory = "";

    let locationName = "";
    let latitude = 0;
    let longitude = 0;
    let description = "";

    let message = "";

    onMount(async () => {
        categoryList = await placemarkService.getCategories();
        // console.log(categoryList);
    })

    afterUpdate(async () => {
        console.log(categoryList);
    })

    async function addLocation() {
        if (!locationName || !selectedCategory) {
            message = " Please select category and enter location names"
        }
        const categoryName = selectedCategory;
        console.log("categoryName: ", categoryName);
        const category = categoryList.find((category) => category.name === categoryName );
        console.log("Cat found!!!", category, category._id);
        const location = {
            name: locationName,
            description: description,
            latitude: latitude,
            longitude: longitude,
            categoryId: category._id
        };
        const success = await placemarkService.addLocation(location);
        if (!success){
                message = "error - location not added";
                return;
        }
        message = `you have added ${locationName} to ${categoryName}`;
        // let locationName;
        // console.log(`attempting to add location: ${locationName}`);
    }

</script>

<form on:submit|preventDefault={addLocation}>
    <div class="subtitle" > <b>Add a location</b> <br> </div>
        <div class="field-body">
            <div class="field" >
                <label for="locationName" class="label">Location Name</label>
                <input bind:value={locationName} id="LocationName" class="input" type="text" placeholder="Enter location name" name="locationName" />
            </div>
        </div>
        <div class="field-body">
            <div class="field">
                <label for="selectedCategory" class="label"><br>Select Category</label>
            </div>
        </div>
        <div class="select">
            <select bind:value={selectedCategory} id="selectedCategory">
                {#each categoryList as category}
                    <option value={category.name}> {category.name} </option>
                {/each}
            </select>
        </div>
    <div class="field is-horizontal">
        <div class="field-body">
            <div class="field">
                <label for="description" class="label"><br>Description</label>
                <input bind:value={description} id="Description" class="input" type="text" placeholder="Enter description" name="description" />
            </div>
        </div>
    </div>
    <div class="field is-horizontal">
        <div class="field-body">
            <div class="field">
                <label for="latitude" class="label">Latitude</label>
                <input bind:value={latitude} id="Latitude" class="input" type="text" placeholder="Enter latitude" name="latitude" />
            </div>
            <div class="field">
                <label for="longitude" class="label">Longitude</label>
                <input bind:value={longitude} id="Longitude" class="input" type="text" placeholder="Enter longitude" name="longitude" />
            </div>
        </div>
    </div>
    <div class="title-is-3" style="color: firebrick"> {message} <br><br></div>
    <button class="button is-link is-light">Add Location</button>
</form>
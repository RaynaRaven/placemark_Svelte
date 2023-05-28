<script>
    // @ts-nocheck
    import { onMount, afterUpdate } from "svelte";
    import { placemarkService } from "../services/placemark-service.js";
    import { goto } from '$app/navigation';
    import { categoryIdStore } from "../stores.js";


    let categoryName = "";
    let message = "";

    let categoryList = [];

    export let categoryId = "";

    onMount(async () => {
        categoryList = await placemarkService.getCategories();
    });

    afterUpdate(() => {
        console.log(categoryList);
    });

    async function addCategory() {
        if (!categoryName) {
            message = "Please enter category name";
            return;
        }
        const category = {
            name: categoryName
        }
        let success = await placemarkService.addCategory(category);
        if (!success) {
            message = "some error occurred. Please try again"
        } else {
            categoryName = "";
            categoryList = await placemarkService.getCategories();
        }
    }

    async function openCategory() {
        await goto('/category');
    }


</script>

<div class="columns is-multiline">
    {#each categoryList as category}
        <div class="column is-one-third">
            <div class="box" >
                <div class="content">
                    <div class="is-size-5" ><b>{ category.name }</b></div>
                </div>
                <div class="buttons is-right">
                    <button on:click={() => categoryId = category._id}
                            on:click={() => categoryIdStore.set({
                            categoryId: category._id
                            })}
                            on:click|preventDefault={openCategory} class="button is-link is-light"><i class="fas fa-folder-open"></i></button>
                    <button class="button is-link is-light"><i class="fas fa-trash"></i></button>
                </div>
            </div>
        </div>
    {/each}
</div>
<form on:submit|preventDefault={addCategory}>
    <div class="field is-horizontal">
        <div class="field-body">
            <div class="field">
                <label for="categoryName" class="label">Add Category <br> </label>
                <input bind:value={categoryName} id="CategoryName" class="input" type="text" placeholder="Enter category name" name="categoryName" />
            </div>
        </div>
    </div>
    <div class="title-is-3" style="color: firebrick"> {message} <br></div>
    <button class="button is-link is-light">Add Category</button>
</form>

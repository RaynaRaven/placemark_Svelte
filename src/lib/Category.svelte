<script>
    // @ts-nocheck
    import { onMount, afterUpdate } from "svelte";
    import { placemarkService } from "../services/placemark-service.js";
    import { user, categoryIdStore } from "../stores.js";


    let categoryName = "";
    let message = "";

    let categoryList = [];

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


    async function deleteCategory(categoryId) {
        const category = {
            id: categoryId
        }
        let success = await placemarkService.deleteCategory(category);
        if (!success) {
            console.log("Cat not deleted");
        } else {
            message = `Category Deleted`;
            categoryList = await placemarkService.getCategories();
            console.log(categoryList);
        }
    }

    //TODO refactor to separate components - CategoryList and CategoryForm
</script>

<div class="columns is-multiline">
    {#each categoryList as category}
        <div class="column is-one-third">
            <div class="box" >
                <div class="content">
                    <div class="is-size-5" ><b>{ category.name }</b></div>
                </div>
                <div class="buttons is-right">
                    <a href="/user/{$user._id}/category/{category._id}" class="button is-link is-light">
                        <span class="icon is-small">
                            <i class="fas fa-folder-open"></i>
                        </span>
                    </a>
                    <button on:click={() => deleteCategory(category._id)} class="button is-link is-light">
                            <span class="icon is-small">
                                <i class="fas fa-trash"></i>
                            </span>
                    </button>
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

<script>
    import { onMount} from "svelte";
    import { placemarkService } from "../services/placemark-service.js";

    let userObj = null ;

    let categoryName = "";

    let message = "";


    // onMount(async () => {
    //     const userId = await placemarkService.getUserId(email)
    //
    // })

    async function addCategory() {
        // if (categoryName){
        //     const category = {
        //         name: categoryName
        //     }
        // } else {
        //     message = "Please enter category name"
        // }

         console.log(`attempting to add category: ${categoryName}`);
    }
</script>

<form on:submit|preventDefault={addCategory}>
    <div class="field is-horizontal">
        <div class="field-body">
            <div class="field">
                <label for="categoryName" class="label">Add Category</label>
                <input bind:value={categoryName} id="CategoryName" class="input" type="text" placeholder="Enter category name" name="categoryName" />
            </div>
        </div>
    </div>
    <div class="title-is-3" style="color: firebrick"> {message} <br><br></div>
    <button class="button is-link is-light">Add Category</button>
</form>

<script>
    let categoryName = "";

    async function addCategory() {
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
    <button class="button is-link">Add Category</button>
</form>

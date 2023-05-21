<script>
    let locationName = "";

    async function addLocation() {
        let locationName;
        console.log(`attempting to add location: ${locationName}`);
    }
</script>

<form on:submit|preventDefault={addLocation}>
    <div class="field is-horizontal">
        <div class="field-body">
            <div class="field">
                <label for="locationName" class="label">Add Location</label>
                <input bind:value={locationName} id="LocationName" class="input" type="text" placeholder="Enter location name" name="locationName" />
            </div>
        </div>
    </div>
    <button class="button is-link">Add Location</button>
</form>
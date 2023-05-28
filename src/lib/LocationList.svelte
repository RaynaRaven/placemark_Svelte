<script>
    import {afterUpdate, onMount, onDestroy } from "svelte";
    import { placemarkService } from "../services/placemark-service.js";
    import { user, categoryIdStore, locationStore } from "../stores.js";
    import { page } from "$app/stores";
    import {goto} from "$app/navigation";

    export let locationList=[];
    //export let locationId = "";

    onMount(async () => {
        console.log($page.params.category);
        locationList = await placemarkService.getLocationsByCategoryId($page.params.category);
    })

    async function openLocation() {
        await goto('/location');
    }



</script>

<div class="columns is-multiline">
    {#each locationList as location}
        <div class="column is-one-third">
            <div class="box" >
                <div class="content">
                    <div class="is-size-5" ><b>{ location.name }</b></div>
                </div>
                <div class="buttons is-right">
                    <button on:click={() => locationStore.set({
                            locationId: location._id
                            })}
                            on:click|preventDefault={openLocation} class="button is-link is-light"><i class="fas fa-folder-open"></i></button>
                    <button class="button is-link is-light"><i class="fas fa-trash"></i></button>
                </div>
            </div>
        </div>
    {/each}
</div>


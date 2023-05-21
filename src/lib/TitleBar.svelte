<script>
    import { user } from "../stores.js";
    export let title = '';
</script>

<div class="box has-text-centered columns m-2">
    <i style="font-size: 48px; color: mediumseagreen;" class="fas fa-map-pin"></i>
    <div class="title is-8">{title}</div>
    <div class="column" style="text-align: end">
        <i style="font-size: 32px; " class="fas fa-info-circle fa-3x"></i>
        {#if $user.email}
            <div class="is-size-7">{$user.email}</div>
        {:else}
            <div class="is-size-7">Placemark-Svelte 0.1</div>
        {/if}
    </div>
</div>
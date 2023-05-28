<script>
    import { beforeUpdate } from "svelte";
    import { placemarkService } from "../services/placemark-service";

    export const ssr = false;

    beforeUpdate(() => {
        placemarkService.reload();
    });
</script>

<div class="container">
    <slot />
</div>
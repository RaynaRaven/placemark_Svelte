<script>
    import { user } from "../stores.js";
</script>


<div class="box has-text-centered columns m-2">
    <a href="/user/${$user._id}/dashboard" class="column is-4">
        <i class="fas fa-tachometer-alt fa-3x" style="color:rgb(153, 196, 74)" />
    </a>
    <a href="/logout" class="column is-4">
        <i class="fas fa-sign-out-alt fa-3x" style="color:rgb(156, 70, 128)" />
    </a>
</div>
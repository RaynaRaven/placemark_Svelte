<script xmlns="http://www.w3.org/1999/html">
    import { goto } from '$app/navigation';
    import { placemarkService } from "../services/placemark-service.js";

    let email = '';
    let password = '';
    let errorMessage = '';

    async function login() {
        console.log(`attempting to log in email: ${email} with password: ${password}`);
        let success = await placemarkService.login(email, password);
        if (success) {
            goto('/dashboard');
    } else {
            email = "";
            password = "";
            errorMessage = "Invalid Credentials";
        }
    }
</script>

<form on:submit|preventDefault={login}>
    <div class="field">
        <p class="control has-icons-left">
            <input bind:value={email} class="input" id="email" name="email" placeholder="Email" type="email" />
                <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                </span>
        </p>
    </div>
    <div class="field">
        <p class="control has-icons-left">
            <input bind:value={password} class="input" id="password" name="password" placeholder="Enter Password" type="password" />
                <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                </span>
        </p>
    </div>

    <div class="field is-grouped">
        <button class="button is-link">Log In</button>
    </div>
</form>
{#if errorMessage}
    <div class="section">
        {errorMessage}
    </div>
{/if}
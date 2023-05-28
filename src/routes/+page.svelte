<script>
    import Header from '$lib/Header.svelte';
    import WelcomeNavigator from "$lib/WelcomeNavigator.svelte";

    export const ssr = false;
</script>

<Header>
    <WelcomeNavigator />
</Header>

<div class="columns is-vcentered ">
    <div class="column has-text-centered">
        <p style="font-size: 1.5rem; line-height: 2.5rem; text-align: center; margin: 3rem auto;">A tool to keep track of your favourite places <br><br> Never forget a great spot again</p>
    </div>
    <div class="column">
        <img width="500" src="/poi.jpg" style="max-height: 400px; max-width: 100%;" alt="city skyline with poi markers">
    </div>
</div>
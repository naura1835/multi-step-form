<script>
    import { name, email, phoneNumber } from '../store.js';

</script>

<section>
    <label for="name">Name</label>
    <input type="text" name="name" id="name" bind:value={$name} placeholder="e.g Stephen King" />
    <label for="email">Email Address</label>
    <input type="email" name="e-mail" id="email" bind:value={$email} placeholder="e.g stephenking@lorem.com" />
    <label for="phoneNo">Phone Number</label>
    <input type="tel" name="phoneNumber" id="phoneNo" bind:value={$phoneNumber} placeholder="+1 234 567 890" />
</section>

<style lang="scss">
    label {
        display: block;
        color: var(--marine-blue);
        font-size: 0.75rem;
        font-weight: bold;
        margin-bottom: .2rem;
    }
    input{
        border: 1px solid var(--cool-gray);
        border-radius: 5px;
        max-width: 290px;
        width: 100%;
        height: 38px;
        margin-bottom: 1.2rem;
        padding: .5rem;
    }
</style>
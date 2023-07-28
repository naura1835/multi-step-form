<script>
    import { name, email, phoneNumber } from '../store.js';

    // export let name = '';
    // export let email = '';
    // export let phoneNumber = '';

</script>

<label for="name">Name</label>
<input type="text" name="name" id="name" bind:value={$name} placeholder="e.g Stephen King" />
<label for="email">Email Address</label>
<input type="email" name="e-mail" id="email" bind:value={$email} placeholder="e.g stephenking@lorem.com" />
<label for="phoneNo">Phone Number</label>
<input type="tel" name="phoneNumber" id="phoneNo" bind:value={$phoneNumber} placeholder="+1 234 567 890" />

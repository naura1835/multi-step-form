<script>
    import { plan, addOn } from '../store.js'

    let addOns = [
        {service: 'Online Service', detail: 'Access to multiplayer games', price: 1},
        {service: 'Larger storage', detail: 'Extra 1TB of cloud service', price: 2},
        {service: 'Customizable profile', detail: 'Custom theme on your profile', price: 2}
    ]

    // @ts-ignore
    const handleAddOn = (addOnService, price) => {
        const newAddOn = {service: addOnService, price: price}
        // @ts-ignore
        addOn.update((arr) => {
            return [...arr, newAddOn]
        })
    // @ts-ignore
    }

</script>

<section>
    {#each addOns as {service, detail, price}}
        <label>
        <input type="checkbox" name="add-on" on:change={() => handleAddOn(service, price)} />
        <h4>{service}</h4>
        <span>{detail}</span>
        <span> +${price * $plan.planType}/{ $plan.planType == 1 ? 'mo' : 'yr'}</span>
    </label>    
    {/each} 
</section>

<style lang="scss">
    
</style>
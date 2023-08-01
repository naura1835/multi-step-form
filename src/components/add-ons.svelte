<script>
    import { plan, addOn } from '../store.js'

    let isActive = ''
    let addOns = [
        {service: 'Online service', detail: 'Access to multiplayer games', price: 1},
        {service: 'Larger storage', detail: 'Extra 1TB of cloud service', price: 2},
        {service: 'Customizable profile', detail: 'Custom theme on your profile', price: 2}
    ]

    let localAddOns = $addOn.map((item) => item.service)

    // @ts-ignore
    const handleAddOn = (addOnService, price) => {
        isActive = addOnService

        const newAddOn = {service: addOnService, price: price}
        const doesExists = $addOn.find((item) => item.service === addOnService)
        
        if(!doesExists){
            // @ts-ignore
            addOn.update((arr) => {
                return [...arr, newAddOn]
            })
            // @ts-ignore
        }else {
            const unFilteredArr = [...$addOn]
            const filteredArr = unFilteredArr.filter((item) => item.service !== addOnService)
            $addOn = filteredArr //uses set internally
        }
    }

</script>

<section>
    {#each addOns as addOnItem}
        <div class={$addOn.find((item) => item.service == addOnItem.service) ? "add-on is-active": "add-on"}>
            <input type="checkbox" bind:group={localAddOns} value={addOnItem.service} name="add-on" id={addOnItem.service} on:change={() => handleAddOn(addOnItem.service, addOnItem.price)} /> 
            <label for={addOnItem.service}>{addOnItem.service}</label>
            <p>{addOnItem.detail}</p>
            <span> +${addOnItem.price * $plan.planType}/{ $plan.planType == 1 ? 'mo' : 'yr'}</span>
        </div>    
    {/each} 
</section>

<style lang="scss">
    .add-on {
        border: 1px solid var(--light-gray);
        border-radius: 8px;
        display: grid;
        grid-template-columns: auto 3fr 1fr;
        grid-template-rows: repeat(2, auto);
        column-gap: 10px;
        padding: .6rem 1rem;
        margin-bottom: 15px;

        @media (min-width: 768px) {
            height: 4.5rem;
            column-gap: 30px;
        }


        input[type='checkbox'] {
            border-color: var(--cool-gray);
            grid-row: 1/3;
            height: 25px;
            width: 25px;
            place-self: center;
        }

        label{
            color: var(--marine-blue);
            font-weight: 600;
        }

        p{
            grid-column: 2/3;
            font-size: 0.95rem;
        }

        span {
            color: var(--purplish-blue);
            font-size: 0.95rem;
            grid-row: 1/3;
            grid-column: 3/4;
            place-self: center;
        }

    }
    
    .is-active {
        border-color: var(--purplish-blue);
        background-color: var(--magnolia);
    }
</style>
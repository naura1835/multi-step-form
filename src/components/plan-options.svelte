<script>
    import { plan } from '../store.js'
    
    let isActive = 'arcade'
    let yearly = $plan.planType == 1 ? false : true
    let plans = [
        {name: 'arcade', img: 'icon-arcade.svg', price: 9},
        {name: 'advanced', img: 'icon-advanced.svg', price: 12},
        {name: 'pro', img: 'icon-pro.svg', price: 15},
    ]
    let currentPlan = plans[0].name

    $: multiplyBy = yearly ? 10 : 1

    $: {
        if(yearly == true) $plan.planType = 10
        if(yearly == false) $plan.planType = 1
    }

    // @ts-ignore
    const handleChange = (planName, planPrice, planType) => {
        
        $plan = {planName, planPrice, planType}
        isActive = planName
    }
    
</script>

<section>
    {#each plans as {name, img, price}}
        <label class={isActive === name ? 'is-active plan' : 'plan'} for={name}>
            <input type="radio" name="billing-plan" id={name} value={name} bind:group={currentPlan} on:change={()=> handleChange(name, price, multiplyBy)} />
            <img src={`/images/${img}`} alt={name}/>
            <h4>{name}</h4>
            <span class="plan__price">${price * multiplyBy}/{multiplyBy == 1 ? 'mo': 'yr'}</span>
            <span class="plan__freebie">{multiplyBy == 10 ? '2 months free': ''}</span>
        </label>
    {/each}

    <div class="switch-div">
        <span>Monthly</span>
        <label class="switch">
            <input type="checkbox" bind:checked={yearly} />
            <span class="slider"></span>
        </label>
        <span>Yearly</span>
    </div>
</section>

<style lang="scss">
    @import '../style.css';
    section{
        
        @media (min-width: 768px) {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(2, auto);
            column-gap: 20px;
        }
    }
    .plan {
        border: 1px solid var(--light-gray);
        border-radius: 8px;
        display: grid;
        grid-template-columns: auto 1fr;
        grid-template-rows: repeat(2, 1fr);
        align-items: center;
        column-gap: 0.75rem;
        min-height: 4.5rem;
        height: 100%;
        padding: .4rem 1rem;
        margin-bottom: 15px;

        @media (min-width: 768px) {
            grid-template-columns: 1fr;
            grid-template-rows: 2fr repeat(2, auto);
            min-height: unset;
            height: 9.88rem;
            width: 8.44rem;
            padding: 1rem;
        
        }

        &__price {
            grid-row: 2/3;
            align-self: start;

            @media (min-width: 768px) {
                grid-row: 3/4;
            }
        }

        &__freebie {
            color: var(--marine-blue);
            font-size: 0.9rem;
        }
    }

    .is-active {
        border-color: var(--purplish-blue);
        background-color: var(--magnolia);
    }
    img {
        grid-row: 1/5;
        align-self: center;
        
        @media (min-width: 768px) {
            grid-row: 1/2;
            align-self: start;
        }
    }

    h4 {
        color: var(--marine-blue);
        text-transform: capitalize;
        grid-row: 1/2;
        align-self: end;

        
        @media (min-width: 768px) {
            grid-row: 2/3;
        }
    }

    

    input[type='radio'] {
        -webkit-appearance: none;
        appearance: none;
        background-color: var(--alabaster);
        margin: 0;
    }

    .switch-div {
        margin: 2rem auto 0;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        
        @media (min-width: 768px) {
            grid-column: 1/4;
            background-color: var(--magnolia);
            border-radius: 8px;
            width: 100%;
            height: 44px;
        }
    }

    .switch {
        position: relative;
        display: inline-block;
        width: 48px;
        height: 24px;

        & input {
            -webkit-appearance: none;
            appearance: none;
            background-color: var(--alabaster);
            margin: 0;
        }
    }

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: var(--marine-blue);
        border-radius: 34px;
        -webkit-transition: .4s;
        transition: .4s;

        &:before {
            position: absolute;
            content: "";
            height: 16px;
            width: 16px;
            left: 4px;
            bottom: 4px;
            background-color: var(--alabaster);
            border-radius: 50%;
            -webkit-transition: .4s;
            transition: .4s;
        }
    }

    input[type='checkbox']:checked + .slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
    }

</style>
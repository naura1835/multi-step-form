<script>
    import { plan } from '../store.js'

    let yearly = false
    let plans = [
        {name: 'arcade', img: 'icon-arcade.svg', price: 9},
        {name: 'advanced', img: 'icon-advanced.svg', price: 12},
        {name: 'pro', img: 'icon-pro.svg', price: 15},
    ]
    
    $: multiplyBy = yearly ? 10 : 1

    // @ts-ignore
    const handleChange = (planName, planPrice, planType) => {
        const planObj = {planName, planPrice, planType}
        // @ts-ignore
        plan.update((obj) =>({...obj, ...planObj}))
    }
    
</script>

<section>
    {#each plans as {name, img, price}}
        <label>
            <input type="radio" name="billing-plan" value={name} on:change={()=> handleChange(name, price, multiplyBy)} />
            <img src={`/images/${img}`} alt={name}/>
            {name}
            <span>${price * multiplyBy}/{multiplyBy == 1 ? 'mo': 'yr'}</span>
            <span>{multiplyBy == 10 ? '2 months free': ''}</span>
        </label>
    {/each}
    <div>
        <span>Monthly</span>
        <label class="switch">
            <input type="checkbox" on:change={() => yearly = !yearly} />
            <span class="slider"></span>
        </label>
        <span>Yearly</span>
    </div>
</section>

<style lang="scss">
    label {
        display: block;
    }
    input[type='radio'] {
        -webkit-appearance: none;
        appearance: none;
        background-color: var(--alabaster);
        margin: 0;
    }
    .switch {
        position: relative;
        display: inline-block;
        width: 60px;
        height: 34px;

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
            height: 26px;
            width: 26px;
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
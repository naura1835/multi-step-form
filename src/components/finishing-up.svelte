<script>
// @ts-nocheck
    import { billingDetail } from "../store.js";
    
    let planTotal, total;

    let addOnTotal = $billingDetail.addOn.reduce((total, current) => {
        const { price } = current
        total += price

        return total
    }, 0)
    planTotal = $billingDetail.plan.planPrice * $billingDetail.plan.planType
    total = planTotal + addOnTotal
</script>

<section>
    <div>
        <h4>{$billingDetail.plan.planName}(Monthly)</h4>
        <a href="/">Change</a>
    </div>
    <span>${planTotal}/{$billingDetail.plan.planType == 1 ? 'mo' : 'yr'}</span>
    <hr />
    {#each $billingDetail.addOn as addOn}
        <p>{addOn.service}</p>
        <span>{addOn.price}</span>
    {/each}
</section>
<div class="total">
    <p>Total (per month)</p>
    <span>+${total}/{$billingDetail.plan.planType == 1 ? 'mo' : 'yr'}</span>

</div>

<style lang="scss">
    section {
        background-color: var(--magnolia);
        border-radius: 8px;
        display: grid;
        grid-template-columns: 1fr auto;
        row-gap: 20px;
        padding: 1.2rem;
    }

    hr{
        grid-column: 1/3;
    }

    h4{
        color: var(--marine-blue);
        text-transform: capitalize;
    }
    a {
        color: var(--cool-gray);
    }
    span {
        place-self: center;
        color: var(--marine-blue);
    }

    div + span{
        font-weight: 600;
    }

    .total{
        display: grid;
        grid-template-columns: 1fr auto;
        padding: 0 1.2rem;

        span{
            color: var(--purplish-blue);
        }
    }
</style>
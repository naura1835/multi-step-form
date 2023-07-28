<script>
// @ts-nocheck
    import { billingDetail } from "../store.js";
    
    let total;

    let addOnTotal = $billingDetail.addOn.reduce((total, current) => {
        const { price } = current
        total += price

        return total
    }, 0)

    total = $billingDetail.plan.planPrice + addOnTotal
</script>

<section>
    <div>
        <h3>{$billingDetail.plan.planName}(Monthly)</h3>
        <a href="/">Change</a>
    </div>
    <p>${$billingDetail.plan.planPrice}/{$billingDetail.plan.planType == 1 ? 'mo' : 'yr'}</p>
    {#each $billingDetail.addOn as addOn}
        <p>{addOn.service}</p>
        <p>{addOn.price}</p>
    {/each}
    <p>Total (per month)</p>
    <p>+${total}/{$billingDetail.plan.planType == 1 ? 'mo' : 'yr'}</p>

</section>

<style lang="scss">

</style>
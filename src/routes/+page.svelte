<script>
    import AddOns from '../components/add-ons.svelte';
    import Heading from "../components/heading.svelte";
    import PersonalInfo from '../components/personal-info.svelte';
    import PlanOptions from '../components/plan-options.svelte';
    import FinishingUp from '../components/finishing-up.svelte';

    let currentStep = 0;

    const handleNextStep = () => {
        currentStep++
    }
    const goBack = () => {
        currentStep--
    }
</script>

<main class="multi-step-form">
    <section class='sequence'>
        {#each [0 ,1, 2, 3] as number}
            <button class='sequence__btn' on:click={() => currentStep = number}>{number + 1}</button>
        {/each}
    </section>

    <form>
        <h1 hidden>Multi step form</h1>

        {#if currentStep === 0}
            <Heading {currentStep} />
            <PersonalInfo />
        {:else if currentStep === 1}
            <Heading {currentStep} />    
            <PlanOptions />   
        {:else if currentStep === 2}
            <Heading {currentStep} />
            <AddOns />
        {:else if currentStep === 3}
            <Heading {currentStep} />
            <FinishingUp />
        {:else}
        <p>Thank you</p>
        {/if}
    </form>

    <div class="submit__btns">
        {#if currentStep === 0}
            <button class="submit__btn--next" type="submit" on:click={handleNextStep}>Next Step</button>
        {:else if currentStep === 3}
            <button class="submit__btn--go-back" on:click={goBack}>Go back</button>
            <button class="submit__btn--confirm" on:click={() => {currentStep = 5}}>Confirm</button>
        {:else if currentStep === 1 || currentStep === 2}
            <button class="submit__btn--go-back" on:click={goBack}>Go back</button>
            <button class="submit__btn--next" type="submit" on:click={handleNextStep}>Next Step</button>
        {/if}
    </div>
</main>

<style lang="scss">   
    main{
        background: url('/images/bg-sidebar-mobile.svg') no-repeat;
        background-size: contain;
        padding: 1.2rem;
        padding-top: 0;
    }
    
    .sequence{
        display: flex;
        row-gap: 20px;
        justify-content: center;
        padding-top: 2rem;

        &__btn{
            background-color: transparent;
            border-radius: 50%;
            border: 1px solid var(--alabaster);
            color: var(--alabaster);
            height: 48px;
            aspect-ratio: 1;

            &:not(:last-child){
                margin-right: .8rem;
            }
        }
    }

    form{
        margin-top: 1.4rem;
        background-color: var(--alabaster);
        border-radius: 20px;
        padding: 2rem 1.5rem;
    }

    .submit__btns {
        position: fixed;
        bottom: 0;
        left: 0;
        background-color: var(--alabaster);
        width: 100%;
        padding: 1rem;
    }

    .submit__btn--next {
        background-color: var(--marine-blue);
        color: var(--alabaster);
    }
    
</style>

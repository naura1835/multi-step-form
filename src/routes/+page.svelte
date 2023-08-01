<script>
    import {plan} from '../store.js'
    import AddOns from '../components/add-ons.svelte';
    import Heading from "../components/heading.svelte";
    import PersonalInfo from '../components/personal-info.svelte';
    import PlanOptions from '../components/plan-options.svelte';
    import FinishingUp from '../components/finishing-up.svelte';

    let currentStep = 0;
    let steps = [
        {number: 0, title: 'your info'},
        {number: 1, title: 'select plan'},
        {number: 2, title: 'Add-ons'},
        {number: 3, title: 'summary'}
    ]

    const handleNextStep = () => {
        currentStep++
    }
    const goBack = () => {
        currentStep--
    }
    $: console.log($plan)
</script>

<main class="multi-step-form">
    <section class='sequence'>
        {#each steps as step}
            <div>
                <button class='sequence__btn' on:click={() => currentStep = step.number}>{step.number + 1}</button>
                <h3 class="sequence__step">step {step.number + 1}</h3>
                <span class="sequence__title">{step.title}</span>
            </div>
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
            <!-- <div class="thank-you"> -->
                <div class="icon-wrapper">
                    <div class="icon-wrapper__inner">
                        <img src="/images/icon-checkmark.svg" alt="checkmark" />
                    </div>
                </div>
                <h2>Thank you!</h2>
                <p>Thanks for confirming your subscription! 
                    we hope you have fun using our platform.
                    If you ever need support,
                    please feel free to contact us at
                    support@loremgaming.com
                </p>
            <!-- </div> -->
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

        @media (min-width: 768px) {
            background: none;
            background-color: var(--white);
            border-radius: 8px;
            display: grid;
            grid-template-columns: auto 1fr;
            margin: auto;
            margin-top: 5rem;
            max-width: 58.63rem;
            width: 90%;
            min-height: 500px;
            height: 100%;
            padding-top: 1.2rem;
        }

        
        @media (min-width: 1024px) {
            width: 100%;
            column-gap: 100px;
        }
    }

    h2{
        color: var(--marine-blue);
        text-align: center;
    }
    p {
        text-align: center;
    }

    .sequence{
        display: flex;
        row-gap: 20px;
        justify-content: center;
        padding-top: 2rem;

        @media (min-width: 768px) {
            grid-row: 1/3;
            background: url('/images/bg-sidebar-desktop.svg') no-repeat;
            background-size: cover;
            background-position: center;
            border-radius: 8px;
            flex-direction: column;
            justify-content: start;
            max-width: 270px;
            width: 100%;
            padding: 2rem 1.5rem;

            div {
                display: grid;
                grid-template-columns: auto 1fr;
                grid-template-rows: repeat(2, auto);
                column-gap: 20px;
                row-gap: 5px;
            }
        }

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

            @media (min-width: 768px){
                width: 48px;
                grid-row: 1/3;

                &:not(:last-child){
                    margin-right: 0;
                }   
            }
        }

        &__step, &__title {
            display: none;

            @media (min-width: 768px){
                display: block;
                color: var(--alabaster);
                font-size: .8rem;
                text-transform: uppercase;
            }
        }

        &__step{
            color: var(--light-gray);
            font-weight: 400;
            align-self: end;
        }

        &__title {
            font-weight: 600;
        }

    }

    form{
        display: flex;
        flex-direction: column;
        margin-top: 1.4rem;
        background-color: var(--alabaster);
        border-radius: 20px;
        padding: 2rem 1.5rem;
        row-gap: 20px;

        
        @media (min-width: 768px) {
            margin-top: 0;
            background-color: transparent;
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
            justify-content: center;
        }

    }


    .icon-wrapper{
        height: 60px;
        width: 60px;
        border-radius: 50%;
        background-color: var(--strawberry-red);
        display: grid;
        place-items: center;
        margin: 0 auto;

        &__inner {
            height: 30px;
            width: 30px;
            border-radius: inherit;
            background-color: var(--white);
            display: inherit;
            place-items: inherit;

            img {
                height: 15px;
                width: 15px;
                object-fit: cover;
            }
        }
    }

    .submit__btns {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        position: fixed;
        bottom: 0;
        left: 0;
        background-color: var(--alabaster);
        width: 100%;
        padding: 1rem;

        
        @media (min-width: 768px) {
            position: relative;
            grid-column: 2/3;
        }
        
        button {
            border: none;
            border-radius: 5px;
            display: grid;
            width: 6.125rem;
            height: 2.5rem;
            outline: none;
            place-items: center;
            text-transform: capitalize;
        }
    }
    .submit__btn {
        &--next {
            background-color: var(--marine-blue);
            color: var(--alabaster);
            grid-column: 2/3;
            justify-self: end;
        }

        &--go-back {
            background-color: transparent;
            color: var(--cool-gray);
            grid-column: 1/2;
            justify-self: start;
        }

        &--confirm {
            background-color: var(--purplish-blue);
            color: var(--white);
            grid-column: 2/3;
            justify-self: end;
        }
    }
    
</style>

<script>
    export let currentStep = 0;

    let headingSubheadingPair = [
        {heading: 'Personal Info', subHeading: 'Please provide your name, email address, and phone number.'},
        {heading: 'Select your plan', subHeading: 'You have the option of monthly or yearly billing.'},
        {heading: 'Pick add-ons', subHeading: 'Add-ons help enhance your gaming experience.'},
        {heading: 'Finishing up', subHeading: 'Double check everything looks OK before confirming.'}
    ]

    $: currentHeading = headingSubheadingPair[currentStep].heading;
    $: currentSubHeading = headingSubheadingPair[currentStep].subHeading;

</script>

<section>
    <h2>{currentHeading}</h2>
    <p>{currentSubHeading}</p>
</section>

<style lang="scss">
    h2 {
        color: var(--marine-blue);
        margin-bottom: 1.25rem;
    }
    p {
       width: 95%;
    }
</style>

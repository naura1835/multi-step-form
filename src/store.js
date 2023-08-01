import { derived, writable } from "svelte/store";

export const name = writable("");
export const email = writable("");
export const phoneNumber = writable("");
export const plan = writable({ planName: "arcade", planType: 1, planPrice: 9 });
export const addOn = writable([]);

export const billingDetail = derived(
  [name, email, phoneNumber, plan, addOn],
  ([$name, $email, $phoneNumber, $plan, $addOn]) => {
    let obj = {
      name: $name,
      email: $email,
      phoneNumber: $phoneNumber,
      plan: $plan,
      addOn: $addOn,
    };

    return obj;
  }
);

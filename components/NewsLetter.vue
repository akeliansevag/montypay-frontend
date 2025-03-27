<template lang="">
    <div>
        <h4>Subscribe to our newsletter</h4>
        <div class="flex flex-column gap-8 w-full">
            <div class="flex gap-8 w-full">
                <input v-model="form.newsletterEmail" type="text" id="newsletter-email" class="w-full py-5 bg-transparent border-b border-b-primary outline-0" placeholder="Write your email here" />
                <Icon @click.prevent="handleSubmit" id="submit" name="fa6-solid:arrow-right" class="icon absolute top-1/2 right-0 -translate-y-1/2 text-3xl" />
            </div>
        </div>
        <div v-if="errors.newsletterEmail" class="text-red-500 text-xs">{{ errors.newsletterEmail }}</div>
        <div v-if="submissionMessage" class="text-sm mt-2 text-secondary">{{submissionMessage}}</div>
    </div>
</template>

<script setup>
    const submissionMessage = ref('');

    const form = ref({
        newsletterEmail: '',
    });

    const errors = ref({
        newsletterEmail: '',
    });

    const validationRules = {
        newsletterEmail: {
            required: 'Please enter your email address',
            email: 'Please enter a valid email address',
            safe: 'Your input has invalid value'
        },
    }

    const handleSubmit = async () => {
        if (validateForm(form, errors, validationRules)) {
            try {
                const API_ENDPOINT = 'https://backend.montypay.com/wp-json/contact-form-7/v1/contact-forms/1758/feedback';
                const formData = new FormData();
                formData.append('newsletter-email', form.value.newsletterEmail);
                formData.append('_wpcf7_unit_tag', 'rte');
                // console.log(formData);
                // return;
                const response = await fetch(API_ENDPOINT, {
                    method: 'POST',
                    body: formData,
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                //console.log("Form submitted successfully:", data);
                submissionMessage.value = "Thank you for your subscribing to our newsletter."
                setTimeout(() => {
                    submissionMessage.value = ""
                }, 2000);
                resetForm();
                //Handle success response, such as notifying the user or redirecting
            } catch (error) {
                console.error("Form submission error:", error);
                // Handle errors, such as displaying a user-friendly error message
                submissionMessage.value = "Error in submitting your message."
                resetForm();
            }
        }
    };

    const resetForm = () => {
        form.value.newsletterEmail="";
    }
</script>

<style lang="">
    
</style>

<!--  -->
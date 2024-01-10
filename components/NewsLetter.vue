<template lang="">
    <div>
        <h4>Subscribe to our newsletter</h4>
        <form @submit.prevent="submitForm" class="mt-4">
            <div class="flex flex-column gap-8 w-full">
                <div class="flex gap-8 w-full">
                    <input v-model="formData.email" type="text" id="email" class="w-full py-5 bg-transparent border-b border-b-primary outline-0" placeholder="Write your email here" required />
                    <Icon name="fa6-solid:arrow-right" class="icon absolute top-1/2 right-0 -translate-y-1/2 text-3xl" />
                </div>
            </div>
        </form>
    </div>
</template>

<script setup>
    const formData = ref({
        email: '',
    });

    const submitForm = () => {
        console.log('Form submitted:', formData.value);
        formData.value = {
            email: '',
        };
    };
</script>

<style lang="">
    
</style>
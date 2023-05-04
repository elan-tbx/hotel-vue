<template>
    <div>
        <form action="#" class="flex flex-col w-96 m-auto p-5">
            <input class="input input-primary mb-3" placeholder="email" type="email">
            <input class="input input-primary mb-3" placeholder="password" type="password">
            <button
                type="submit"
                class="btn"
                :class="[submitting ? 'loading btn-disabled' : 'btn-warning']"
            >
                {{ submitting ? 'Please wait...' : 'Submit' }}
            </button>
        </form>
    </div>
</template>
<script setup lang="ts">
const submitting = ref(false)
</script>

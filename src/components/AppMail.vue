<script>
import axios from 'axios';
export default {
    data() {
        return {
            // isLoading: false,
            form: {
                email: '',
                object: '',
                content: '',
            },
            presetForm: {
                email: '',
                object: '',
                content: '',
            }
        }
    },
    methods: {
        formSubmit() {
            // this.isLoading = true;
            axios.post('http://127.0.0.1:8000/api/mail', this.form).then((res) => {
                this.form = this.presetForm;
            }).catch(() => {
            }).then(() => {
                // this.isLoading = false;

            })
        }
    }
};
</script>

<template>
    <!-- <AppLoader v-if="isLoading" /> -->
    <form @submit.prevent="formSubmit">
        <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input type="email" class="form-control" id="email" placeholder="name@example.com" v-model.trim="form.email">
        </div>
        <div class="mb-3">
            <label for="object" class="form-label">Object</label>
            <input type="text" class="form-control" id="object" v-model.trim="form.object">
        </div>
        <div class="mb-3">
            <label for="content" class="form-label"></label>
            <textarea class="form-control" id="content" rows="3" v-model="form.content"></textarea>
        </div>
        <div class="text-end">
            <button type="submit" class="btn btn-success">Invia</button>
        </div>
    </form>
</template>

<style scoped></style>
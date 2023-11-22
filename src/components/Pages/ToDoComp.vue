<template>
<div v-if="auth" class="ToDo container">
    <div class="row justify-content-center">
        <div class="col-md-12">
            <router-link to="/ToDo">
                <button type="button" class="btn btn-sm btn-link mt-2">ToDo /</button>
            </router-link>
            <button type="button" class="btn btn-sm btn-primary float-end">
                <i class="fa-solid fa-plus"></i>
                {{ $t('AddList') }}
            </button>
        </div>
        <hr><br>
        <div class="list-group col-md-6">
            <router-link
                :to="`/List/${item.id}`"
                v-for="item in ToDoData" :key="item.id"
                class="list-group-item list-group-item-action p-3"
            >
                {{ item.todo }}
                <span class="badge bg-danger rounded-pill float-end">{{ item.list_num}}</span>
            </router-link>
        </div>
    </div>
</div>
</template>

<script>
import { auth } from '@/js/auth.js'

export default {
    computed: {
        auth() {
            return auth()
        }
    },
	data() {
        return {
            ToDoData: []
        }
    },
    mounted() {
        this.ToDo()
    },
    methods: {
        ToDo() {
            let auth = JSON.parse(localStorage.getItem('auth'))

			this.$axios.get('/database/ToDo.json', {
				token: auth.token,
				id: auth.id
			}).then(response => {
				this.ToDoData = (response.data)

                //console.log(this.ToDoData[0].id)
                //console.log(response.data)
			}).catch(error => {
				console.error(error)
			})
		}
    }
}
</script>

<style scoped lang="scss">
.ToDo {
    margin-top: 30px;
    min-height: 600px;

    .btn-link {
        box-shadow: none;    
    }
}
</style>
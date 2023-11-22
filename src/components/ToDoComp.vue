<template>
    <div class="row justify-content-center">
        <div class="list-group col-md-6" irole="tablist">
            <a
                v-for="item in ToDoData" :key="item.id"
                class="list-group-item list-group-item-action"
                data-bs-toggle="list"
                href="#list-home"
                role="tab"
                aria-controls="list-home"
            >
                {{ item.todo }}
                <span class="badge bg-danger rounded-pill float-end">{{ item.list_num}}</span>
            </a>
        </div>
    </div>
</template>

<script>
export default {	
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
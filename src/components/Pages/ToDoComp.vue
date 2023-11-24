<template>
    <div v-if="Auth()" class="ToDo container">
        <div class="row">
            <div class="col-md-2">
                <NavComp/>
            </div>

            <div class="col-md-8">
                <div class="row position-relative">
                    <h3 class="w-auto pt-2">To Do</h3>
                    <span class="list-num border border-info rounded d-block w-auto">5</span>
                
                    <component :is="`modal-comp`" template="AddToDoComp" :title="$t('AddToDo')">
                        <template v-slot:toggle-btn>
                            <button class="btn btn-sm btn-primary add-to-do-btn" data-bs-toggle="modal" data-bs-target="#AddToDoComp" >
                                <i class="fa-solid fa-plus"></i>
                                {{ $t('AddToDo') }}
                            </button> 
                        </template>
                    </component>
                    <hr class="mt-3">
                </div>
                <div class="row">
                    <div class="list-group list-group-flush">
                        <router-link :to="`/List/${item.id}`" v-for="item in ToDoData" :key="item.id" class="list-group-item list-group-item-action p-4">
                            <i class="fa-solid fa-list"></i> 
                            {{ item.todo }}
                            <small>{{ item.time }}</small>
                            <span class="badge bg-danger rounded-pill float-end">{{ item.list_num}}</span>
                        </router-link>
                    </div>
                    <hr>
                    
                </div>
            </div>
            <div class="col-md-2 d-none d-lg-block">
               <div class="col-lg-12">
                    <div class="card mb-3">
                        <img src="@/assets/images/carousel/2.jpg" class="card-img-top">
                        <div class="card-body">
                            <b class="text-danger">Future Start Here</b><hr>
                            <p class="card-text">Aenean massa. Natoque penatibus magnis dis parturient montes. Vivamus elementum semper nisi.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="card mb-3">
                        <img src="@/assets/images/carousel/3.jpg" class="card-img-top">
                        <div class="card-body">
                            <b class="text-danger">Sustainability</b><hr>
                            <p class="card-text">Integer tincidunt. Cras dapibus. Vivamus elementum, consectetuer adipiscing elit, dolor sit amet</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavComp from '@/components/NavComp.vue'

export default {
    components: {
        NavComp
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

    .list-num {
        height:  30px;
        padding: 3px 8px;
        margin-top: 8px;
    }

    .add-to-do-btn {
        position: absolute;
        width: auto;
        right: 5px;
        bottom: 30px;
    }

    .list-group {
        small {
            position: absolute;
            top: 10px;
            right: 10px;
            color: #999;
        }

        .badge {
            position: absolute;
            bottom: 8px;
            right: 10px;
        }
    }
}
</style>
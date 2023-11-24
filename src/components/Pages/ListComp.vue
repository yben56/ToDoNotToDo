<template>
    <div v-if="Auth()" class="List container">
        <div class="row">
            <div class="col-md-2">
                <NavComp/>
            </div>

            <div class="col-md-8">
                <div class="row position-relative">
                    <h3 class="w-auto pt-2">List</h3>
                    <span class="list-num border border-info rounded d-block w-auto">5</span>
                    <hr class="mt-3">
                </div>
                <div class="list-group list-group-flush">
                    <a v-for="item, index in ListData" :key="item.id" class="list-group-item list-group-item-action p-3">
                        <i class="fa-solid fa-ellipsis-vertical"></i> 
                        {{ item.list }}
                        <button @click="Close(index)" class="btn-close border-0 float-end"></button>
                    </a>
                    <input type="text" class="form-control form-control-lg mt-3" v-model="AddListItem" @keyup.enter="Add()" :placeholder="$t('AddNewList')" required>
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

    <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
        <div id="liveToast" class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header">
                <strong class="me-auto">Ajax Post & Delete</strong>
                <small class="text-danger">{{ $t('ListCompInfoTitle') }}</small>
                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div class="toast-body">{{ $t('ListCompInfoInfo') }}</div>
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
            ListData: [],
            AddListItem: ''
        }
    },
    mounted() {
        this.List()
    },
    methods: {
        Add() {
            //axios post, return id for display
            let list_id = 1

            this.ListData.push({
                id: list_id,
                todoid: 1,
                list: this.AddListItem
            })

            this.AddListItem = ''
        },
        Close(item_num) {
            this.ListData.splice(item_num, 1)
        },
        List() {
            let ToDoId = this.$route.params.id

			this.$axios.get('/database/List.json', {
				todoid: ToDoId,
			}).then(response => {
				this.ListData = response.data
                console.log(response.data)
			}).catch(error => {
				console.error(error)
			})
		}
    }
}
</script>

<style scoped lang="scss">
.List {
    margin-top: 30px;
    min-height: 600px;

    .btn-close:hover {
        box-shadow: none;
    }

    .form-control {
        border-radius: 0;
        border-top: 0;
        border-left: 0;
        border-right: 0;
        font-size: 14px;
    }

    .list-num {
        height:  30px;
        padding: 3px 8px;
        margin-top: 8px;
    }

}
</style>
<template>
<div class="ToDoList container">
    <div class="row justify-content-center mb-3">
        <div class="col-md-12">
            <a href="#"><button type="button" class="btn btn-sm btn-link mt-2">ToDo /</button></a>
            <button type="button" class="btn btn-sm btn-primary float-end">
                <i class="fa-solid fa-plus"></i>
                {{ $t('AddList') }}
            </button>
        </div>
    </div>
    <hr><br>
    <ToDoComp/>
</div>
</template>

<script>
import ToDoComp from '../components/ToDoComp.vue'

export default {	
	components: { ToDoComp },
}
</script>

<style scoped lang="scss">
.ToDoList {
    margin-top: 30px;
    min-height: 600px;

    .btn-link {
        box-shadow: none;    
    }
}
</style>
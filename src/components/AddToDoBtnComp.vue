<template>
  <div class="col-md-4 offset-md-4">
    <div class="d-grid gap-2">
      <component :is="`modal-comp`" template="AddToDoComp" :title="$t('AddToDo')">
        <template v-slot:toggle-btn>
            <button class="btn btn-primary p-3" data-bs-toggle="modal" data-bs-target="#AddToDoComp" >
                <i class="fa-solid fa-list"></i>
                {{ $t('AddToDo') }}
                <i class="fa-solid fa-plus"></i>
            </button> 
        </template>
      </component>
    </div>
  </div>
</template>

<script>
export default {

}
</script>
>
<style scoped lang="scss">

</style>
<template>
	<div class="btn-group">
		<button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
			<i class="fa-solid fa-bars"></i> 
			{{ $t('Menu') }}
		</button>
		<ul class="dropdown-menu">
			<li><router-link class="dropdown-item" to="/">{{ $t('Index') }}</router-link></li>
			<li><router-link class="dropdown-item" to="/ToDo">{{ $t('ToDoList') }}</router-link></li>
			<li><router-link class="dropdown-item" to="/Contact">{{ $t('Contact') }}</router-link></li>
			<li><hr class="dropdown-divider"></li>
			<li><a class="dropdown-item" href="#"><LogoutComp /></a></li>
		</ul>
	</div>
</template>
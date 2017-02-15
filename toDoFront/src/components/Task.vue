<template>
	<div>
		<div class="btn btn-primary">{{ task }}</div>
	</div>
</template>

<script>
	export default {
		name: 'Task',

		props: ['task'],

		data () {
			return {
			}
		}
	}
</script>

<style scope>
	.btn {
		margin-bottom: 5px;
		min-width: 100%;
		max-width: 100%;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>
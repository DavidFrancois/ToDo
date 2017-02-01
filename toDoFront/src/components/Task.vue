<template>
	<div class="external-event bg-red ui-draggable ui-draggable-handle" style="position: relative;">{{ task }}</div>
</template>

<script>
	export default {
		name: 'Task',

		props: ['task'],

		data () {
			return {
				text: 'toto'
			}
		}
	}
</script>
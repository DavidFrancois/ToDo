<template>
	<div class="row">
		<div class="panel panel-primary">
			<div class="panel-heading">
				<h2>Drag Tasks here</h2>
			</div>
			<div class="panel-body">
			<div class="drag">
				<draggable :list="tasks" class="dragArea" :options="{group:'people'}">
					<div v-for="task in tasks"><task :task="task"></task></div>
				</draggable>
			</div>
			</div>
		</div>
	</div>
</template>


<script>
	import draggable from 'vuedraggable'
	import Task from './Task.vue'

  export default {
		components: {
			'draggable': draggable,
			'task': Task
		},

		name: 'List',
		data() {
			return {
				task: '',
				tasks: ['init']
			}
		}
	}
</script>
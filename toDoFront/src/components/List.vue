<template>
	<div>
		<div class="box box-primary">
			<div class="box box-body">
				<div class="input-group">
					<input id="addTask" class="form-control" v-model="task" type="text">
					<div class="input-group-btn">
						<button id="add-new-event" @click="add" class="btn btn-primary btn-flat" type="button">Add</button>
					</div>
				</div>
			</div>
		</div>
		<div v-for="task in list">
			<task :task="task"></task>
		</div>
	</div>
</template>

<script>
	import Task from './Task.vue';

	export default {
		components: {
			'task': Task
		},

		name: 'List',

		data() {
			return {
				list: [],
				task: ''
			}
		},

		props: ['text'],
		
		methods: {
			add: function(event) {
				this.list.push(this.task)
			}
		}
	}
</script>
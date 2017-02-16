<template>
	<div class="row">
		<div class="panel panel-primary">
			<div class="panel-heading">
				<h2>Drag Tasks here</h2>
			</div>
			<div class="panel-body">
				<div class="drag">
					<draggable :list="tasks" @add="onAdd()" class="dragArea" :options="{group:'people'}">
						<div v-for="task in tasks"><task :task="task"> </task></div>
					</draggable>
				</div>
				<input type="text" v-model="name" placeholder="Get your list a name">
			</div>
			<div class="panel-footer">
				<button type="button" class="btn btn-success" @click="save()">Save List</button>
			</div>
		</div>
	</div>
</template>


<script>
	import draggable from 'vuedraggable'
	import Task from './Task.vue'
	import lodash from 'lodash'

  export default {
		components: {
			'draggable': draggable,
			'task': Task
		},

		name: 'List',
		data() {
			return {
				task: {},
				tasks: [{
					name: '',
					text: ''
				}],
				name: ''
			}
		},

		methods: {
			onAdd(event) {
				console.log(this.task, event)
			},
			save() {
				this.$http.post('list/init', {
					name: this.name,
					tasks: this.tasks
				}).then(response => {
					console.log(response);
				});
			}
		}
	}
</script>


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
				task: '',
				tasks: ['init']
			}
		},

		methods: {
			save() {
				this.$http.put('/list/addTask', { 'text': 'toto'}, response => {
					console.log(response.body)
				});
			},
			buildList(list) {
				if (list.length <= 0) return;
				_.forEach(list, function(task) {
					this.$http.post('/task', { request: {
						body: {
							text: task
						}
					}},
			 		response => {
						 console.log(response.body)
					 });
					// console.log(test);
				})
			}
		}
	}
</script>


<template>
	<div>
		<div class="panel panel-default row">
			<div class="panel-heading">
				<div class="input-group">
					<input id="addTask" class="form-control" v-model="task" type="text">
					<div class="input-group-btn">
						<button id="add-new-event" @click="add" class="btn btn-primary btn-flat" type="button"> 
							<i class="glyphicon glyphicon-plus"></i>
						</button>
					</div>
				</div>
			</div>
			<div class="panel-body drag">
				<draggable :list="tasks" class="dragArea" :options="{group:'people'}">
					<div v-for="task in tasks"> <task :task="task"></task></div>
				</draggable>
			</div>
		</div>
	</div>
</template>

<script>
	import Task from './Task.vue';
	import draggable from 'vuedraggable'

  export default {
		components: {
			'draggable': draggable,
			'task': Task
		},

		name: 'TaskGenerator',
		data() {
			return {
				task: '',
				tasks: []
			}
		},
		methods: {
			add:  function (event) {
				this.tasks.push(this.task);
			}
		}
	}
</script>
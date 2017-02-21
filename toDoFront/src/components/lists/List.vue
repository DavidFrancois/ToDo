<template>
	<div class="row">
		<div class="panel panel-primary">
			<div class="panel-heading">
				<h2><input type="text" v-model="name" placeholder="Get your list a name" style="background-color:transparent; border: 0px"></h2>
			</div>
			<div class="panel-body">
				<div class="input-group">
					<div class="input-group-btn">
						<!--<button id="add-new-event" @click="add" class="btn btn-primary btn-flat" type="button"> 
							<i class="glyphicon glyphicon-plus"></i>
						</button>-->
					</div>
				</div>
			</div>
			<div class="panel-body">
				<div class="drag">
					<draggable :list="tasks" class="dragArea" :options="{group:'people'}" style="min-height: 20px">
						<div v-for="task in tasks"><task ref="taskChild" :task="task" :value="task" @update="onChildUpdate()"> </task></div>
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
				task: {},
				tasks: [],
				name: ''
			}
		},

		methods: {
			save: function(event) {
				this.$http.post('list/init', {
					name: this.name,
					tasks: this.tasks
				}).then(response => {
					console.log("List posted");
				});
			}
		}
	}
</script>


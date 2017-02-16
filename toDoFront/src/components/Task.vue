<template>
	<div>
		<div class="btn btn-primary">{{ task.name }}</div>
	</div> 
</template>

<script>
	export default {
		name: 'task',

		props: {
			task: {
				type: Object,
				default: function() {
					return {
						name: '',
						text: ''
					}
				}
			}
		},

		data () {
			return {
			}
		},
		methods : {

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
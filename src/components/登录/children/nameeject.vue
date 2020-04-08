<template>
	<div class="eject_tc" >
		<div class="eject_main">
			<slot name="content_title"></slot>
			<slot name="content_main"></slot>
			<slot name="content_btn"></slot>
		</div>
	</div>
</template>

<script>
    export default {
       
		methods:{
            hidden(){
				this.$emit('showhidden')
			},
			
		},
        watch:{
            
		},


	}
</script>

<style scopednpm>
	
</style>
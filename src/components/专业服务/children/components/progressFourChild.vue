<template>
    <div class="all">
        <div class="top">
            <div>
                <slot name="bottomTable"></slot>
            </div>
        </div>
        <div class="bottom">
            <slot></slot>
        </div>    
    </div>
</template>
<script>
    export default {
    }
</script>

<style>
    .all{
        width: 100%;
        height: 100%;
    }
</style>
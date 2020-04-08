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
        width: 700px;
        height: 110px;
    }
    .top{
        position: relative;
    }
</style>
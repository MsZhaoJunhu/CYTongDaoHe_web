<template>
    <transition name="modal">  
        <div class="modal_bj" @click="modal_close" v-show="modal_obj.show">
            <transition name="fade">
            <div class="modal" @click.stop v-show="modal_obj.show">
                <div class="modal_top">
                    {{title}}
                    <i @click="modal_close"></i>
                </div>
                <div class="modal_content">
                    <slot name="content"></slot>
                </div>
            </div>
            </transition>
        </div>
    </transition>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    methods: {
        modal_close() {
            this.$emit("modal_close");//通知父组件执行关闭模态框函数
            //this.modal_obj.show=false//直接关闭模态框
            
            //document.body.style.overflow = "visible";//解除禁用滚动
        }
    },
    props: ['modal_obj','title']
}
</script>

<style scoped>
.modal {
    background-color: #ffffff;
    border-radius: 2px;
}
.modal_bj {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 999;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
}
.modal_top {
    width: 100%;
    height: 2.6875rem;
    display: flex;
    align-items: center;
    position: relative;
    background-color: #f6f6f6;
    border-radius: 0.125rem 0.125rem 0 0;
    padding: 0.9375rem;
    padding-right: 3.125rem;
    box-sizing: border-box;
    font-size: 1rem;
    color: #333;
}
.modal_top:before {
    content: "";
    display: inline-block;
    width: 0.25rem;
    height: 0.9375rem;
    background-color: #9e0100;
    margin-right: 0.75rem;
}
.modal_top > i {
    width: 2.75rem;
    height: 2.75rem;
    background: url(../../assets/icon/close.png) no-repeat;
    background-size:32%; 
    background-position: center;
    position: absolute;
    right: 0;
    top:0;
    cursor: pointer;
}
.modal-enter-active,.modal-leave-active {
  transition: all .25s ease;
}
.modal-enter, .modal-leave-to {
  opacity: 0;
}
.fade-enter-active,.fade-leave-active {
  transition: all .25s ease;
}
.fade-enter, .fade-leave-to {
  transform: translateY(-10rem);
  opacity: 0;
}
</style>
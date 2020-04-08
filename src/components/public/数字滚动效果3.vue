<template>
  <div class="number-box">
    <p class="box-item"
       v-for="(item,index) in computeNumber"
       :key="index">
      <span ref="numberDom">0123456789</span>
    </p>
  </div>
</template>
<script>
export default {
  props: {
    number: {
      type: Number,
      default: 0
    },
    maxlen: {
      type: Number
    },
    n: {
      type: Number
    }
  },
  data () {
    return {
      computeNumber: [],
      timeTicket: null,
    }
  },
  methods: {
    // 
    prefixZero (num, n) {
      return (Array(n).join(0) + num * this.n).slice(-n).split('');
    },
    // 
    getRandomNumber (min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    },
    setNumberTransform () {
      let numberItems = this.$refs.numberDom;
      for (let index = 0; index < numberItems.length; index++) {
        let elem = numberItems[index];
        elem.style.transform = `translate(-50%,-${Number(this.computeNumber[index]) * 10}%)`;
      }
    },
    // 
    increaseNumber () {
      this.refrech();
      this.timeTicket = setTimeout(this.increaseNumber, 5000);
    },
    // 
    refrech () {
      this.computeNumber = this.prefixZero(this.number, this.maxlen);
      this.$nextTick(() => {
        this.setNumberTransform();
      })
    }
  },
  mounted () {
    this.increaseNumber();
  },
  destroyed () {
    window.clearTimeout(this.timeTicket);
    this.timeTicket = null;
  },
  watch: {
    number () {
      this.refrech();
    }
  }
}
</script>
<style scoped>
.number-box {
  width: 27%;
  display: flex;
  justify-content: center;
  margin: 0;
}
.box-item {
  flex: 1;
  height: 60px;
  line-height: 46px;
  margin: 0 6px 5px 0;
  color: #fff;
  text-align: center;
  display: inline-block;
  font-size: 46px;
  position: relative;
  writing-mode: vertical-lr;
  text-orientation: upright;
  overflow: hidden;
}
.box-item:last-child {
  margin: 0px;
}
.box-item > span {
  color: #fff;
  font-size: 46px;
  font-weight: bolder;
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 2s;
  letter-spacing: 10px;
}
</style>
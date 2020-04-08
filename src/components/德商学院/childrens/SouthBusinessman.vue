<<template>
    <div class="dsgy">
    <!-- 下面模块 总的大小 -->
    <div class="ljj_gyActiveBj">
      <!--中间板块-->
      <div class="ljj_gyActive">
        <div class="ljj_title">
          <ul>
            <li :class="selected==0?'selected':''" @click="changed(0)">国内外留学</li>
            <li :class="selected==1?'selected':''" @click="changed(1)">私董会</li>
            <li :class="selected==2?'selected':''" @click="changed(2)">产业对接会</li>
            <li :class="selected==3?'selected':''" @click="changed(3)">项目路演</li>
          </ul>
          <div style="position: relative;" class="inputbox">
            <input type="text" placeholder="请输入关键词搜索">
            <img src="@/assets/imgs/search.png" alt>
          </div>
        </div>
        <busin_public_ :text=title :select=selected></busin_public_>
      </div>
    </div>
</div>
</template>
<<script>
import busin_public_ from '../../public/BusinPublic.vue'
export default {
  data() {
    return {
      title:["游学热搜","私董会热搜","产业热搜","项目热搜"],
      selected:0
    }
  },
 components: {
      busin_public_
  },
  methods:{
    changed(index){
        this.selected=index
    }
  }
}
</script>
<style lang="less" scoped>
button {
  outline: none; //除去button边框
  border: 0;
}
.dsgy {
  .ljj_gyActiveBj {
    width: 100%;
    background: #f6f6f6;
    .ljj_gyActive {
      margin: 0 auto;
      width: 73%;
      border: solid #f6f6f6 1px;
      .ljj_title {
        width: 100%;
        display: flex;
        align-items: center;
        padding: 1rem 0;
        justify-content: space-between;
        box-sizing: border-box;
        ul {
          display: flex;
          // 第一个元素不变
          li {
            font-size: 24px;
            color: #bbbbbb;
            + li {
              margin-left: 24px;
              color: #bbbbbb;
            }
          }
          li:hover {
            color: #000;
            cursor: pointer;
          }
        }
        .inputbox{
          display: flex;
          align-items: center;
        }
        input {
          width: 14rem;
          height: 1.5rem;
          background-color: #ffffff;
          border-radius: 0.75rem;
          border: 0; // 去除未选中状态边框
          outline: none; // 去除选中状态边框
          font-size: 20px;
          position: relative;
          text-indent: 1rem;
        }
        img {
          position: absolute;
          right: 10px;
          cursor: pointer;
        }
      }
      // 服务核心内容ZONG
    }
  }
}
.selected {
  color: #191919 !important;
}
</style>

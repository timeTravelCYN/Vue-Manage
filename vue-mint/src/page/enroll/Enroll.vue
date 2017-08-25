<template>
  <div class="enroll">
    <div class="div_item">
      <div class="psTitle">宣传统计</div>
      <div class="chooseDate">
        <div v-for="item in items" class='dateDiv' @click='dateClick(item.index)'>
          <div :class="{'active': curIndex === item.index }">{{item.text}}</div>
        </div>
      </div>
      <transition>
        <div class="moreDateDiv" v-show="showMoreDate">
          <div class="dateMore" v-for="item in itemsMore" @click='dateMoreClick(item.index)'>
            <p :class="{'active': dateIndex === item.index}">{{item.text}}</p>
          </div>
        </div>
      </transition>
      <div class="showSta">
        <div class="lineone line"></div>
        <div class="linetwo line"></div>
        <div class="linethree line"></div>
        <div class="numSta">
          <div class="allsee">总浏览次数</div>
          <div class="allseenum">{{dateWebSiteCount}}次</div>
          <div class="allask">总浏览人数</div>
          <div class="allasknum">{{datePersonCount}}人</div>
          <div class="allin">总报名人数</div>
          <div class="allinnum">{{datePubChildCount}}人</div>
        </div>
      </div>
    </div>
    <div class="div_item">
      <div class="psTitle">我的官网</div>
      <div class="macTop">
        <div class="mdImg">
          <img :src="imgUrl" alt="">
        </div>
        <div class="mdcName">
          <p>{{schoolName}}</p>
          <p>{{slogan}}</p>
        </div>
      </div>
      <ul class="mdButton">
        <li>
          <img src="./btn1.png" alt="">
          <span>{{webSite}}</span>
        </li>
        <li>
          <img src="./btn2.png" alt="">
          <span>{{pubChild}}</span>
        </li>
        <li>
          <img src="./btn3.png" alt="">
        </li>
        <li @click='goToEdit'>
          <img src="./editThis.png" alt="">
        </li>
      </ul>
    </div>
    <div class="div_item">
      <div class="psTitle">热门模板 多彩风格</div>
      <div class="enrollTem">
        <div v-for="tem in template">
          <img v-lazy="tem.imgUrl" alt="">
          <div class="modelName">{{tem.name}}</div>
          <div class="useThis" :class="{'active': temIndex === tem.id }" >使用</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { dateData } from 'api/enrollApi'
import { urlParam } from 'assets/js/util'
export default {
  name: 'enroll',
  created() {
    this._getDateData()
  },
  data() {
    return {
      items: [
        {
          text: '今天',
          index: 1
        },
        {
          text: '昨天',
          index: 2
        },
        {
          text: '更多',
          index: 999
        }
      ],
      template: [],
      itemsMore: [
        {
          text: '最近30天',
          index: 3
        },
        {
          text: '最近三个月',
          index: 4
        },
        {
          text: '全部',
          index: 5
        }
      ],
      temIndex: 1,
      curIndex: 1,
      dateIndex: 3,
      showMoreDate: false,
      dateWebSiteCount: 0,
      datePersonCount: 0,
      datePubChildCount: 0,
      schoolName: null,
      slogan: '',
      imgUrl: 'https://bbtree-filesystem.oss-cn-hangzhou.aliyuncs.com/1503640725103.jpg',
      webSite: 0,
      pubChild: 0
    }
  },
  methods: {
    dateClick(idx) {
      this.curIndex = idx
      if (idx === 999) {
        this.showMoreDate = true
        this._getDateData(true)
      } else {
        this.showMoreDate = false
        this._getDateData()
      }
    },
    dateMoreClick(idx) {
      this.dateIndex = idx
      this._getDateData(true)
    },
    _getDateData(flag) {
      let index = this.curIndex
      if (flag) index = this.dateIndex
      const obj2 = {
        days: index
      }
      const obj = {
        userId: urlParam.userId,
        schoolId: urlParam.schoolId,
        open: 'statistical',
        statistical: JSON.stringify(obj2)
      }
      dateData(obj, (res) => {
        let result = JSON.parse(res.data);
        console.log(result);
        this.dateWebSiteCount = result.websiteCount
        this.datePersonCount = result.personCount
        this.datePubChildCount = result.pubChildCount
        if (this.schoolName === null) {
          this.schoolName = result.schoolName
          this.slogan = result.slogan
          this.webSite = result.website
          this.pubChild = result.pubChild
          this.template = result.template.templateList
          this.temIndex = result.template.templateId
          if (result.logUrl.length !== 0) {
            this.imgUrl = result.logUrl
          }
        }
      })
    },
    goToEdit() {
      location.href = 'http://10.0.9.192:8888/edit.html?userId=' + urlParam.userId + '&schoolId=' + urlParam.schoolId 
    }
  },
  computed: {
  }
}
</script>

<style lang="scss" scoped>
.enroll {
  width: 100%;
  height: 100%;
  overflow: scroll;
  background-color: #f5f5f5;
  .div_item {
    &:nth-last-child(1) {
      padding-bottom: .2rem;
    }
    margin-top: .1rem;
    background-color: #ffffff;
    overflow: hidden;
    .psTitle {
      font-size: .14rem;
      line-height: .44rem;
      padding-left: .3rem;
      background: url(./play.png) no-repeat;
      background-position: .1rem .15rem;
      background-size: .1rem .15rem;
    }
    .chooseDate {
      padding-top: .1rem;
      display: flex;
      height: .4rem;
      .dateDiv {
        flex: 1;
        height: 100%;
        text-align: center;
        div {
          width: .8rem;
          height: .3rem;
          box-sizing: border-box;
          border: 1px solid #e2e2e2;
          border-radius: 4px;
          line-height: .3rem;
          margin: 0 auto;
          &.active {
            border-color: #32c296;
            color: #32c296;
          }
        }
      }
    }
    .moreDateDiv {
      display: flex;
      height: .4rem;
      background-color: #f6f9fb;
      div {
        display: flex;
        flex: 1;
        text-align: center;
        justify-content: center;
        align-items: center;
        p {
          width: .74rem;
          height: .25rem;
          line-height: .25rem;
          background-color: #eeeeee;
          color: #666666;
          border-radius: .2rem;
          &.active {
            color: #32c296;
            background-color: #ffffff;
            box-sizing: border-box;
            border: 1px solid #d2d2d2;
          }
        }
      }
    }
    .showSta {
      padding-left: 1.46rem;
      height: 1.5rem;
      background: url(./global.png) no-repeat;
      background-position: .45rem .15rem;
      background-size: 1.8rem 1.25rem;
      position: relative;
      margin-bottom: .15rem;
      overflow: hidden;
      div.line {
        margin-top: .32rem;
        width: 2rem;
        height: 1px;
        background: #90caf9;
        &.linetwo {
          margin-top: .48rem;
        }
        &.linethree {
          margin-top: .45rem;
        }
      }
    }
    .numSta {
      position: absolute;
      left: 2.26rem;
      top: .1rem;
      bottom: .05rem;
      width: 1.2rem;
      text-align: center;
      .allsee,
      .allask,
      .allin {
        font-size: .12rem;
        line-height: .23rem;
        color: #666;
      }
      .allseenum,
      .allasknum {
        font-size: .1rem;
        line-height: .2rem;
        color: #999999;
        margin-bottom: .09rem;
      }
      .allask,
      .allin {
        line-height: .19rem;
      }
      .allinnum {
        font-size: .1rem;
        line-height: .17rem;
        color: #999999;
      }
    }
    .macTop {
      height: .9rem;
      padding-left: .15rem;
      margin-bottom: .15rem;
      display: flex;
      .mdImg {
        width: 1.6rem;
        height: 0.9rem;
        float: left;
        margin-right: .15rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .mdcName {
        float: left;
        padding-top: .1rem;
        flex: 1;
        overflow: hidden;
        p {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          &:nth-child(1) {
            font-size: .14rem;
            color: #333333;
            line-height: .21rem;
          }
          &:nth-child(2) {
            font-size: .12rem;
            color: #666666;
            line-height: .37rem;
          }
        }
      }
    }
    .mdButton {
      width: 100%;
      height: .39rem;
      border: 1px solid #eeeeee;
      border-left: 0;
      border-right: 0;
      display: flex;
      margin-bottom: .15rem;
      li {
        display: flex;
        align-items: center;
        justify-content: center;
        border-right: 1px solid #eeeeee;
        border-bottom: 0;
        flex: 1;
        text-align: center;
        height: 100%;
        overflow: hidden;
        img {
          width: .24rem;
          height: .24rem;
        }
        span {
          margin-left: 5px;
          font-size: .13rem;
          height: 100%;
          line-height: .39rem;
          color: #666666;
        }
      }
    }
    .enrollTem {
      display: flex;
      div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex: 1;
        img {
          width: 1rem;
          height: 1.25rem;
          background: gold;
          margin-bottom: .1rem;
        }
        .modelName {
          font-size: 12px;
          margin-bottom: .1rem;
        }
        .useThis {
          border: 1px solid #ff7070;
          border-radius: 5px;
          width: .43rem;
          height: .19rem;
          text-align: center;
          line-height: .19rem;
          font-size: .12rem;
          color: #ff7070;
          &.active {
            background: #ccc;
            color: #fff;
            border: none;
          }
        }
      }
    }
  }
}
</style>


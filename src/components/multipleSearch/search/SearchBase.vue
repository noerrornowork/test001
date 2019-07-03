<template>
  <div class="search-base">
    <div class="top m-t-50">
      <span class="top-text co-fl">多语检索</span>
    </div>
    <div class="search-box bgc-fff p-lr-30 m-t-10">
      <div class="co-flex p-t-30">
        <p class="h-20 p-r-30 cl-1">文献类型:</p>
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="国防工业" name="type"></el-checkbox>
          <el-checkbox label="国防科研" name="type"></el-checkbox>
          <el-checkbox label="人民防空" name="type"></el-checkbox>
        </el-checkbox-group>
      </div>
      <div class="p-t-30"></div>
      <div class="search-condition w-800 bgc-cfcfcf">
        <h3 class="p-lr-10">输入检索条件:</h3>
        <div class="title p-lr-20 m-t-10 co-flex co-ac">
          <div class="w-80 co-flex co-jc">
            <button class="add-btn">+</button>
            <button class="minus-btn m-l-20">-</button>
          </div>
          <span>(</span>
          <el-select v-model="theme" placeholder="主题" class="w-90">
            <el-option label="主题" value="0"></el-option>
          </el-select>
          <el-input placeholder class="w-150"></el-input>
          <el-select v-model="wordFrequence" placeholder="词频" class="w-90">
            <el-option label="1" value="1"></el-option>
          </el-select>
          <el-select v-model="contain" placeholder="并含" class="w-90">
            <el-option label="并含" value="0"></el-option>
          </el-select>
          <el-input placeholder class="w-150"></el-input>
          <el-select v-model="word" placeholder="词频" class="w-90">
            <el-option label="1" value="1"></el-option>
          </el-select>
          <el-select v-model="accuracy" placeholder="精确" class="w-90">
            <el-option label="1" value="1"></el-option>
          </el-select>
          <span>)</span>
        </div>
        <div class="keyword p-lr-10 m-t-10 co-flex co-ac">
          <el-select placeholder="并且" style="width: 80px">
            <el-option label="并且" value="0"></el-option>
          </el-select>
          <span>(</span>
          <el-select v-model="theme" placeholder="主题" class="w-90">
            <el-option label="主题" value="0"></el-option>
          </el-select>
          <el-input placeholder class="w-150"></el-input>
          <el-select v-model="wordFrequence" placeholder="词频" class="w-90">
            <el-option label="1" value="1"></el-option>
          </el-select>
          <el-select v-model="contain" placeholder="并含" class="w-90">
            <el-option label="并含" value="0"></el-option>
          </el-select>
          <el-input placeholder class="w-150"></el-input>
          <el-select v-model="word" placeholder="词频" class="w-90">
            <el-option label="1" value="1"></el-option>
          </el-select>
          <el-select v-model="accuracy" placeholder="精确" class="w-90">
            <el-option label="1" value="1"></el-option>
          </el-select>
          <span>)</span>
        </div>
        <div class="author p-lr-20 m-t-10 co-flex co-ac">
          <div class="w-80 co-flex co-jc">
            <button class="add-btn">+</button>
            <button class="minus-btn m-l-20">-</button>
          </div>
          <span>(</span>
          <el-select placeholder="主题" class="w-90">
            <el-option label="主题" value="0"></el-option>
          </el-select>
          <el-input placeholder class="w-150"></el-input>
          <el-select placeholder="词频" class="w-90">
            <el-option label="1" value="1"></el-option>
          </el-select>
          <el-select placeholder="并含" class="w-90">
            <el-option label="并含" value="0"></el-option>
          </el-select>
          <el-input placeholder class="w-150"></el-input>
          <el-select placeholder="词频" class="w-90">
            <el-option label="1" value="1"></el-option>
          </el-select>
          <el-select placeholder="精确" class="w-90">
            <el-option label="1" value="1"></el-option>
          </el-select>
          <span>)</span>
        </div>
      </div>
      <div class="p-t-20 w-800 co-flex co-ac">
        发表时间:&nbsp;&nbsp;&nbsp;&nbsp;从&nbsp;
        <el-date-picker
          v-model="startDate"
          align="right"
          type="date"
          placeholder="选择日期"
          :picker-options="pickerOptions"
          style="width: 170px;"
        ></el-date-picker>&nbsp;到&nbsp;
        <el-date-picker
          v-model="endDate"
          align="right"
          type="date"
          placeholder="选择日期"
          :picker-options="pickerOptions"
          style="width: 170px;"
        ></el-date-picker>
        <span class="p-lr-30">更新时间:</span>
        <el-select v-model="updateTime" placeholder="不限" style="width: 170px;">
          <el-option label="3:00" value="3" style="width: 170px;"></el-option>
        </el-select>
      </div>
      <div class="co-flex p-t-30">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="中英文拓展" name="type"></el-checkbox>
          <el-checkbox label="俄语拓展" name="type"></el-checkbox>
          <el-checkbox label="法语拓展" name="type"></el-checkbox>
          <el-checkbox label="西语拓展" name="type"></el-checkbox>
          <el-checkbox label="俄语拓展" name="type"></el-checkbox>
        </el-checkbox-group>
      </div>
      <div class="p-t-30 search-btn co-flex co-jc">
        <button class="t-c w-150 h-40">检索</button>
      </div>
    </div>
  </div>
</template>
<script>
import VHeader from '@/base/VHeader'
import SecondMenu from '@/base/SecondMenu'
export default {
  name: 'search-base',
  components: {
    VHeader,
    SecondMenu
  },
  data () {
    const pickerOptions = {
      disabledDate (time) {
        return time.getTime() > Date.now()
      },
      shortcuts: [
        {
          text: '今天',
          onClick (picker) {
            picker.$emit('pick', new Date())
          }
        },
        {
          text: '昨天',
          onClick (picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24)
            picker.$emit('pick', date)
          }
        },
        {
          text: '一周前',
          onClick (picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', date)
          }
        }
      ]
    }
    return {
      form: {
        type: []
      },
      pickerOptions,
      theme: '',
      wordFrequence: '',
      contain: '',
      word: '',
      accuracy: '',
      startDate: '',
      endDate: '',
      updateTime: ''
    }
  },
  methods: {
    onSubmit () {}
  }
}
</script>
<style lang="less" scoped>
  .search-base {
    font-weight: 400;
    font-size: 13px;
    .top {
      padding: 0 20px;
      height: 50px;
      .top-text {
        line-height: 50px;
        font-size: 20px;
        color: #333333;
      }
    }
    .search-condition {
      > h3 {
      }
      .add-btn {
        width: 20px;
        height: 20px;
        line-height: 20px;
        text-align: center;
      }
      .minus-btn {
        width: 20px;
        height: 20px;
        line-height: 20px;
        text-align: center;
      }
    }
    .search-btn {
      padding: 10px 0;
      button {
        font-size: 20px;
        background-color: rgb(72, 183, 235);
        color: #fff;
        border-radius: 8px;
      }
    }
  }
</style>
<style lang="less">
</style>

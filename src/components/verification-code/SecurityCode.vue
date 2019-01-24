<template>
  <div class="security-code-wrap">
    <label for="code">
      <ul class="security-code-container">
        <li class="field-wrap" v-for="(item, index) in number" :key="index" :class=" value.length >=index ? 'show' : ' '">
          <i class="char-field">{{value[index] || placeholder}}</i>
        </li>
      </ul>
    </label>
    <input ref="input" class="input-code" @keyup="handleInput($event)" v-model="value"
           id="code" name="code" type="tel" :maxlength="number"
           autocorrect="off" autocomplete="off" autocapitalize="off" v-foucs>
  </div>
</template>

<script>
  import Vue from 'vue';
//自定义指令，进入页面input框就获取焦点
  Vue.directive('foucs',{
    inserted:function(el){
      el.focus();
    }

  })

    export default {
        name: "SecurityCode",
      props: {
        number: {
          type: Number,
          default: 4
        },
        placeholder: {
          type: String,
          default: '-'
        }
      },
      // variables
      data() {
        return {
          value: ''
        }
      },
      methods: {
        hideKeyboard() {
          // 输入完成隐藏键盘
          document.activeElement.blur() // ios隐藏键盘
          this.$refs.input.blur() // android隐藏键盘
        },
        handleSubmit() {
          this.$emit('input', this.value)
        },
        handleInput(e) {
          this.$refs.input.value = this.value
          if (this.value.length >= this.number) {
            this.hideKeyboard()
          }
          this.handleSubmit()
        }
      }


    }
</script>

<style lang="less" scoped>
  .security-code-wrap {
    overflow: hidden;
  }
  .security-code-container {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    .field-wrap {
      list-style: none;
      display: block;
      width: 40px;
      height: 40px;
      line-height: 40px;
      font-size: 16px;
      background-color: #fff;
      margin: 2px;
      color: #000;
      border-bottom: 1px solid #ddd;
      .char-field {
        font-style: normal;
        display: flex;
        justify-content: center;
      }
    }
    .show{
      border-bottom: 1px solid #072282;

    }
  }
  .input-code {
    position: absolute;
    left: -9999px;
    top: -99999px;
    width: 0;
    height: 0;
    opacity: 0;
    overflow: visible;
    z-index: -1;
  }

</style>

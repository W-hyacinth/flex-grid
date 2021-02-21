<template>
  <div class="flex-tab-container">
    <div class="flex-tab-area">
      <a href="" class="tab">1111111</a>
      <a href="" class="tab">22222222222222222222</a>
      <a href="" class="tab">333333</a>
      <a href="" class="tab">4444444444</a>
      <a href="" class="tab">5555555555555</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FlexLayoutScrollTab'
}
</script>

<style lang="scss" scoped>
.flex-tab-container {
  overflow: hidden;
  display: flex;
  justify-content: center;
  .flex-tab-area {
    overflow-y: hidden;
    overflow-x: auto;
    display: flex;
    max-width: 100%;
    flex-wrap: nowrap;
    justify-content: flex-start;
    .tab {
      /* IE 11 버그 대응 (해당 스타일이 들어가지 않을 경우 탭의 형태가 유지되지 않음) */
      min-width: 1px;
      flex: 0 0 auto;
      /* 공통 스타일 */
      height: 40px;
      padding: 0 10px;
      font-size: 15px;
      color: #000;
      line-height: 38px;
      text-align: center;
      border: 1px solid #000;
      border-radius: 20px;
      background-color: #fff;
      cursor: pointer;
      &:nth-child(n+2) {
        margin-left: 10px;
      }
    }
  }
}
</style>

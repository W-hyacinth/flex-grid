<template>
  <div class="flex-tab-container">
    <div class="flex-tab-wrap type_01" role="tablist" aria-label="test-tab">
      <EllipsisTab :tabName="'TESTTESTTESTTESTTESTTESTTESTTESTTTESTTESTTEST'" />
      <EllipsisTab :tabName="'TESTTESTTESTTESTTESTTESTTESTTESTTTESTTESTTEST'" />
      <EllipsisTab :tabName="'TESTTESTTESTTESTTESTTESTTESTTESTTTESTTESTTEST'" />
      <EllipsisTab :tabName="'TESTTESTTESTTESTTESTTESTTESTTESTTTESTTESTTEST'" />
      <EllipsisTab :tabName="'TESTTESTTESTTESTTESTTESTTESTTESTTTESTTESTTEST'" />
    </div>
    <div class="flex-tab-wrap type_02">
      <EllipsisTab :tabName="'TESTTESTTESTTESTTESTTESTTESTTESTTTESTTESTTEST'" />
      <EllipsisTab :tabName="'TESTTESTTESTTESTTESTTESTTESTTESTTTESTTESTTEST'" />
      <EllipsisTab :tabName="'TESTTESTTESTTESTTESTTESTTESTTESTTTESTTESTTEST'" />
      <EllipsisTab :tabName="'TESTTESTTESTTESTTESTTESTTESTTESTTTESTTESTTEST'" />
      <EllipsisTab :tabName="'TESTTESTTESTTESTTESTTESTTESTTESTTTESTTESTTEST'" />
    </div>
    <div class="flex-tab-wrap type_03">
      <EllipsisTab :tabName="'1111111111111111111'" />
      <EllipsisTab :tabName="'111'" />
      <EllipsisTab :tabName="'TESTTESTTESTTESTTESTTESTTESTTESTTTESTTESTTEST'" />
      <EllipsisTab :tabName="'개나리 노란 꽃그늘 아래 가지런히 놓여있는 꼬까신하나'" />
      <EllipsisTab />
    </div>
  </div>
</template>
<script>
import EllipsisTab from './items/EllipsisTab'
export default {
  name: 'FlexLayoutEllipsisTab',
  components: {
    EllipsisTab
  }
}
</script>
<style lang="scss" scoped>
  .flex-tab-wrap {
    display: flex;
    &:nth-of-type(n+2) {
      margin-top: 20px;
    }
    &.type_01 {
      overflow-x: auto;
      overflow-y: hidden;
      background: yellowgreen;
      flex-wrap: nowrap;
      flex: 1 0 auto;
      /deep/ .item-tab {
        width: 28%;
        padding: 10px 5px;
        margin: 1px;
        border: 1px solid #000;
        span {
          overflow: hidden;
          display: block;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
    &.type_02 {
      display: flex;
      width: 100%;
      background: aqua;
      flex: 1 0 auto;
      flex-wrap: wrap;
      justify-content: center;
      /deep/ .item-tab {
        width: calc((100% - 6px) / 3);
        padding: 10px 5px;
        margin: 1px;
        border: 1px solid #000;
        flex: 1 0 auto;
        span {
          width: 100%;
          flex: 1 0 auto;
          overflow: hidden;
          display: block;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
    &.type_03 {
      background: orange;
      flex-wrap: wrap;
      flex: 1 0 auto;
      //align-content: stretch;
      /deep/ .item-tab {
        width: calc((100% - 8px) / 4);
        padding: 10px 5px;
        margin: 1px;
        border: 1px solid #000;
        flex: 0 0 auto;
        span {
          width: 100%;
          word-break: keep-all;
          word-wrap: break-word;
          flex: 1 0 auto;
        }
      }
    }
  }
</style>

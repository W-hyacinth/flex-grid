<template>
  <div class="flex-wrap">
    <ol class="rank">
      <EllipsisTxtListType1 />
      <EllipsisTxtListType1 />
      <EllipsisTxtListType1 />
      <EllipsisTxtListType1 />
      <EllipsisTxtListType1 />
      <EllipsisTxtListType1 />
      <EllipsisTxtListType1 />
      <EllipsisTxtListType1 />
      <EllipsisTxtListType1 />
      <EllipsisTxtListType1 />
    </ol>
  </div>
</template>

<script>
import EllipsisTxtListType1 from './items/EllipsisTxtListType1'
export default {
  name: 'FlexLayoutOrderList1',
  components: {
    EllipsisTxtListType1
  }
}
</script>

<style lang="scss" scoped>
.flex-wrap {
  display: flex;
  .rank {
    display: flex;
    width: 100%;
    flex-direction: column;
    counter-reset: section;
    /deep/ li {
      display: flex;
      padding: 0.5% 0;
      a {
        overflow: hidden;
        width: calc(100% - 30px);
        flex: 1 0 auto;
        font-weight: 700;
        color: #202429;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      &:before {
        width: 30px;
        flex: 0 0 auto; /* 번호 영역에 기본 width 값이 존재하는 경우 추가하기 */
        counter-increment: section;
        content: counter(section) '. ';
      }
    }
  }
}
@media screen and (min-width: 769px) {
  .flex-wrap {
    /* 현재 아래와 같은 방식으로 IE 10+ 에서 해당 flex-flow에 속성 2가지를 동시에 줄 경우 오류가 발생함 */
    //.rank {
    //  display: flex;
    //  height: 150px;
    //  flex-flow: column wrap;
    //  /deep/ li {
    //    width: 48.5%;
    //    padding: 0;
    //    margin: 0 0.5% 0 1%;
    //    align-items: center;
    //    flex: 0 0 20%;
    //  }
    //}
    .rank {
      display: flex;
      flex-flow: wrap;
      height: 150px; /* 다음과 같이 특정 수량 단위로 열이 바뀌는 레이아웃일 경우 height 값이 반드시 필요함 */
      /* width부터 -ms-writing-mode는 IE 10, IE 11에서 대응하기 위한 속성 */
      width: 100%;
      flex: 1 0 auto;
      writing-mode: vertical-lr;
      -webkit-writing-mode: vertical-lr;
      -ms-writing-mode: tb-lr;
      /deep/ li {
        width: 48.5%;
        margin: 0 0.5% 0 1%;
        align-items: center;
        flex: 0 0 auto;
        /* height부터 -ms-writing-mode는 IE 10, IE 11에서 대응하기 위한 속성 (height가 없을 경우 IE에서 특정 해상도 영역에서 레이아웃이 다르게 나타남) */
        height: 20%;
        -webkit-writing-mode: horizontal-tb;
        writing-mode: horizontal-tb;
        -ms-writing-mode: lr-tb;
      }
    }
  }
}
</style>

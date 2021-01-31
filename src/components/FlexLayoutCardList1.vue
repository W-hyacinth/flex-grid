<template>
  <div class="flex-list">
    <EllipsisCardType1 />
    <EllipsisCardType1 />
    <EllipsisCardType1 />
    <EllipsisCardType1 />
    <EllipsisCardType1 />
    <EllipsisCardType1 />
    <EllipsisCardType1 />
  </div>
</template>
<script>
import EllipsisCardType1 from './items/EllipsisCardType1'
export default {
  name: 'FlexLayoutBasicCardList1',
  data () {
    return {
    }
  },
  components: {
    EllipsisCardType1
  }
}
</script>
<style lang="scss" scoped>
.flex-list {
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  /deep/ .card-wrap {
    width: 49%;
    //width: calc((100% - (0.5% * 2) * 2) / 2); /* (100% - (여백값 * 2) * 1열에 들어갈 수량) / 1열에 들어갈 수량 */
    margin: 0.5%;
    flex: 0 0 auto; /* flex-basis가 auto, width 값이 존재하는 경우 width 값을 가져옴 */
  }
}
@media screen and (min-width: 568px) and (max-width: 768px) {
  .flex-list {
    /deep/ .card-wrap {
      width: 32.3333333%;
      //width: calc((100% - (0.5% * 2) * 3) / 3);
    }
  }
}
@media screen and (min-width: 769px) {
  .flex-list {
    max-width: 960px;
    /deep/ .card-wrap {
      width: 24%;
      //width: calc((100% - (0.5% * 2) * 4) / 4);
    }
  }
}
</style>

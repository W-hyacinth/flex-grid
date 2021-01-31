<template>
  <div class="flex-list">
    <EllipsisCardType2 />
    <EllipsisCardType2 />
    <EllipsisCardType2 />
    <EllipsisCardType2 />
    <EllipsisCardType2 />
    <EllipsisCardType2 />
    <EllipsisCardType2 />
  </div>
</template>
<script>
import EllipsisCardType2 from './items/EllipsisCardType2'
export default {
  name: 'FlexLayoutBasicCardList2',
  data () {
    return {
    }
  },
  components: {
    EllipsisCardType2
  }
}
</script>
<style lang="scss" scoped>
.flex-list {
  display: flex;
  flex-wrap: wrap;
  //margin: -0.5% auto;
  /deep/ .card-wrap {
    width: 100%;
    padding: 0.5%;
    box-sizing: border-box;
  }
}
@media screen and (min-width: 769px) {
  .flex-list {
    max-width: 960px;
    margin: 0 auto;
    /deep/ .card-wrap {
      width: 49%;
      //width: calc((100% - (0.5% * 2) * 2) / 2);
      flex: 0 0 auto; /* flex-basis가 auto, width 값이 존재하는 경우 width 값을 가져옴 */
    }
  }
}
</style>

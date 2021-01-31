<template>
  <div class="card-wrap">
    <a href="">
      <span class="thumb"
            style="background: url('http://thumbnail.10x10.co.kr/webimage/image/basic600/240/B002400326.jpg?cmd=thumb&w=500&h=500&fit=true&ws=false') center center no-repeat;background-size: cover;"></span>
      <div class="txt-wrap">
        <div class="product-info">
          <span class="product-seller">Donec blandit dictum fermentum. Maecenas malesuada elit tincidunt dui sagittis condimentum. Vestibulum molestie, ante in aliquet tristique, lorem nunc blandit tortor</span>
          <strong class="product-name">Fusce suscipit diam egestas dui pharetra accumsan. Praesent et sodales nisi, eget gravida magna. Sed ac pulvinar erat. Maecenas quis orci non libero interdum interdum.</strong>
        </div>
        <div class="price-info">
          <strong class="sale-percent">90%</strong>
          <em class="current">100,000,000원</em>
          <del class="origin">1,000,000,000원</del>
        </div>
      </div>
    </a>
  </div>
</template>
<script>
export default {
  name: 'EllipsisCardType2'
}
</script>
<style lang="scss" scoped>
@mixin ellipsis() {
  overflow: hidden;
  display: block;
  max-width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.card-wrap {
  a {
    display: flex;
    .thumb {
      display: block; /* inline 속성일 경우 IE 에서 레이아웃 이슈 발생 */
      width: 100px;
      flex: 0 0 auto;
      padding-bottom: 100px;
      box-sizing: border-box;
      //max-height: 100px; /* 썸네일 사이즈를 고정으로 하려 한다면 max-height 추가하기 */
    }
    .txt-wrap {
      display: flex;
      flex: 0 1 auto;
      width: calc(100% - 105px);
      margin-left: 5px;
      flex-direction: column;
      //justify-content: center; /* 텍스트와 이미지를 vertical-align: middle로 정렬하고 싶을 경우 */
      justify-content: space-between; /* 상품 정보와 가격 정보의 정렬을 각각 최상단과 최하단에 위치하게 하고 싶을 경우 (단, 이 경우 상단 flex 영역에 align-items가 stretch 속성이 있어 작동함) */
      .product-info {
        .product-seller {
          @include ellipsis();
          font-size: 12px;
          color: #808893;
          line-height: 16px;
        }
        .product-name {
          @include ellipsis();
          font-size: 13px;
          color: #202429;
          line-height: 18px;
        }
      }
      .price-info {
        overflow: hidden;
        @include ellipsis();
        margin-top: 5px;
        .sale-percent,
        .current {
          margin-right: 4px;
          font-style: normal;
          font-size: 15px;
          color: #202429;
          line-height: 19px;
        }
        .sale-percent {
          font-weight: 700;
        }
        .origin {
          font-size: 13px;
          color: #808893;
          line-height: 19px;
        }
      }
    }
  }
}
</style>

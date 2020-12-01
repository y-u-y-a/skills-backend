<template>
  <table>
    <tr>
      <th class="w-15">ふりがな</th>
      <td class="w-15 position-center furigana">ほげほげ</td>
      <th class="w-5">性別</th>
      <th class="w-5">年齢</th>
      <th>最終学歴</th>
      <th>最寄駅</th>
      <th>経験年数</th>
    </tr>
    <tr>
      <th>氏名</th>
      <td class="position-center">保下保下</td>
      <td class="position-center">男</td>
      <td class="position-center">25</td>
      <td class="position-center">大学卒</td>
      <td class="position-center">丸ノ内線/東京駅</td>
      <td class="position-center">5年3ヶ月</td>
    </tr>
    <tr>
      <th>PR</th>
      <td colspan="6" class="pr">
        {{ `${'テキスト'.repeat(60)}` }}
      </td>
    </tr>
  </table>
</template>

<style lang="scss" scoped>
table, th, td {
  border-collapse: collapse; // 隣り合うセル同士を重ねる
  border: 1px solid $gray;
}
table {
  width: calc(1000px - 1rem * 2); // padding分
  background: $white;
  th {
    font-size: 13px;
    background: $orange;
    line-height: 2;
  }
  td {
    padding: 0.5rem 0.2rem;
    font-size: 16px;
  }
}
th,
.position-center {
  text-align: center;
  vertical-align: middle;
}
.furigana {
  font-size: 13px;
}
.pr {
  padding: 1rem 0.4rem;
  font-size: 14px;
}
</style>

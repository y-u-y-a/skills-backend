<template>
  <table>
    <thead>
      <tr>
        <th class="w-3">No</th>
        <th class="w-11">作業期間</th>
        <th colspan="2" class="w-21">案件概要</th>
        <th class="w-25">業務詳細</th>
        <th class="w-25">スキルセット</th>
        <th colspan="7" class="w-15">作業工程</th>
      </tr>
    </thead>
    <template v-for="n in 5">
      <tbody :key="n">
        <!-- ### 1行目 ############################ -->
        <tr>
          <!-- No -->
          <td rowspan="4" class="position-center">{{ n }}</td>
          <!-- Period -->
          <td rowspan="2" class="period position-center">
            <span>2019年7月</span>
            <span>〜</span>
            <span>2019年10月</span>
          </td>
          <!-- About -->
          <th>案件名</th><td class="position-center">通知システム開発</td>
          <!-- Work -->
          <td rowspan="4" class="text-box">
            ・調査・管理<br>
            　-サーバー停止ログ取得〜通知までのフロー作成<br>
            　-現状の仕様をドキュメント化<br>
            　-通知条件の決定<br>
            ・コーディング<br>
            　-開発環境の改修・構築<br>
            　-Slack通知機能実装<br>
          </td>
          <!-- Develop -->
          <td rowspan="4" class="text-box">
            OS：Mac, Ubuntu<br>
            DB：MySQL, NoSQL<br>
            言語：Python<br>
            FW：Django, AWS, GCP, Firebase<br>
            ツール：Slack, Backlog, Github, Asana, XD, Chatwork, SpreadSheet<br>
          </td>
          <td rowspan="2" class="process">
            <span>管理</span>
          </td>
          <td rowspan="2" class="process">
            <span>要件定義</span>
          </td>
          <td rowspan="2" class="process">
            <span>基本設計</span>
          </td>
          <td rowspan="2" class="process">
            <span>詳細設計</span>
          </td>
          <td rowspan="2" class="process">
            <span>開発</span>
          </td>
          <td rowspan="2" class="process">
            <span>テスト</span>
          </td>
          <td rowspan="2" class="process">
            <span>運用・保守</span>
          </td>
        </tr>
        <!-- ### 2行目 ############################ -->
        <tr>
          <!-- About -->
          <th>種別</th><td class="position-center">システム開発</td>
        </tr>
        <!-- ### 3行目 ############################ -->
        <tr>
          <!-- Period -->
          <td rowspan="2" class="position-center">3ヶ月</td>
          <!-- About -->
          <th>人数</th><td class="position-center">5名</td>
          <td rowspan="2" class="position-center">●</td>
          <td rowspan="2" class="position-center">●</td>
          <td rowspan="2" class="position-center">●</td>
          <td rowspan="2" class="position-center">●</td>
          <td rowspan="2" class="position-center">●</td>
          <td rowspan="2" class="position-center">●</td>
          <td rowspan="2" class="position-center">●</td>
        </tr>
        <!-- ### 4行目 ############################ -->
        <tr>
          <!-- About -->
          <th>ポジション</th><td class="position-center">PG/SE</td>
        </tr>
      </tbody>
    </template>
  </table>
</template>

<style lang="scss" scoped>
table, th, td {
  border-collapse: collapse; // 隣り合うセル同士を重ねる
  border: 1px solid $gray;
}
table {
  width: calc(1000px - 1rem * 2); // padding分
  font-size: 13px;
  background: $white;
  th {
    background: $orange;
    line-height: 2;
  }
  td {
    padding: 0.5rem 0.2rem;
  }
  p {
    font-size: 14px;
  }
}
th,
.position-center {
  text-align: center;
  vertical-align: middle;
}
.period {
  line-height:1.5;
  span {
    display: block;
  }
  span:nth-child(1) {
    text-align:left;
  }
  span:nth-child(3) {
    text-align:right;
  }
}
.process {
  vertical-align: top;
  text-align: center;
  padding: 0.5rem 0.3rem;
  // 文字の縦並び
  span {
    -webkit-writing-mode: vertical-lr;
  }
}
.text-box {
  line-height: 1.3;
}
</style>

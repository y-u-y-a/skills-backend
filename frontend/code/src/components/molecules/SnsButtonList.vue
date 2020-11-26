<template>
  <div>
    <div class="sns-button facebook">
      <Icon :icon="['fab', 'facebook-f']" class="sns-icon" />
      <span class="sns-text">Facebookでログイン</span>
    </div>
    <!-- <div class="sns-button line">
      <Icon :icon="['fab', 'line']" class="sns-icon" />
      <span class="sns-text">LINEでログイン</span>
    </div> -->
    <div class="sns-button twitter">
      <Icon :icon="['fab', 'twitter']" class="sns-icon" />
      <span class="sns-text">Twitterでログイン</span>
    </div>
    <div class="sns-button github">
      <Icon :icon="['fab', 'github']" class="sns-icon" />
      <span class="sns-text">GitHubでログイン</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sns-button {
  @include row(start, center);
  margin-bottom: 0.5rem;
  color: $white;
  font-size: 14px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  .sns-icon {
    display: block;
    width: 42px;
    padding: 0.5rem 0;
    border-right: 1px solid $white;
    font-size: 20px;
  }
  .sns-text {
    display: block;
    padding-left: 1rem;
  }
}
.facebook {
  background: #3B5998;
}
.line {
  background: #1dcd00;
}
.twitter {
  background: #55acee;
}
.github {
  background: #24292e;
}
</style>

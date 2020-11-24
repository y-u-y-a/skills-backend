<template>
  <ProjectForm
    form_title="期間を入力"
    pre_link="/project/About"
    next_link="/project/Work">
    <template v-slot:content>
      <div class="row justify-content-between">
        <InputGroup
          label="開始日"
          placeholder="年/月/日"
          class="w-45" />
        <InputGroup
          label="終了日"
          placeholder="年/月/日"
          class="w-45" />
      </div>
    </template>
  </ProjectForm>
</template>

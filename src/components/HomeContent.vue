<script setup lang="ts">
import ContentRow from "./ContentRow.vue";
import DocumentationIcon from "./icons/IconDocumentation.vue";
import ToolingIcon from "./icons/IconTooling.vue";
import EcosystemIcon from "./icons/IconEcosystem.vue";
import CommunityIcon from "./icons/IconCommunity.vue";
import SupportIcon from "./icons/IconSupport.vue";
</script>

<template>
  <ContentRow>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Mint</template>
  </ContentRow>

  <ContentRow>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Connect</template>

  </ContentRow>

  <ContentRow>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Enter Shipping</template>
  </ContentRow>

  <ContentRow>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Wait</template>
    <!--
    Got stuck? Ask your question on
    <a href="https://chat.vuejs.org" target="_blank" rel="noopener">Vue Land</a>, our official Discord server, or
    <a href="https://stackoverflow.com/questions/tagged/vue.js" target="_blank" rel="noopener">StackOverflow</a>. You
    should also subscribe to
    <a href="https://news.vuejs.org" target="_blank" rel="noopener">our mailing list</a>
    and follow the official
    <a href="https://twitter.com/vuejs" target="_blank" rel="noopener">@vuejs</a>
    twitter account for latest news in the Vue world. -->
  </ContentRow>

  <ContentRow>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>GET JERSEY</template>
    <!--
    As an independent project, Vue relies on community backing for its
    sustainability. You can help us by
    <a href="https://vuejs.org/sponsor/" target="_blank" rel="noopener">becoming a sponsor</a>. -->
  </ContentRow>
</template>

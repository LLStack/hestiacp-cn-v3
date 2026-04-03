---
layout: page
title: Features
---

<script setup>
  import PageHeader from "../.vitepress/theme/components/PageHeader.vue";
  import FeaturePageSection from "../.vitepress/theme/components/FeaturePageSection.vue";
  import FeatureList from "../.vitepress/theme/components/FeatureList.vue";
  import { users, webDomains, mail, dns, databases, serverAdmin } from "../_data/features.en";
</script>

<FeaturePage>
  <PageHeader>
    <template #title>Features</template>
  </PageHeader>
  <FeaturePageSection image="/images/undraw_two_factor_authentication_namy.svg">
    <template #title>Users</template>
    <template #lead>Share server access with other users and limit their available resources.</template>
    <template #list>
      <FeatureList :items="users"></FeatureList>
    </template>
  </FeaturePageSection>
  <FeaturePageSection image="/images/undraw_web_developer_re_h7ie.svg">
    <template #title>Web Domains</template>
    <template #lead>Add multiple domains and quickly install apps on them.</template>
    <template #list>
      <FeatureList :items="webDomains"></FeatureList>
    </template>
  </FeaturePageSection>
  <FeaturePageSection image="/images/undraw_domain_names_re_0uun.svg">
    <template #title>DNS</template>
    <template #lead>Manage your own DNS server!</template>
    <template #list>
      <FeatureList :items="dns"></FeatureList>
    </template>
  </FeaturePageSection>
  <FeaturePageSection image="/images/undraw_personal_email_re_4lx7.svg">
    <template #title>Mail</template>
    <template #lead>Self-hosted email — no more paying for enterprise email services!</template>
    <template #list>
      <FeatureList :items="mail"></FeatureList>
    </template>
  </FeaturePageSection>
  <FeaturePageSection image="/images/undraw_maintenance_re_59vn.svg">
    <template #title>Databases</template>
    <template #lead>From e-commerce to blogs, databases are everywhere — choose MySQL or PostgreSQL.</template>
    <template #list>
      <FeatureList :items="databases"></FeatureList>
    </template>
  </FeaturePageSection>
  <FeaturePageSection image="/images/undraw_server_status_re_n8ln.svg">
    <template #title>Server Administration</template>
    <template #lead>Highly configurable and user-friendly — Hestia is powerful enough for your needs.</template>
    <template #list>
      <FeatureList :items="serverAdmin"></FeatureList>
    </template>
  </FeaturePageSection>
</FeaturePage>

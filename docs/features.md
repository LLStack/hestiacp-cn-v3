---
layout: page
title: 功能
---

<script setup>
  import PageHeader from "./.vitepress/theme/components/PageHeader.vue";
  import FeaturePageSection from "./.vitepress/theme/components/FeaturePageSection.vue";
  import FeatureList from "./.vitepress/theme/components/FeatureList.vue";
  import { users, webDomains, mail, dns, databases, serverAdmin } from "./_data/features";
</script>

<FeaturePage>
  <PageHeader>
    <template #title>功能</template>
  </PageHeader>
  <FeaturePageSection image="/images/undraw_two_factor_authentication_namy.svg">
    <template #title>用户</template>
    <template #lead>与其他用户共享服务器访问权限，并限制其可用资源。</template>
    <template #list>
      <FeatureList :items="users"></FeatureList>
    </template>
  </FeaturePageSection>
  <FeaturePageSection image="/images/undraw_web_developer_re_h7ie.svg">
    <template #title>网站域名</template>
    <template #lead>添加多个域名并在其上快速安装应用。</template>
    <template #list>
      <FeatureList :items="webDomains"></FeatureList>
    </template>
  </FeaturePageSection>
  <FeaturePageSection image="/images/undraw_domain_names_re_0uun.svg">
    <template #title>DNS</template>
    <template #lead>管理你自己的 DNS 服务器！</template>
    <template #list>
      <FeatureList :items="dns"></FeatureList>
    </template>
  </FeaturePageSection>
  <FeaturePageSection image="/images/undraw_personal_email_re_4lx7.svg">
    <template #title>邮件</template>
    <template #lead>自托管邮箱，无需再为企业邮箱服务付费！</template>
    <template #list>
      <FeatureList :items="mail"></FeatureList>
    </template>
  </FeaturePageSection>
  <FeaturePageSection image="/images/undraw_maintenance_re_59vn.svg">
    <template #title>数据库</template>
    <template #lead>从电商到博客，数据库无处不在；你可以选择 MySQL 或 PostgreSQL。</template>
    <template #list>
      <FeatureList :items="databases"></FeatureList>
    </template>
  </FeaturePageSection>
  <FeaturePageSection image="/images/undraw_server_status_re_n8ln.svg">
    <template #title>服务器管理</template>
    <template #lead>高度可配置且友好易用，Hestia 足够强大以满足需求。</template>
    <template #list>
      <FeatureList :items="serverAdmin"></FeatureList>
    </template>
  </FeaturePageSection>
</FeaturePage>

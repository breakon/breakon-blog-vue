<template>
<div> 
   <a-layout id="components-layout-demo-top-side">
    <a-layout-header style="padding: 0 0px " class="header">
      <div class="logo" />
      <a-menu
        theme="dark"
        mode="horizontal"
        :defaultSelectedKeys="['2']"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1">首页</a-menu-item>
        <a-menu-item key="2">首页2</a-menu-item>
        <a-menu-item key="3">首页3</a-menu-item>
        <a-menu-item key="4">首页3</a-menu-item>
        <a-menu-item key="5">首页3</a-menu-item>
        <a-menu-item key="6">首页3</a-menu-item>
        <a-menu-item key="7">首页3</a-menu-item>
        <a-menu-item key="8">首页3</a-menu-item>
        <a-menu-item key="9">首页3</a-menu-item>
        <a-menu-item key="10">首页3</a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content >
      <!-- <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>List</a-breadcrumb-item>
        <a-breadcrumb-item>App</a-breadcrumb-item>
      </a-breadcrumb> -->
      <a-layout style="padding: 24px 0; background: #fff">
        <a-layout-sider width="200" style="background: #fff">
          <a-menu
            mode="inline"
            :defaultSelectedKeys="['1']"
            :defaultOpenKeys="['sub1']"
            style="height: 100%"
          >
            <a-sub-menu key="sub1">
              <span slot="title"><a-icon type="user" />subnav 1</span>
              <a-menu-item key="1">option1</a-menu-item>
              <a-menu-item key="2">option2</a-menu-item>
              <a-menu-item key="3">option3</a-menu-item>
              <a-menu-item key="4">option4</a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="sub2">
              <span slot="title"><a-icon type="laptop" />subnav 2</span>
              <a-menu-item key="5">option5</a-menu-item>
              <a-menu-item key="6">option6</a-menu-item>
              <a-menu-item key="7">option7</a-menu-item>
              <a-menu-item key="8">option8</a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="sub3">
              <span slot="title"><a-icon type="notification" />subnav 3</span>
              <a-menu-item key="9">option9</a-menu-item>
              <a-menu-item key="10">option10</a-menu-item>
              <a-menu-item key="11">option11</a-menu-item>
              <a-menu-item key="12">option12</a-menu-item>
            </a-sub-menu>
          </a-menu>
        </a-layout-sider>
        <a-layout-content :style="{ padding: '0 24px', minHeight: '280px' }">
           <ButtonCounter />
          <!-- <Dynamic />
          <Functional /> -->
        </a-layout-content>
      </a-layout>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      Ant Design ©2018 Created by Ant UED
    </a-layout-footer>
  </a-layout>
</div>
</template>

<script>
// // @ is an alias to /src
// import moment from "moment";
import ButtonCounter from "@/components/jsx-len/ButtonCounter";
// import Dynamic from "@/components/jsx-len/Dynamic";
// import Functional from "@/components/jsx-len/Functional"; 

export default {
  name: 'home',
 collapsed: false,
 components: {
    ButtonCounter, 
  }
}
</script>
<style >
  /* #components-layout-demo-top-side .logo {
  width: 120px;
  height: 31px;
  background: rgba(255,255,255,.2);
  margin: 16px 28px 16px 0;
  float: left;
} */
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color .3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255,255,255,.2);
  margin: 16px;
}
  
</style>

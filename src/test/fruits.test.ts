import Vue from 'vue'
import { mount } from '@vue/test-utils'
import Component from '../components/elements/select.vue';

globalThis.Vue = Vue;

describe('<Fruits/> component', () => {

  test("component renders properly", async () => {

    const wrapper = mount(Component)
  
    // Assert the rendered text of the component
    expect(wrapper.text()).toContain('Hello world')
  
  })
})
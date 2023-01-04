import Vue from 'vue';
import OlvyWidget from '@/components/OlvyWidget';

function mountComponentWithProps (Component, propsData) {
  const Constructor = Vue.extend(Component);
  const vm = new Constructor({
    propsData
  }).$mount();

  return vm.$el;
}

describe('OlvyWidget.vue', () => {
  it('should be the correct color', () => {
    const headingData = mountComponentWithProps(OlvyWidget, { color: 'red' });
    const styleData = headingData.style.getPropertyValue('color');

    console.log(styleData)

    expect(styleData).toEqual('blue');
  });

  it('should have the correct title', () => {
    const headingData = mountComponentWithProps(FancyHeading, { title: 'Hello, Vue!' });
    const titleData = headingData.textContent;

    expect(titleData).toEqual('Hello, Vue!');
  });
});
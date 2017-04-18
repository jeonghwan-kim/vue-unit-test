describe('<section-title>', ()=> {
  const SectionTitle = Vue.component('section-title');
  
  beforeEach(()=> {
    fixture.setBase('src');
    fixture.load('index.html');
  });

  afterEach(()=> fixture.cleanup());

  it('뷰 모델을 생성한다',()=>{
    const vm = new SectionTitle().$mount();
    expect(vm).not.toBe(null);
  });

  it('title 속성을 설정하면 헤딩 엘레멘트에 추가한다', ()=> {
    const title = '타이틀1';
    const vm = new SectionTitle({
      propsData: {
        title: title
      }
    }).$mount();

    const expectedText = vm.$el.childNodes[0].textContent;
    expect(expectedText).toBe(title);
  })
});
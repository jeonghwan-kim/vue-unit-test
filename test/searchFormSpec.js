describe('<search-form>', ()=> {
  const SearchForm = Vue.component('search-form');
  let vm;

  beforeEach(()=> {
    fixture.setBase('src');
    fixture.load('index.html');
  });
  beforeEach(()=> vm = new SearchForm().$mount());
  afterEach(()=> fixture.cleanup());

  it('뷰 모델을 생성한다',()=>{
    expect(vm).not.toBe(null);
  });

  describe('검색 문자열을 입력', ()=> {
    let insertedText;

    beforeEach(done => {
      insertedText = 'abc';
      vm.query = insertedText;
      vm.$nextTick(()=> {
        expect(vm.query).toBe(insertedText);
        done();
      });
    });

    it('검색 버튼의 disabled 속성이 제거된다', () => {
      const searchBtn = vm.$el.querySelectorAll('button')[0];
      expect(searchBtn.getAttribute('disabled')).toBe(null);
    });

    it('초기화 버튼 클릭시 인풋 필드 값을 빈 문자열로 초기화한다', done => {
      const resetBtn = vm.$el.querySelectorAll('button')[1];
      resetBtn.click();

      vm.$nextTick(() => {
        const expectedText = '';
        expect(vm.query).toBe(expectedText);
        done();
      });
    });

    it('검색 버튼 클릭시 search 이벤트를 발생하고 검색 데이터를 전달한다', done => {
      const searchBtn = vm.$el.querySelectorAll('button')[0];
      const spy = jasmine.createSpy('onSearch');
      vm.$on('search', spy);

      searchBtn.click();

      vm.$nextTick(() => {
        const expectedObj = {query: insertedText};
        expect(spy).toHaveBeenCalledWith(expectedObj);
        done();
      });
    });
  });
});
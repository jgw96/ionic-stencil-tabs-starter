import { TestWindow } from '@stencil/core/testing';
import { PageAbout } from './page-about';

describe('page-about', () => {
  it('should build', () => {
    expect(new PageAbout()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLPageAboutElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [PageAbout],
        html: '<page-about></page-about>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});

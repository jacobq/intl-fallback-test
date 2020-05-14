import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
  @service intl;
  beforeModel() {
    super.beforeModel(...arguments);
    // No locale defined. Unable to resolve translation: "hello.world"
    //this.intl.setLocale();
    //this.intl.setLocale(null);
    this.intl.setLocale([]);

    // Missing translation "hello.world" for locale ""
    //this.intl.setLocale(['']);

    // Missing translation "hello.world" for locale "zh-cn" 
    //this.intl.setLocale(['zh-CN']);

    // Works! ("Hello World!")
    //this.intl.setLocale(['fr-fr']);
  }
}

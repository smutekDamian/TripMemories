export class ScrollUtils {
  static scrollTo(elementToScrollId: string) : void {
    let element = document.getElementById(elementToScrollId);
    element.scrollIntoView({behavior:"smooth"});
  }
}

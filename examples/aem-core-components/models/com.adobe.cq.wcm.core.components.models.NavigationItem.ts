import ListItem from './com.adobe.cq.wcm.core.components.models.ListItem';

/**
 * Interface for a single navigation item, used by the {@link Breadcrumb} and {@link Navigation} models.
 *
 * @since com.adobe.cq.wcm.core.components.models 12.2.0
 */
export default class NavigationItem extends ListItem {
  static clazz = 'com.adobe.cq.wcm.core.components.models.NavigationItem';

  constructor(content) {
    super(content);
    this.content = content;
  }

  /**
   * Returns the {@link Page} contained by this navigation item.
   *
   * @return The {@link Page} contained in this navigation item.
   * @since com.adobe.cq.wcm.core.components.models 11.0.0; marked <code>default</code> in 12.1.0
   * @deprecated since 12.1.0 as {@link NavigationItem} relies on {@link ListItem}
   */
  get page() {
    return this.content.page;
  }

  /**
   * Returns {@code true} if the page contained by this navigation item is active.
   *
   * @return {@code true} if it is the current page, otherwise {@code false}
   * @since com.adobe.cq.wcm.core.components.models 11.0.0; marked <code>default</code> in 12.1.0
   */
  get isActive(): boolean {
    return this.content.isActive;
  }

  /**
   * Returns the children of this {@code NavigationItem}, if any.
   *
   * @return the children of this {@code NavigationItem}; if this {@code NavigationItem} doesn't have any children, the returned
   * {@link java.util.List} will be empty
   * @since com.adobe.cq.wcm.core.components.models 12.2.0
   */
  get children(): Array<ListItem> {
    return this.content.children;
  }

  /**
   * Returns the depth level of this {@code NavigationItem}.
   *
   * @return the depth level
   * @since com.adobe.cq.wcm.core.components.models 12.2.0
   */
  get level(): number {
    return this.content.level;
  }
}

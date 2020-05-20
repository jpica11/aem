import ListItem from './com.adobe.cq.wcm.core.components.models.ListItem';

/**
 * Defines the {@code Breadcrumb} Sling Model used for the {@code /apps/core/wcm/components/Breadcrumb} component.
 *
 * @since com.adobe.cq.wcm.core.components.models 11.0.0
 */
export default class Breadcrumb {
  static clazz = 'com.adobe.cq.wcm.core.components.models.Breadcrumb';

  constructor(content) {
    this.content = content;
  }

  /**
   * Name of the resource property that will indicate if pages that are hidden for navigation will still be displayed.
   *
   * @since com.adobe.cq.wcm.core.components.models 11.1.0
   */
  static PN_SHOW_HIDDEN = 'showHidden';

  /**
   * Name of the resource property that will indicate if the current page should not be present in the collection returned by
   * {@link #getItems()}.
   *
   * @since com.adobe.cq.wcm.core.components.models 11.1.0
   */
  static PN_HIDE_CURRENT = 'hideCurrent';

  /**
   * Name of the resource property that will indicate from which level starting from the current page the items from the collection
   * returned by {@link #getItems()} will be accumulated.
   *
   * @since com.adobe.cq.wcm.core.components.models 11.1.0
   */
  static PN_START_LEVEL = 'startLevel';

  /**
   * Creates collection of pages(from site hierarchy of current page) for the breadcrumb component
   *
   * @return {@link Collection} of breadcrumb items
   * @since com.adobe.cq.wcm.core.components.models 11.0.0; marked <code>default</code> in 12.1.0
   */
  get items() {
    const items = this.content[':items'];
    if (!items) {
      return [];
    }

    const listItems = Object.entries(items).map(
      ([name, item]) =>
        new ListItem({
          ':name': name,
          ...item,
        })
    );
    // hack to provide a size property of the expected java collection.
    listItems.size = listItems.length;
    return listItems;
  }

  /**
   * @see ComponentExporter#getExportedType()
   * @since com.adobe.cq.wcm.core.components.models 12.2.0
   */
  get exportedType() {
    // return this.resource.getResourceType();
    return 'wcm/core/components/text';
  }
}

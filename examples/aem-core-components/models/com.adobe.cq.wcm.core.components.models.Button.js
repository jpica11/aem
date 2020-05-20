/**
 * Defines the {@code Button} Sling Model used for the {@code /apps/core/wcm/components/button} component.
 *
 * @since com.adobe.cq.wcm.core.components.models 11.0.0
 */
export default class Button {
  static clazz = 'com.adobe.cq.wcm.core.components.models.Button';

  constructor(content) {
    this.content = content;
  }

  /**
   * Retrieves the text value to be displayed.
   *
   * @return the text value to be displayed, or {@code null} if no value can be returned
   * @since com.adobe.cq.wcm.core.components.models 11.0.0; marked <code>default</code> in 12.1.0
   */
  get text() {
    return this.content.text || null;
  }

  /**
   * Returns the button link.
   *
   * @return the button link
   * @since com.adobe.cq.wcm.core.components.models 12.8.0
   */
  get link() {
    return this.content.link || null;
  }

  /**
   * Returns the button icon identifier.
   *
   * @return the button icon identifier
   * @since com.adobe.cq.wcm.core.components.models 12.8.0
   */
  get icon() {
    return this.content.icon || null;
  }

  /**
   * Returns an accessibility label for the button.
   *
   * @return an accessibility label for the button
   * @since com.adobe.cq.wcm.core.components.models 12.9.0
   */
  get accessibilityLabel() {
    return this.content.accessibilityLabel || null;
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

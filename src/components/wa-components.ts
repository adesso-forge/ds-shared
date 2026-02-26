/**
 * Complete list of Web Awesome free (MIT) components.
 *
 * Each entry contains the component name, import path, display label, and category.
 * This list is the single source of truth for all WA components registered
 * across the adesso forge design system layers.
 */

export interface WaComponentDefinition {
  /** Component base name (e.g., 'button') — used as: wa-{name}, forge-{name}, etc. */
  name: string;
  /** Import path relative to @awesome.me/webawesome/dist/components/ */
  importPath: string;
  /** Human-readable label for docs and Storybook */
  label: string;
  /** Component category for grouping in docs */
  category: 'Action' | 'Containment' | 'Navigation' | 'Input' | 'Feedback' | 'Data Display' | 'Layout' | 'Utility' | 'Media';
}

export const WA_FREE_COMPONENTS: WaComponentDefinition[] = [
  // Action
  { name: 'button', importPath: 'button/button.js', label: 'Button', category: 'Action' },
  { name: 'button-group', importPath: 'button-group/button-group.js', label: 'Button Group', category: 'Action' },
  { name: 'copy-button', importPath: 'copy-button/copy-button.js', label: 'Copy Button', category: 'Action' },

  // Containment
  { name: 'callout', importPath: 'callout/callout.js', label: 'Callout', category: 'Containment' },
  { name: 'card', importPath: 'card/card.js', label: 'Card', category: 'Containment' },
  { name: 'carousel', importPath: 'carousel/carousel.js', label: 'Carousel', category: 'Containment' },
  { name: 'carousel-item', importPath: 'carousel-item/carousel-item.js', label: 'Carousel Item', category: 'Containment' },
  { name: 'details', importPath: 'details/details.js', label: 'Details', category: 'Containment' },
  { name: 'dialog', importPath: 'dialog/dialog.js', label: 'Dialog', category: 'Containment' },
  { name: 'drawer', importPath: 'drawer/drawer.js', label: 'Drawer', category: 'Containment' },
  { name: 'tab', importPath: 'tab/tab.js', label: 'Tab', category: 'Containment' },
  { name: 'tab-group', importPath: 'tab-group/tab-group.js', label: 'Tab Group', category: 'Containment' },
  { name: 'tab-panel', importPath: 'tab-panel/tab-panel.js', label: 'Tab Panel', category: 'Containment' },

  // Navigation
  { name: 'breadcrumb', importPath: 'breadcrumb/breadcrumb.js', label: 'Breadcrumb', category: 'Navigation' },
  { name: 'breadcrumb-item', importPath: 'breadcrumb-item/breadcrumb-item.js', label: 'Breadcrumb Item', category: 'Navigation' },
  { name: 'dropdown', importPath: 'dropdown/dropdown.js', label: 'Dropdown', category: 'Navigation' },
  { name: 'dropdown-item', importPath: 'dropdown-item/dropdown-item.js', label: 'Dropdown Item', category: 'Navigation' },
  { name: 'split-panel', importPath: 'split-panel/split-panel.js', label: 'Split Panel', category: 'Navigation' },
  { name: 'tree', importPath: 'tree/tree.js', label: 'Tree', category: 'Navigation' },
  { name: 'tree-item', importPath: 'tree-item/tree-item.js', label: 'Tree Item', category: 'Navigation' },

  // Input
  { name: 'checkbox', importPath: 'checkbox/checkbox.js', label: 'Checkbox', category: 'Input' },
  { name: 'color-picker', importPath: 'color-picker/color-picker.js', label: 'Color Picker', category: 'Input' },
  { name: 'input', importPath: 'input/input.js', label: 'Input', category: 'Input' },
  { name: 'number-input', importPath: 'number-input/number-input.js', label: 'Number Input', category: 'Input' },
  { name: 'radio', importPath: 'radio/radio.js', label: 'Radio', category: 'Input' },
  { name: 'radio-group', importPath: 'radio-group/radio-group.js', label: 'Radio Group', category: 'Input' },
  { name: 'rating', importPath: 'rating/rating.js', label: 'Rating', category: 'Input' },
  { name: 'select', importPath: 'select/select.js', label: 'Select', category: 'Input' },
  { name: 'slider', importPath: 'slider/slider.js', label: 'Slider', category: 'Input' },
  { name: 'switch', importPath: 'switch/switch.js', label: 'Switch', category: 'Input' },
  { name: 'textarea', importPath: 'textarea/textarea.js', label: 'Textarea', category: 'Input' },

  // Feedback
  { name: 'badge', importPath: 'badge/badge.js', label: 'Badge', category: 'Feedback' },
  { name: 'progress-bar', importPath: 'progress-bar/progress-bar.js', label: 'Progress Bar', category: 'Feedback' },
  { name: 'progress-ring', importPath: 'progress-ring/progress-ring.js', label: 'Progress Ring', category: 'Feedback' },
  { name: 'spinner', importPath: 'spinner/spinner.js', label: 'Spinner', category: 'Feedback' },
  { name: 'tag', importPath: 'tag/tag.js', label: 'Tag', category: 'Feedback' },
  { name: 'tooltip', importPath: 'tooltip/tooltip.js', label: 'Tooltip', category: 'Feedback' },

  // Data Display
  { name: 'avatar', importPath: 'avatar/avatar.js', label: 'Avatar', category: 'Data Display' },
  { name: 'comparison', importPath: 'comparison/comparison.js', label: 'Comparison', category: 'Data Display' },
  { name: 'format-bytes', importPath: 'format-bytes/format-bytes.js', label: 'Format Bytes', category: 'Data Display' },
  { name: 'format-date', importPath: 'format-date/format-date.js', label: 'Format Date', category: 'Data Display' },
  { name: 'format-number', importPath: 'format-number/format-number.js', label: 'Format Number', category: 'Data Display' },
  { name: 'icon', importPath: 'icon/icon.js', label: 'Icon', category: 'Data Display' },
  { name: 'qr-code', importPath: 'qr-code/qr-code.js', label: 'QR Code', category: 'Data Display' },
  { name: 'relative-time', importPath: 'relative-time/relative-time.js', label: 'Relative Time', category: 'Data Display' },

  // Layout
  { name: 'divider', importPath: 'divider/divider.js', label: 'Divider', category: 'Layout' },
  { name: 'resize-observer', importPath: 'resize-observer/resize-observer.js', label: 'Resize Observer', category: 'Layout' },
  { name: 'scroller', importPath: 'scroller/scroller.js', label: 'Scroller', category: 'Layout' },
  { name: 'skeleton', importPath: 'skeleton/skeleton.js', label: 'Skeleton', category: 'Layout' },

  // Utility
  { name: 'animation', importPath: 'animation/animation.js', label: 'Animation', category: 'Utility' },
  { name: 'animated-image', importPath: 'animated-image/animated-image.js', label: 'Animated Image', category: 'Utility' },
  { name: 'include', importPath: 'include/include.js', label: 'Include', category: 'Utility' },
  { name: 'intersection-observer', importPath: 'intersection-observer/intersection-observer.js', label: 'Intersection Observer', category: 'Utility' },
  { name: 'mutation-observer', importPath: 'mutation-observer/mutation-observer.js', label: 'Mutation Observer', category: 'Utility' },
  { name: 'option', importPath: 'option/option.js', label: 'Option', category: 'Utility' },
  { name: 'popover', importPath: 'popover/popover.js', label: 'Popover', category: 'Utility' },
  { name: 'popup', importPath: 'popup/popup.js', label: 'Popup', category: 'Utility' },

  // Media
  { name: 'zoomable-frame', importPath: 'zoomable-frame/zoomable-frame.js', label: 'Zoomable Frame', category: 'Media' },
];

/** Quick-access array of just the component base names */
export const WA_FREE_COMPONENT_NAMES: string[] = WA_FREE_COMPONENTS.map(c => c.name);

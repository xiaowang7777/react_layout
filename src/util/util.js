export const getComponentName = function (Component) {
  return Component.displayName || Component.name || 'Component';
}
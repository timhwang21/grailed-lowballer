export const setNativeValue = (element, value) => {
  const valueSetter = (Object.getOwnPropertyDescriptor(element, 'value') || {})
    .set;
  const prototypeValueSetter = (
    Object.getOwnPropertyDescriptor(Object.getPrototypeOf(element), 'value') ||
    {}
  ).set;

  const setter = valueSetter || prototypeValueSetter;
  setter.call(element, value);

  element.dispatchEvent(
    new Event(element.tagName.toLowerCase(), { bubbles: true }),
  );
};

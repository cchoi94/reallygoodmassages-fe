export interface FormValues {
  [fieldName: string]: string;
}
const configureFormValues = (element: HTMLInputElement) => {
  const { name } = element;
  if (name === 'email') {
    return element.value.toLowerCase();
  } else {
    return element.value;
  }
};
// Gets the values for each input field in a form
export function getFormValues(
  form: EventTarget & Element,
  includeHidden: boolean = true
): FormValues {
  return Array.from(form.querySelectorAll('input, select, textarea'))
    .filter((element: any) => includeHidden || !element.hidden)
    .reduce(
      (formValues: any, element: any) => ({
        ...formValues,
        [element.name]: configureFormValues(element),
      }),
      {}
    );
}

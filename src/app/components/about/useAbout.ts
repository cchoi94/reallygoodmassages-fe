export const useAbout = () => {
  const onSubmit = () =>
    window.open('https://buttondown.email/Aladar', 'popupwindow');
  return { onSubmit };
};

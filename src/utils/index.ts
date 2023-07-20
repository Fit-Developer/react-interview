export const PriceFormat = (value: number) => {
  return `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ` THB/Day`;
};

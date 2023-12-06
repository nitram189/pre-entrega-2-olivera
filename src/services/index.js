export const formattedPrice = (price) => {
  return price?.toLocaleString('es-AR', {
    style: 'currency',
    currency: 'ARS'
  });
};

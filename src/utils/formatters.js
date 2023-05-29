/**
 * @typedef Address
 * @property {string} city
 * @property {string} country
 * @property {string} state
 * @property {string} street
 * @property {string} postalCode The zip code which may contain a hyphen.
 */

/**
 * Takes an address object and formats it according to the USPS standard.
 * @see https://pe.usps.com/businessmail101?ViewName=DeliveryAddress
 * @param {Address} address An address object.
 * @param {string} recipientName
 * @param {string} companyName
 */
export const formatAddressUsps = (address, recipientName, companyName) => {
  const { city, state, street, postalCode } = address;

  const formattedAddress = `${companyName}\n${recipientName}\n${street}\n${city} ${state} ${postalCode}`;
  return formattedAddress.toUpperCase();
};

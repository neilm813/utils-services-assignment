// Later when additional tools are installed `index` and `.js` can be omitted when importing from an index file.
import { formatAddressUsps } from './utils/index.js';
import { getRandomUser } from './services/index.js';

try {
  const user = await getRandomUser();
  const fullName = `${user.firstName} ${user.lastName}`;
  const formattedAddress = formatAddressUsps(user.address, fullName, user.company.name);
  console.log(formattedAddress);
} catch (error) {
  console.log(error.message);
}

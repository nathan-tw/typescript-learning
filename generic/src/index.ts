// import { User } from './User';
import { CustomMap } from './CustomMap'
import { User } from './User';
import { Company } from './Company';



const user = new User();
const company = new Company();
const customMap = new CustomMap('map');

customMap.addUserMarker(user);
customMap.addUserMarker(company);
import {
  brands,
  icon,
  regular,
  solid,
} from '@fortawesome/fontawesome-svg-core/import.macro'; // <-- import styles to be used
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HeroSection = () => {
  return (
    <main>
      <FontAwesomeIcon icon={solid('user-secret')} />
      <FontAwesomeIcon icon={regular('coffee')} />
      <FontAwesomeIcon icon={icon({ name: 'coffee', style: 'solid' })} />
      <FontAwesomeIcon icon={brands('twitter')} />
    </main>
  );
};

export default HeroSection;

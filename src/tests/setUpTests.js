import DotEnv from 'dotenv';
import Adapter from 'enzyme-adapter-react-16';
import {configure} from 'enzyme';

configure({ adapter: new Adapter() });

DotEnv.config({
  path: '.env.test'
});

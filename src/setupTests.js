import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
//https://www.npmjs.com/package/@wojtekmaj/enzyme-adapter-react-17
//https://medium.com/codeclan/testing-react-with-jest-and-enzyme-20505fec4675

Enzyme.configure({ adapter: new Adapter() });
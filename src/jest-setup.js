import { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as enzyme from 'enzyme';
global.shallow = shallow;
global.render = render;
global.mount = mount;

enzyme.configure({ adapter: new Adapter() });

// Pula as mensagens de aviso do 'createElement'
// Mas retorna um erro para qualquer outra
console.error = message => {
    if (!/(React.createElement: type should not be null)/.test(message)) {
        throw new Error(message);
    }
};
import "@testing-library/jest-dom";
import { configure } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";

// Add TextEncoder polyfill
const { TextEncoder, TextDecoder } = require("util");
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// Enzyme configuration

configure({ adapter: new Adapter() });
